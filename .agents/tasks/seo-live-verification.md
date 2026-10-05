# SEO live-audit fixes: verification (iteration 1)

Run on 2026-10-05 (IST) against the local production build (`npm run build`, `npx next start -p 3100`). No commit, no push, no deploy.

## Build, lint, crawler

- `npm run lint`: 0 errors, 2 warnings (pre-existing `<img>` in the two `opengraph-image.tsx` files).
- `npm run build`: passes, 155 static pages generated. Gotcha: after deleting `src/app/resources/lims-urs-template` the build type-check failed on a stale `.next/dev/types/validator.ts` (from an old `next dev`). Deleting `.next/dev/types` fixed it; no source issue.
- Crawler `node .kiro/skills/seo-audit/scripts/audit.mjs http://localhost:3100 --out .agents/seo-audit-2026-10-04-fixes.md`: **91 pages, 0 errors, 0 warnings, 1 info** (`/downloads/lims-urs-template.csv` linked but not in the sitemap; intentional, it is a file). 95 → 91 = 3 noindexed local pages + the removed resource page.

## Live vs local

| Check | Live www.brightinfonet.com (curl, 2026-10-05) | Local 3100 |
|---|---|---|
| `/about` | 200, `<title>About — An AI-First Software Studio in India</title>`, canonical `https://www.brightinfonet.com/about`, 4 JSON-LD blocks, none of "98%", "24/7", "dominate", "fortified", "Next-Gen", "Placements" | Same title + self-canonical; JSON-LD types Organization, ProfessionalService, WebSite, BreadcrumbList, AboutPage (now with `@id`, `isPartOf`, `mainEntity`); 0 parse errors; no claim strings |
| `/courses/` | 308 → `/courses` → **404** | 308 → `/courses` → 308 → `/academy` (200) |
| `/resources/lims-urs-template` | 200 (duplicate) | 308 → `/insights/lims-urs-template` (200) |
| `brightinfonet.com/` | **302** → www (Firebase App Hosting) | n/a (hosting setting, owner task) |

Conclusion for finding 1: the live deployment already serves the new About page. The old page the owner saw ("Next-Gen Digital Solutions", Courses/Tutorials/Placements, broken copy, 98%/24/7) is Google's stale index of the pre-Next academy site (Wayback has it). No old app is on the www host. Owner task: deploy, then GSC "Request indexing" for `/about`, `/courses/`, `/blog`. Repo-wide search of `src/` and `public/` for `98%`, `24/7`, `#1`, `5+ years`, `dominate`, `fortified`, `satisfaction`, `Next-Gen`, `next-generation`: only two hits, both "5+ years / senior" salary-band rows in fresher-salary posts (about employee experience, not company claims), left as is.

## Redirects

`node --experimental-strip-types --no-warnings scripts/check-redirects.mjs http://localhost:3100`: **190 checks, all PASS** (every literal source and its trailing-slash variant: first response 308, final 200 at the mapped destination; catch-alls tested with `/blog/old-post`, `/blogs/old-post`, `/tutorials/java`, `/courses/java`; `/privacy` and `/terms` still 404 on purpose). 96 rules in `src/lib/redirects.ts`, imported by `next.config.ts` (`permanent: true` → 308). `/#contact` works as a destination.

## Duplicate URS page

- Route `src/app/resources/lims-urs-template` deleted; 301 in the redirect map.
- `/insights/lims-urs-template`: `id="download"` section with the "what's inside" list and `LeadCaptureForm` (download button only until `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` is set), link to `/downloads/lims-urs-template.csv`, TOC entry, `DigitalDocument` JSON-LD node, two resource FAQs merged.
- `src/**` search for `resources/lims-urs-template`: only `src/lib/redirects.ts`. Sitemap has no `/resources/`; llms.txt points at the post.

## Sitemap

91 `<url>`, 91 `<lastmod>`, 0 `<priority>`, 0 `<changefreq>`. Dates come from fixed constants (`src/content/page-dates.ts`, `Landing.updated`, post `updated ?? published`), not build time; rebuilding gave identical values.

## Doorway / local pages

- Noindexed: `/software-development-company-kharar`, `/software-development-company-ambala`, `/web-development-company-shimla`: each 200 with `<meta name="robots" content="noindex, follow">`, absent from sitemap.xml, llms.txt and the home/footer HTML. Crawl of all 91 indexed pages: **0 internal links** to the three paths. Ambala and Shimla removed from `areaServed`.
- Panchkula app + web pages rewritten (answer, about, first section cards, 3 FAQs each, related links) around the Panchkula base: sectors, Industrial Area Phase I/II, Mansa Devi Complex, Pinjore/Kalka/Zirakpur, in-person meetings. No clients, numbers or street address.
- 5-gram shingle overlap (lead+answer+about+cards+faqs, city names masked), max against any other page: local pages 0.0–3.5% (Panchkula app vs web 3.4/3.5%, Zirakpur 1.9%), academy city pages 13.5–15.7%, industrial training 5.5%. All far below 60%, so Zirakpur and the academy city pages stay indexed. Zirakpur borders Panchkula (Tricity), so its in-person angle is truthful.

## Schema

Every sitemap page + the 3 noindexed pages (94) parsed with `JSON.parse`: 0 errors. Required types present everywhere: Organization + ProfessionalService + WebSite site-wide (address only non-empty fields; no `geo`/`hasMap` with empty config); BreadcrumbList on every inner page; Service + FAQPage on all local/service/industry pages; FAQPage on academy pages; Course on the 4 course pages; BlogPosting with `datePublished`/`dateModified` on every post; every post with a visible FAQ has FAQPage. Rich Results Test must be run by the owner after deploy.

## Owner-data switches (scratch test, reverted)

Temporarily added a dummy author (`regulated` default via `PILLAR_AUTHORS`) and dummy `geo`/`mapEmbedUrl`/`googleBusinessUrl`, rebuilt:
- regulated post: AuthorBox, byline name, BlogPosting `author` Person with `knowsAbout` credentials → all true; cost post: no AuthorBox, author = Organization.
- `/about`: Team section + Person node → true.
- home: map iframe, `GeoCoordinates`, `hasMap` → true.
Reverted from backups, rebuilt; same checks all false again. `src/content/authors.ts`, `src/lib/site-config.ts`, `src/content/trust.ts` contain no names, coordinates or URLs of people/places beyond what was there before.

## External authority links

Rendered `<article>` of each post, external `<a>` count, all `rel="noopener"` without nofollow:

| Post | Links | Hosts |
|---|---|---|
| 21-cfr-part-11-audit-trail-requirements | 2 | ecfr.gov, fda.gov (Part 11 guidance) |
| 21-cfr-part-11-compliance-checklist-lims | 2 | ecfr.gov, fda.gov |
| csv-vs-csa-computer-software-assurance | 2 | fda.gov (CSA 2026), ispe.org |
| gamp-5-software-validation-guide | 2 | ispe.org, fda.gov (CSA) |
| gamp-5-category-4-vs-category-5 | 1 | ispe.org |
| gxp-software-validation-guide | 3 | ecfr.gov, health.ec.europa.eu (EudraLex 4), ispe.org |
| eu-annex-11-computerised-systems | 2 | Annex 11 PDF, EudraLex 4 |
| pharmacovigilance-e2b-r3-explained | 1 | ich.org |
| pharmacovigilance-software-build-vs-buy | 1 | ich.org |
| nabl-iso-15189-lab-software-requirements | 2 | iso.org, nabl-india.org |
| what-is-a-validation-package | 2 | fda.gov (CSA), ispe.org |
| lims-urs-template | 2 | ecfr.gov, Annex 11 PDF |

URL checks: ISPE GAMP 5, EudraLex Vol 4, Annex 11 PDF, ICH E2B(R3), NABL → 200 with curl; ISO 15189 → 403 to curl (bot protection) but 200 via web fetch (page "ISO 15189:2022 Medical laboratories…"). eCFR Part 11, FDA Part 11 guidance and FDA CSA guidance block automated fetches (eCFR → unblock.federalregister.gov, fda.gov → abuse-detection 404); confirmed via search index (exact titles at those URLs). The CSA page's own summary says it supersedes the 24 Sep 2025 guidance (published 3 Feb 2026), so the CSA post now says that, and its FAQ answer and the GAMP 5 guide sentence were aligned. Each edited post has `updated: "2026-10-04"`.

## Contact API (`/api/contact`)

Without endpoint (3100): GET → 405; bad email / short message / unknown budget / invalid JSON → 400; honeypot filled → 200 `{ok:true}` (not forwarded); valid → 503 `{ok:false,fallback:true}` (client then opens the mail app); 6th request from one IP in 10 min → 429.
With a temporary local HTTPS mock (`CONTACT_FORM_ENDPOINT=https://localhost:3443/f/test`, self-signed cert, `NODE_TLS_REJECT_UNAUTHORIZED=0` for that test server only, port 3101): valid → 200 `{ok:true}`, mock received exactly one POST with keys `name,email,company,interests,budget,message,form,page`; honeypot request → 200, nothing forwarded. Mock, cert and the 3101 server removed afterwards.
SECURITY: the endpoint is unauthenticated, protected only by the honeypot and an in-memory per-IP rate limit (per server instance, resets on restart). Documented in `.env.local.example` and the route file. The home page decides at build time (server) whether to post or use mailto, so set `CONTACT_FORM_ENDPOINT` and rebuild.

## Home H1 / Work

- `/`: exactly one `<h1>`: "AI-first software & app development · Panchkula, Chandigarh Tricity: We build software that thinks." Headless Edge 375×812 screenshot: eyebrow wraps to two lines, SplitText headline renders, no horizontal overflow.
- `/work` and home Work section: H1/heading "Software we build", lead/description say "selected projects and sample builds"; "Sample build · not client work" label only on Clinic booking and Ops agent. `CaseStudyProof` still gated.

## Cleanup

Background servers on 3100/3101/3443 stopped; `.agents/tmp/` (scripts, mock, cert, backups, screenshot, logs) and `.agents/*.log` deleted.
