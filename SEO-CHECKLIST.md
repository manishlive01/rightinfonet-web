# Bright Infonet: SEO Master Checklist

Owner tags: **[Code]** = website me kaam (Kiro kar sakta hai), **[Aap]** = asli data ya off-site kaam (aapko karna hai), **[Dono]** = aap data do, code me lagega.
Status: `[ ]` baaki, `[~]` aadha, `[x]` ho gaya. Har item check karke yahan update karna hai. Living plan: `SEO-PLAN.md`.

Rule: koi review, number, client name, fee ya date invent nahi karni. Data na ho to item `[ ]` hi rahega.

## Phase 0: Positioning (sabse pehle decide)

- [ ] **[Aap]** Priority confirm: 1) Regulated software (LIMS, PV, GAMP 5, Part 11, CSV), 2) Academy local, 3) Flutter + AI agents. "software company Chandigarh" baad me.
- [ ] **[Code]** Home, services aur nav me regulated software ko sabse upar dikhana (hero, services order, footer).

## Phase 1: Technical (code, bina owner data ke)

- [ ] **[Code]** `robots.ts`: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Bingbot ke liye explicit `allow: /` rules.
- [ ] **[Code]** Homepage meta description 150–160 chars (abhi 170). `/insights` description bhi chhota.
- [ ] **[Code]** 22 lambe titles (65+ chars) chhote karna, blogs ke liye chhota title template.
- [ ] **[Code]** `/academy` heading h1 -> h3 skip fix. `/insights` par BreadcrumbList.
- [ ] **[Code]** `Article`/`BlogPosting` schema me `author`, `datePublished`, `dateModified`; page par visible "Last updated".
- [ ] **[Code]** Har service page par `Service` schema (`provider`, `areaServed`, `serviceType`) check/add.
- [ ] **[Code]** Author box component (naam, role, LinkedIn, bio) aur `/about/team` ya founder page ka structure, data aane tak placeholder nahi, hidden.
- [ ] **[Code]** Internal linking audit: koi orphan nahi, anchor text keyword-rich, har article me 3–5 links + end me service CTA.
- [ ] **[Code]** Image alt text audit (descriptive, decorative ke liye `alt=""`).
- [ ] **[Code]** Core Web Vitals: mobile LCP < 2.5s, CLS < 0.1. SplitText, Reveal, HeroBackdrop ka mobile LCP par asar check, `prefers-reduced-motion` respect.
- [ ] **[Code]** Footer me full NAP, contact me WhatsApp + "Book a 20-min call" button (Calendly link aap doge).
- [ ] **[Dono]** GA4 + events: form submit, `tel:` click, WhatsApp click, Calendly click. (GA4 Measurement ID aap doge.)
- [ ] **[Aap]** Search Console + Bing Webmaster verify, sitemap submit, Index Coverage dekho. **[Code]** verification meta tag lagana.
- [ ] **[Code]** IndexNow key (Bing/ChatGPT ke liye fast indexing).

## Phase 2: Trust signals aur proof

- [ ] **[Aap]** Street address + PIN, office timings, map location -> **[Code]** `site-config.ts`, schema `geo`, `openingHoursSpecification`, footer map embed.
- [ ] **[Aap]** Real author naam, photo, bio, LinkedIn -> **[Code]** author box + `Person` schema.
- [ ] **[Aap]** Founder page content (story, photo, LinkedIn) -> **[Code]** founder/about page.
- [ ] **[Aap]** Client logos (permission ke saath) aur named testimonials -> **[Code]** logo strip + testimonial section + `Review` schema (sirf asli reviews).
- [ ] **[Aap]** Case study data: PVgenix, LIMS, Clinic Booking ke 3 numbers each (timeline, outcome, scale), screenshots, client quote -> **[Code]** `/work` case study pages.
- [ ] **[Code]** Har service page par: 1 case study link, 3 numbers, 1 client quote (data milne par).
- [ ] **[Aap]** Pricing ranges ("Starts from ₹X") services aur courses ke liye -> **[Code]** pricing block + `offers` schema.
- [ ] **[Aap]** Real office/team photos (stock nahi).
- [ ] **[Aap]** Student projects aur placement stats (Academy).

## Phase 3: Article dates aur publishing

- [ ] **[Aap decide]** Abhi saare articles Sept 28, 2026 ke hain. Purani dates daalna (backdating) galat signal hai, isliye: kuch articles unpublish karke 2/week schedule par release karo, ya jo hain wahi rakho aur aage se 2/week. Option choose karo.
- [ ] **[Code]** Scheduled publish support (future `datePublished` wale posts sitemap/listing me tab tak na dikhein).
- [ ] **[Code]** Har article par visible "Last updated" + `dateModified` sirf asli edit par badle.
- [ ] **[Code]** Existing articles ko article rules ke hisaab se audit: 1,500–2,500 words, answer pehle, comparison table, FAQ, author box, 3–5 internal links, end CTA.

## Phase 4: Naye service aur industry pages

Har page: pehli 2 lines me direct answer, unique content, FAQ + schema, case study/proof slot, CTA, sitemap + llms.txt + hub links.

- [ ] **[Code]** `/services/lims-software-development`
- [ ] **[Code]** `/services/pharmacovigilance-software`
- [ ] **[Code]** `/services/computer-system-validation` (CSV/CSA)
- [ ] **[Code]** `/industries/pharma-software`
- [ ] **[Code]** `/industries/diagnostic-lab-software`
- [ ] **[Code]** `/industries/healthcare-app-development`
- [ ] **[Code]** `/services/saas-development-company-india`
- [ ] **[Code]** `/services/ai-chatbot-development-india`
- [ ] **[Code]** `/services/hire-dedicated-developers-india`
- [ ] **[Code]** `/services/ecommerce-development-chandigarh`
- [ ] **[Code]** Existing `/services/regulated-software` aur `/gxp-software-development-india` ke saath cannibalisation check, roles clear karna.

## Phase 5: Naye location pages

Har page unique (local context, nearby areas, local examples). Template copy-paste nahi.

- [ ] **[Dono]** Zirakpur
- [ ] **[Dono]** Kharar
- [ ] **[Dono]** Ambala
- [ ] **[Dono]** Shimla
- [ ] **[Aap]** In shehron ke local clients/examples (ho to), warna page thin rahega.

## Phase 6: Comparison / decision pages

- [ ] **[Code]** Flutter vs React Native for startups (existing post update + merge, cannibalisation se bacho)
- [ ] **[Code]** Custom LIMS vs off-the-shelf LIMS
- [ ] **[Code]** Next.js vs WordPress for business site
- [ ] **[Code]** In-house vs outsourcing software development

## Phase 7: Pillar + cluster content

Article rules: 1,500–2,500 words, answer pehle, comparison table, FAQ, author box, last updated, 3–5 internal links, end me service CTA. 2 articles/week, alag dates.

**Pillar 1: Regulated software**
- [ ] **[Code]** Pillar: Complete guide to GxP software validation (saare cluster isse link)
- [ ] **[Code]** GAMP 5 Category 4 vs 5
- [ ] **[Code]** Part 11 audit trail requirements
- [ ] **[Code]** EU Annex 11
- [x] CSV vs CSA (hai, pillar se link karna) 
- [ ] **[Code]** LIMS URS template (downloadable)
- [ ] **[Code]** LIMS implementation checklist
- [ ] **[Code]** NABL / ISO 15189 software requirements
- [ ] **[Code]** Pharmacovigilance E2B(R3) explained
- [ ] **[Code]** Validation package kya hota hai
- [ ] **[Code]** Part 11 post expansion (pending from SEO-PLAN)
- [ ] **[Dono]** Lead magnet: free URS / validation template download + email capture (email tool aap choose karo)

**Pillar 2: Cost aur hiring**
- [ ] **[Code]** Interactive app/software cost calculator (indicative ranges aap confirm karo)
- [ ] **[Code]** App development cost in Chandigarh
- [ ] **[Code]** MVP in 8 weeks
- [ ] **[Code]** How to write an RFP for software

**Pillar 3: AI agents**
- [ ] **[Code]** AI agent vs chatbot
- [ ] **[Code]** RAG kya hai business ke liye
- [ ] **[Code]** AI automation for clinics / labs / retail
- [ ] **[Code]** AI agent cost India
- [ ] **[Code]** AI agent evals kaise karein
- [ ] **[Code]** AI agents for small business expansion (pending from SEO-PLAN)

**Pillar 4: Academy**
- [ ] **[Code]** Fresher software developer salary Chandigarh (indicative, sources ke saath)
- [ ] **[Code]** BCA/MCA ke baad kya karein
- [ ] **[Code]** Industrial training certificate kaise lein
- [ ] **[Aap]** Student projects + placement stats page ke liye data

**Hub-and-spoke**
- [ ] **[Code]** Existing 25 articles ko 4 pillars me map karna, pillar <-> cluster links, `/insights` par pillar-wise grouping.

## Phase 8: AI search (GEO)

- [x] `/llms.txt` live
- [ ] **[Code]** llms.txt me NAP, pricing range, naye pages; facts har jagah same.
- [ ] **[Code]** robots.ts AI bots (Phase 1 me)
- [ ] **[Code]** FAQ + Service + Article (author, dateModified) schema har page par; Review schema sirf asli reviews ke saath.
- [ ] **[Dono]** Original data: "India software cost survey 2026" (asli survey data chahiye).

## Phase 9: Off-page (aapka kaam)

- [ ] **[Aap]** Google Business Profile: Panchkula verify, category "Software company", services, photos, weekly posts. Academy ka alag profile (alag address ho to).
- [ ] **[Aap]** Pehle 25 real Google reviews (clients, students, partners).
- [ ] **[Aap]** Directories (NAP same): Clutch, GoodFirms, TechBehemoths, DesignRush, Sortlist, Justdial, IndiaMART, Sulekha, Bing Places, Apple Maps, UrbanPro, Shiksha.
- [ ] **[Aap]** Clutch/GoodFirms reviews.
- [ ] **[Aap]** Backlinks 8–15/month: pharma/lab blogs, ISPE, PharmaGuideline-type guest posts; HARO/Qwoted/Featured; college placement cells; local tech communities; partners/clients "built by Bright Infonet" link.
- [ ] **[Aap]** LinkedIn company page + founder profile active; YouTube case study demos; Quora, r/developersIndia, r/pharma genuine jawab.
- [ ] **[Aap]** PR: local media (Tribune, Bhaskar, YourStory) story.
- [ ] **[Code]** `sameAs` me saare real profiles add karna jab ban jayein.

## Owner se chahiye (ek jagah)

Street address + PIN, timings, map pin, author/founder details, client logos + testimonials, case study numbers + screenshots, pricing ranges, Calendly link, GA4 ID, Search Console/Bing verification codes, placement stats, article dates ka decision, email tool (lead magnet).
