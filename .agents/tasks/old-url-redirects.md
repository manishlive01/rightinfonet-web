# Old URL → new URL 301 map (brightinfonet.com)

Date: 2026-10-04. Sources checked:

- Wayback CDX API, both hosts (`url=brightinfonet.com/*` and `url=www.brightinfonet.com/*`, `collapse=urlkey`): 184 rows each, identical sets (CDX canonicalises the host). Captures range 2021-11 → 2023-03 (old academy site). After removing assets (js/css/fonts/images/.cur/.bin) about 100 page paths remain; all are listed below.
- Live site (2026-10-04, `curl -s -o NUL -w "%{http_code} %{redirect_url}"`): `/courses/` → 308 `/courses` → **404**; `/blog`, `/projects`, `/tutorials`, `/placements`, `/contact`, `/about-us` → **404**. Apex `https://brightinfonet.com/*` → **302** (not 301) to `https://www.brightinfonet.com/*`; `http://brightinfonet.com` → 301 → https apex → 302 → www (3 hops). Host is Firebase App Hosting (`x-fah-adapter`, `server: envoy`), so the apex redirect is set in the hosting console, not in Next.
- Git history of this repo (39 commits): no deleted or renamed `src/app` routes, so every old URL comes from the pre-Next site.

## How it is implemented

- `next.config.ts` → `async redirects()` returning `{ source, destination, permanent: true }` (Next 16 sends **308**, which Google treats like 301; see `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/redirects.md`).
- Trailing slashes: Next's default `trailingSlash: false` first 308s `/courses/` → `/courses`, then the custom rule 308s to `/academy` (2 hops, fine for Google). Sources are written without a trailing slash.
- `.html`/`.htm` variants are literal sources (the `.` is not a path-to-regexp special char).
- Query strings are passed through by Next automatically.
- Keep the list in one exported array `OLD_URL_REDIRECTS` in `src/lib/redirects.ts` (imported by `next.config.ts`) so `scripts/check-redirects.mjs` can import the same list.

Short names: F = `/academy/flutter-app-development-course`, W = `/academy/full-stack-web-development-course`, A = `/academy/ai-agents-course` (Python · LLMs · RAG track), I = `/academy/industrial-training-chandigarh`, AC = `/academy`.

## Map

| Old path (source) | New destination | Why |
|---|---|---|
| `/index.html`, `/index.htm` | `/` | old home |
| `/about-us`, `/about-us-1.html`, `/choose-us` | `/about` | about / why-us |
| `/contact`, `/contact-us` | `/#contact` | contact section on home |
| `/contact@brightinfonet.com` | `/#contact` | broken mailto link that got crawled |
| `/blog`, `/blogs` | `/insights` | blog listing |
| `/blog/:path+`, `/blogs/:path+` | `/insights` | no old post URLs captured; listing is the safe target |
| `/tutorials` | `/insights` | tutorials listing |
| `/tutorials/flutter`, `/tutorials/dart`, `/flutter`, `/dart`, `/flutter_topics` | `/insights/flutter-developer-roadmap` | Flutter/Dart learning content |
| `/tutorials/:path+` | `/insights` | catch-all |
| `/project`, `/projects`, `/portfolio`, `/casestudy` | `/work` | projects |
| `/courses` | AC | course listing (owner's indexed example) |
| `/courses/flutter`, `/courses/flutter-course`, `/courses/mobile-app-development-flutter` | F | Flutter course |
| `/courses/reactjs-course`, `/courses/web-design-course` | W | web course |
| `/courses/python`, `/courses/python-course`, `/courses/data-science` | A | Python/AI track |
| `/courses/:path+` (after the specific rules) | AC | catch-all |
| `/placements`, `/students/placed-students`, `/job-guarentee-program` | AC | no placement claims on new site |
| `/event-list.html`, `/faq`, `/verify-certificate` | AC | academy-era pages (owner: tell us if certificate verification is still needed) |
| `/flutter-course`, `/flutter-course-in-chandigarh`, `/flutter-course-in-mohali`, `/flutter-course-in-muzaffarnagar`, `/flutter-online-course`, `/flutter-online-training`, `/flutter-training`, `/flutter-training-in-mohali`, `/flutter-training-in-muzaffarnagar` | F | Flutter course |
| `/online-flutter-course`, `/online-flutter-course-in-chandigarh`, `/online-flutter-course-in-mohali`, `/online-flutter-course-in-muzaffarnagar`, `/online-flutter-training`, `/online-flutter-training-in-mohali`, `/online-flutter-training-in-muzaffarnagar` | F | Flutter course |
| `/best-flutter-institute-in-chandigarh`, `/best-online-flutter-institute-in-chandigarh`, `/top-flutter-institute-in-chandigarh` | F | Flutter course |
| `/mobile-app-development-flutter`, `/online-mobile-app-development-flutter`, `/mobile-app-development-course-in-chandigarh`, `/online-mobile-app-development-course-in-chandigarh`, `/mobile-app-development-muzaffarnagar`, `/online-mobile-app-development` | F | were app-dev course pages |
| `/mobile-app-development-internship`, `/online-mobile-app-development-internship`, `/web-development-internship` | I | internships / industrial training |
| `/mobile-app-development` | `/services/mobile-apps` | service intent |
| `/web-development` | `/services/web-platforms` | service intent |
| `/python-course`, `/python-course-in-chandigarh` | A | Python track |
| `/php-course`, `/php-course-in-chandigarh` | W | web back-end |
| `/reactjs-course`, `/react-js-course-in-chandigarh`, `/reactjs-course-in-chandigarh`, `/reactjs-course-in-muzaffarnagar`, `/reactjs-training`, `/reactjs-training-in-muzaffarnagar` | W | React → full-stack |
| `/web-design-course`, `/web-design-course-in-chandigarh`, `/web-design-course-in-muzaffarnagar`, `/web-designing-course`, `/web-designing-training`, `/web-design-training`, `/web-design-training-in-muzaffarnagar`, `/web-desinging-course-in-chandigarh`, `/web-development-course-in-chandigarh`, `/web-development-training` | W | web course |
| `/website-design-course-in-chandigarh`, `/website-design-course-in-muzaffarnagar`, `/website-designing-course`, `/website-designing-training`, `/website-design-training`, `/website-design-training-in-muzaffarnagar` | W | web course |

## Deliberately NOT redirected (stay 404)

| Old path | Reason |
|---|---|
| `/privacy`, `/privacy-policy`, `/terms`, `/refund_policy` | No equivalent page yet. Redirecting a policy URL to an unrelated page is a soft 404. Owner task: provide privacy policy / terms text, then add pages and point these URLs at them. |
| `/%2091-7973847707` | Malformed `tel:` link that got crawled; nothing to redirect to. |
| `/about`, `/services`, `/robots.txt` | Exist on the new site (200). |
| Asset URLs (`/css/...`, `/fonts/...`, images, js) | Not pages. |

## Hosting tasks (owner, outside the code)

- Firebase App Hosting: make `brightinfonet.com` → `www.brightinfonet.com` a **301/permanent** redirect (today 302) and, if possible, one hop from `http://brightinfonet.com`.
- After deploy: Search Console → URL Inspection on `/courses/`, `/about`, `/blog` → "Request indexing"; Removals tool is not needed (301s handle it).

## Verification (local)

`npx next start -p 3100` then `node scripts/check-redirects.mjs http://localhost:3100`: for every literal source (and its trailing-slash variant) the first response must be 308 and the final response after following redirects must be 200.
