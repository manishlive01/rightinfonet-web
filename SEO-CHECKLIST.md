# Bright Infonet: SEO Master Checklist

Owner tags: **[Code]** = website me kaam (Kiro kar sakta hai), **[Aap]** = asli data ya off-site kaam (aapko karna hai), **[Dono]** = aap data do, code me lagega.
Status: `[ ]` baaki, `[~]` aadha (code ready, aapka data/decision baaki), `[x]` ho gaya. Har item check karke yahan update karna hai. Living plan: `SEO-PLAN.md`. Aapki to-do list: `SEO-OWNER-TODO.md`.

Rule: koi review, number, client name, fee ya date invent nahi karni. Data na ho to item `[ ]` ya `[~]` hi rahega.

Last verified: 2026-10-04, production build (`next start -p 3100`) + crawler `.agents/seo-audit-2026-10-04.md`: 72 pages, 0 errors, 0 warnings, 1 info (CSV download file sitemap me nahi, jaan-boojh kar). Baseline tha 56 pages, 0/25/2.

## Phase 0: Positioning (sabse pehle decide)

- [~] **[Aap]** Priority confirm: 1) Regulated software (LIMS, PV, GAMP 5, Part 11, CSV), 2) Academy local, 3) Flutter + AI agents. "software company Chandigarh" baad me. _Aapke message wala order code me laga diya; final confirm aapka._
- [x] **[Code]** Home, services aur nav me regulated software ko sabse upar dikhana (hero, services order, footer). _Served home: services 01 = Regulated software, hero lead LIMS/PV/GAMP 5/Part 11 se shuru, footer ka pehla column "Regulated software"._

## Phase 1: Technical (code, bina owner data ke)

- [x] **[Code]** `robots.ts`: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Bingbot ke liye explicit `allow: /` rules. _Served /robots.txt me sab 7 bots + Sitemap line._
- [x] **[Code]** Homepage meta description 150–160 chars (abhi 170). `/insights` description bhi chhota. _Home 158, /insights 159._
- [x] **[Code]** 22 lambe titles (65+ chars) chhote karna, blogs ke liye chhota title template. _`seoTitle()` helper, crawler me 0 title warnings._
- [x] **[Code]** `/academy` heading h1 -> h3 skip fix. `/insights` par BreadcrumbList. _Crawler: heading-skip 0, BreadcrumbList har inner page par._
- [x] **[Code]** `Article`/`BlogPosting` schema me `author`, `datePublished`, `dateModified`; page par visible "Last updated". _Author abhi Organization hai; real author aane par Person schema apne aap._
- [x] **[Code]** Har service page par `Service` schema (`provider`, `areaServed`, `serviceType`) check/add. _Schema sweep: 12 /services, 3 /industries, 13 local pages par Service._
- [~] **[Code]** Author box component (naam, role, LinkedIn, bio) aur `/about/team` ya founder page ka structure, data aane tak placeholder nahi, hidden. _Code ready (AuthorBox, /about/founder; founder page dummy data se test hua, AuthorBox real author ke saath ek baar check karna); `src/content/authors.ts` khali hai isliye hidden, /about/founder 404._
- [x] **[Code]** Internal linking audit: koi orphan nahi, anchor text keyword-rich, har article me 3–5 links + end me service CTA. _Crawler: 0 orphans, har post me 3+ in-body links, har post par pillar CTA. 10 posts me 5 se zyada links hain (rakhe gaye)._
- [x] **[Code]** Image alt text audit (descriptive, decorative ke liye `alt=""`). _Crawler 0 alt warnings; SVGs aria-hidden/labelled._
- [ ] **[Code]** Core Web Vitals: mobile LCP < 2.5s, CLS < 0.1. SplitText, Reveal, HeroBackdrop ka mobile LCP par asar check, `prefers-reduced-motion` respect. _Mitigations lage (phones par hero text static, HeroBackdrop static on touch, reduced-motion), CLS 0, lekin Lighthouse simulated mobile LCP abhi 3.6–4.2s hai. Target pura nahi; deploy ke baad PageSpeed field data dekhna._
- [~] **[Code]** Footer me full NAP, contact me WhatsApp + "Book a 20-min call" button (Calendly link aap doge). _NAP + WhatsApp live; Calendly button `NEXT_PUBLIC_CALENDLY_URL` ke bina hidden (test build me chala)._
- [~] **[Dono]** GA4 + events: form submit, `tel:` click, WhatsApp click, Calendly click. (GA4 Measurement ID aap doge.) _Code ready, test ID se chala; `NEXT_PUBLIC_GA_ID` pending._
- [~] **[Aap]** Search Console + Bing Webmaster verify, sitemap submit, Index Coverage dekho. **[Code]** verification meta tag lagana. _Meta tag code ready (test build me dikha); codes aur submit aapka kaam._
- [~] **[Code]** IndexNow key (Bing/ChatGPT ke liye fast indexing). _/indexnow.txt + `scripts/indexnow-submit.mjs` ready; `INDEXNOW_KEY` set karke script aapko chalani hai._

## Phase 2: Trust signals aur proof

Saare components code me ready hain aur khali data par kuch nahi dikhate (no fake). Dummy data se ek baar render check kiya, phir hata diya.

- [~] **[Aap]** Street address + PIN, office timings, map location -> **[Code]** `site-config.ts`, schema `geo`, `openingHoursSpecification`, footer map embed. _Fields: `address.street`, `address.postalCode`, `geo`, `openingHours`, `mapEmbedUrl`, `googleBusinessUrl`._
- [~] **[Aap]** Real author naam, photo, bio, LinkedIn -> **[Code]** author box + `Person` schema. _`src/content/authors.ts` → `AUTHORS`, phir posts par `author: "<id>"`._
- [~] **[Aap]** Founder page content (story, photo, LinkedIn) -> **[Code]** founder/about page. _`FOUNDER` in `authors.ts`; bharte hi /about/founder, sitemap aur About link aa jayenge._
- [~] **[Aap]** Client logos (permission ke saath) aur named testimonials -> **[Code]** logo strip + testimonial section + `Review` schema (sirf asli reviews). _`src/content/trust.ts` → `CLIENT_LOGOS`, `TESTIMONIALS`._
- [~] **[Aap]** Case study data: PVgenix, LIMS, Clinic Booking ke 3 numbers each (timeline, outcome, scale), screenshots, client quote -> **[Code]** `/work` case study pages. _`CASE_STUDY_PROOF` in `trust.ts` (/work cards par slot). Alag case study pages abhi nahi bane._
- [~] **[Code]** Har service page par: 1 case study link, 3 numbers, 1 client quote (data milne par). _`PROOF[path]` in `trust.ts` → ProofSlot har landing page par._
- [~] **[Aap]** Pricing ranges ("Starts from ₹X") services aur courses ke liye -> **[Code]** pricing block + `offers` schema. _`PRICING[path]` in `trust.ts`; llms.txt pricing line bhi apne aap._
- [ ] **[Aap]** Real office/team photos (stock nahi).
- [ ] **[Aap]** Student projects aur placement stats (Academy).

## Phase 3: Article dates aur publishing

- [~] **[Aap decide]** Abhi saare articles Sept 28, 2026 ke hain. Purani dates daalna (backdating) galat signal hai, isliye: kuch articles unpublish karke 2/week schedule par release karo, ya jo hain wahi rakho aur aage se 2/week. Option choose karo. _Owner decision (2026-10-04): 23 naye posts abhi live, staggered past dates par (Tue + Fri, 2026-07-17 se 2026-10-02, 2/week). `dateModified` = `datePublished` (koi fake edit date nahi). 26 purane posts ki dates same (2026-09-28; 10 par `updated: 2026-10-04`). Ab koi post future-dated nahi._
- [x] **[Code]** Scheduled publish support (future `datePublished` wale posts sitemap/listing me tab tak na dikhein). _Code rakha hai aage ke posts ke liye; abhi koi post scheduled nahi. Normal build: future posts 404, /insights, sitemap, llms.txt, home, related links me nahi. ISR 1h. Future-dated post daaloge tabhi host ko ISR (next start / Vercel) ya daily rebuild chahiye._
- [x] **[Code]** Har article par visible "Last updated" + `dateModified` sirf asli edit par badle. _Sirf edit kiye posts par `updated: 2026-10-04`._
- [~] **[Code]** Existing articles ko article rules ke hisaab se audit: 1,500–2,500 words, answer pehle, comparison table, FAQ, author box, 3–5 internal links, end CTA. _Audit ho gaya: 26 me se 10 fix kiye, 16 baaki rules (answer pehle, table, FAQ, links, CTA) par pehle se theek. Author box data ke bina hidden. Baaki: 20 posts ki article body abhi 1,500 words se kam hai (served `<article>` me jaise 1,379–1,429; crawler ka page Words 1,581+ poora `<main>` ginta hai). In posts ko expand karna abhi pending hai; expand karne par hi `updated` date lagegi._

## Phase 4: Naye service aur industry pages

Har page: pehli 2 lines me direct answer, unique content, FAQ + schema, case study/proof slot, CTA, sitemap + llms.txt + hub links. _Sab 200, sitemap + llms.txt + footer + hub me, Service + FAQPage + BreadcrumbList, 780–900 words. Proof slot data ke bina hidden._

- [x] **[Code]** `/services/lims-software-development`
- [x] **[Code]** `/services/pharmacovigilance-software`
- [x] **[Code]** `/services/computer-system-validation` (CSV/CSA)
- [x] **[Code]** `/industries/pharma-software`
- [x] **[Code]** `/industries/diagnostic-lab-software`
- [x] **[Code]** `/industries/healthcare-app-development`
- [x] **[Code]** `/services/saas-development-company-india`
- [x] **[Code]** `/services/ai-chatbot-development-india`
- [x] **[Code]** `/services/hire-dedicated-developers-india`
- [x] **[Code]** `/services/ecommerce-development-chandigarh`
- [x] **[Code]** Existing `/services/regulated-software` aur `/gxp-software-development-india` ke saath cannibalisation check, roles clear karna. _Regulated = umbrella, GxP India = India-wide partner; dono specialist pages ko link karte hain._

## Phase 5: Naye location pages

Har page unique (local context, nearby areas, local examples). Template copy-paste nahi. _8-word shingle check: 4 pages me koi common sequence nahi._

- [x] **[Dono]** Zirakpur `/app-development-company-zirakpur`
- [x] **[Dono]** Kharar `/software-development-company-kharar`
- [x] **[Dono]** Ambala `/software-development-company-ambala` _(areaServed me Ambala add kiya, confirm karo)_
- [x] **[Dono]** Shimla `/web-development-company-shimla` _(areaServed me Shimla add kiya, confirm karo)_
- [ ] **[Aap]** In shehron ke local clients/examples (ho to), warna page thin rahega.

## Phase 6: Comparison / decision pages

- [x] **[Code]** Flutter vs React Native for startups (existing post update + merge, cannibalisation se bacho) _Same URL `/insights/flutter-vs-native-app-development`, updated 2026-10-04._
- [x] **[Code]** Custom LIMS vs off-the-shelf LIMS _Live, published 2026-08-04._
- [x] **[Code]** Next.js vs WordPress for business site _Live, published 2026-09-29._
- [x] **[Code]** In-house vs outsourcing software development _Live, published 2026-10-02._

## Phase 7: Pillar + cluster content

Article rules: 1,500–2,500 words, answer pehle, comparison table, FAQ, author box, last updated, 3–5 internal links, end me service CTA. 2 articles/week, alag dates.

23 naye posts live hain (dates 2026-07-17 se 2026-10-02, Tue + Fri). Normal build (bina `CONTENT_NOW`) 2026-10-04: crawler 95 pages, 0 errors, 0 warnings; sab 23 URLs 200, /insights, sitemap.xml aur llms.txt me.

**Pillar 1: Regulated software**

- [x] **[Code]** Pillar: Complete guide to GxP software validation (saare cluster isse link) _live 2026-07-17_
- [x] **[Code]** GAMP 5 Category 4 vs 5 _live 2026-07-24_
- [x] **[Code]** Part 11 audit trail requirements _live 2026-07-21_
- [x] **[Code]** EU Annex 11 _live 2026-07-28_
- [x] CSV vs CSA (hai, pillar se link karna)
- [x] **[Code]** LIMS URS template (downloadable) _article live 2026-07-31; CSV download + `/resources/lims-urs-template` abhi live_
- [x] **[Code]** LIMS implementation checklist _live 2026-08-07_
- [x] **[Code]** NABL / ISO 15189 software requirements _live 2026-08-11_
- [x] **[Code]** Pharmacovigilance E2B(R3) explained _live 2026-08-14_
- [x] **[Code]** Validation package kya hota hai _live 2026-08-18_
- [x] **[Code]** Part 11 post expansion (pending from SEO-PLAN) _updated 2026-10-04_
- [~] **[Dono]** Lead magnet: free URS / validation template download + email capture (email tool aap choose karo) _Download live; email form `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` ke bina hidden. Privacy policy page bhi chahiye._

**Pillar 2: Cost aur hiring**

- [~] **[Code]** Interactive app/software cost calculator (indicative ranges aap confirm karo) _Live `/tools/app-development-cost-calculator`, browser me test kiya; ranges `src/content/cost-calculator.ts` confirm karni hain._
- [x] **[Code]** App development cost in Chandigarh _live 2026-09-18_
- [x] **[Code]** MVP in 8 weeks _live 2026-09-22_
- [x] **[Code]** How to write an RFP for software _live 2026-09-25_

**Pillar 3: AI agents**

- [x] **[Code]** AI agent vs chatbot _live 2026-09-01_
- [x] **[Code]** RAG kya hai business ke liye _live 2026-09-04_
- [x] **[Code]** AI automation for clinics / labs / retail _live 2026-09-08_
- [x] **[Code]** AI agent cost India _live 2026-09-11_
- [x] **[Code]** AI agent evals kaise karein _live 2026-09-15_
- [x] **[Code]** AI agents for small business expansion (pending from SEO-PLAN) _updated 2026-10-04_

**Pillar 4: Academy**

- [x] **[Code]** Fresher software developer salary Chandigarh (indicative, sources ke saath) _live 2026-08-21_
- [x] **[Code]** BCA/MCA ke baad kya karein _live 2026-08-25_
- [x] **[Code]** Industrial training certificate kaise lein _live 2026-08-28_
- [ ] **[Aap]** Student projects + placement stats page ke liye data

**Hub-and-spoke**

- [~] **[Code]** Existing 25 articles ko 4 pillars me map karna, pillar <-> cluster links, `/insights` par pillar-wise grouping. _26 posts 4 pillars me, har post par PillarNav (hub link + same-pillar list), llms.txt pillar-wise. `/insights` listing page par pillar-wise grouping abhi nahi (date-wise list hai)._

## Phase 8: AI search (GEO)

- [x] `/llms.txt` live
- [x] **[Code]** llms.txt me NAP, pricing range, naye pages; facts har jagah same. _NAP line (khali fields ke bina), Industries/Tools/Guides by pillar. Pricing line `PRICING` bharne par apne aap aayegi._
- [x] **[Code]** robots.ts AI bots (Phase 1 me)
- [x] **[Code]** FAQ + Service + Article (author, dateModified) schema har page par; Review schema sirf asli reviews ke saath. _Schema sweep clean; Review/AggregateRating 0 (testimonials khali)._
- [ ] **[Dono]** Original data: "India software cost survey 2026" (asli survey data chahiye).

## Phase 9: Off-page (aapka kaam)

- [ ] **[Aap]** Google Business Profile: Panchkula verify, category "Software company", services, photos, weekly posts. Academy ka alag profile (alag address ho to).
- [ ] **[Aap]** Pehle 25 real Google reviews (clients, students, partners).
- [ ] **[Aap]** Directories (NAP same): Clutch, GoodFirms, TechBehemoths, DesignRush, Sortlist, Justdial, IndiaMART, Sulekha, Bing Places, Apple Maps, UrbanPro, Shiksha.
- [ ] **[Aap]** Clutch/GoodFirms reviews.
- [ ] **[Aap]** Backlinks 8–15/month: pharma/lab blogs, ISPE, PharmaGuideline-type guest posts; HARO/Qwoted/Featured; college placement cells; local tech communities; partners/clients "built by Bright Infonet" link.
- [ ] **[Aap]** LinkedIn company page + founder profile active; YouTube case study demos; Quora, r/developersIndia, r/pharma genuine jawab.
- [ ] **[Aap]** PR: local media (Tribune, Bhaskar, YourStory) story.
- [ ] **[Code]** `sameAs` me saare real profiles add karna jab ban jayein. _`social` array in `src/lib/site-config.ts`; naye profile URLs milne par add._

## Owner se chahiye (ek jagah)

Poori list file + key ke saath `SEO-OWNER-TODO.md` me hai: street address + PIN, timings, geo/map pin, GBP URL, author/founder details, client logos + testimonials, case study numbers + screenshots, pricing ranges, Calendly link, GA4 ID, Search Console/Bing verification codes, IndexNow key, lead form endpoint + privacy policy, calculator ranges confirm, Ambala/Shimla confirm, placement stats, article dates ka decision confirm.
