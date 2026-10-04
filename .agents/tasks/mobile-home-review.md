# Phone-only app-style layout for the home page

Phones (up to 767 px) get their own type scale, spacing and layout for every home section. Desktop and tablet keep their current design. Nearly all of the change is new `@media (max-width: 767px)` and `(max-width: 380px)` blocks at the end of each existing CSS module. Three small changes sit outside those blocks: a phone-only threshold branch in `Services.tsx`, two empty class hooks on the insights teaser, and a `:has()` rule that hides the floating contact buttons while the menu sheet is open. On phones, Services, Work cards and About now show text first and the visual after it, using CSS `order` and no duplicated markup. The coder's evidence includes before/after computed-style diffs at 1440, 1280 and 768 px. The only differences are time-based hero animations, and page heights are identical.

Watch for:
- A copy change in `Hero.tsx` (the eyebrow text) is bundled in. It is unrelated to this task (confirmed).
- The insights rail reveal on phones and the light theme on phones have not been checked in a browser (confirmed gap in the evidence, not a known bug).

**Verdict**: APPROVED

## High-level view

The desktop guarantee holds structurally. A scan of every added CSS line at the top level of the diff shows each one opens or closes a max-width media block, with two exceptions: the empty `.insightsRail {}` / `.insightsFoot {}` hooks and the menu-open `:has(#site-menu:not([inert]))` rule. Desktop never removes `inert` from the sheet, so that rule never matches there. The removed lines are only formatter re-wraps of multi-line gradients plus the 50→48 px button size, which sits inside the existing `max-width: 600px` block. The coder's 1811-element computed-style diff at 768, 1280 and 1440 px confirms the result at runtime.

On phones, the reading order and type follow the request. The hero H1 is `clamp(30px, 9vw, 36px)` (measured 33.75 px at 375), section H2s are about 26 px and body text is 16 px. The primary CTA is full width at 52 px. Services moves its sticky visual below the text and pins it as a bottom preview card. The JS active-block threshold changes only below 768 px, and the evidence shows the block tracking the scroll and the stage releasing correctly. Work cards and the About board are reordered with `order`.

The app-like chrome is covered:
- The header bar is 64 px with 44 px buttons.
- The menu sheet scrolls, has 59 px link rows and a full-width CTA.
- The floating Call/WhatsApp buttons hide while the menu is open.
- The footer is two columns that collapse to one at 380 px and below, with its bottom row padded clear of the floating buttons.

Overflow was asserted as `scrollWidth <= innerWidth` at 360, 375 and 390 px, with an empty offender list, and checked again on seven inner pages that share these modules.

<details>
<summary>Issues (3)</summary>

1. **Bundled hero copy change**: the `Hero.tsx` eyebrow text change ("software & app development company") is unrelated to the mobile work. Commit it separately or confirm it is intended (confirmed, non-blocking).
2. **Insights rail reveal unverified**: the evidence doesn't confirm that the third PostCard, which starts off-screen to the right, reveals when it is swiped into view. Spot-check this on a device (possible, non-blocking).
3. **Light theme and iOS Safari unverified**: phone styles were not checked in the light theme or on real iOS (safe-area insets, no zoom on input focus). Do a quick device pass before release (confirmed gap, non-blocking).

</details>

<details>
<summary>Details</summary>

### Desktop isolation and the out-of-block rules

The `FloatingContact` rule is the only new selector that applies at every width. It depends on the header removing `inert` from `#site-menu` when the menu opens, and React 19 omitting the attribute when it is false. The coder confirmed the visible → hidden → visible cycle at 360 px. If the header ever starts rendering `inert={false}` as an attribute, or the id changes, the rule stops matching and fails open: the buttons go back to painting over the sheet. Nothing breaks on desktop either way.

The `Services.tsx` change is one ternary branch, `w < 768 ? 0.42`. The 768–1039 and 1040+ branches still use 0.78 and 0.5, so tablet and desktop scroll behaviour is unchanged. The rest of that file's diff is formatter re-wrapping.

### Text-first stacking

Services, Work and About are reordered with CSS `order` only, as the plan requires. Hero, Academy and Contact were already text first in source order. Work's `.visual` keeps its clip-path reveal on phones at a 22 px radius instead of being forced open. This is a documented deviation and it stays consistent with desktop motion.

### Test coverage

The coder checked: overflow at three phone widths, computed-style parity at three desktop and tablet widths, Services pinning and active tracking, carousel snap alignment at the 20 px gutter, menu sheet scrolling, Escape-to-close and button hiding, the footer breakpoints, and inner-page overflow. Lint and build passed.

Not tested: light theme on phones, touch swipe on the rails (only the arrow buttons were checked), the insights rail reveal for off-screen cards, and real iOS Safari behaviour.

</details>

<details>
<summary>File map</summary>

- `src/app/globals.css`: phone `scroll-padding-top` of 68 px
- `src/components/FloatingContact.module.css`: hidden while the menu is open; 48 px buttons and safe-area offsets at ≤600 px
- `src/components/home/Home.module.css`: phone tokens, H1/H2 scale, hero, services pinned stage, insights rail hooks
- `src/components/home/Header.module.css`: compact bar, scrollable sheet
- `src/components/home/HeroBackdrop.module.css`: lighter blobs on phones
- `src/components/home/Work.module.css`: text-first cards, carousel sizing, CTA bar
- `src/components/home/About.module.css`: points before the board
- `src/components/home/Industries.module.css`, `src/components/home/Process.module.css`: tighter rows and timeline
- `src/components/home/AcademyTeaser.module.css`, `src/components/home/Contact.module.css`: compact cards, 16 px inputs, full-width actions
- `src/components/home/Footer.module.css`, `src/components/home/Tone.module.css`: stacked footer, slimmer panels
- `src/components/home/Services.tsx`: phone active-block threshold
- `src/components/home/InsightsTeaser.tsx`: home-only class hooks
- `src/components/home/Hero.tsx`: unrelated eyebrow copy edit

Full diff: `git diff` against `master` (HEAD 881ada6).

</details>
