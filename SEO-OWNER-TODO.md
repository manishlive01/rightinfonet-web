# Bright Infonet SEO: aapko kya karna hai (Owner To-Do)

Date: 2026-10-04. Status ka detail `SEO-CHECKLIST.md` me hai, plan `SEO-PLAN.md` me.

## 0. Live audit fixes (2026-10-04/05) — code ready, deploy aapka kaam

Kya hua (local production build par check kiya; deploy nahi kiya, commit nahi kiya):

- `/about`: live par abhi bhi NAYA page hai (title "About — An AI-First Software Studio in India", self-canonical, JSON-LD). Aapne jo purana page dekha ("Next-Gen Digital Solutions", Courses/Placements, "98%", "24/7") wo Google ka purana cache/snippet hai. Code me kahin bhi ye claims nahi hain. About page me ab AboutPage `mainEntity` + Team section (jo `authors.ts` bharne par apne aap dikhega).
- Purane URLs: 96 redirect rules (purane paths + catch-alls) ka 301 (Next 308) map `src/lib/redirects.ts` me (`/courses/` → `/academy`, `/blog` → `/insights`, `/projects` → `/work`, `/contact` → `/#contact`…). Check: `node --experimental-strip-types --no-warnings scripts/check-redirects.mjs http://localhost:3100` (190 checks PASS). `/privacy`, `/terms` jaan-boojh kar 404 (policy text chahiye).
- Duplicate: `/resources/lims-urs-template` ab 301 → `/insights/lims-urs-template` (download section `#download` usi article me). Sitemap/llms.txt/footer update.
- Sitemap: har URL par real `lastmod` (`src/content/page-dates.ts`), priority/changefreq hata diye.
- Kharar, Ambala, Shimla pages: `noindex,follow` (route chalu, sitemap/llms.txt/footer/related links se bahar). Ambala, Shimla `areaServed` se bhi hataye. Panchkula ke dono pages (app + web) Panchkula-specific likhe (Industrial Area Phase I/II, sectors, Pinjore/Kalka/Zirakpur, in-person meetings). Koi client/number nahi likha.
- 12 regulated articles me official links (eCFR Part 11, FDA Part 11 guidance, FDA CSA 2026, ISPE GAMP 5, EudraLex Vol 4, Annex 11 PDF, ICH E2B(R3), ISO 15189, NABL). CSA article me Feb 2026 re-issue ka fact jod diya.
- Work: Clinic booking aur Ops agent par "Sample build · not client work" label; heading "Software we build".
- Contact form: `/api/contact` bana (validation, honeypot, rate limit 5/10 min per IP). Endpoint set nahi hai to pehle jaisa email app + ab WhatsApp link.
- Home H1: "AI-first software & app development · Panchkula, Chandigarh Tricity: We build software that thinks."

Aapko kya karna hai (`[ ]` = aapka kaam, `[~]` = code ready, aapka data baaki):

1. [ ] **Redeploy karo.** Ye saare fixes abhi sirf code me hain (commit/deploy nahi hua). Jab tak deploy nahi hoga, live par purane URLs (`/courses/`, `/blog`, `/projects`, `/contact`…) 404 hi denge, duplicate `/resources/lims-urs-template` live rahega, aur Google purana `/about` snippet dikhata rahega.
2. [ ] Deploy ke baad redirects live par check karo: `node --experimental-strip-types --no-warnings scripts/check-redirects.mjs https://www.brightinfonet.com` (sab PASS aane chahiye), ya browser me `https://www.brightinfonet.com/courses/` kholo → `/academy` par jaana chahiye.
3. [ ] Search Console: sitemap `https://www.brightinfonet.com/sitemap.xml` dobara submit karo, phir URL Inspection → "Request indexing": `/about`, `/courses/`, `/blog`, `/insights/lims-urs-template`. Bing Webmaster me bhi sitemap submit.
4. [ ] Firebase App Hosting: `brightinfonet.com` → `www` redirect abhi **302** hai, ise **301/permanent** karo.
5. [ ] Deploy ke baad [Google Rich Results Test](https://search.google.com/test/rich-results): `/`, `/about`, `/mobile-app-development-panchkula`, ek article (jaise `/insights/gamp-5-software-validation-guide`), `/academy/flutter-app-development-course`. Errors aaye to mujhe screenshot bhejo.
6. [~] Founder/author data: `src/content/authors.ts` me `FOUNDER` / `AUTHORS` (naam, role, bio, LinkedIn, photo, `credentials` = asli GxP/validation experience lines). `PILLAR_AUTHORS.regulated = "<id>"` set karte hi saare GAMP 5/Part 11 posts us naam se, Person schema ke saath. Data na ho to "Bright Infonet Engineering" hi rahega.
7. [~] Full address: `src/lib/site-config.ts` me street, PIN, `geo` (GBP pin ke lat/lng), `mapEmbedUrl`. Ye footer, contact, schema, llms.txt sab jagah ek saath badlega. Bilkul wahi likho jo GBP par hai.
8. [ ] Google Business Profile: Panchkula profile verify karo aur uska public link `googleBusinessUrl` me daalo (ya mujhe bhej do).
9. [ ] Reviews: GBP par asli clients/students se reviews mangwao (kabhi fake/paid nahi). Site par `TESTIMONIALS` (`src/content/trust.ts`) sirf likhit permission ke saath.
10. [~] Client data / Work: kam se kam ek real case study (client naam permission ke saath, date, 2–3 numbers, quote) → `CASE_STUDY_PROOF` in `trust.ts`. Tab tak Clinic booking + Ops agent "Sample build" label ke saath rahenge.
11. [~] Contact form: Formspree/Getform jaisa form banao, https URL hosting env me `CONTACT_FORM_ENDPOINT` me daalo, phir rebuild + redeploy. Pehle privacy policy page chahiye. Dhyan do:
    - Endpoint bina login ka hai, sirf honeypot + rate limit (5/10 min per IP, per server instance) se bacha hai; form service me spam filter on rakhna.
    - Enable karne se pehle mujhe bolo: rate limit abhi `X-Forwarded-For` ki pehli IP use karta hai jo bot badal sakta hai; ise platform ki real client IP par shift karna hai.
    - Agar sirf `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` (URS download form) set karoge to contact form bhi usi inbox me jayega (`form: "contact"` field se alag pehchan sakte ho). Alag inbox chahiye to `CONTACT_FORM_ENDPOINT` alag rakho.
12. [ ] Kharar, Ambala, Shimla (abhi `noindex`): wahan ka koi real client/project/local content ho to batao. Tab main `src/content/landing/local.ts` me us page ka `noindex` hataunga, asli content daalunga, aur page sitemap/footer me wapas aayega. Phir Search Console me us URL ka "Request indexing" karna. Bina real content ke `noindex` hi rehne do.
13. [ ] `/privacy`, `/terms`: policy text do (ya lawyer se approve karao), page bana ke purane `/privacy-policy`, `/refund_policy` URLs bhi unpar redirect kar dunga.
14. [ ] `/verify-certificate` ab `/academy` par jaata hai; certificate verification chahiye to batao.

## 1. Kya ho gaya (code me, build + live server par check kiya)

- Final check: `npm run lint` clean, `npm run build` pass, crawler 72 pages, 0 errors, 0 warnings (pehle 56 pages, 25 warnings). Report: `.agents/seo-audit-2026-10-04.md`.
- Titles, meta descriptions, headings, breadcrumbs sab theek. Home description 158 chars.
- `robots.txt` me GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Bingbot explicit allow.
- Home, services aur footer me Regulated software (LIMS, PV, GAMP 5, Part 11) sabse upar. Footer me NAP + WhatsApp.
- 14 naye pages live: 7 services (LIMS, pharmacovigilance, CSV, SaaS, AI chatbot, dedicated developers, e-commerce Chandigarh), 3 industries (pharma, diagnostic lab, healthcare app), 4 cities (Zirakpur, Kharar, Ambala, Shimla). Har page unique, FAQ + schema ke saath.
- Cost calculator live: `/tools/app-development-cost-calculator`.
- Free LIMS URS template live: `/insights/lims-urs-template#download` (CSV download; purana `/resources/lims-urs-template` ab 301).
- 23 naye articles abhi live hain (aapke decision par staggered past dates, 2/week, Tue + Fri, 2026-07-17 se 2026-10-02). Har ek par `dateModified` = publish date. 26 purane articles ki dates nahi badli.
- 26 purane articles audit: 10 improve kiye (unpar "Last updated 2026-10-04"), 16 baaki rules par pehle se theek. Aadha: 20 posts ki article body abhi 1,500 words se kam hai, unko expand karna pending hai (checklist me `[~]`).
- Har article par "Last updated", pillar links, end me service CTA. `llms.txt` me NAP aur pillar-wise guides.
- Ye sab code me ready hai par aapke data ke bina hidden hai (fake kuch nahi dikhta): GA4, Calendly button, Search Console/Bing meta, IndexNow, author box, founder page, testimonials, client logos, proof numbers, pricing, map, office timings, email form.

Jo nahi hua: mobile LCP target (2.5s) abhi pura nahi (Lighthouse me ~3.6–4.2s). Animations wala fix laga diya, baaki ke liye CSS/JS optimisation ka decision baad me. `/insights` page par posts abhi date-wise hain, pillar-wise grouping nahi.

## 2. Env variables (hosting par set karo, phir rebuild + redeploy)

Sab `.env.local.example` me likhe hain. Local ke liye `.env.local`, production me host (Vercel/server) ke environment settings me daalo. Ye values build ke time lagti hain, isliye set karne ke baad rebuild zaroori hai.

| Variable                         | Kya daalna hai                                                             | Kya chalu hoga                                                                                 |
| -------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | `https://www.brightinfonet.com` (pehle se)                                 | canonical, sitemap                                                                             |
| `NEXT_PUBLIC_GA_ID`              | GA4 Measurement ID, jaise `G-XXXXXXXXXX`                                   | GA4 + events: form submit (`generate_lead`), `phone_click`, `whatsapp_click`, `calendly_click` |
| `NEXT_PUBLIC_CALENDLY_URL`       | Calendly link (https se shuru), jaise `https://calendly.com/<aapka>/20min` | "Book a 20-min call" button footer aur contact me                                              |
| `GOOGLE_SITE_VERIFICATION`       | Search Console "HTML tag" wala `content="..."` value                       | Google verification meta tag                                                                   |
| `BING_SITE_VERIFICATION`         | Bing Webmaster `msvalidate.01` ka `content` value                          | Bing verification meta tag                                                                     |
| `INDEXNOW_KEY`                   | 8–128 letters/digits/dashes ka koi random key                              | `/indexnow.txt` key file                                                                       |
| `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` | Form backend URL (https), jaise Formspree/Getform                          | URS template page par email form (aur `CONTACT_FORM_ENDPOINT` na ho to contact form bhi yahi)  |
| `CONTACT_FORM_ENDPOINT`          | Contact form backend URL (https), server-only                              | Home contact form real submit (`/api/contact`); bina iske email app + WhatsApp                 |
| `CONTENT_NOW`                    | Production me KABHI set mat karna (sirf local testing)                     | –                                                                                              |

GA4 me `generate_lead` ko "Key event" mark kar dena, taaki pata chale kaunsa page lead de raha hai.

## 3. Config files me bharna hai (sirf asli data)

`src/lib/site-config.ts`:

- `address.street`, `address.postalCode`: office ka exact address aur PIN (Google Business Profile se bilkul same). Locality "Panchkula" maan li hai, galat ho to badlo.
- `geo`: `{ lat, lng }` GBP pin ke coordinates.
- `openingHours`: jaise `{ days: ["Monday", ...], opens: "09:30", closes: "18:30" }`.
- `mapEmbedUrl`: Google Maps "Embed a map" ka iframe `src`.
- `googleBusinessUrl`: GBP ka public link.
- `areaServed`: Ambala aur Shimla 2026-10-05 ko hata diye (unke pages noindex). Wahan real client ho to batao, wapas add karenge. City pages kehte hain "Kharar/Ambala/Zirakpur me office nahi, remote + visit" — ye sahi hai, confirm karo.
- `social`: naye real profiles (YouTube, Clutch, GoodFirms etc.) ban jayein to yahan URL add karo (schema `sameAs`).

`src/content/authors.ts`:

- `AUTHORS`: real author ka `id`, `name`, `role`, `bio`, `linkedin`, `photo` (optional). Phir har article file me `author: "<id>"` lagana (main kar dunga, bas details do).
- `FOUNDER`: naam, role, bio, LinkedIn, photo, `story` (2–4 paragraphs). Bharte hi `/about/founder` page, sitemap aur About page link aa jayega.

`src/content/trust.ts` (sirf asli aur permission ke saath):

- `TESTIMONIALS`: quote, naam, role, company, `servicePaths` (kis page par dikhe). Isse `Review` schema bhi banega.
- `CLIENT_LOGOS`: naam + logo file (`public/` me) + link (optional). Client ki likhit permission lo.
- `PROOF["/services/..."]`: har service page ke 3 numbers (jaise "go-live in 14 weeks") + case study link + client quote.
- `CASE_STUDY_PROOF.pvgenix`, `.lims` (aur clinic booking): numbers, screenshots, quote → `/work` par dikhega.
- `PRICING["/services/..."]`: "Starts from ₹X" + note (+ `minPrice` number). `llms.txt` me pricing line bhi apne aap aayegi.

`src/content/cost-calculator.ts`:

- Ranges maine aapke published cost articles se hi li hain (`OWNER CONFIRM`). Ek baar check karo; koi range badlo to related article me bhi badlo, taaki site par ek hi baat ho.

Missing page: Privacy policy. Email form chalu karne (`NEXT_PUBLIC_LEAD_FORM_ENDPOINT`) se pehle privacy policy page zaroori hai. Content (kya data lete ho, kahan store hota hai, contact) aap do ya lawyer se approve karao, main page bana dunga.

## 4. Search Console, Bing aur IndexNow

1. Search Console me Domain/URL-prefix property banao, "HTML tag" method ka code `GOOGLE_SITE_VERIFICATION` me daalo, redeploy, phir Verify.
2. Bing Webmaster Tools me same karo (`BING_SITE_VERIFICATION`), ya Search Console se import kar lo.
3. Dono me sitemap submit: `https://www.brightinfonet.com/sitemap.xml`.
4. Har hafte Index Coverage / Pages report dekho; naye pages ke liye "Request indexing".
5. IndexNow: `INDEXNOW_KEY` set karke deploy karo, check karo ki `https://www.brightinfonet.com/indexnow.txt` key dikhata hai. Phir har deploy ke baad (PowerShell):
   `$env:INDEXNOW_KEY="aapka-key"; node scripts/indexnow-submit.mjs https://www.brightinfonet.com`
   Pehle `--dry-run` laga kar dekh sakte ho.
6. Deploy ke baad PageSpeed Insights (mobile) par home aur ek service page check karo; LCP 2.5s se upar ho to batao.

## 5. Hosting: scheduled posts ke liye

Abhi koi post future-dated nahi hai, saare 49 articles live hain, isliye in posts ke liye daily rebuild ya ISR ki zaroorat nahi. Scheduling code rakha hai: aage koi post future date ke saath daaloge, tabhi site `next start` / Vercel jaise ISR host par chalni chahiye, warna roz ~00:30 IST ek rebuild + redeploy (cron/CI).

## 6. Publish se pehle padhna (proofread)

Ye posts ab live hain, isliye jaldi ek baar khud padh lo (numbers aur regulatory baatein). Bracket me publish date:

- Regulated (2026-07-17 se 2026-08-18): GxP validation guide, Part 11 audit trail, GAMP 5 Cat 4 vs 5, EU Annex 11, LIMS URS template, custom vs off-the-shelf LIMS, LIMS checklist, NABL ISO 15189, E2B(R3), validation package. QA/regulatory expert se ek nazar dalwa lo to aur achha.
- Salary: fresher software developer salary Chandigarh (2026-08-21).
- Cost: AI agent cost India (2026-09-11), app development cost Chandigarh (2026-09-18), MVP in 8 weeks (2026-09-22), RFP (2026-09-25), Next.js vs WordPress (2026-09-29), in-house vs outsourcing (2026-10-02).
- Saare cost/salary figures "indicative" likhe hain aur pehle se published ranges hi use hui hain. Galat lage to batao.

## 7. Website ke bahar ka kaam (Phase 9)

- Google Business Profile: Panchkula office verify, category "Software company", services, photos (asli office/team), weekly posts. Academy ka alag profile sirf tab jab alag address ho. Address `site-config.ts` jaisa hi.
- Reviews: pehle 25 real Google reviews (clients, students, partners). Kabhi fake ya paid review nahi.
- Directories (NAP bilkul same: naam, address, phone +91 79738 47707, website): Clutch, GoodFirms, TechBehemoths, DesignRush, Sortlist, Justdial, IndiaMART, Sulekha, Bing Places, Apple Maps, UrbanPro, Shiksha. Clutch/GoodFirms par client reviews mangwao.
- Backlinks (8–15 quality/month): pharma/lab blogs, ISPE, PharmaGuideline-type guest posts; HARO/Qwoted/Featured par expert quotes; college placement cells aur local tech communities (Academy); calculator aur URS template ko share karo; partners/clients se "built by Bright Infonet" footer link.
- Brand: LinkedIn company page + founder profile roz active, YouTube par case study demos, Quora aur Reddit (r/developersIndia, r/pharma) par genuine jawab (spam nahi).
- PR: "Panchkula startup launches AI pharmacovigilance platform" jaisi story Tribune, Bhaskar, YourStory ko.
- Naye profiles bante hi URLs mujhe do, `sameAs` me add kar dunga.

## 8. Decisions / data jo sirf aap de sakte ho

- Priority order (Regulated → Academy → Flutter + AI) confirm karo. Article dates decide ho gayi (23 naye posts past Tue/Fri dates par live). Aage se naye posts 2/week, alag dates.
- Course fees, batch dates, student projects, placement stats (sirf asli).
- Real office/team photos.
- "India software cost survey 2026": sirf tab jab asli survey karo; bina data ke ye page nahi banega.
- In shehron (Zirakpur, Kharar, Ambala, Shimla) ke real local clients/examples ho to batao, pages me add karenge.
