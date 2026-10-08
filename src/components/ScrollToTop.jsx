import { useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { key } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map());
  const previousKey = useRef(key);

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previousRestoration; };
  }, []);

  useLayoutEffect(() => {
    positions.current.set(previousKey.current, window.scrollY);
    const nextY = navigationType === 'POP' ? positions.current.get(key) ?? 0 : 0;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: nextY, left: 0, behavior: 'auto' });
    window.requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      document.querySelector('#main-content')?.focus({ preventScroll: true });
    });
    previousKey.current = key;
  }, [key, navigationType]);

  return null;
}
