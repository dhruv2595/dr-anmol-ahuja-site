# Handover — Dr. Anmol Ahuja website rebuild

Last updated: 2026-07-03

> **2026-07-03/04 — fresh rebuild (current).** The site was rebuilt from
> scratch on user request; everything below describing the OLD build is
> archived in `_legacy/` (excluded from tsconfig). Current build: home,
> `/about-us`, `/contact-us`, `/faqs` (search-first FAQ explorer), all 34
> condition pages restored via `app/(en)/[slug]` + `ConditionTemplate`, and
> Hindi mirrors of home/about/contact under `/hi` (route groups; shared
> components take a `lang` prop). Homepage has a guided 2-question symptom
> checker and an arc-style auto-rotating testimonial carousel. Stock
> photography from `lib/images.ts` (user-approved), enquiry form hands off
> to WhatsApp/mailto (no backend), sitemap/robots/JSON-LD wired.
> See the memory file `doctor-site-design-direction` for the design rules
> learned from user feedback. The preview-screenshot flakiness note at the
> bottom still applies: use soft navigation
> (`document.querySelector('a[href=...]').click()`) between routes.

## What this is

A full rebuild of `delhilaparoscopicsurgery.com` (Dr. Anmol Ahuja — laparoscopic,
bariatric, hernia, colorectal & proctology surgeon, Delhi/Noida/Roorkee) as a
Next.js site, styled to the "Ease Health" design reference (clinical-calm,
forest-green/sage/mist-blue palette, serif display type + grotesque body).

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind v4**. No CMS — content
lives in typed data files under `lib/content/`. No backend — the enquiry form
is UI-only (see [Known gaps](#known-gaps-not-yet-wired-up)).

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build, also the fastest way to catch errors
```

## Project structure

```
app/                     Next.js App Router routes
  page.tsx                 Home
  [slug]/page.tsx           Dynamic route for all 34 condition/hub pages
                             (weight-loss-surgery, hernia, colorectal,
                             proctology, mis-laparoscopic-surgery clusters)
  about-us/, contact-us/, book-an-appointment/, faqs/, media/,
  testimonials/, video/, blog/, blog/[slug]/
                             Core + dynamic blog pages

components/               Shared UI. Notable ones:
  Header.tsx, MegaMenu.tsx, MobileNav.tsx    Nav (two-panel flyout mega menu)
  Footer.tsx, StickyMobileCTA.tsx
  Button.tsx, PillBadge.tsx, Card.tsx, SectionHeading.tsx, CheckBadge.tsx
  ConditionCTA.tsx          The reusable conversion banner (compact + full)
  ConditionTemplate.tsx     Renders any condition/hub page from its data object
  FAQSearch.tsx, FAQAccordion.tsx
  WhatsApp.tsx              wa.me link/button helpers (brand/onDark/forest tones)
  graphics/LineArt.tsx      Decorative SVG line-art motifs (concentric circles,
                             nested corners, waves) — always place these in
                             normal document flow or a scoped container, never
                             absolute-positioned across a whole section (see
                             Known gaps — this caused text-overlap bugs twice)

lib/
  site.ts                  Site-wide constants (phones, email, locations, etc.)
  nav.ts                   Nav tree (specialty clusters + their condition links)
  images.ts                Stock photo map (see Imagery below)
  content/
    types.ts                 ConditionPage / ConditionSection types
    weight-loss-surgery.ts, hernia.ts, colorectal.ts, proctology.ts,
    mis-laparoscopic-surgery.ts
                              One array of ConditionPage per cluster — this is
                              the source of truth for all 34 condition pages
    index.ts                  Aggregates the above + slug lookup helpers
    home.ts, about.ts, faqs.ts, testimonials.ts, blog.ts
                              Content for the respective pages

docs/reference/           Original design/content inputs (see below) — not
                           imported by the app, kept for audit/reference only
```

## How content flows

The original site's copy was scraped into `docs/reference/sitemap/pages/**/*.md`
(one file per page) before this rebuild started. That raw copy was transcribed
— condensed and restructured, not paraphrased-for-meaning — into the typed
`ConditionPage` objects in `lib/content/*.ts`. `app/[slug]/page.tsx` and
`ConditionTemplate.tsx` render **all 34 condition/hub pages** from that data;
there are no per-condition `.tsx` files. To edit a condition page's copy, edit
its entry in the matching `lib/content/<cluster>.ts` file — you don't need to
touch routing.

The live site's blog was broken (DB error) at scrape time, so no legacy blog
content was recoverable. `lib/content/blog.ts` has 3 placeholder educational
posts — flagged as such in a comment. Swap in real posts by editing that file;
`app/blog/[slug]/page.tsx` is already fully dynamic.

## Design system

Tokens (colors, type scale, spacing, radii) were hand-ported from
`docs/reference/theme.css` / `tokens.json` / `DESIGN.md` into
`app/globals.css`'s Tailwind `@theme` block — that's the single source of
truth now, not the reference files (which are frozen inputs, not live config).

Font substitutions (the reference fonts aren't licensed/available):
- Faire Octave (serif, headings) → **Fraunces** via `next/font/google`
- Suisse Int'l (grotesque, body/UI) → **Inter** via `next/font/google`

Container width is `max-w-[1320px]` site-wide (widened from an initial 1200px
per feedback). Primary CTA buttons use a sliding-arrow hover (see
`components/Button.tsx`).

## Imagery

The original site's actual photos (of Dr. Ahuja, the clinics) were not
recoverable — only filenames were scraped, not files. Per explicit user
direction, `lib/images.ts` uses **royalty-free Unsplash stock photography**
(verified working URLs, not fabricated) as representative medical/clinical
imagery. This is **not** real photography of Dr. Ahuja or his clinics — alt
text is written carefully (e.g. "Consulting surgeon in medical scrubs", not
"Photo of Dr. Ahuja") to avoid misrepresentation. If real photos become
available, swap the URLs in `lib/images.ts`; every usage site pulls from that
one map.

## Known gaps / not yet wired up

- **Enquiry form (`components/EnquiryForm.tsx`) has no backend.** It's UI
  only — submitting doesn't send anywhere yet. Needs an API route + email/CRM
  integration (or a form service like Formspree) before launch.
- **WhatsApp/phone numbers are the scraped originals** (`+91-9818675150`) —
  confirm these are still correct/monitored before launch.
- **No sitemap.xml / robots.txt / structured data (JSON-LD)** yet for SEO.
- **No analytics** wired up (GA4, etc.).
- **Social links** (Facebook/Twitter in footer) point to the original site's
  accounts — verify still active.
- **Accessibility**: base patterns are in place (skip link, focus-visible,
  semantic landmarks, `prefers-reduced-motion` handling, native `<details>`
  for accordions) but there hasn't been a full axe/Lighthouse audit pass.

## Outstanding design polish (user-flagged, not yet actioned)

As of the last session, the user noted **a few sections still aren't looking
great** but didn't specify which beyond what was already fixed (see below).
Next session should ask for specific pages/screenshots before guessing.

Already fixed this project (for context on what "good" looks like here):
header clutter/shadow, mega menu (rebuilt as two-panel category→sub-item
flyout), hero layout, home page section variety (bento specialties, mist-blue
"why choose" band with edge-scoped line-art), testimonials (was a wall of
text, now featured-quote + compact cards), FAQ page (added live search +
category filter + card-style spacing), contact page, footer (color + removed
an overlapping decorative graphic), CTA banners, and a recurring **line-art
overlapping text** bug (twice — the fix pattern is: never absolutely-position
a `LineArt` graphic across a whole section; scope it inside a specific column
in normal document flow, or verify its bounding box against sibling content
before shipping).

## A note on this session's tooling

The in-session browser preview (`preview_*` tools) was unreliable for a
stretch — screenshots would render a stale/wrong route while `preview_eval`
correctly showed the live page. When that happens: restart the preview server
(`preview_stop` + `preview_start`), and if it's still flaky, verify via
`curl`-ing the dev server and grepping the rendered HTML rather than trusting
screenshots blindly.
