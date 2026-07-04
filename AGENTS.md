<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

(Known for 16.2.9: `params`/`searchParams` are Promises; `viewport` is a separate export from `metadata`; no manual `<head>` tags in layouts.)

# Project: Dr. Anmol Ahuja — doctor website

Next.js 16 (App Router) + TypeScript + Tailwind v4. Static site, no backend —
the enquiry form and symptom checker hand off to WhatsApp (`wa.me`) / mailto.
`npm run dev` (preview on :3000) · `npm run build` (fastest error check; all
~45 pages must stay static).

## Structure

- `app/(en)/…` — English pages (home, about-us, contact-us, faqs, `[slug]` =
  34 condition pages rendered by `components/ConditionTemplate.tsx` from
  `lib/content/*.ts`). `app/hi/…` — Hindi mirrors of home/about/contact.
  Route-group layouts own Header/Footer; root layout owns fonts + theme init.
- `lib/site.ts` (contact constants) · `lib/nav.ts` (specialty clusters) ·
  `lib/i18n.ts` (Lang type, path switcher) · `lib/images.ts` (image registry;
  keep alt text honest). Mostly verified Unsplash stock, plus two real local
  photos in `public/`: `anmol-ahuja.jpg` (`images.drAnmolAhuja` — the actual
  doctor) and `hero.jpg` (`images.heroPatients` — user-supplied hero).
- `docs/reference/` — frozen design inputs (DESIGN.md, Ease screenshots,
  scraped copy). `docs/HANDOVER.md` — current-state handover. `_legacy/` —
  pre-rebuild code, excluded from tsconfig; mine it, don't import it.

## Design rules (violations get user pushback — see agent memory for history)

- Tokens only, defined in `app/globals.css` `@theme`: forest/sage/mist/mint/
  linen/canvas/hairline/charcoal/graphite/ink. **No hardcoded hex** — dark
  mode works by overriding these vars under `.dark` (toggle in footer).
- Radii: exactly 7px (`rounded-nav`), 14px (`rounded-card`), 999px
  (`rounded-pill`). Font weights 300/400 only. Serif (`font-display`) for
  headings; flat surfaces — the only shadow allowed is the mega-menu panel.
- Patient-first voice: no "keyhole incision" tech-selling; outcomes in plain
  words. Ration the green — at most one big tinted band per screenful.
- Imagery: audience is Indian — use warm, patient-friendly, non-clinical
  photos of Indian people (no white-doctor stock). The doctor's real portrait
  (`images.drAnmolAhuja`) crops with `object-cover object-[center_30%]` so his
  cap/face isn't cut. `components/CheckItem.tsx` takes an optional `icon`
  (`IconName`) that renders a `rounded-pill` icon badge like the AssessmentTool
  options; no icon = the default forest-square check.
- Motion: wrap new sections in `components/Reveal.tsx` (IntersectionObserver
  fade-up; `effect="draw"` for line-art). Reduced-motion is handled globally.
  Decorative SVGs live in normal document flow, never absolutely positioned
  across a section.
- Bilingual chrome: Header/Footer/CtaBand/EnquiryForm/AssessmentTool take a
  `lang` prop with internal dictionaries; new shared components should too.

## Verifying changes

Use the preview tools; after any hard navigation/reload, screenshots go
stale — navigate with `document.querySelector('a[href="…"]').click()` via
preview_eval, or restart the preview server (then re-apply preview_resize).
Trust preview_eval/preview_inspect over suspicious screenshots.
