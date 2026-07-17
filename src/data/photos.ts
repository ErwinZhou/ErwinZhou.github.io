// Life photo wall — real photos live in /public/images (life-*.jpeg/JPG).
// Rendered as a scattered collage on sm+ screens (top/left/rotate position
// each photo like a pinned corkboard); a simple rotated masonry on mobile.
// size controls the card's on-screen footprint.

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  top: string; // % from container top, collage layout only
  left: string; // % from container left, collage layout only
  rotate: number; // degrees, collage layout only
  size: 'sm' | 'md' | 'lg';
};

export const PHOTOS: Photo[] = [
  { src: '/images/life-1.jpeg', alt: 'Life photo', caption: 'On the pitch', top: '2%', left: '3%', rotate: -6, size: 'md' },
  { src: '/images/life-cmu.jpeg', alt: 'CMU campus', caption: 'CMU campus', top: '4%', left: '20%', rotate: 4, size: 'lg' },
  { src: '/images/life-2.jpeg', alt: 'Life photo', caption: 'Pittsburgh', top: '0%', left: '41%', rotate: -3, size: 'sm' },
  { src: '/images/life-with-friends.jpeg', alt: 'With friends', caption: 'With friends', top: '3%', left: '55%', rotate: 6, size: 'lg' },
  { src: '/images/life-3.jpeg', alt: 'Life photo', caption: 'Weekend', top: '1%', left: '76%', rotate: -5, size: 'sm' },
  { src: '/images/life-cmu-2.jpeg', alt: 'CMU campus', caption: 'Campus walks', top: '30%', left: '0%', rotate: 5, size: 'sm' },
  { src: '/images/life-4.jpeg', alt: 'Life photo', caption: 'Matchday', top: '33%', left: '16%', rotate: -4, size: 'md' },
  { src: '/images/life-8.JPG', alt: 'Life photo', caption: 'On the road', top: '28%', left: '35%', rotate: 3, size: 'lg' },
  { src: '/images/life-5.jpeg', alt: 'Life photo', caption: 'Golden hour', top: '31%', left: '58%', rotate: -6, size: 'sm' },
  { src: '/images/life-cmu-3.jpeg', alt: 'CMU campus', caption: 'CMU', top: '27%', left: '72%', rotate: 5, size: 'md' },
  { src: '/images/life-6.jpeg', alt: 'Life photo', caption: 'Travel', top: '61%', left: '4%', rotate: -3, size: 'md' },
  { src: '/images/life-11.JPG', alt: 'Panorama', caption: 'The view', top: '64%', left: '24%', rotate: 4, size: 'lg' },
  { src: '/images/life-7.jpeg', alt: 'Life photo', caption: 'Film night', top: '60%', left: '48%', rotate: -5, size: 'sm' },
  { src: '/images/life-9.jpeg', alt: 'Life photo', caption: 'Coffee & code', top: '63%', left: '63%', rotate: 6, size: 'sm' },
  { src: '/images/life-10.jpeg', alt: 'Life photo', caption: 'Somewhere new', top: '59%', left: '80%', rotate: -4, size: 'md' },
];
