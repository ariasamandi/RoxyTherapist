# RoxyTherapist

Marketing website for Roxana's therapy practice — built with Astro, TypeScript, and Tailwind CSS.

## Stack

- [Astro](https://astro.build) — static site framework
- [TypeScript](https://www.typescriptlang.org) — type safety
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Calendly](https://calendly.com) — consultation scheduling
- [Vercel](https://vercel.com) — hosting (recommended)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Before launch

Update placeholder values in `src/config/site.ts`:

- Calendly URL
- Phone, email, and location
- Site name and copy

## Project structure

```
src/
  config/site.ts      # Site-wide settings (nav, contact, Calendly)
  components/         # Reusable UI (Header, Footer, Button)
  layouts/            # Page layouts
  pages/              # Routes (one file = one page)
  styles/global.css   # Tailwind + design tokens
docs/
  site-brief.md       # Full content & design reference
```

## Deploy to Vercel

1. Push the repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Astro — no extra config needed

## Reference

See [`docs/site-brief.md`](docs/site-brief.md) for full page content, design direction, and copy guidelines.
