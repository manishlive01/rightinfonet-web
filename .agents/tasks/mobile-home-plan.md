# Implementation Plan: mobile polish for the home page

User request (Hinglish, paraphrased): the home page looks right on desktop and large screens, but on phones it doesn't feel like an app. Fonts are too big and two-column sections stack the wrong way. Keep desktop exactly as it is. Fix mobile only: text first, then the image or visual, at proper app-like sizes.

## Ground rules (apply to every item)

- Styling stack: CSS Modules plus `src/app/globals.css`. Tailwind v4 is loaded (`@import "tailwindcss"` in globals.css, `@tailwindcss/postcss` in postcss.config.mjs), but the home components use no Tailwind classes. Keep it that way: write plain CSS in the existing `*.module.css` files and add no libraries.
- Breakpoints: all base styles are already mobile-first. Desktop and tablet layouts come in at `min-width` 900, 960, 1040 and 1100 px. Put every new rule inside one of these media queries:
  - `@media (max-width: 767px)` for phones. Add one block at the end of each file you touch.
  - `@media (max-width: 380px)` for small-phone tweaks only.
    Nothing outside these blocks may change. The two exceptions are the markup `className` additions in item 9 and the JS threshold in item 4, and both are inert at 768 px and up. This guarantees that computed styles at 768 px and above, including 1024 px and up, stay the same.
- Text first, image second: use CSS `order` only. Never duplicate markup.
- Next.js: this is Next 16.3.6 and AGENTS.md says it is not the Next you know. The plan touches no Next APIs: no `Link`, metadata, viewport or route changes. If you find you need to touch one, read the relevant guide in `node_modules/next/dist/docs/` first.
- `AGENTS.md` may be re-written by `next dev`. Don't commit changes to it. Don't commit anything under `.agents/`.
- Shared components: Header, Footer, `Home.module.css` (`.section`, `.h2`, `.sectionHeader`, buttons), `Tone.module.css` and `FloatingContact` are also used by the inner pages through `src/components/pages/PageLayout.tsx`. The same goes for Services, About, Industries, Process and WorkCard, which appear on /services, /about, /industries, /process and /work. Mobile-only improvements to these are intended and fine. Check that they don't break those pages at 390 px (item 12).
- Design tokens for phones (≤767 px) used throughout:
  - side gutter 20 px, or 16 px at ≤380 px (via `--gutter`)
  - section top padding 56 px
  - hero H1 `clamp(30px, 9vw, 36px)`
  - section H2 `clamp(24px, 7vw, 28px)`
  - card titles 20–22 px
  - body text 16 px (secondary text 15 px)
  - line-height 1.55–1.6 for body, 1.05–1.15 for serif display text
  - tap targets at least 44 px high
  - card radius 20–24 px
- Verification tools available: `npm run lint`, `npm run build` (no test framework exists, and these two plus in-browser checks are the gate), and `npm run dev` (http://localhost:3000). In the browser, use Chrome or Edge DevTools device mode at 360×740 and 390×844, plus 768×1024, 1280×800 and 1440×900 for no-change checks. For the overflow check, run this in the DevTools console at 360 and 390:
  `document.documentElement.scrollWidth > innerWidth || [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 10)`
  For headless screenshots, if useful: `& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --hide-scrollbars --window-size=390,844 --screenshot="$env:TEMP\m390.png" http://localhost:3000`. Delete any temp screenshots afterwards.
- Before item 1, take 1280×800 and 1440×900 screenshots of the home page to use as the desktop baseline. Compare them by eye at the end; animations make byte-diffs useless.

---

- [ ] 1. Mobile tokens and shared section typography in `Home.module.css`.
     At the end of `src/components/home/Home.module.css`, add an `@media (max-width: 767px)` block:
     - `.section { padding-top: 56px; }`
     - `.sectionHeader { gap: 14px; margin-bottom: 28px; }`
     - `.sectionHeaderLead { gap: 14px; }`
     - `.h2 { font-size: clamp(24px, 7vw, 28px); line-height: 1.08; letter-spacing: -0.015em; }`
     - `.sectionLead { font-size: 16px; line-height: 1.6; max-width: none; }`
     - `.kicker { font-size: 11px; }`
     - `.btnOutline { min-height: 48px; justify-content: center; }`
     - `.tagPill { font-size: 12px; }`

     Add an `@media (max-width: 380px)` block:
     - `.root { --gutter: 16px; --pad-x: var(--gutter); }`. `--pad-x` must be redeclared because it is computed on `.root`. At phone widths `max(gutter, (100% - 1280px)/2)` equals the gutter anyway.
     - `.h2 { font-size: 24px; }`

     In `src/app/globals.css`, inside `@media (max-width: 767px)`, set `html { scroll-padding-top: 68px; }` to match the shorter mobile header from item 2.
     Files: src/components/home/Home.module.css, src/app/globals.css
     Verify: `npm run lint` and `npm run build` pass. At 390 px every section heading renders at 24–28 px. At 1280 px the headings are unchanged (`.h2` computes to `clamp(48px, 6.6vw, 108px)` in DevTools).

- [ ] 2. Compact header and a usable mobile menu sheet.
     In `src/components/home/Header.module.css`, add an `@media (max-width: 767px)` block:
     - `.bar { height: 64px; gap: 12px; }`
     - `.logo { height: 26px; }`
     - `.themeBtn, .menuBtn { width: 44px; height: 44px; }`
     - Sheet: `.sheet { padding: 84px var(--pad-x) calc(24px + env(safe-area-inset-bottom)); gap: 28px; justify-content: flex-start; overflow-y: auto; overscroll-behavior: contain; }`. Seven links at the old 40 px+ size overflow short phones, and the sheet currently has no scroll.
     - `.sheetLink { padding: 14px 0; align-items: center; }` gives at least 44 px tap rows.
     - `.sheetLabel { font-size: 30px; }`
     - `.sheetFoot { flex-direction: column; align-items: stretch; gap: 14px; margin-top: auto; }`
     - `.sheetCta { justify-content: center; min-height: 52px; }`
     - `.sheetMail { text-align: center; }`

     In `Home.module.css` (mobile block), set `.heroSection { padding-top: 64px; }` to match the bar.

     FloatingContact (z-index 60) currently paints over the open menu sheet (header z-index 50). In `src/components/FloatingContact.module.css`, add a rule outside any media query that is inert unless the menu is open: `:global(html:has(#site-menu:not([inert]))) .wrap { opacity: 0; visibility: hidden; pointer-events: none; }`. React 19 omits `inert` when it is false, so `:not([inert])` means the menu is open. Desktop never opens the sheet, so desktop is unaffected. Needs verification during implementation: confirm the buttons hide while the menu is open and come back on close.
     Files: src/components/home/Header.module.css, src/components/home/Home.module.css, src/components/FloatingContact.module.css
     Verify: `npm run build` passes. At 360×640 and 390×844, open the menu: all 7 links are reachable, scrolling inside the sheet when needed, the CTA is full width, and the floating buttons are hidden. Escape and link taps close it. At 1280 px the header is still 76 px with the full nav.

- [ ] 3. Hero: app-sized type, full-width CTA, lighter backdrop.
     The hero is already text first: `.heroCopy` comes before `.stage` in a single-column grid below 1040 px. Keep that order.

     In the `Home.module.css` mobile block:
     - `.heroMain { gap: 36px; padding-top: 28px; padding-bottom: 32px; align-items: start; }`
     - `.heroCopy { gap: 22px; }`
     - `.heroTitle { gap: 16px; }`
     - `.heroEyebrow { font-size: 11px; }`
     - `.h1 { font-size: clamp(30px, 9vw, 36px); line-height: 1.04; letter-spacing: -0.02em; }`
     - `.heroLead { font-size: 16px; max-width: none; }`
     - `.heroActions { flex-direction: column; align-items: stretch; gap: 14px; }`
     - `.heroActions .btnPrimary { justify-content: center; min-height: 52px; }`
     - `.heroActions .linkUnderline { align-self: center; padding: 10px 0 3px; }`
     - `.tabsRow { gap: 10px; margin-top: 4px; }`
     - `.tabTitle { font-size: 13px; }`
     - `.heroTabDesc { margin-top: -8px; font-size: 14px; min-height: 3em; }`. The extra min-height stops layout jumps as the descriptions rotate.
     - `.stage { max-width: 480px; }` and `.stageTilt { transform: none; }`. This removes the resting 3D tilt on phones, which looks skewed at small sizes. `useStageTilt` only runs for `(pointer: fine)` anyway.
     - `.heroSection { min-height: auto; }`. On phones the content is taller than one screen, and forcing 100svh leaves an odd gap above `.heroFoot`.
     - `.heroFoot { padding-bottom: 20px; }` and `.scrollCue { display: none; }`. Keep `.availability`.
     - `.grain { display: none; }`. A full-screen `mix-blend-mode: overlay` layer is expensive on mobile GPUs.

     In `src/components/home/HeroBackdrop.module.css`, mobile block: `.blobPeach { display: none; }` and `.blobOrange { width: 110vw; height: 60vh; right: -40vw; }`. Leave the canvas in place: it is pointer-driven only for mouse and pauses off-screen.

     Small phones (≤380 px): `.h1 { font-size: 30px; }` and `.tabTitle { font-size: 12px; }`.
     Files: src/components/home/Home.module.css, src/components/home/HeroBackdrop.module.css
     Verify: `npm run build` passes. At 360 and 390 the H1 is 30–36 px and wraps in 2–3 lines with no overflow. The primary CTA is full width and at least 52 px tall. The stage mockups render below the text without tilt and without overflowing horizontally (run the overflow console check). At 1280 px the hero matches the baseline screenshot.

- [ ] 4. Services: text first with a pinned visual underneath.
     Today, on phones, the sticky stage sits on top (`order: 0`, `top: 0`, 58vh). It covers more than half the screen while the text scrolls behind it, and the visual comes before the text. On phones, move it below the text and pin it to the bottom of the viewport like a bottom preview card. It stays in sync with the active service.

     In the `Home.module.css` mobile block:
     - `.stageSticky { order: 2; top: auto; bottom: 0; height: auto; padding: 10px 0 calc(10px + env(safe-area-inset-bottom)); background: linear-gradient(to bottom, transparent, var(--bg) 18px); }`
     - `.stageCard { width: min(100%, 36svh); border-radius: 22px; }`
     - `.serviceList { order: 1; }`
     - `.serviceBlock { min-height: 0; gap: 16px; padding: 36px 0 44px; }`
     - `.serviceTitle { font-size: clamp(26px, 7.4vw, 30px); line-height: 1.05; }`
     - `.serviceDesc { font-size: 16px; max-width: none; }`
     - `.serviceGetItem { font-size: 15px; padding: 12px 0; }`
     - `.serviceEyebrowLine { width: 28px; }`

     In `src/components/home/Services.tsx`, change only the active-block threshold so the block counts as active while it is in the visible area above the pinned card:
     `const w = window.innerWidth; const mid = window.innerHeight * (w >= 1040 ? 0.5 : w < 768 ? 0.42 : 0.78);`
     Tablet (768–1039 px) and desktop values are unchanged.

     Needs verification during implementation:
     - In 390×844 and 360×740 emulation, the stage sticks to the bottom while scrolling through the services and releases at the end of the grid.
     - The last service becomes active before the stage releases.
     - The active text block is never hidden behind the stage.
     - The floating Call/WhatsApp buttons overlapping the card corner is acceptable.
     - Check /services as well (it renders `Services bare`).

     Contingency: if bottom-sticky does not work there, keep the stage on top but compact it (`top: 64px; height: auto; .stageCard width min(100%, 32svh)`) and keep the 0.78 threshold. Record that in the commit message.
     Files: src/components/home/Home.module.css, src/components/home/Services.tsx
     Verify: `npm run lint` and `npm run build` pass. Scroll through the services in the browser at 390 and 360. At 1280 px the sticky stage is still on the right at 100vh and the blocks are 100vh tall (unchanged).

- [ ] 5. Work carousel: text first in each card, app-sized controls.
     `WorkCard.tsx` renders `.visual` before `.body`. On phones, flip the order with CSS. In the mobile block of `src/components/home/Work.module.css`:
     - `.card .visual { order: 2; }` (`.flip .visual` only exists at ≥1040 px, so there is no conflict)
     - `.slide { flex-basis: 86%; }`
     - `.slide .card { gap: 18px; transform: none; }`. Drop the 0.93 scale on phones: it shrinks text and makes the card edges look misaligned.
     - `.slide .name { font-size: clamp(26px, 7.4vw, 30px); line-height: 1.05; }`
     - `.name { font-size: clamp(26px, 7.4vw, 30px); }` for the /work list
     - `.headline { font-size: 17px; }`
     - `.desc { font-size: 15px; }`
     - `.visual { border-radius: 22px; clip-path: inset(0 0 0 0 round 22px); }` and `.card[data-in="true"] .visual { clip-path: inset(0 0 0 0 round 22px); }`, so the radius matches
     - `.track { gap: 14px; padding-bottom: 16px; }`
     - `.countWindow { font-size: 32px; }`
     - `.arrowBtn { width: 44px; height: 44px; }`
     - `.controls { gap: 14px 16px; margin-bottom: 20px; }`
     - `.endTitle { font-size: 32px; }`
     - `.endIcon { width: 56px; height: 56px; }`
     - `.slideEnd { flex-basis: 70%; }`
     - `.ctaBar { flex-direction: column; align-items: stretch; gap: 16px; margin-top: 40px; padding: 24px 0; }`
     - `.ctaBarText { font-size: 24px; }`
     - Make the work CTA button full width. `.btnOutline` is a Home.module class, so add this rule in the `Home.module.css` mobile block: `#work .btnOutline { width: 100%; box-sizing: border-box; }`. The "View all projects" button is already hidden at ≤640 px, so in practice this only affects the CTA-bar button.
     - `.footRow { gap: 14px; }`
     - `.highlight { padding-top: 14px; }`

     Needs verification during implementation: the carousel's JS snap math (`measure()` reads `offsetLeft`) still lines up after the flex-basis and gap change. ResizeObserver re-measures, so it should. Confirm the Previous/Next buttons land exactly on each slide at 390 px. Also check /work (the list uses `.card` without `.slide`).
     Files: src/components/home/Work.module.css, src/components/home/Home.module.css
     Verify: `npm run build` passes. At 390 px each slide shows the index, name, headline and text first, with the product visual below. Swipe and arrows snap correctly with no horizontal page overflow. At 1280 px the carousel matches the baseline.

- [ ] 6. Industries accordion and Process timeline: tighten type and rhythm.
     Both are already single column and text-only on phones; no reorder is needed.

     `src/components/home/Industries.module.css`, mobile block:
     - `.head { padding: 18px 0; gap: 14px; min-height: 56px; }`
     - `.name { font-size: 19px; }`
     - `.plus { width: 40px; height: 40px; }`
     - `.desc { font-size: 20px; line-height: 1.25; max-width: none; }`
     - `.body { gap: 18px; }`
     - `.body > :last-child { margin-bottom: 24px; }`
     - `.buildList li { font-size: 15px; padding: 10px 0; }`

     `src/components/home/Process.module.css`, mobile block:
     - `.steps { gap: 36px; }`
     - `.step { padding-left: 36px; }`
     - `.num { font-size: 56px; margin-bottom: 12px; }`
     - `.title { font-size: 21px; margin-bottom: 8px; }`
     - `.desc { font-size: 15px; max-width: none; margin-bottom: 14px; }`
     - `.out { margin-bottom: 16px; }`
     - `.content { filter: none; }`. Keep the opacity cue, but blur on phones makes upcoming steps unreadable and costs paint time.
       Files: src/components/home/Industries.module.css, src/components/home/Process.module.css
       Verify: `npm run build` passes. At 390 px tapping each industry opens and closes it and the head rows are at least 44 px. The process steps read cleanly. At 1280 px the horizontal industry panels and the 4-column process are unchanged.

- [ ] 7. About ("Why teams choose us"): text first, board second.
     In `About.tsx` the board (`.boardWrap`) comes before the points list (`.points`) in `.grid`. Reorder on phones only. In `src/components/home/About.module.css`, mobile block:
     - `.points { order: 1; }`
     - `.boardWrap { order: 2; }`
     - `.grid { gap: 28px; margin-top: 36px; }`
     - `.statement { font-size: clamp(22px, 6.4vw, 26px); line-height: 1.22; letter-spacing: -0.01em; }`
     - `.point { grid-template-columns: 34px minmax(0, 1fr); gap: 10px; padding: 20px 0; }`
     - `.pointTitle { font-size: 20px; margin-bottom: 6px; }`
     - `.pointDesc { font-size: 15px; max-width: none; }`
     - `.pointNum { padding-top: 5px; }`

     Needs verification during implementation: StudioBoard (`StudioBoard.module.css`, which already has a ≤480 px block) must fit at 360 px with no clipped labels or overflow. If it doesn't, add `.board { padding: 12px; border-radius: 22px; }` and font tweaks in a `max-width: 767px` block there. Also check /about, which uses About.
     Files: src/components/home/About.module.css (optional: src/components/home/StudioBoard.module.css)
     Verify: `npm run build` passes. At 390 px the statement, then the numbered points, then the board appear in that order. At 1280 px the board is still on the left and the points on the right.

- [ ] 8. Academy teaser: compact app card.
     Already text first: `.copy` comes before `.tracks`. In `src/components/home/AcademyTeaser.module.css`, mobile block:
     - `.outer { padding-top: 56px; }`
     - `.panel { gap: 28px; padding: 28px 20px; border-radius: 24px; }`
     - `.ringA, .ringB { display: none; }`. These are large spinning decorative rings; the FxLayer stars stay.
     - `.copy { gap: 18px; }`
     - `.topRow { gap: 10px 12px; margin-bottom: 4px; }`
     - `.brand { font-size: 15px; }`
     - `.headline { font-size: clamp(26px, 7.6vw, 30px); line-height: 1.05; margin-top: 0; }`
     - `.lead { font-size: 16px; max-width: none; }`
     - `.cta { display: flex; justify-content: center; min-height: 52px; box-sizing: border-box; }`
     - `.track { gap: 12px; padding: 16px 0; }`
     - `.track:hover { padding-left: 0; padding-right: 0; }`. Sticky hover on touch devices shifts rows.
     - `.trackTitle { font-size: 18px; }`
     - `.trackStack { font-size: 13px; }`
     - `.trackArrow { width: 32px; height: 32px; }`
       Files: src/components/home/AcademyTeaser.module.css
       Verify: `npm run build` passes. At 360 and 390 the panel has about 12 px outer margins (`--pad-wide`), the headline is 26–30 px, the CTA is full width and the track rows have no overflow. At 1280 px it is unchanged.

- [ ] 9. Insights teaser: horizontal scroll-snap rail on phones.
     The grid is shared with /insights (`Insights.module.css .grid`), so scope the change to the home page by adding home-only class hooks:
     - In `src/components/home/InsightsTeaser.tsx`, change the grid div to `className={`${styles.grid} ${styles.grid3} ${home.insightsRail}`}` and the foot to `className={`${styles.listFoot} ${home.insightsFoot}`}`.
     - In `Home.module.css`, define `.insightsRail {}` and `.insightsFoot {}` with no base declarations (CSS Modules needs the classes to exist). Then in the mobile block:
       - `.root .insightsRail { display: flex; gap: 14px; overflow-x: auto; scroll-snap-type: x mandatory; overscroll-behavior-x: contain; margin: 0 calc(-1 * var(--gutter)); padding: 4px var(--gutter) 12px; scroll-padding-inline: var(--gutter); scrollbar-width: none; }`. The doubled specificity beats `.grid`, whose load order across modules is not guaranteed.
       - `.root .insightsRail::-webkit-scrollbar { display: none; }`
       - `.root .insightsRail > * { flex: 0 0 84%; scroll-snap-align: start; min-width: 0; }`
       - `.root .insightsFoot { justify-content: stretch; margin-top: 20px; }`
       - `.root .insightsFoot .btnOutline { width: 100%; box-sizing: border-box; }`

     Needs verification during implementation: the PostCard `<article>` (a Reveal) keeps its reveal animation inside the rail, with no invisible cards off-screen. If cards stay hidden because the IntersectionObserver never fires horizontally, add `.root .insightsRail > * { opacity: 1; transform: none; }` to the mobile block. Also confirm /insights at 390 is unchanged (it doesn't use these classes).
     Files: src/components/home/InsightsTeaser.tsx, src/components/home/Home.module.css
     Verify: `npm run lint` and `npm run build` pass. At 390 px the three posts swipe horizontally with snapping, the next card peeks, the page has no horizontal overflow and "All insights" is full width. At 1280 px there are still 3 columns.

- [ ] 10. Contact: app-sized headline, inputs and full-width actions.
      Already text first: `.info` comes before `.card`. In `src/components/home/Contact.module.css`, mobile block:
      - `.contact { padding-top: 64px; padding-bottom: 56px; }`
      - `.head { gap: 16px; margin-bottom: 28px; }`
      - `.headline { font-size: clamp(30px, 9vw, 36px); line-height: 1.02; letter-spacing: -0.02em; }`
      - `.grid { gap: 32px; }`
      - `.info { gap: 18px; }`
      - `.lead { font-size: 16px; }`
      - `.mail { font-size: 22px; }`
      - `.phone { font-size: 16px; padding: 6px 0; }`
      - `.stepTitle { font-size: 16px; }`
      - `.card { padding: 22px 18px; border-radius: 24px; }`
      - `.introInner { gap: 16px; }`
      - `.introTitle { font-size: 26px; line-height: 1.08; }`
      - `.introText { font-size: 15px; }`
      - `.ghostChip { padding: 11px 14px; }`
      - `.chipLabel { padding: 12px 16px; }` (at least 44 px)
      - `.form { gap: 26px; }`
      - `.input, .label { font-size: 16px; }`. Keep at least 16 px so iOS doesn't zoom on focus.
      - `.submitRow { flex-direction: column; align-items: stretch; }`
      - `.submit { justify-content: space-between; width: 100%; }`
      - `.hint { text-align: center; }`
      - `.sentTitle { font-size: 30px; }`
      - `.glow { width: 140vw; height: 120vw; }`
        Files: src/components/home/Contact.module.css
        Verify: `npm run build` passes. At 390 px "Start your brief" opens the form, the fields are full width, focusing an input causes no zoom (16 px), the submit button is full width, and validation errors show below the fields. At 1280 px it matches the baseline.

- [ ] 11. Section tones, footer and floating buttons.
      `src/components/home/Tone.module.css`, mobile block:
      - `.raised, .ember { margin: 10px 8px 0; padding-bottom: 56px; border-radius: 24px; }`

      `src/components/home/Footer.module.css`, mobile block:
      - `.cta { flex-direction: column; align-items: stretch; gap: 16px; padding: 28px 0; }`
      - `.ctaText { font-size: 24px; line-height: 1.1; }`
      - `.ctaBtn { justify-content: center; min-height: 52px; }`
      - `.grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px 20px; padding: 36px 0; }`
      - `.grid > :nth-child(n + 4) { grid-column: 1 / -1; }`. Services, Company and Academy sit in two columns; Areas and Contact take the full width.
      - `.link, .muted { font-size: 14px; }`
      - `.link { padding: 4px 0; }` gives taller tap rows.
      - `.col { gap: 8px; }`
      - `.bottom { flex-direction: column; gap: 8px; padding-right: 72px; padding-bottom: calc(8px + env(safe-area-inset-bottom)); }`. This keeps "Back to top" clear of the floating buttons.
      - At ≤380 px: `.grid { grid-template-columns: minmax(0, 1fr); }` and `.grid > * { grid-column: auto; }`

      `src/components/FloatingContact.module.css`: extend the existing `@media (max-width: 600px)` block with `.wrap { right: max(12px, env(safe-area-inset-right)); bottom: max(16px, env(safe-area-inset-bottom)); gap: 10px; }` and `.btn { width: 48px; height: 48px; }` (still at least 44 px). Add `.btn svg { width: 22px; height: 22px; }`.

      Needs verification during implementation: long email addresses in the footer Contact column wrap or fit at 360 px. If they overflow, add `.link { overflow-wrap: anywhere; }` to the mobile block.
      Files: src/components/home/Tone.module.css, src/components/home/Footer.module.css, src/components/FloatingContact.module.css
      Verify: `npm run build` passes. At 360 and 390 the footer reads as a neat 2-column then full-width stack, nothing sits under the floating buttons at the very bottom, and the buttons are 48 px. At 1280 px the footer and floating buttons are unchanged.

- [ ] 12. Full verification pass and fixes.
      Run `npm run lint` and `npm run build`. Both must pass. With `npm run dev`:
      - At 360×740 and 390×844, scroll the whole home page in both dark and light themes. Run the overflow console snippet; it must return `false` or an empty array. Fix any offenders inside the mobile blocks.
      - Confirm the reading order in each two-column section is text then visual: Services, Work cards, About.
      - Confirm all CTAs are at least 44 px and the menu works.
      - At 768×1024, 1280×800 and 1440×900, compare against the baseline screenshots. There must be no visible difference.
      - Spot-check /services, /work, /about, /industries, /process, /insights and /academy at 390 px for regressions from the shared classes.
      - Review `git diff` and confirm every CSS addition is inside `@media (max-width: 767px)`, `@media (max-width: 380px)` or the existing `(max-width: 600px)` FloatingContact block. The only exceptions are the empty `.insightsRail`/`.insightsFoot` class definitions and the `:has(#site-menu…)` FloatingContact rule.
      - Delete any temporary screenshots.
        Files: any of the above
        Verify: lint and build pass, no overflow at 360/390, and desktop and tablet screenshots match the baseline.
