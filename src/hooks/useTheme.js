import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'clayo-theme';

function getInitialTheme() {
  if (typeof document === 'undefined') return 'light';
  // The inline script in index.html sets the class before paint; trust it.
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable (private mode) — theme still applies for session */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  );

  return { theme, isDark: theme === 'dark', toggleTheme };
}
