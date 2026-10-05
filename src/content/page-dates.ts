// Real "last content change" dates (ISO, YYYY-MM-DD) for sitemap <lastmod> on non-post pages.
// Fixed constants on purpose: with hourly ISR, `new Date()` would report a fresh lastmod every
// hour for pages that did not change, and Google then ignores lastmod for the whole site.
// Bump a date ONLY when that page's visible content really changes.
// Seeded from `git log -1 --format=%cs` of each page's source files.

/** Top-level static pages, keyed by path ("" = home). */
export const PAGE_UPDATED: Record<string, string> = {
  "": "2026-10-04",
  "/services": "2026-10-04",
  "/industries": "2026-10-04",
  "/process": "2026-09-28",
  "/about": "2026-10-04",
  "/about/founder": "2026-10-04",
  "/work": "2026-10-04",
  "/academy": "2026-09-29",
  "/tools/app-development-cost-calculator": "2026-10-04",
};

/** Landing pages without their own `updated` field. */
export const LANDING_UPDATED_DEFAULT = "2026-10-04";
