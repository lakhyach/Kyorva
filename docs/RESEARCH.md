# Research Ledger

Evidence and reasoning behind the Clayo transformation. Nothing in the product
copy is presented as a verified real-world fact about an actual company — Clayo
is an original product concept for this portfolio piece, and all UI data is
labelled illustrative.

## 1. Upstream provenance & license

| Item | Finding | Evidence |
|------|---------|----------|
| Upstream repo | `https://github.com/Footprintarts/tech-web` | `git remote -v` |
| Commit history | Single commit "first commit" | `git log` |
| Upstream LICENSE | **None present** | `git ls-files` → only `README.md` |
| Base template | Vite React template (README is stock) | `README.md` original |
| Target repo | `lakhyach/Clayo` exists, empty (no commits) | `git ls-remote` → exit 0, no refs |

**Decision:** Because the upstream declares no license, only the MIT-licensed
Vite scaffold and the contributor's own original work are claimed. Attribution
to both the Vite template and the Footprintarts starter is preserved in the
`README` and `LICENSE`. No third-party proprietary assets are retained (all
Unsplash images and the remote Google-Fonts import were removed).

## 2. Subject & audience

The template's content signalled a fintech/analytics marketing site ("Clayo
Analytics", analytics/finance feature cards). Repositioned as **Clayo, a
privacy-first product analytics platform** — a coherent, defensible category
where the existing "analytics" affordances (metrics, funnels, dashboards) make
sense as real, working UI rather than decoration.

**Audience:** product managers, growth, and engineers evaluating an analytics
tool that is cookieless and avoids lock-in.

## 3. Benchmark references (learned from — not copied)

| Reference | URL | What was borrowed (principle only) |
|-----------|-----|-------------------------------------|
| Plausible Analytics | https://plausible.io | Privacy-first positioning; minimal, trustworthy copy |
| Fathom Analytics | https://usefathom.com | "No cookies" as a headline differentiator |
| Linear | https://linear.app | Restraint, typographic hierarchy, single accent, hairline detail |
| Stripe | https://stripe.com | Clarity of value prop and CTA; dense-but-calm layout |
| Mixpanel / Amplitude | https://mixpanel.com, https://amplitude.com | Honest feature framing for product analytics |
| Vercel | https://vercel.com | Correct light/dark theming and performance discipline |

No branding, copy, proprietary assets, or distinctive layouts were reproduced.

## 4. Name availability (indicative, not legal clearance)

- Web/trademark search for "Clayo analytics" surfaced no established analytics
  company of that name. Closest neighbour is **Clay** (`clay.com`, revenue
  intelligence) — a different word and category.
- A `.com`/`.app` domain was **not** purchased or verified as available; the
  deployment uses a platform-provided subdomain. Domain registration is left as
  an owner action (see final report).

## 5. Content changes (fabrication → honesty)

| Removed (was fabricated) | Replacement |
|--------------------------|-------------|
| 3× identical "John Doe / CEO, Tech Innovations" testimonials | Deleted; replaced with real product principles |
| "$10m / 50m users worldwide" invented metrics | Deleted; no unverifiable stats shown |
| Fake named team + stock photos ("Meet the Financer team") | Deleted; replaced with an honest Privacy/ownership section |
| Broken remote Google-Fonts `<import>` (wrapped in a search URL) | Local `@font-face` only |
| Dead "Get Started" buttons, non-functional carousels, `#` footer links | Real scroll behaviour, working dashboard, validated form, functional links |

## 6. Verification performed

- `npm run lint` → 0 errors (added `react/jsx-uses-vars` so Framer Motion usage
  is correctly recognised).
- `npm run build` → succeeds; CSS 46 kB → 31 kB; **no external network
  requests** at runtime (verified via browser network log).
- Browser console → no errors/warnings.
- Interactive checks via browser: metric tabs recompute chart + stats + ARIA;
  form empty→error and valid→success states confirmed.
