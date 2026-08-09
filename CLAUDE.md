# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:4321
npm run build    # static build → dist/
npm run preview  # serve the production build locally
```

No lint or test scripts are configured. TypeScript is checked implicitly by Astro during build.

## Architecture

**Stack:** Astro 5 (static output) + MDX + Tailwind CSS v4, deployed to GitHub Pages at `https://erwinzhou.github.io`. Work happens on `dev-v2.0`; merging to `main` triggers the deploy workflow (`.github/workflows/deploy.yml`).

**Path alias:** `@/*` → `src/*` (configured in `tsconfig.json`).

### Content

Content Collections power blog posts and project write-ups:
- `src/content/blog/*.mdx` — frontmatter: `title`, `description`, `pubDate`, `updatedDate?`, `tags[]`, `draft`
- `src/content/projects/*.mdx` — frontmatter: `title`, `summary`, `stack[]`, `featured`, `order`, `github?`, `demo?`, `date?`
- Schema definitions live in `src/content.config.ts`

Dynamic pages (`src/pages/blog/[slug].astro`, `src/pages/projects/[slug].astro`) use `getStaticPaths()` from the respective collections.

### Data files (edit these to update site content)

| File | Controls |
|------|----------|
| `src/data/site.ts` | Name, role, tagline, email, nav links, socials, resume PDF path |
| `src/data/experience.ts` | Education (`EDUCATION`), work history (`EXPERIENCE`), skills (`SKILLS`) — typed as `TimelineItem[]` |
| `src/data/photos.ts` | Life photo wall (`PHOTOS`) — `src` paths point into `public/images/life/life/` |

### Design system

`src/styles/global.css` defines all palette and typography as Tailwind v4 `@theme` tokens. Use these Tailwind utility classes throughout — never hard-code hex values:

| Token | Value | Usage |
|-------|-------|-------|
| `bg-bg` | `#faf9f5` ivory | page background |
| `text-ink` | `#141413` slate | primary text |
| `text-muted` | `#6b6a65` | secondary / labels |
| `text-accent` / `bg-accent` | `#d97757` terracotta | links, hovers, accents (use sparingly) |
| `bg-surface` | `#f3f1ea` | cards, code blocks |
| `border-line` | `#e8e6df` | hairline borders |
| `font-serif` | Newsreader Variable | body / headings |
| `font-sans` | Hanken Grotesk Variable | UI / nav / labels |
| `font-mono` | JetBrains Mono Variable | code |

Two layout utility classes are defined in `global.css`: `.shell` (max-width content wrapper, `68rem`) and `.prose` (long-form reading measure, `44rem`) — use these on page containers rather than duplicating the widths.

### Page layout

All pages wrap in `src/layouts/BaseLayout.astro`, which composes `BaseHead` (SEO/meta), `Nav`, a `<main>` slot, and `Footer`. Pages live under `src/pages/` matching Astro's file-based routing.

Components in `src/components/`: `Nav`, `Footer`, `BaseHead`, `Timeline` (experience page), `ProjectCard`, `PostCard`, `PhotoWall`, `SkillsGrid`, `Tag`.

### Resume / static assets

The downloadable resume PDF lives at `public/files/Yuchen-Zhou-Resume.pdf`. Its public path is exported from `src/data/site.ts` as `RESUME_PATH`.

## Rules
1. Commit with each module modification, never commit 


## TODO
1. Update color and theme to be not like Anthropic that much
2. Existing `Home` page needs picture in behind