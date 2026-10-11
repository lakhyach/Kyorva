# Clayo Analytics

A fintech marketing site for **Clayo**, a real-time financial analytics
concept. Built with React 19, Vite, Tailwind CSS v4, and Framer Motion.

Live: [https://clayo-analytics.vercel.app](https://clayo-analytics.vercel.app)

![Preview](docs/preview.png)

## What this project is

This repository started as a clone of the
[`Footprintarts/tech-web`](https://github.com/Footprintarts/tech-web) starter.
The site's original design identity — the light-first white/zinc system, the
`Clayo®` wordmark with its animated gradient footer, the SpaceGrotesk/Helvetica
typography, and the full section flow (Hero → Metrics → About → Features →
Team → Approach → Insights → Get Started) — is preserved and was never
replaced.

On top of that original design, this fork performs a defect-fix and
production-hygiene pass:

- **Broken fonts fixed** — the corrupted Google-Fonts `@import` never loaded;
  the site now relies solely on its own bundled TTFs (zero external requests).
- **Real content, no fabrications** — invented metrics ($10m, 50m users),
  three identical "John Doe" testimonials, and six stock-photo fake team
  members were replaced with honest positioning copy and the real maker.
- **Working controls** — "Get Started" now leads to a validated email CTA
  (clearly labelled as a demo with no backend), "Our Method" scrolls to
  Services, the header dropdown points at real sections, and dead footer
  links were replaced with real anchors and attribution.
- **Local assets** — Unsplash hotlinks were replaced with the project's own
  `hero.png` and CSS gradient art.
- **Accessibility** — skip link, focus-visible outlines, labelled icon
  buttons, `aria-expanded` dropdown, Escape-to-close mobile dialog with
  scroll lock, reduced-motion support.
- **Theme persistence** — the dark-mode toggle now survives reloads
  (`localStorage`, falling back to the OS preference).
- **Performance & SEO** — real metadata, Open Graph/Twitter tags, canonical,
  theme-color, local `og.svg`, `fetchpriority` hero image, and unused
  dependencies (`gsap`, `react-router-dom`, `react-icons`) and dead code
  removed.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run lint
```

## Credits & license

- Original design, layout, and section components:
  [Footprintarts/tech-web](https://github.com/Footprintarts/tech-web)
  (ships without a license; credited here and in `LICENSE`).
- Base scaffold: [Vite](https://vite.dev) React template (MIT).
- Fixes, improvements, and content work: Lakhyajit Changmai —
  [MIT License](LICENSE).
- Bundled fonts remain the property of their respective foundries as provided
  by the upstream starter.
