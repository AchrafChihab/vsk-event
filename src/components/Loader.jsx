import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const DEFAULT_SESSION_KEY = 'vsk-loader-seen';

function hasSeenLoader(sessionKey) {
  try {
    return window.sessionStorage.getItem(sessionKey) === '1';
  } catch {
    return false;
  }
}

export default function Loader({ onComplete, sessionKey = DEFAULT_SESSION_KEY }) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => !hasSeenLoader(sessionKey));
  const initiallyVisibleRef = useRef(visible);
  const completedRef = useRef(false);
  const previousOverflowRef = useRef('');
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const complete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    document.body.style.overflow = previousOverflowRef.current;
    onCompleteRef.current?.();
  }, []);

  useLayoutEffect(() => {
    if (!initiallyVisibleRef.current) complete();
  }, [complete]);

  useEffect(() => {
    if (!initiallyVisibleRef.current) return undefined;

    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(sessionKey, '1');
      } catch {
        // The loader can still finish when session storage is unavailable.
      }
      setVisible(false);
    }, reduceMotion ? 60 : 1080);

    return () => window.clearTimeout(timer);
  // The duration is sampled once: changing OS motion settings mid-sequence should not restart it.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => () => {
    document.body.style.overflow = previousOverflowRef.current;
  }, []);

  return (
    <AnimatePresence initial={false} onExitComplete={complete}>
      {visible && (
        <motion.div
          className="vsk-loader"
          initial={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: reduceMotion ? 0.08 : 0.5, ease: [0.76, 0, 0.24, 1] }}
          role="status"
          aria-live="polite"
          aria-label="Chargement de VSK Events"
        >
          <motion.div
            className="loader-lockup"
            animate={reduceMotion ? undefined : { scale: [1, 1, 1.025] }}
            transition={{ duration: 0.95, times: [0, 0.78, 1], ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <div className="loader-mark">
              {'VSK'.split('').map((letter, index) => (
                <span className={letter === 'K' ? 'loader-k' : undefined} key={letter}>
                  <motion.span
                    initial={reduceMotion ? false : { y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: reduceMotion ? 0 : 0.48, delay: reduceMotion ? 0 : 0.12 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
              <motion.i
                className="loader-sweep"
                initial={reduceMotion ? false : { x: '-115%' }}
                animate={{ x: '115%' }}
                transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : 0.46, ease: [0.77, 0, 0.175, 1] }}
              />
            </div>
            <motion.span
              className="loader-events"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : 0.28 }}
            >
              EVENTS
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
