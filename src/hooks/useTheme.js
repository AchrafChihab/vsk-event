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
  return storedTheme === 'light' ? 'light' : 'dark';
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

  useIsomorphicLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((nextTheme) => {
    if (!isTheme(nextTheme)) return;
    setThemeState(nextTheme);
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
