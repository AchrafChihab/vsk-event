import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

export const THEME_STORAGE_KEY = 'vsk-theme';

const isTheme = (value) => value === 'dark' || value === 'light';
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function readStoredTheme() {
  if (typeof window === 'undefined') return null;

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(storedTheme) ? storedTheme : null;
  } catch {
    return null;
  }
}

export function getInitialTheme() {
  const storedTheme = readStoredTheme();
  if (storedTheme) return storedTheme;
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme) {
  if (typeof document === 'undefined' || !isTheme(theme)) return;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    theme === 'dark' ? '#070708' : '#f3f0ea',
  );
}

export default function useTheme() {
  const [theme, setThemeState] = useState(getInitialTheme);
  const [hasUserPreference, setHasUserPreference] = useState(() => Boolean(readStoredTheme()));

  useIsomorphicLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (hasUserPreference || !window.matchMedia) return undefined;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const followSystemTheme = (event) => setThemeState(event.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', followSystemTheme);
    return () => mediaQuery.removeEventListener('change', followSystemTheme);
  }, [hasUserPreference]);

  const setTheme = useCallback((nextTheme) => {
    if (!isTheme(nextTheme)) return;
    setThemeState(nextTheme);
    setHasUserPreference(true);
    applyTheme(nextTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Storage can be unavailable in strict privacy modes; the in-memory theme still works.
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  return { theme, setTheme, toggleTheme };
}
