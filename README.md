# Clayo® — Privacy-first product analytics

> A distinctly branded, production-quality marketing site for **Clayo**, a
> privacy-first product analytics platform. Rebuilt from the ground up with an
> original design system, honest content, and a genuinely interactive
> in-browser dashboard demo.

![Clayo dashboard demo](docs/preview.png)

**Live site:** https://clayo-analytics.vercel.app/

---

## What this is

Clayo is a single-page product site for a privacy-first analytics tool. The
page communicates a clear value proposition and — rather than showing a static
screenshot of a fake product — includes a **real, working analytics dashboard**
that computes charts, metrics, and a conversion funnel live in the browser from
clearly-labelled illustrative sample data.

This project is a substantial, original transformation of an open starter
template (see [Credits & license](#credits--license)). It is not a re-skin: the
brand, design system, information architecture, content, interactions, and
engineering were all rebuilt.

## Highlights

- **Interactive dashboard demo** — metric tabs recompute an SVG area chart,
  totals, daily average, and trend delta on the fly. Keyboard-accessible
  (`role="tablist"`, arrow-key navigation) and screen-reader described
  (`aria-label` summarises the data).
- **Persistent, flash-free theming** — light/dark mode with `localStorage`,
  `prefers-color-scheme` defaults, and an inline pre-paint script (no FOUC).
- **Scroll-spy navigation** — `IntersectionObserver` highlights the active
  section; an animated pill tracks it.
- **Real, validated form** — client-side email validation with error,
  submitting, and success states; honestly labelled as a demo that sends nothing.
- **Original design system** — warm-bone paper, ink, and a single "volt"
  accent; locally bundled fonts (zero third-party network requests).
- **Accessibility & motion** — semantic landmarks, skip link, visible focus
  rings, alt/ARIA labels, and full `prefers-reduced-motion` support.
- **SEO & sharing** — metadata, Open Graph/Twitter cards, JSON-LD, web manifest,
  and an original SVG favicon and share image.

## Tech stack

| Concern    | Choice |
|------------|--------|
| Framework  | React 19 |
| Build      | Vite 8 |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first `@theme`) |
| Animation  | Framer Motion |
| Icons      | lucide-react |

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | ESLint (flat config)                 |

## Project structure

```
src/
  App.jsx                 # composition + theme + scroll-spy
  index.css               # design tokens (@theme), base + component layers
  assets/data.jsx         # honest marketing content + labelled sample data
  hooks/
    useTheme.js           # persistent light/dark theme
    useScrollSpy.js       # active-section nav highlighting
  components/
    Header.jsx  Hero.jsx  Features.jsx  DashboardDemo.jsx
    Privacy.jsx  Articles.jsx  StartForm.jsx  Footer.jsx
```

## Design decisions

- **Positioning:** Clayo is framed as a privacy-first analytics product, so the
  copy leads with trust signals (cookieless, data ownership, readable metrics)
  instead of fabricated customers or numbers.
- **Visual direction:** light-first editorial layout with a single high-energy
  accent — deliberately *not* a dark "automotive" aesthetic — using restraint,
  typographic hierarchy, and hairline grids.
- **Honesty over hype:** no fake testimonials, invented users, or fabricated
  metrics. The one "product" surface is a real tool operating on data that is
  explicitly labelled as illustrative.

## Content & claims

All product copy describes Clayo as an illustrative product concept for this
portfolio piece. The dashboard numbers are **synthetic sample data generated in
the browser** and labelled as such in the UI. See [`docs/RESEARCH.md`](docs/RESEARCH.md)
for the benchmark and naming research behind the decisions.

## Credits & license

- The initial scaffold derives from the [Vite React template](https://vite.dev)
  (MIT) and the [Footprintarts/tech-web](https://github.com/Footprintarts/tech-web)
  starter. The upstream repository does not declare a license; the base Vite
  template is MIT.
- All branding, design system, original code, and written content in this
  repository are © Lakhyajit Changmai, released under the [MIT License](LICENSE).
- Fonts are bundled locally from the original template's `/public/fonts`.

[MIT © Lakhyajit Changmai](LICENSE)
