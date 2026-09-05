# Yuchen Zhou — Personal Portfolio (v2.0)

Personal portfolio + blog for Yuchen Zhou (Erwin Chow). Built with [Astro](https://astro.build),
styled with Tailwind CSS v4, deployed to GitHub Pages at <https://erwinzhou.github.io>.

> Design plan and rationale: [`personal-portfolio-impl-plan.md`](./personal-portfolio-impl-plan.md).

## Stack

- **Astro** (static output) + **MDX** for blog & project write-ups
- **Tailwind CSS v4** with an Anthropic-inspired palette (ivory `#faf9f5`, slate `#141413`,
  terracotta `#d97757`); self-hosted fonts via Fontsource (Newsreader serif, Hanken Grotesk sans,
  JetBrains Mono)
- Content Collections (`src/content/blog`, `src/content/projects`) with typed frontmatter

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build → dist/
npm run preview  # preview the production build
```

## Where to edit

| What | Where |
|------|-------|
| Name, role, socials, resume path | `src/data/site.ts` |
| Experience / education / skills | `src/data/experience.ts` |
| Life photo wall | `src/data/photos.ts` + images in `public/images/life/life/` |
| Blog posts | `src/content/blog/*.mdx` |
| Project write-ups | `src/content/projects/*.mdx` |
| resume PDF | `public/files/Yuchen-Zhou-Resume.pdf` |
| Colors & typography | `src/styles/global.css` |

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Astro site and publishes
it to GitHub Pages. Work happens on `dev-v2.0`; merge to `main` to go live.
