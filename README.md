# A&L Haus- & Glaspflegeservice

Production codebase for the marketing site, ported from a hi-fi prototype delivered via Claude Design.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-based config in `app/globals.css`)
- `next/font/local` with self-hosted Barlow (no external font CDN)
- `react-hook-form` + `zod` for the contact form
- `sonner` for toast notifications
- `resend` for transactional email (graceful fallback if no API key)

## Scripts

```bash
npm run dev    # start dev server on http://localhost:3000
npm run build  # production build
npm run start  # serve production build
npm run lint   # eslint
```

## Environment

Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` to enable real email delivery. Without it the contact form runs in mock mode (server logs the payload, returns `ok: true`).

## Project layout

```
app/
  layout.tsx           # root layout, Barlow font, JSON-LD, metadata
  page.tsx             # composes Hero ... Contact
  globals.css          # design tokens + bespoke styles
  api/contact/route.ts # POST handler with Resend + mock fallback
  impressum/           # TMG §5 stub — replace before launch
  datenschutz/         # DSGVO stub — replace before launch
  agb/                 # optional stub
  robots.ts, sitemap.ts
components/
  ui/                  # Icon, Button
  site/                # Provider, Trigger, Toaster (cross-cutting client islands)
  sections/            # Hero, Services, About, Process, Pricing, References,
                       # ServiceArea, Faq, Contact, Footer, Header, MobileCta, QuoteDialog
lib/
  content.ts           # German strings + Stammdaten (single source for future i18n)
  schema.ts            # zod schemas for contact + quote
  fonts.ts             # next/font/local Barlow loader
public/
  fonts/Barlow-*.ttf   # self-hosted (6 weights)
  logo-al-full*.png
```

## Pre-launch TODOs

- Replace placeholder Impressum and Datenschutzerklärung with attorney-reviewed copy.
- Optional: write AGB or remove the footer link.
- Replace placeholder testimonials in `lib/content.ts` and remove the "Beispiel" banner in `References.tsx`.
- Configure Resend domain + add `RESEND_API_KEY` to Vercel.
- Confirm Saturday hours with the client.
- Add real photos (currently the OG image is the brand logo).
- Verify Lighthouse scores ≥ 95 across categories.

## Source design bundle

The original hi-fi prototype is in the design handoff bundle this codebase was ported from. See its README for design-system documentation, component intent, and the full Stammdaten reference.
