# Verification: mobile home polish (iteration 1)

No `review.json` existed, so this is the first implementation of `mobile-home-plan.md` (items 1–12).

## Tooling

- Dev server: a `next dev` was already running on http://localhost:3000 (PID 28404, started outside this step). I reused it and did not stop it, because this step didn't start it.
- Browser checks: headless Edge driven over the Chrome DevTools Protocol by a temporary Node 24 script. It emulated the viewport with `mobile: true` and touch below 768 px, waited 6 s, then scrolled the full page so the reveals fired. It recorded `scrollWidth` vs `innerWidth` plus a list of elements extending past `innerWidth`, ignoring children of horizontal scrollers. It also dumped 25 computed layout properties (font-size, line-height, paddings/margins, display, grid-template-columns, flex-direction, flex-basis, order, gap, width/height, min-height, radius, top/bottom, visibility) for every element under `body`. The scripts and screenshots were in `%TEMP%` and are deleted.

## Desktop and tablet are unchanged

The baseline was captured before any edit. The same capture was repeated after the edits.

| Viewport | scrollHeight before → after | Computed-style diff (1811–1818 elements) |
|---|---|---|
| 1440×900 | 14798 → 14798 | 4 lines: the hero tab progress-bar width and the rider-dot `top`. Both are time-based animations. |
| 1280×800 | 14096 → 14096 | 17 lines, all inside the hero stage. The auto-rotating tab was showing a different panel (chat bubbles mid-animation). |
| 768×1024 | 16929 → 16929 | 11 lines, same cause (hero stage chat panel animation). |

There were no other differences in font sizes, spacing, grid columns, order or backdrops. The 1440×900 screenshots before and after match by eye; only the active hero tab differs because it rotates.

Not caused by this step: `Hero.tsx` eyebrow text changed to "AI-first software & app development company" while I was working (a concurrent SEO edit; `SEO-CHECKLIST.md` also appeared). Also, an on-save formatter re-wrapped `Services.tsx` and added blank lines between CSS rules. Both are cosmetic and I left them as they are.

## Mobile results

- No horizontal scroll (`scrollWidth <= innerWidth`, and the offender list is empty) at:
  - 360×740: 360/360
  - 375×812: 375/375
  - 390×844: 390/390
- Inner pages at 390 (`/services`, `/work`, `/about`, `/industries`, `/process`, `/insights`, `/academy`): `scrollWidth` 390/390 on every page.
- Home page height at 390: 18913 → 14150 px, from tighter rhythm and smaller type.
- Screenshots reviewed at 375×812 (hero plus 14 section shots) and 360×740:
  - Hero: H1 33.75 px at 375, text then the stage mockups, full-width 52 px "Start a project" button.
  - Section H2s are about 26 px. Body text is 16 px.
- Text comes before the image or visual:
  - Services: text, then a stage card pinned to the bottom.
  - Work cards: index, name, headline and copy, then the product visual.
  - About: statement and points, then the studio board.
- Services pinned stage (390×844): `stageBottom` stayed at 844 through the list, the active block followed the scroll (blocks 1→2→4→5), and the stage released at the end of the grid (last block active).
- Work carousel (390): pressing Next three times put each slide's left edge at exactly 20 px (the gutter).
- Mobile menu (360×640):
  - Bar 64 px; burger and theme buttons 44 px.
  - The sheet scrolls (`scrollHeight` 698 > 640, `overflow-y: auto`). All 7 links are 59 px rows. The CTA is 328×54.
  - Escape closes it (`inert` comes back).
  - Floating Call/WhatsApp buttons (48 px) go visible → hidden while the menu is open → visible after it closes.
- Footer: at 381–767 px it shows two columns, then full-width Areas and Contact. At ≤380 px (including 375) it is a single column, as the plan specifies.

## Commands

- `npm run lint`: exit 0. 0 errors, 2 warnings, both existing `<img>` warnings in `opengraph-image.tsx` files I didn't touch. (The first attempt hit my 3-minute tool timeout; the rerun completed.)
- `npm run build` (Next 16.3.6): exit 0. All routes prerendered.

## Not verified

- Real iOS Safari behaviour: safe-area insets, and the 16 px input / no focus-zoom rule.
- Light theme on mobile, checked only by code review (the rules are theme-agnostic).
- Touch swipe gestures on the rails. Only the arrow buttons and scroll positions were checked.

## Deviations from the plan

- Work `.visual` keeps its clip-path reveal on phones (starting from the inset state at 22 px radius) instead of being forced open.
- Tone: `.ember` keeps `padding-bottom: 0` on phones, because Contact brings its own bottom spacing. Only `.raised` gets 56 px.
- Added `box-sizing: border-box` to the full-width buttons, and `overflow-wrap: anywhere` to the footer links up front.
