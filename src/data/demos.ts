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
] as const;
