import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

/**
 * Reads and updates the active appearance.
 *
 * @returns {{
 *   mode: "light" | "dark",
 *   accent: string,
 *   setMode: (mode: "light" | "dark") => void,
 *   setAccent: (accent: string) => void,
 *   toggleMode: () => void,
 * }}
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a <ThemeProvider>");
  }
  return context;
};
