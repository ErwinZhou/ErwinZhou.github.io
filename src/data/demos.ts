// Browser-playable demos. Each `href` is an Astro page under src/pages/demos/,
// which embeds the real artifact from /public (see public/games/ for the builds).
export const DEMOS = [
  {
    href: '/demos/droplet',
    title: 'Watch Out for The Droplet!',
    summary:
      'A sprite-based arcade game written in C++ for a display as constrained as the NES: 8x8 tiles, four colours per tile, 64 sprites. Compiled to WebAssembly, so it runs in the page at 60fps with no server behind it.',
    stack: ['C++', 'WebAssembly', 'Emscripten', 'OpenGL ES', 'SDL3'],
    github: 'https://github.com/ErwinZhou/watch-for-droplet',
    // path under /public that the demo page embeds:
    embed: '/games/droplet/',
  },
  {
    href: '/demos/righteous-knight',
    title: 'A Righteous Knight',
    summary:
      'A branching text adventure about a knight, a cruel king, and the cost of doing the right thing. Written in Twine and also built as a native C++ game; play the original story here in the browser.',
    stack: ['Twine', 'Harlowe', 'C++', 'FreeType', 'HarfBuzz'],
    github: 'https://github.com/ErwinZhou/righteous-knight',
    embed: '/games/righteous-knight/',
  },
] as const;
