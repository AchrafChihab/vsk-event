import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  revealTextVariants,
  revealVariants,
  staggerContainerVariants,
} from '../motion/variants';

/**
 * Returns true once the element has entered the viewport (fires once, never resets).
 * Includes a safety timeout so content is never permanently hidden if the
 * IntersectionObserver fails to fire (e.g. after SPA navigation, hidden tabs,
 * or browser quirks). Safety timeout is 1200 ms — long enough to avoid
 * colliding with normal scroll-triggered reveals, short enough to be imperceptible.
 */
function useIsInView(ref, { threshold = 0.1, rootMargin = '0px 0px -20px 0px' } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    // No element — bail out and mark visible so content is never hidden.
    if (!el) {
      setInView(true);
      return undefined;
    }

    // Safety net: reveal content after 1200 ms regardless of observer status.
    const safetyTimer = setTimeout(() => setInView(true), 1200);

    // If the element is already in the viewport on mount (above-fold content),
    // reveal it immediately without waiting for the IntersectionObserver.
    const rect = el.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0;

    if (alreadyVisible) {
      clearTimeout(safetyTimer);
      setInView(true);
      return () => clearTimeout(safetyTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(safetyTimer);
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return inView;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 28,
  duration = 0.72,
  ...props
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useIsInView(ref);

  return (
    <motion.div
      ref={ref}
      {...props}
      className={className}
      initial={reduced ? false : 'hidden'}
      animate={inView || reduced ? 'visible' : 'hidden'}
      custom={{ delay, direction, distance, duration, reduced }}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  children,
  className,
  delay = 0,
  duration = 0.78,
  style,
  ...props
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useIsInView(ref);

  return (
    <div ref={ref} {...props} className={className} style={{ overflow: 'hidden', ...style }}>
      <motion.div
        initial={reduced ? false : 'hidden'}
        animate={inView || reduced ? 'visible' : 'hidden'}
        custom={{ delay, duration, reduced }}
        variants={revealTextVariants}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function RevealImage({
  children,
  className,
  delay = 0,
  duration = 0.88,
  ...props
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useIsInView(ref, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });

  return (
    <div
      ref={ref}
      {...props}
      className={className}
      style={{ position: 'relative', ...props.style }}
    >
      {children}
      {!reduced && (
        <motion.div
          aria-hidden="true"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: inView ? 0 : 1 }}
          transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--reveal-cover, var(--bg, #070708))',
            transformOrigin: 'top',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  ...props
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useIsInView(ref);

  return (
    <motion.div
      ref={ref}
      {...props}
      className={className}
      initial={reduced ? false : 'hidden'}
      animate={inView || reduced ? 'visible' : 'hidden'}
      custom={{ delay, reduced, stagger }}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}
