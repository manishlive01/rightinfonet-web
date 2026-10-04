// IndexNow key file (https://www.indexnow.org). Bing, Yandex and others read the key here to
// trust URL submissions from scripts/indexnow-submit.mjs. 404 until INDEXNOW_KEY is set.
export const dynamic = "force-static";

// IndexNow keys: 8–128 characters, letters, digits and dashes.
const KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;

export function GET() {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key || !KEY_PATTERN.test(key)) {
    return new Response("Not found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return new Response(key, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
