export const SITE = {
  name: 'Yuchen Zhou',
  altName: 'Erwin',
  role: 'Systems Software Engineer',
  // Shown next to `role` in the hero eyebrow and mirrored in public/images/og.svg
  // (that file is a static SVG and must be hand-edited to match if this changes).
  credentials: 'CMU MS · 2027 New Grad',
  title: 'Yuchen Zhou — Backend Architect',
  description:
    'Yuchen Zhou — A CMU Grad enjoys building scalable infrastructure for AI era with a focus on database internals and agentic systems. Seeking 2027 New Grad SDE roles.',
  url: 'https://erwinzhou.github.io',
  email: 'erwinzhou@cmu.edu',
  // Short value proposition shown in the hero.
  tagline:
    'Backend Architect - System Design, Database Internals, AI/Agents Infra',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/ErwinZhou' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuchen-zhou-325513317/' },
  { label: 'Email', href: `mailto:${SITE.email}` },
  { label: 'X', href: 'https://x.com/erwinzhou_?s=11' },
] as const;

export const NAV = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Demos', href: '/demos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Experience', href: '/experience' },
] as const;

// Path to the downloadable resume in /public.
export const RESUME_PATH = '/files/Yuchen-Zhou-Resume.pdf';
