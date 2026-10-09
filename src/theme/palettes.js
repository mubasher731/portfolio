/**
 * Accent palettes offered by the appearance picker.
 *
 * Each entry only declares the two base hues — the light/dark variants are
 * derived in `index.css`, so a palette automatically stays in step with the
 * active theme. `swatch` exists purely to paint the picker's colour dots.
 */
export const accentPalettes = [
  { id: "cyan", label: "Cyan", swatch: ["#06a2c2", "#45dcff"] },
  { id: "violet", label: "Violet", swatch: ["#7c3aed", "#a78bfa"] },
  { id: "emerald", label: "Emerald", swatch: ["#059669", "#34d399"] },
  { id: "amber", label: "Amber", swatch: ["#d97706", "#fbbf24"] },
  { id: "rose", label: "Rose", swatch: ["#e11d48", "#fb7185"] },
];

/** Offered by the picker; also the validation list for stored values. */
const THEME_MODES = ["light", "dark"];

export const DEFAULT_ACCENT = accentPalettes[0].id;

export const THEME_STORAGE_KEY = "portfolio:theme";
export const ACCENT_STORAGE_KEY = "portfolio:accent";

/** Page background per mode — also fed to the `theme-color` meta tag. */
export const PAGE_COLOR = { dark: "#04060f", light: "#f2f5fb" };

export const isAccentId = (id) => accentPalettes.some((p) => p.id === id);

export const isThemeMode = (mode) => THEME_MODES.includes(mode);
