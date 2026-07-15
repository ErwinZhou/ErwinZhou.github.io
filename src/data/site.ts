export const SITE = {
  name: 'Yuchen Zhou',
  altName: 'Erwin Chow',
  role: 'Software Engineer',
  // Shown next to `role` in the hero eyebrow and mirrored in public/images/og.svg
  // (that file is a static SVG and must be hand-edited to match if this changes).
  credentials: 'CMU MS · 2027 New Grad',
  title: 'Yuchen Zhou — Software Engineer',
  description:
    'Yuchen Zhou (Erwin Chow) — software engineer and CMU MS student building practical, reliable systems. Backend, distributed systems, and data infrastructure. Seeking 2027 New Grad SDE roles.',
  url: 'https://erwinzhou.github.io',
  email: 'yuchenz8@andrew.cmu.edu',
  // Short value proposition shown in the hero.
  tagline:
    'Software engineer building practical, reliable systems — backend, distributed systems, and data infrastructure.',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/ErwinZhou' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuchen-zhou-325513317/' },
  { label: 'Email', href: `mailto:${SITE.email}` },
] as const;

export const NAV = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Experience', href: '/experience' },
] as const;

// Path to the downloadable resume in /public.
export const RESUME_PATH = '/files/Yuchen-Zhou-Resume.pdf';
