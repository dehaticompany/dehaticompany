/**
 * Single source of truth for the visual theme.
 *
 * These values are mirrored as CSS custom properties in `app/globals.css`
 * (`:root`). Change a colour in both places and the whole site follows.
 * The object is exported for the rare case where a value is needed in JS
 * (chart colours, canvas drawing, inline SVG fills, email templates).
 */
export const theme = {
  colors: {
    primary: "#0C2C4B",
    primaryDark: "#071E35",
    primaryLight: "#1B4E7E",
    accent: "#F0A81B",
    accentDark: "#C9860A",
    background: "#FFFFFF",
    surface: "#F1F4F7",
    surfaceDeep: "#E4EAF1",
    text: "#0E1621",
    textLight: "#5A6875",
    border: "#DDE3EA",
    success: "#15803D",
    danger: "#C62828",
  },
  radius: {
    small: "4px",
    medium: "8px",
    large: "14px",
    pill: "999px",
  },
  shadow: {
    card: "0 1px 2px rgba(12, 44, 75, 0.06), 0 8px 24px -16px rgba(12, 44, 75, 0.35)",
    lifted: "0 2px 4px rgba(12, 44, 75, 0.08), 0 18px 40px -22px rgba(12, 44, 75, 0.45)",
  },
  container: {
    maxWidth: "1200px",
    gutter: "1.25rem",
  },
} as const;

export type Theme = typeof theme;
