# Ease Health — UI, Motion & Design Style Notes

> Source: page source of https://easehealth.com/ (fetched 2026-07-01). Complements the existing [DESIGN.md](../DESIGN.md) (colors/typography), which does not cover build platform or motion.

## Platform
- Built on **Webflow** (confirmed via `data-w-id` attributes, `webflow.com` references, `webflow.shared.*.min.css` bundle) — not a custom-coded frontend.
- Component variants are named/systematic, e.g. `data-wf--arrow-button--variant="green"`, `data-wf--eyebrow-tag--variant="slate|white"` — indicates a structured Webflow component/symbol system rather than one-off styling.

## Motion / animation stack
- **GSAP** + **ScrollTrigger** + **ScrollToPlugin** (`gsap.min.js`, `ScrollTrigger.min.js`) — scroll-driven reveal animations and smooth anchor-scrolling.
- **Locomotive Scroll** (`locomotive-scroll.min.js/css`) — inertia/smooth-scroll wrapper, gives the page a "floaty" parallax feel typical of premium marketing sites.
- **Lottie** — multiple custom `.lottie` vector animation files, desktop/mobile variants for:
  - Hero section (`ATF_Desktop`/`ATF_Mobile`)
  - "Problem → Solution" illustration
  - Icon micro-animations ("coming together", "scale") in a "Why us" section, triggered on scroll (`data-lottie-scroll="once"`)
- **Swiper** (`swiper-bundle.min.css`) — carousel/slider component, likely testimonials or case studies.

Net effect: a scroll-choreographed marketing site — sections reveal via ScrollTrigger, scrolling itself feels smoothed/inertial via Locomotive Scroll, and small vector Lottie animations play once per element as it enters view.

## Visual style (cross-ref with DESIGN.md)
- Palette: deep forest green (`#0f3e17`) as the single saturated accent, on near-white/cream surfaces (`#fffefc`) with sage/mint/mist-blue washes — "clinical calm," not sterile blue/white SaaS.
- Typography: light-weight grotesque (Suisse Int'l, weights 300/400) for UI/body, paired sparingly with a thin serif (Faire Octave) for hero/section headlines — editorial, understated, not corporate-heavy.
- Flat components, no shadows, thin gray hairlines, pill-shaped tags — reads as restrained/premium rather than dashboard-dense.

## Confirmed via live browser screenshots (2026-07-01)
- **Hero**: sage-green block ("Fewer clicks. More care.") + mist-blue block on the right (Lottie animation mount point), forest-green solid CTA button, investor logo row below the fold.
- **Scroll-triggered "Problem → Solution" transition confirmed live**: as the user scrolls, the section text and background crossfade from white/"The problem" (dark green text on white) to sage-green/"The solution" — captured mid-transition, confirming GSAP ScrollTrigger-driven color/opacity animation rather than a hard cut.
- **Feature section**: pinned/sticky sage-green panel showing a rounded white UI card (mock EHR patient record — "Emma Smith" note table) alongside a pill-tag feature list ("Fewer clicks", "AI documentation", etc.) — cards use large corner radius, no drop shadow, consistent with the "flat, no-shadow" style noted in DESIGN.md.
- Nav bar: simple flat white/cream bar, logo + text nav (About, Case Studies, Careers, Resources ▾, What We Offer ▾) + solid forest-green "Book a Demo" button — stays fixed/simple across scroll (no observed shrink/hide-on-scroll behavior in the captured range).

## Still open
- [ ] Mobile responsive behavior
- [ ] Swiper carousel content/interaction
- [ ] Full hero Lottie animation playback (only static mount point captured)
