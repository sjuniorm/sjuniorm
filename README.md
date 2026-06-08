# sjuniorm.xyz — Stef Junior Mylle

Personal **link hub** for Stef Junior Mylle (Security & AI). A single dark, bento-grid
page surfacing his ventures, socials, and contact — plus an About section. A second
route `/links` is the same grid without About, for an Instagram bio.

## Stack
- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS v4**
- Fonts via `next/font/google`: **Space Grotesk** (`--sans`) + **JetBrains Mono** (`--mono`)
- Deployed on **Vercel**, custom domain **sjuniorm.xyz**

## Editing content
Everything user-facing lives in **[`src/content.ts`](src/content.ts)** — identity, `ventures[]`,
`socials[]`, `contact`, `about`, and the `footer` string. Every localized string is an
`{ en, es, nl }` object; the language toggle just swaps the active key.

- **Add a venture:** append an object to `ventures[]`. The bento grid auto-flows
  (`grid-auto-flow: dense`) so a new 2×2 tile renders with no layout changes. Keep the
  four 1×1 social tiles (LinkedIn / Instagram / X / WhatsApp) so the grid stays gap-free.
- **WhatsApp:** always a `wa.me/<number>` URL — the raw number is never rendered.
- No i18n library — it's a plain typed dictionary.

## Project layout
```
src/
  app/
    layout.tsx          # fonts, metadata, viewport
    page.tsx            # /        -> <Hub showAbout />
    links/page.tsx      # /links   -> <Hub showAbout={false} />
    globals.css         # design tokens + all component CSS (ported from the mockup)
    icon.svg            # favicon (SJM monogram)
    opengraph-image.tsx # 1200x630 OG card
    twitter-image.tsx   # same card for Twitter
    robots.ts, sitemap.ts
  components/
    Hub.tsx             # the whole interactive page; owns language state + localStorage
    icons.tsx           # platform glyphs + SJM monogram
  content.ts            # <- single source of truth
  lib/og-image.tsx      # shared OG renderer
```

## Local development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Design source
The pixel spec and design tokens live in `../design_handoff_portfolio/` (`README.md`,
`mockup/portfolio.html`). The accent is electric violet `#7c6cff` (the design source
used teal `#2ee6c8` — swap `--accent` in `globals.css` to change it everywhere).
