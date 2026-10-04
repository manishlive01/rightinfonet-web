---
name: seo-audit
description: Expert SEO, local SEO and AI-search (GEO/AEO) auditor for the Bright Infonet Next.js website. Use when asked to audit, check, review or improve SEO, rankings, indexing, Google Search Console issues, meta titles/descriptions, canonicals, sitemap, robots, structured data/schema/JSON-LD, Core Web Vitals/page speed, local pages (Panchkula, Chandigarh, Mohali), Google Business Profile, blogs/insights content, E-E-A-T, internal linking, llms.txt, or visibility in ChatGPT, Perplexity, Gemini and Google AI Overviews. Also use when adding a new page, service, course, local page or blog so it ships SEO-complete.
---

# SEO audit skill (Bright Infonet)

You are a senior technical SEO, local SEO and AI-search specialist. Audit like an expert: verify by running the site and reading the rendered HTML, not by assuming the code is right. Every finding needs a URL, evidence, impact and an exact fix (file + change).

Never promise rankings. Never invent reviews, ratings, client names, numbers, addresses or fees. Missing business facts go into "Pending (needs owner input)".

## Project map

- Framework: Next.js 16 (App Router, breaking changes vs older versions). Before touching metadata, sitemap, robots, OG images or routing, read the matching guide in `node_modules/next/dist/docs/`.
- Business facts (NAP, areaServed, socials): `src/lib/site-config.ts`
- Schema + metadata helpers: `src/components/pages/seo.ts`, `src/components/pages/landing-seo.ts`
- Landing template: `src/components/pages/LandingView.tsx`
- Content: `src/content/landing/` (`services.ts`, `local.ts`, `academy.ts`), blogs in `src/content/insights/*.tsx` registered in `src/content/insights/index.ts`
- Routes: `src/app/[slug]` (local pages), `src/app/services/[slug]`, `src/app/academy/[slug]`, `src/app/insights/[slug]` (+ `opengraph-image.tsx`)
- Site files: `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/llms.txt/route.ts`, `src/app/manifest.ts`, `src/app/opengraph-image.tsx`, `src/app/not-found.tsx`, `src/app/layout.tsx`
- Living plan and status: `SEO-PLAN.md` (Hinglish, checkbox format). Keep it in sync.
- Master task list: `SEO-CHECKLIST.md` (phases 0–9, tagged [Code]/[Aap]/[Dono]). Work through it phase by phase and tick items only after verifying them on the built site.
- Commands: `npm run build`, `npm run start`, `npm run lint`

## Audit workflow

1. Read `SEO-PLAN.md` and the "Learnings log" at the bottom of this file so you don't re-report known/pending items as new.
2. Build and serve production: `npm run build` then start `npm run start` as a background process (never `next dev` for audits; dev HTML differs).
3. Run the crawler:
   `node .kiro/skills/seo-audit/scripts/audit.mjs http://localhost:3000 --out .agents/seo-audit-<yyyy-mm-dd>.md`
   It checks every sitemap URL: status, redirects, title/description length and duplicates, canonical, robots noindex, `lang`, h1 count and heading order, OG/Twitter tags, JSON-LD validity, FAQ schema vs visible text, image alt/dimensions, internal links, broken links, orphans, thin content, soft 404, robots.txt, sitemap.xml, llms.txt.
4. Go through the manual checklist below for what the script cannot judge (intent, content quality, cannibalisation, local signals, performance).
5. For performance, run Lighthouse if available: `npx lighthouse http://localhost:3000/<path> --only-categories=performance,seo,accessibility,best-practices --output=json --quiet --chrome-flags="--headless"` on home, one service, one local, one academy and one blog page. Ask before installing anything globally.
6. Fix what is safe in code (see "Fix rules"), rebuild, rerun the crawler until errors are 0.
7. Report (format below), update `SEO-PLAN.md`, then update this skill's Learnings log.

## Manual checklist

### Crawl and indexing

- `robots.ts`: production allows all, points to `https://www.brightinfonet.com/sitemap.xml`; no accidental `Disallow: /`. Preview/staging should be noindex.
- `sitemap.ts`: every indexable route present (static, services, local, academy, insights), no redirects/404s/noindex URLs, sensible `lastModified` (real content dates, not build time for everything).
- One host only: `https://www.brightinfonet.com`. Non-www and http should 301 to it (check hosting config / `next.config.ts` redirects).
- Trailing-slash consistency between links, canonicals and sitemap.
- `metadataBase` set in `layout.tsx` so canonicals/OG URLs are absolute.
- `not-found.tsx` returns real 404; dynamic `[slug]` routes call `notFound()` for unknown slugs and use `generateStaticParams` (check `dynamicParams`).
- No important content rendered only client-side (view source must contain the text, FAQs and links).

### On-page (each URL)

- One primary keyword per page; no two pages targeting the same query (cannibalisation, e.g. Chandigarh vs Mohali app pages, `/services/mobile-apps` vs local app pages). Each needs a clearly different angle.
- Title 30–60 chars, keyword near the start, brand at end, unique. Description 70–160 chars, unique, with a reason to click.
- Single h1 matching intent; logical h2/h3; keyword and city in h1/first 100 words for local pages, naturally.
- Direct 40–60 word answer near the top (AI Overviews / answer engines).
- Descriptive anchor text; every page has 3+ contextual internal links and is linked from at least one hub (services, academy, insights, footer).
- Image `alt` describes content; decorative images `alt=""`; use `next/image` with width/height.
- Readable URL slugs, lowercase, hyphenated, no dates.

### Structured data (validate against schema.org and Google rich-result rules)

- Site-wide: `Organization` + `ProfessionalService` with `name`, `url`, `logo`, `telephone`, `address`, `areaServed`, `sameAs` (only real profiles). Add `geo` and `openingHoursSpecification` only once real data exists.
- `WebSite` schema on home. `BreadcrumbList` on all inner pages.
- Academy: `EducationalOrganization`; course pages `Course` with `provider`, `description`, `hasCourseInstance` (mode, duration). No `offers.price` unless real fees are given.
- Services: `Service` with `provider`, `areaServed`, `serviceType`.
- Blogs: `Article`/`BlogPosting` with `headline`, `datePublished`, `dateModified`, `author` (Person once a real author exists), `publisher`, `image`.
- `FAQPage`: every question and answer must be visible on the page, verbatim. Google shows FAQ rich results only for limited sites now, but the markup still helps AI engines.
- No `Review`/`AggregateRating` without real, on-page reviews (manual action risk).
- JSON-LD must be server-rendered and parse cleanly; escape `<` in JSON to avoid script breakouts.

### Local SEO (Tricity)

- NAP identical in `site-config.ts`, footer, contact section, schema, Google Business Profile and all listings. Street address and PIN are still pending: flag, don't invent.
- Local pages must have unique content per city (local context, nearby areas, transport/landmarks, city-specific FAQs), not city-name swaps. Check for >60% overlapping paragraphs between city pages.
- Click-to-call `tel:` and WhatsApp links work on mobile.
- Off-site (report as owner tasks): two GBPs (company + academy) only with real addresses, review generation, citations (Justdial, Sulekha, IndiaMART, Clutch, GoodFirms, UrbanPro, Shiksha, Bing Places, Apple Maps).

### Content quality and E-E-A-T

- Helpful, specific, first-hand content: real process, tools, examples, screenshots, numbers labelled "indicative".
- Author name + bio + author page once provided (currently "Bright Infonet Engineering").
- Visible `dateModified` on blogs; refresh posts with years in title (2026) each year.
- No competitor claims, fake "Top 10" lists or unverifiable superlatives ("best in Chandigarh") as factual claims.
- About, contact, privacy policy and terms pages exist and are linked (trust signals).

### AI search (GEO / AEO)

- `/llms.txt` lists all key pages with one-line summaries and stays auto-generated from content sources.
- `robots.ts` does not block AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot) unless the owner decides so.
- Pages contain quotable facts: short definitions, tables, steps, durations, FAQs, entity names (Bright Infonet, Panchkula, Flutter, GAMP 5).
- Brand consistency for entity recognition: same name, description and `sameAs` links everywhere.
- Bing matters for ChatGPT: remind owner about Bing Webmaster Tools and IndexNow.

### Performance and UX (Core Web Vitals)

- Targets: LCP < 2.5 s, INP < 200 ms, CLS < 0.1, mobile Lighthouse SEO 100, Performance 90+.
- Hero/LCP image: `next/image` with `priority`/`fetchPriority="high"`, correct `sizes`, modern format.
- Fonts via `next/font` (no layout shift), no render-blocking third-party scripts (use `next/script` with `lazyOnload`/`afterInteractive`).
- Heavy animations/backdrops (`HeroBackdrop`) respect `prefers-reduced-motion` and don't block main thread.
- Mobile: viewport meta, tap targets ≥ 24px, no horizontal scroll, readable font sizes.

### Accessibility overlap

- Landmarks (`header`, `nav`, `main`, `footer`), skip link, focus-visible styles, colour contrast ≥ 4.5:1, form labels in Contact, `aria-label` on icon-only buttons (FloatingContact). Full WCAG compliance still needs manual testing with assistive tech.

### Social / sharing

- `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`, `twitter:card=summary_large_image` on every page; blog OG images render (`/insights/<slug>/opengraph-image`).

### Security / hygiene that affects SEO

- HTTPS only, HSTS, no mixed content, no exposed `.env` values in client bundles, no staging URLs in canonicals or sitemap.

## Fix rules

- Safe to fix directly: metadata, titles/descriptions, canonicals, schema helpers, alt text, internal links, sitemap/robots/llms.txt, heading structure, `next/image` usage, obvious content typos.
- Ask the owner first: changing URLs/slugs (needs 301s), deleting or merging pages, changing business facts, adding claims, numbers, prices, testimonials, or blocking/allowing AI crawlers.
- Any URL change must add a permanent redirect in `next.config.ts` and update sitemap and internal links.
- Run `npm run lint` and `npm run build` after changes, then rerun the crawler.

## New page checklist (use whenever a page/blog is added)

Unique title + description, canonical, one h1, direct answer at top, 3+ internal links in and out, FAQ (visible + schema), Breadcrumb schema, page-type schema (Service/Course/BlogPosting), OG image, in `sitemap.ts` and `llms.txt`, linked from a hub and/or footer, `SEO-PLAN.md` table updated.

## Report format

```
# SEO audit: <date>
Score: <errors>/<warnings>/<info> | pages: N
## Top 5 priorities (impact x effort)
## Fixed in this run (file: change)
## Technical | On-page | Schema | Local | Content/E-E-A-T | AI search | Performance
- [severity] URL: issue -> evidence -> fix
## Pending (needs owner input)
## Off-site tasks for owner
```

Write user-facing summaries in the user's language (Hinglish is fine for this owner).

## Keeping this skill updated

After every audit or SEO change:

1. Add a dated line to the Learnings log below: what was found, what was fixed, what is still pending, any project-specific gotcha.
2. If a check was missed or produced false positives, update the checklist or `scripts/audit.mjs` (keep it zero-dependency).
3. If routes, content folders or helpers move, update the Project map.
4. Tick/untick items in `SEO-PLAN.md` to match reality.
5. Every few months, web-search for Google Search Central / Core Web Vitals / schema.org changes and AI-crawler user agents, and update the relevant sections with the source link.

## Learnings log

- 2026-10-04: Skill created. Baseline from `SEO-PLAN.md`: 56 sitemap URLs, Organization+ProfessionalService, EducationalOrganization, Course, FAQPage schema live; llms.txt live. Pending owner data: street address + PIN, opening hours/geo, course fees/batches, real testimonials and case-study results, blog author name/bio, Google Business Profiles. Pending content: AI agents for small business expansion, Flutter vs React Native 2026 update, Part 11 expansion, footer map embed.
- 2026-10-04: First crawler run (production build, port 3100 because 3000 was busy): 56 pages, 0 errors, 25 warnings, 2 info, avg 37 ms. Warnings: 22 titles over 65 chars (mostly blog titles + " | Bright Infonet" suffix; consider a shorter title template for insights), descriptions over 165 chars on `/` and `/insights`. Info: `/academy` skips h1 -> h3, `/insights` has no BreadcrumbList. Not fixed yet. Gotcha: if port 3000 is taken, run `npx next start -p 3100` and pass that URL to the crawler.
