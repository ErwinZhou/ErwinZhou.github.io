// Life photo wall — real photos live in /public/images (life-*.jpeg/JPG).
// Rendered as a flush static grid, tiles pieced together edge-to-edge.

export type Photo = {
  src: string;
  alt: string;
  caption: string;
};

export const PHOTOS: Photo[] = [
  { src: '/images/life-1.jpeg', alt: 'Life photo', caption: 'On the pitch' },
  { src: '/images/life-cmu.jpeg', alt: 'CMU campus', caption: 'CMU campus' },
  { src: '/images/life-2.jpeg', alt: 'Life photo', caption: 'Pittsburgh' },
  { src: '/images/life-with-friends.jpeg', alt: 'With friends', caption: 'With Aryan' },
  { src: '/images/life-with-friends-2.jpeg', alt: 'With friends', caption: 'With Max' },
  { src: '/images/life-3.jpeg', alt: 'Life photo', caption: 'Weekend' },
  { src: '/images/life-cmu-2.jpeg', alt: 'CMU campus', caption: 'Campus walks' },
  { src: '/images/life-4.jpeg', alt: 'Life photo', caption: 'Matchday' },
  { src: '/images/life-8.JPG', alt: 'Life photo', caption: 'On the road' },
  { src: '/images/life-5.jpeg', alt: 'Life photo', caption: 'Golden hour' },
  { src: '/images/life-cmu-3.jpeg', alt: 'CMU campus', caption: 'CMU' },
  { src: '/images/life-6.jpeg', alt: 'Life photo', caption: 'Travel' },
  { src: '/images/life-11.JPG', alt: 'Panorama', caption: 'The view' },
  { src: '/images/life-7.jpeg', alt: 'Life photo', caption: 'Film night' },
  { src: '/images/life-9.jpeg', alt: 'Life photo', caption: 'Coffee & code' },
  { src: '/images/life-10.jpeg', alt: 'Life photo', caption: 'Somewhere new' },
  { src: '/images/life-12.jpeg', alt: 'Life photo', caption: 'Somewhere new' },
];
