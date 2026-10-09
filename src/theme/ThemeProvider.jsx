import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import {
  ACCENT_STORAGE_KEY,
  DEFAULT_ACCENT,
  PAGE_COLOR,
  THEME_STORAGE_KEY,
  isAccentId,
  isThemeMode,
} from "./palettes";

const readStored = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

/* Follows the OS preference until the visitor makes an explicit choice. */
const initialMode = () => {
  const stored = readStored(THEME_STORAGE_KEY);
  if (isThemeMode(stored)) return stored;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const initialAccent = () => {
  const stored = readStored(ACCENT_STORAGE_KEY);
  return isAccentId(stored) ? stored : DEFAULT_ACCENT;
};

/**
 * Owns the light/dark mode and accent colour.
 *
 * The values are written to `<html data-theme data-accent>`, which is what the
 * CSS in index.css keys off — components never re-style themselves, they just
 * call `setMode` / `setAccent`. `index.html` applies the same attributes from
 * localStorage before first paint so the page never flashes the wrong theme.
 */
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(initialMode);
  const [accent, setAccent] = useState(initialAccent);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = mode;
    root.dataset.accent = accent;
    root.style.colorScheme = mode;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", PAGE_COLOR[mode]);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, mode);
      window.localStorage.setItem(ACCENT_STORAGE_KEY, accent);
    } catch {
      /* storage disabled (private mode) — the theme still applies this session */
    }
  }, [mode, accent]);

  const toggleMode = useCallback(
    () => setMode((current) => (current === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo(
    () => ({ mode, accent, setMode, setAccent, toggleMode }),
    [mode, accent, toggleMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
