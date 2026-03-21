# eric-walters.ca

Professional portfolio for Eric Walters — Mechanical Engineering, University of Alberta.

## Quick Start

```bash
npm install
npm run dev        # → localhost:8080 with hot reload
npm run build      # → _site/ for production
```

## Architecture

Built with [11ty (Eleventy)](https://www.11ty.dev/) using Nunjucks templates.

```
src/
├── _includes/
│   ├── layouts/
│   │   ├── base.njk          ← HTML shell (head, CSS, JS imports)
│   │   ├── home.njk          ← Home page (includes all sections)
│   │   └── project.njk       ← Project subpage (article format)
│   └── partials/
│       ├── nav.njk           ← Fixed navigation bar
│       ├── hero.njk          ← Full-height hero with name animation
│       ├── about.njk         ← Two-column about section
│       ├── experience.njk    ← Timeline (loops over experience.json)
│       ├── projects.njk      ← Editorial cards (loops over projects.json)
│       ├── skills.njk        ← 3-column grid (loops over skills.json)
│       ├── contact.njk       ← Centered contact CTA
│       ├── footer.njk        ← Site footer
│       └── divider.njk       ← Gold diamond divider
├── _data/
│   ├── meta.json             ← Site metadata (name, email, links)
│   ├── experience.json       ← Work history entries
│   ├── projects.json         ← Project cards
│   └── skills.json           ← Skill groups
├── content/
│   ├── en/
│   │   ├── index.njk         ← English home page
│   │   └── projects/         ← Project deep-dive pages (Markdown)
│   ├── fr/                   ← French (future)
│   └── de/                   ← German (future)
└── assets/
    ├── css/
    │   ├── tokens.css        ← Design tokens (colors, fonts, variables)
    │   ├── base.css          ← Reset, typography, layout utilities
    │   ├── components.css    ← All UI components
    │   └── animations.css    ← Hero animation + scroll reveals
    ├── js/
    │   ├── theme-toggle.js   ← Light/dark mode with localStorage
    │   ├── scroll-reveal.js  ← IntersectionObserver fade-in
    │   └── lang-toggle.js    ← Language switcher (visual for now)
    └── files/
        └── eric-walters-cv.pdf  ← CV download (add your PDF here)
```

## Design System

### Colors

| Role | Hex | Usage |
|------|-----|-------|
| Gold `--gold` | `#AD8B3D` | Rare/precious: section labels, company names, CTA buttons, dividers, skill headings |
| Steel `--steel` | `#475569` | Structural: tags, detail labels, timeline dots, nav links, meta text |
| Light BG `--bg` | `#F4F4F7` | Marble-white page background (light mode) |
| Dark BG `--bg` | `#12141B` | Slate-charcoal page background (dark mode) |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| Libre Baskerville | 700 | Headings, hero name, project titles |
| Libre Baskerville | 400 | Section headings (h2) |
| Instrument Sans | 400-600 | Body text, descriptions |
| JetBrains Mono | 400 | Labels, nav links, tags, dates, section numbers |

### Gold Territory vs Steel Territory

**Gold appears on:** Section labels (01 — About), company names, CV button, hero accent line, "Read more" links, skill group headings, diamond dividers, footer dash, hero meta dots, email CTA button.

**Steel appears on:** Tags, detail-row labels, timeline dots/dates, nav links, language toggle active state, project type labels, project detail labels.