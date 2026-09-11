# Syska.lk

A Next.js + shadcn/ui rebuild of the Syska marketing site

The original static HTML/Bootstrap site this replaces is kept for reference/asset-porting
in [`legacy-site/`](./legacy-site) — see [`CODEBASE.md`](./CODEBASE.md) for a full breakdown
of that original site.

## Tech stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — design tokens defined in [`src/app/globals.css`](./src/app/globals.css)
  (`@theme` block): colors, fluid type scale, section spacing
- **shadcn/ui** (`base-nova` style, Base UI primitives) — components in
  [`src/components/ui/`](./src/components/ui)
- **motion** (successor to framer-motion) — scroll-reveal animations via the shared
  [`<Reveal>`](./src/components/reveal.tsx) component
- **Resend** — contact form email delivery via a Next.js API route

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Environment variables

The contact form (`/contact`) needs email delivery configured to actually send. Copy
`.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=       # from resend.com — required, form fails gracefully without it
CONTACT_TO_EMAIL=      # defaults to hello@pinnaclegroup.lk
CONTACT_FROM_EMAIL=    # defaults to onboarding@resend.dev (fine for testing)
```

See [`src/app/api/contact/route.ts`](./src/app/api/contact/route.ts).

## Project structure

```
src/
  app/
    page.tsx              Home — long-scroll landing page
    contact/page.tsx       Contact page
    api/contact/route.ts   Contact form submit handler (Resend)
    layout.tsx             Root layout: fonts, metadata, header/footer shell
    globals.css             Design tokens (colors, type scale, spacing, animations)
  components/
    site-header.tsx         Sticky nav, mobile menu (shadcn Sheet)
    site-footer.tsx
    hero-carousel.tsx        Home page hero (crossfade carousel)
    contact-form.tsx         Contact form (client component)
    reveal.tsx                Scroll-reveal animation wrapper
    placeholder-image.tsx     Stand-in for photography we don't have yet
    sections/                 Home page content sections (pillars, stats, etc.)
    ui/                        shadcn/ui primitives
public/
  images/                    Ported/optimized assets (logo, hero banners, etc.)
legacy-site/                 Original static site, kept for reference only
```

## Design system

- **Palette** — "Coastal Meadow": Space Indigo (`#222E50`), Cerulean (`#007991`), Seagrass
  (`#439A86`), Light Gold (`#E9D985`), plus light mint tints derived from Seagrass. Defined
  as both raw utilities (`bg-brand-blue`, `text-ink-muted`, ...) and mapped into shadcn's
  semantic tokens (`primary`, `muted`, `border`, ...) in `globals.css`.
- **Type scale** — `text-hero`, `text-display`, `text-section-title` are fluid (`clamp()`),
  so headings scale smoothly across viewport widths instead of jumping at breakpoints.
- **Brand CTA** — the original site's green→blue gradient button lives on as the `brand`
  variant of the shadcn `Button` component.
- **Animation** — wrap any element that should fade up into view on scroll in `<Reveal>`
  (this replaced the original site's AOS library).

## Known gaps

- **Shop**: "Shop Now" currently links out to `https://syska.lk/shop/` (a separate, unrelated
  platform — there's no shop codebase in this repo to convert). Bringing the shop in-house as
  real Next.js pages is a distinct e-commerce build (catalog, cart, checkout, payment) blocked
  on real product data and a payment provider decision.
- **Placeholder imagery**: category cards, the brand-narrative photo, and the closing CTA
  banner use [`<PlaceholderImage>`](./src/components/placeholder-image.tsx) — swap in real
  photography when available.
- **Social links**: Facebook/Instagram icons in the footer still point to `#` (same as the
  original site — never had real URLs).
- **Contact form**: won't actually send email until `RESEND_API_KEY` is set (see above).
