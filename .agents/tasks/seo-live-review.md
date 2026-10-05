# SEO live-audit fixes: redirects, About hardening, doorway control, schema, contact API

The change works through the owner's live SEO audit. It adds a 96-rule old-URL redirect map, collapses the duplicate LIMS URS resource into the canonical post, noindexes the three thin city pages and rewrites both Panchkula pages, and moves sitemap lastmod to fixed content dates. It also adds external authority links to 12 regulated posts, labels the two sample Work items, gates team/author/founder blocks on owner data, adds a validating `/api/contact` route with mailto fallback, and puts the location in the home H1. No owner data was invented: `authors.ts`, `site-config.ts` and `trust.ts` add no names, coordinates, GBP URLs, clients or reviews. The coder's evidence shows lint/build clean, crawler 91 pages 0/0, 190/190 redirect checks, and 94 pages of JSON-LD parsing. It also shows the live `/about` is already the new page, so the old one the owner saw comes from Google's stale index.

Watch for: the contact rate limit keys on the first `X-Forwarded-For` entry, which the client controls (likely), so it can be bypassed once the endpoint is switched on. Setting only `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` also turns on contact-form forwarding to the lead-magnet backend (confirmed, documented). Neither blocks shipping, because the endpoint stays off until the owner sets the env var.

**Verdict**: APPROVED

## High-level view

The redirects live in one array in `src/lib/redirects.ts`. `next.config.ts` and the zero-dependency check script both read it, so config and test can't drift. Specific `/courses/*`, `/blog/*` and `/tutorials/*` rules come before their catch-alls. Trailing slashes go through Next's default 308 strip (2 hops). `.html`/`.htm` sources are literal. No `.php` URLs show up in the Wayback capture, so none are mapped. Policy URLs stay 404 on purpose rather than becoming soft 404s. No redirect source shadows a live route.

`/about` was already correct live. The repo work hardens its graph (AboutPage `@id`, `isPartOf`, `mainEntity`) and adds a TeamSection that only renders, and only emits Person nodes, when `FOUNDER`/`AUTHORS` hold real names. The Person `@id` matches the founder page. A repo grep for the banned claim strings finds nothing. "One working day" was already in the copy before this change.

The URS duplicate is gone: the route is deleted, a 301 points to the post, the download section moved into the post with a `DigitalDocument` node, and every internal link, the sitemap and llms.txt now use the post URL.

Doorway risk is handled with a `noindex` flag on `Landing`. One `isIndexable()` helper drives the sitemap, llms.txt, footer AREAS and LandingView related links, and the crawl recorded 0 internal links to the three pages. Both Panchkula pages now centre on the HQ angle using public geography only. Measured overlap is ≤3.5%, so Zirakpur and the academy city pages stay indexed.

NAP comes from one `napAddressLine()` helper used by the footer, contact section and llms.txt. Schema emits geo/hasMap only when filled, and the scratch test proved the switch both ways and was reverted. Authors get `credentials` and `PILLAR_AUTHORS`, wired into byline, AuthorBox, BlogPosting `knowsAbout` and the founder page. With empty data, output is unchanged.

The sitemap uses fixed ISO constants and drops priority/changefreq. `/about/founder` already has a date key, so it won't emit an Invalid Date once a founder is added.

The contact API follows the plan: server-side validation, honeypot, per-instance in-memory rate limit, 503 fallback to mailto, `aria-live` status with focus moved to it, and `generate_lead` only on success. The weak spot is the rate-limit key.

<details>
<summary>Issues (2)</summary>

1. **Spoofable rate-limit key** (likely, non-blocking): `clientIp()` uses the first `X-Forwarded-For` entry, which the client controls behind Firebase App Hosting / Cloud Run, so rotating the header bypasses the 5-per-10-min limit. Key on the rightmost entry the platform appends, or the platform's client-IP header, before setting `CONTACT_FORM_ENDPOINT`.
2. **Lead-magnet endpoint doubles as contact backend** (confirmed, non-blocking): `contactEndpoint()` falls back to `NEXT_PUBLIC_LEAD_FORM_ENDPOINT`, so setting it for URS downloads also switches the home form to post there, mixing both streams in one inbox. The `form: "contact"` field tells them apart. Either drop the fallback or keep it and tell the owner in SEO-OWNER-TODO.

</details>

<details>
<summary>Details</summary>

## Contact API trust boundary

`/api/contact` is unauthenticated by design. Its abuse controls are the honeypot and the per-IP limiter, and the route file and `.env.local.example` both say so. The limiter's key is the weak point:

```ts
const fwd = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
return fwd || req.headers.get("x-real-ip")?.trim() || "unknown";
```

Google's front end appends the real client IP to any `X-Forwarded-For` the client sends, so `[0]` is attacker-chosen (likely, not traced on the live host because the endpoint isn't deployed). A bot that sends a random XFF on each request never hits 429 and can push unlimited validated submissions into the form service. The limit is also per instance and resets on restart, which the plan already accepts. The honeypot only stops naive bots. Use the last XFF hop, or the platform-provided client IP, so the documented protection actually holds.

The limiter counts requests before validation, so a client that fails validation still uses up its quota. The client mirrors the server validation, so real users are unlikely to hit this.

Whether the home form posts or opens mailto is decided when the page renders statically (`Contact formEndpoint={Boolean(contactEndpoint())}`). If the env var is available at runtime but not at build, the form stays in mailto mode. If it's available at build but not at runtime, the route's 503 `fallback` hands off to mailto. Either way no lead is silently lost, and the docs say to rebuild after setting the var.

## External authority links

The `Source` helper renders `rel="noopener"` in the same tab with no nofollow, and posts carry 1–3 links each, all to regulator or standards-body hosts. The FDA/eCFR URLs couldn't be fetched automatically (bot protection) and were confirmed through the search index. That's adequate, but a manual click-through after deploy is still worthwhile. The CSA post's new 2026 re-issue sentence and its FAQ answer agree with each other and with the GAMP 5 guide.

</details>

<details>
<summary>File map</summary>

- `src/lib/redirects.ts`, `next.config.ts`, `scripts/check-redirects.mjs`: old-URL redirect list, config hook, checker
- `src/app/resources/lims-urs-template/page.tsx` (deleted), `src/content/insights/lims-urs-template.tsx`, `src/content/insights/types.ts`, `src/app/insights/[slug]/page.tsx`: URS merged into the post (download section, DigitalDocument, Toc), author resolution via `getPostAuthor`
- `src/app/about/page.tsx`, `src/components/pages/TeamSection.tsx`, `src/app/about/founder/page.tsx`, `src/content/authors.ts`, `src/components/insights/AuthorBox.tsx`: AboutPage graph, gated team/Person nodes, credentials, pillar authors
- `src/content/landing/{types,index,local,services,industries}.ts`, `src/components/pages/{landing-seo.ts,LandingView.tsx}`, `src/components/home/Footer.tsx`, `src/app/llms.txt/route.ts`: noindex flag and filtering, Panchkula rewrite, link updates
- `src/lib/site-config.ts`: `napAddressLine()`, areaServed trimmed
- `src/app/sitemap.ts`, `src/content/page-dates.ts`: fixed lastmod, no priority/changefreq
- `src/components/insights/Prose.tsx` + 12 regulated posts: `Source` links, `updated` dates
- `src/app/api/contact/route.ts`, `src/lib/contact-endpoint.ts`, `src/components/home/{Contact.tsx,Contact.module.css,Home.tsx}`, `.env.local.example`: contact API, honeypot, states, fallback
- `src/components/home/{Hero.tsx,Work.tsx,WorkCard.tsx,data.ts}`, `src/app/work/page.tsx`: H1 location, sample-build labels, Work copy
- `SEO-*.md`, `.kiro/skills/seo-audit/SKILL.md`: owner docs and checklist

Full diff: `git diff` in `brightinfonet-web` (uncommitted working tree).

</details>
