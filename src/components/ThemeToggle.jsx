import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const iconMotion = {
  initial: { opacity: 0, rotate: -35, scale: 0.82 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  exit: { opacity: 0, rotate: 35, scale: 0.82 },
};

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const isDark = theme === 'dark';
  const label = isDark ? 'Activer le thème clair' : 'Activer le thème sombre';

  return (
    <button
      className={`theme-toggle ${className}`.trim()}
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={theme}
          className="theme-toggle-icon"
          initial={reduceMotion ? false : iconMotion.initial}
          animate={iconMotion.animate}
          exit={reduceMotion ? undefined : iconMotion.exit}
          transition={{ duration: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          {isDark ? <Sun /> : <Moon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
