export const MOTION_EASE = [0.22, 1, 0.36, 1];

const enterTransition = ({ delay = 0, duration = 0.72, reduced = false } = {}) => ({
  delay: reduced ? 0 : delay,
  duration: reduced ? 0 : duration,
  ease: MOTION_EASE,
});

const directionalOffset = (direction = 'up', distance = 28) => {
  const offsets = {
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    up: { y: distance },
  };

  return offsets[direction] ?? offsets.up;
};

export const revealVariants = {
  hidden: ({ direction, distance, reduced } = {}) => (
    reduced
      ? { opacity: 1, x: 0, y: 0 }
      : { opacity: 0, ...directionalOffset(direction, distance) }
  ),
  visible: (options = {}) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: enterTransition(options),
  }),
};

export const revealTextVariants = {
  hidden: ({ reduced } = {}) => (
    reduced
      ? { opacity: 1, y: '0%' }
      : { opacity: 0, y: '108%' }
  ),
  visible: (options = {}) => ({
    opacity: 1,
    y: '0%',
    transition: enterTransition({ duration: 0.78, ...options }),
  }),
};

export const revealImageVariants = {
  hidden: ({ reduced } = {}) => (
    reduced
      ? { opacity: 1, scale: 1, y: 0 }
      : { opacity: 0, scale: 1.03, y: 14 }
  ),
  visible: (options = {}) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: enterTransition({ duration: 0.88, ...options }),
  }),
};

export const staggerContainerVariants = {
  hidden: {},
  visible: ({ delay = 0, reduced = false, stagger = 0.08 } = {}) => ({
    transition: reduced
      ? { delayChildren: 0, staggerChildren: 0 }
      : { delayChildren: delay, staggerChildren: stagger },
  }),
};

export const staggerItemVariants = revealVariants;
