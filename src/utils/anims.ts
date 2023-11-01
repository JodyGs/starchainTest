import { Variants } from 'framer-motion';

export const ITEM_VARIANTS: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.9,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'tween',
    },
  },
};

export const CONTAINER_VARIANTS: Variants = {
  onscreen: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2, velocity: 10 },
  },
  offscreen: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
