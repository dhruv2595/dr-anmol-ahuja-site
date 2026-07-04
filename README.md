# Dr. Anmol Ahuja — Laparoscopic, Bariatric & Colorectal Surgeon

Website rebuild for a Delhi/Noida/Roorkee surgical practice. Next.js 16 (App
Router) + TypeScript + Tailwind v4, styled to a clinical-calm design system
(forest green / sage / mist-blue, serif display type).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run lint      # eslint
```

## Where things live

- **Routes**: `app/` — most condition/procedure pages are one dynamic route
  (`app/[slug]/page.tsx`) driven by data, not individual files.
- **Content**: `lib/content/` — typed data files, one per page/cluster. Edit
  copy here, not in the route files.
- **Components**: `components/` — shared UI (buttons, nav, cards, CTAs, etc).
- **Design reference / original scraped content**: `docs/reference/` — inputs
  used to build the site, kept for audit purposes; not imported by the app.

## Full documentation

See **[docs/HANDOVER.md](docs/HANDOVER.md)** for architecture notes, content
model, design system decisions, known gaps (e.g. the enquiry form has no
backend yet), and outstanding polish items.
