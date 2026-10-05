import { CONTACT_BUDGETS, CONTACT_INTERESTS } from "@/components/home/data";
import { contactEndpoint } from "@/lib/contact-endpoint";

// Contact form submissions. Validates on the server and forwards to a form backend
// (CONTACT_FORM_ENDPOINT, else NEXT_PUBLIC_LEAD_FORM_ENDPOINT).
// SECURITY: this endpoint is unauthenticated. It is protected only by a honeypot field and an
// in-memory per-IP rate limit (per server instance, reset on restart). Input is never echoed
// back and message bodies are never logged.
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return fwd || req.headers.get("x-real-ip")?.trim() || "unknown";
}

/** true when this IP is over the limit; records the hit otherwise. */
function rateLimited(ip: string) {
  const now = Date.now();
  // prune old entries so the map cannot grow without bound
  for (const [key, times] of hits) {
    const recent = times.filter((t) => now - t < WINDOW_MS);
    if (recent.length) hits.set(key, recent);
    else hits.delete(key);
  }
  const times = hits.get(ip) ?? [];
  if (times.length >= MAX_PER_WINDOW) return true;
  times.push(now);
  hits.set(ip, times);
  return false;
}

const json = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status });

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return json(429, { ok: false, error: "rate_limited" });
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await req.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw 0;
    body = parsed as Record<string, unknown>;
  } catch {
    return json(400, { ok: false, error: "invalid_json" });
  }

  // honeypot: real people never see or fill this field; pretend success, forward nothing
  if (str(body.website)) return json(200, { ok: true });

  const name = str(body.name);
  const email = str(body.email);
  const company = str(body.company);
  const message = str(body.message);
  const budget = str(body.budget);
  const interests = Array.isArray(body.interests) ? body.interests : [];

  const invalid: string[] = [];
  if (name.length < 1 || name.length > 100) invalid.push("name");
  if (email.length > 254 || !EMAIL_RE.test(email)) invalid.push("email");
  if (company.length > 120) invalid.push("company");
  if (message.length < 10 || message.length > 5000) invalid.push("message");
  if (
    interests.length > CONTACT_INTERESTS.length ||
    !interests.every((i) => (CONTACT_INTERESTS as readonly unknown[]).includes(i))
  )
    invalid.push("interests");
  if (budget && !(CONTACT_BUDGETS as readonly string[]).includes(budget))
    invalid.push("budget");
  if (invalid.length) return json(400, { ok: false, error: "invalid", fields: invalid });

  const endpoint = contactEndpoint();
  if (!endpoint) return json(503, { ok: false, fallback: true });

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        company,
        interests,
        budget,
        message,
        form: "contact",
        page: "/",
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error(`contact: upstream responded ${res.status}`);
      return json(502, { ok: false, error: "upstream" });
    }
  } catch {
    console.error("contact: upstream request failed");
    return json(502, { ok: false, error: "upstream" });
  }
  return json(200, { ok: true });
}
