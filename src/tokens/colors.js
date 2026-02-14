/**
 * SQLI Brand Colors - Single Source of Truth
 *
 * All files that reference SQLI brand colors import from this module.
 * When modifying a color, only this file needs to change.
 *
 * Color format reference:
 * - HEX: Standard format for Tailwind utilities, chart themes, standalone CSS variables
 * - OKLCH: Perceptually uniform format used by DaisyUI theme definitions in main.css
 *
 * @see SQLI-BRAND-REFERENCE.md for brand guidelines
 * @see https://oklch.com for HEX <-> OKLCH conversion
 * @since v0.7.0-alpha
 */

export const colors = {
  cream: { hex: '#FFFAF0', oklch: 'oklch(98.5% 0.012 85)' },
  midnight: { hex: '#0F0E2B', oklch: 'oklch(15% 0.04 270)' },
  cobalt: { hex: '#1F24E9', oklch: 'oklch(42% 0.28 265)' },
  sky: { hex: '#6DA5FF', oklch: 'oklch(68% 0.14 250)' },
  cobaltHover: { hex: '#1418C8', oklch: 'oklch(38% 0.26 265)' },
  skyHover: { hex: '#5A96F0', oklch: 'oklch(65% 0.12 250)' },
};

/**
 * Semantic color mappings per theme.
 * Maps brand colors to their role in each theme context.
 */
export const themes = {
  light: {
    background: colors.cream,
    text: colors.midnight,
    primary: colors.cobalt,
    primaryHover: colors.cobaltHover,
    accent: colors.sky,
    accentHover: colors.skyHover,
  },
  dark: {
    background: colors.midnight,
    text: colors.cream,
    primary: colors.sky,
    primaryHover: colors.skyHover,
    accent: colors.cobalt,
    accentHover: colors.cobaltHover,
  },
};
