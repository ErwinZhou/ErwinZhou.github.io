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
it to GitHub Pages. Work on the current development branch; merge to `main` to go live.

## Playable demos

Demo listings live in `src/data/demos.ts`; their pages live in `src/pages/demos/`.
The game files are checked into `public/games/` and copied into the static build, so GitHub Pages
serves them without a game server or an additional build toolchain.

- `/demos/droplet`: the Emscripten / WebAssembly build of Watch Out for The Droplet!
- `/demos/righteous-knight`: the original Twine / Harlowe HTML export of A Righteous Knight,
  embedded in an isolated iframe. The page also shows the native C++ game's screenshot and
  explains its rendering pipeline. The browser demo uses Twine's click / Tab / Enter controls.

To update A Righteous Knight, copy `assets/story/righteous-knight.html` from
[`ErwinZhou/righteous-knight`](https://github.com/ErwinZhou/righteous-knight) to
`public/games/righteous-knight/index.html`, and `screenshots/screenshot.png` to
`public/games/righteous-knight/screenshot-native.png`. Keep the HTML export intact: it includes
both the complete story and the Harlowe runtime. Its sandbox allows scripts and isolates storage,
so **Restart story** reloads the opening passage without restoring an old session.
