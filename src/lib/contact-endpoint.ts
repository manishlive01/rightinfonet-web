// Server code only (route handler + server components); never import from a "use client" file.

/**
 * Where /api/contact forwards enquiries: CONTACT_FORM_ENDPOINT (server-only, preferred) or else
 * NEXT_PUBLIC_LEAD_FORM_ENDPOINT. https only; "" = not configured (the form falls back to mailto).
 */
export function contactEndpoint(): string {
  const url =
    process.env.CONTACT_FORM_ENDPOINT?.trim() ||
    process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT?.trim() ||
    "";
  return url.startsWith("https://") ? url : "";
}
