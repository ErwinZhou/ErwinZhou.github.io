# Personal Portfolio v2.0 — Implementation Plan

## Context

The repo `ErwinZhou.github.io` currently hosts an academic Jekyll site (the `academicpages`
template) deployed to `https://erwinzhou.github.io` via GitHub Actions. It is academic-flavored,
template-heavy, and mostly boilerplate. Yuchen ("Erwin") is now targeting **2027 New Grad (NG)
SDE roles in the US** and wants a place to publish a **blog**. The existing site will be
**fully discarded** and replaced with a clean, modern, **all-English** portfolio.

Goal: an SDE-focused portfolio + blog with an **Anthropic-style aesthetic** (warm ivory
background, slate ink text, serif editorial headings, terracotta accent) and a **sipusdesign-style
photo wall** to show personality.

This work happens on branch **`dev-v2.0`**.

### Locked decisions
| Decision | Choice |
|---|---|
| Tech stack | **Astro** (static, MDX blog, deploy to GitHub Pages) |
| Positioning | **SDE-first**, targeting **2027 New Grad** roles (research is a minor line folded into About/Experience) |
| Nav / tabs | **About · Projects · Blog · Experience** (4 tabs; no separate Home) |
| Landing page | **About is the landing page (`/`)** — short hero on top, then bio, then **Life photo wall** at the end |
| Resume | Lives inside **Experience** as an interactive resume (tab simply named "Experience") |
| Domain | Keep `erwinzhou.github.io` (no custom domain) |

---

## Research basis (best practices baked in)

- **"Resume gets the interview; portfolio gets the offer."** Portfolios show systems thinking,
  production awareness (CI/CD, testing, monitoring), and documented trade-offs that a resume can't.
  → Each featured project gets a real write-up, not just a card. (src: aidelearning Medium article)
- Employers spend ~15s on first scan → **best work immediately visible**; one-page-feel hero,
  **3–5 polished projects** beat 10 thin ones; working **GitHub + live-demo links**; mobile-first;
  fast load; consistent palette + identity. (src: sitebuilderreport / sitesplaced 2026 roundups)
- Anthropic visual language: background ivory **`#faf9f5`**, ink **`#141413`**, single earthy
  **terracotta `#d97757`** accent used sparingly; **serif body/headings** (Tiempos) + grotesque
  **sans** (Styrene) for UI/nav; monochrome restraint, no gradients. (src: type.today / fontofweb /
  Anthropic brand-guidelines)
- sipusdesign: minimal header, reverse-chronological work list, and a **personal photo grid** that
  adds warmth/personality → our **Life** page + a teaser strip on Home.

---

## Design system

**Palette** (CSS custom properties in `src/styles/global.css`)
- `--bg: #faf9f5` (ivory) · `--ink: #141413` (slate) · `--muted: #6b6a65` (secondary text)
- `--accent: #d97757` (terracotta — links/hovers/underlines, used sparingly)
- `--border: #e8e6df` · `--surface: #f3f1ea` (cards/code blocks)
- Optional dark mode later (`prefers-color-scheme`): deep slate bg + ivory text. Phase 2, not v1.

**Typography** (Tiempos/Styrene are commercial → free near-equivalents via Fontsource, self-hosted)
- Headings + body serif: **Newsreader** (or Source Serif 4) — editorial Tiempos-like feel.
- UI / nav / labels sans: **Hanken Grotesk** (or Geist) — Styrene-like grotesque.
- Mono (code): **JetBrains Mono** or **IBM Plex Mono**.
- Self-host with `@fontsource-variable/*` packages (no FOUT, no Google CDN dependency).

**Layout principles**: generous whitespace, ~720px reading measure for prose, max ~1100px content
shell, subtle hover transitions, no heavy shadows, rounded-but-restrained corners.

---

## Tech stack & project structure

Astro (latest) + MDX + Tailwind (with the palette as Tailwind theme tokens) + a few small islands
only where needed (theme toggle later, photo lightbox). Content via Astro **Content Collections**
with typed frontmatter (Zod schemas) for `blog` and `projects`.

```
/ (repo root, branch dev-v2.0)
├── astro.config.mjs          # site: https://erwinzhou.github.io, integrations: mdx, sitemap, tailwind
├── package.json              # astro, @astrojs/mdx, @astrojs/sitemap, tailwind, fontsource
├── tsconfig.json
├── src/
│   ├── pages/
│   │   ├── index.astro              # About == landing page (hero + bio + Life photo wall)
│   │   ├── projects/index.astro     # Projects list
│   │   ├── projects/[slug].astro    # Project detail (from content collection)
│   │   ├── blog/index.astro         # Blog list
│   │   ├── blog/[slug].astro        # Blog post
│   │   ├── experience.astro         # Experience (interactive resume + CV download)
│   │   └── 404.astro
│   ├── content/
│   │   ├── config.ts                # collections: blog, projects (+ Zod schemas)
│   │   ├── blog/*.mdx
│   │   └── projects/*.mdx
│   ├── components/                  # Nav, Footer, ProjectCard, PostCard, PhotoGrid, Hero, SEO, Prose
│   ├── layouts/                     # BaseLayout, PostLayout, ProjectLayout
│   ├── styles/global.css            # palette tokens + base type
│   └── assets/                      # imported, optimized images (astro:assets)
├── public/
│   ├── files/                       # CV PDF, etc. (migrated)
│   ├── images/                      # photo-wall images, logos, og image
│   └── favicon / robots.txt
└── personal-portfolio-impl-plan.md  # this document
```

**Old Jekyll files** (`_config.yml`, `_pages`, `_layouts`, `_includes`, `_sass`, `Gemfile`, etc.)
are removed on `dev-v2.0`. Reusable assets are migrated first (see below).

---

## Site map & page content

Four tabs only: **About · Projects · Blog · Experience**. About is the landing page.

1. **About (`/`, the landing page)** — top is a compact **hero**: name "Yuchen Zhou (Erwin Chow)",
   one-line value prop ("SDE — CMU MS, building practical, reliable systems") targeting **2027 New
   Grad**, primary CTAs (View Projects · Read Blog · GitHub · Email · CV). Then the **narrative bio**
   (SDE-first rewrite of current about.md), **education** (CMU MS Information Networking, Nankai BE
   Information Security), a **compact research line** (Tsinghua RA under Dr. Sicheng Zhao; capstone;
   the contrastive graph clustering paper) — research lives here as a minor mention, not its own tab.
   A personality paragraph (films, soccer, the mind-uploading novel, open-source / NKU-FY founder).
   **At the very end: the Life photo wall** — the sipusdesign-style **photo grid** (masonry/justified),
   captioned, click-to-enlarge (lightbox island), categories like travel / soccer / films / campus,
   built with `astro:assets` for responsive optimized images.

2. **Projects (`/projects`)** — grid of project cards (title, one-liner, stack tags, GitHub + demo
   links). Detail pages (`/projects/[slug]`) follow the "production signals" template:
   problem · architecture (diagram) · stack · what I built · results/metrics · trade-offs &
   limitations · links. Seed with 3–5: the Premier League data/management system
   (github.com/ErwinZhou/DatabaseSystem2022), the Meta-Backdoor Defense System, plus 1–3 to be
   chosen. Placeholders where details are pending.

3. **Blog (`/blog`)** — MDX posts with reading time, tags, date; clean prose styling (the `Prose`
   component). One starter "Hello / why this blog" post + migrate the existing `_pages/blog.md`
   draft if it has real content.

4. **Experience (`/experience`)** — an **interactive resume**: a vertical, animated timeline of CMU,
   Nankai, Tsinghua RA, Chinasoft (Data Analyst), Longshine (Ops/CI-CD), each expandable to show
   role, dates, stack, and impact bullets, plus a **Download CV (PDF)** button → migrated
   `Yuchen Zhou-CV.pdf`. Tab is named simply **"Experience"**.

**Nav** (sans, tight tracking): About · Projects · Blog · Experience — plus GitHub + email icons.
Sticky, minimal, ivory. Footer: socials, "built with Astro", copyright.

---

## Content migration (reuse, don't recreate)

From the old repo, copy into the new structure **before** deleting old files:
- `images/profile.png` / `bio-photo*.jpg` → hero/about portrait.
- `files/Yuchen Zhou-CV.pdf` → `public/files/` (resume download).
- University/company logos (`Carnegie_Mellon_University_seal.png`, `Nankai.png`, `TsingHua.png`,
  `LongShine.png`, `Chinasoft.png`) → experience/education rows.
- `favicon.ico`, `site-logo.png` → `public/`.
- Real prose from `_pages/about.md` → reworked, engineer-first About copy.
- Personal photos for the Life wall (end of About): user to supply (none clearly present yet) —
  start with placeholders.

Discard: all academicpages template/boilerplate (`_talks`, `_teaching`, demo `_posts`,
`_portfolio`, `_publications` placeholders, `_sass`, `_includes`, `markdown_generator`, `talkmap*`).

---

## Deployment

Replace `.github/workflows/jekyll.yml` with an **Astro → GitHub Pages** workflow
(`withastro/action` or manual `npm run build` + `actions/deploy-pages@v4`), building `dist/` and
deploying on push to the default branch. `astro.config.mjs`: `site: 'https://erwinzhou.github.io'`,
`base: '/'`. No CNAME (domain unchanged). Keep `dev-v2.0` as the working branch; merge to `main`
only when ready to go live.

---

## Implementation phases

1. **Branch + scaffold** — create `dev-v2.0`; `npm create astro@latest`; add MDX, sitemap, Tailwind,
   Fontsource fonts; set palette tokens; commit baseline.
2. **Design system + layout shell** — `global.css` tokens, `BaseLayout`, `Nav`, `Footer`, typography,
   responsive container. Verify the Anthropic look on a blank page.
3. **Migrate assets** — copy portrait, CV, logos, favicon into `public/`/`src/assets`.
4. **Build pages** — About/landing (incl. Life photo wall) → Experience (interactive resume) →
   Projects (+ collection schema & detail template) → Blog (+ schema). Seed real content where known,
   placeholders elsewhere.
5. **Polish** — SEO/OG meta, sitemap, RSS for blog, 404, Lighthouse pass (perf/a11y/mobile),
   favicon/og image.
6. **Deploy workflow** — swap CI to Astro build; test deploy from `dev-v2.0` (or preview) before
   merging to `main`.

---

## Verification

- **Local**: `npm run dev` → click through all four tabs (About / Projects / Blog / Experience) at
  mobile + desktop widths; confirm nav, links (GitHub/email/CV), the Life photo lightbox at the end
  of About, the interactive resume timeline, and blog/project rendering from MDX.
- **Build**: `npm run build && npm run preview` → no broken links/assets; check `dist/`.
- **Quality bar**: Lighthouse ≥ 95 perf/a11y/best-practices/SEO on Home & a blog post; verify fonts
  self-hosted (no layout shift); palette matches `#faf9f5` / `#141413` / `#d97757`.
- **Deploy**: confirm GitHub Actions builds Astro and the preview/site renders before merging to
  `main`.

---

## Open items for the user (can proceed with placeholders)
- Photos for the **Life** wall (none clearly in repo yet).
- Final list of **featured projects** (3–5) + their metrics/diagrams/demo links.
- Whether to refresh the **CV PDF** before linking it.

---

## Design references to revisit
- **Anthropic** (anthropic.com) — color palette + typographic restraint (the look we're matching).
- **sipusdesign.com** — the personal **photo wall / grid** at the bottom is the inspiration for the
  `/life` page and the Home teaser strip.
