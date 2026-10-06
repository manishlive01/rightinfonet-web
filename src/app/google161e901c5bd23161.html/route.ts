// Google Search Console HTML-file verification (URL-prefix property https://www.brightinfonet.com/).
// Served as a route instead of /public because Firebase App Hosting currently returns 404 for
// files in /public. Do not delete: removing it un-verifies the Search Console property.
export const dynamic = "force-static";

export function GET() {
  return new Response("google-site-verification: google161e901c5bd23161.html", {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
