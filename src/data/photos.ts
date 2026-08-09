// Life photo wall — real photos live in /public/images (life-*.jpeg/JPG).
// Rendered as a flush static grid, tiles pieced together edge-to-edge.

export type Photo = {
  src: string;
  alt: string;
  caption: string;
};

export const PHOTOS: Photo[] = [
  { src: '/images/life/life-1.jpeg', alt: 'Life photo', caption: 'On the pitch' },
  { src: '/images/life/life-cmu.jpeg', alt: 'CMU campus', caption: 'CMU campus' },
  { src: '/images/life/life-2.jpeg', alt: 'Life photo', caption: 'Pittsburgh' },
  { src: '/images/life/life-with-friends.jpeg', alt: 'With friends', caption: 'With Aryan' },
  { src: '/images/life/life-with-friends-2.jpeg', alt: 'With friends', caption: 'With Max' },
  { src: '/images/life/life-3.jpeg', alt: 'Life photo', caption: 'Weekend' },
  { src: '/images/life/life-cmu-2.jpeg', alt: 'CMU campus', caption: 'Campus walks' },
  { src: '/images/life/life-4.jpeg', alt: 'Life photo', caption: 'Matchday' },
  { src: '/images/life/life-8.JPG', alt: 'Life photo', caption: 'On the road' },
  { src: '/images/life/life-5.jpeg', alt: 'Life photo', caption: 'Golden hour' },
  { src: '/images/life/life-cmu-3.jpeg', alt: 'CMU campus', caption: 'CMU' },
  { src: '/images/life/life-6.jpeg', alt: 'Life photo', caption: 'Travel' },
  { src: '/images/life/life-11.JPG', alt: 'Panorama', caption: 'The view' },
  { src: '/images/life/life-7.jpeg', alt: 'Life photo', caption: 'Film night' },
  { src: '/images/life/life-9.jpeg', alt: 'Life photo', caption: 'Coffee & code' },
  { src: '/images/life/life-10.jpeg', alt: 'Life photo', caption: 'Somewhere new' },
  { src: '/images/life/life-12.jpeg', alt: 'Life photo', caption: 'Somewhere new' },
];
