/**
 * Elevate Design System - Asset Paths
 *
 * Provides importable paths to all brand assets (logos, favicons).
 * These resolve to files inside the package's dist/ directory.
 *
 * Usage with a bundler (Vite, Webpack, Next.js, etc.):
 *
 *   import { logos, favicons } from '@sqli/elevate-design-system/assets';
 *
 *   // Use in an img tag
 *   <img src={logos.midnight.svg} alt="SQLI" />
 *
 *   // Use as favicon
 *   <link rel="icon" href={favicons.default} />
 *
 * Note: These export path strings relative to the package root.
 * Most bundlers resolve node_modules paths automatically.
 * If your bundler does not, use the `resolve()` helper to get absolute paths.
 *
 * @since v0.7.0-alpha
 */

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', '..', 'dist');

/**
 * Resolve an asset path to an absolute filesystem path.
 * Useful for frameworks that need absolute paths (e.g., Next.js public dir copy scripts).
 *
 * @param {string} relativePath - A path from the logos/favicons/fonts objects
 * @returns {string} Absolute path to the asset file
 */
export function resolve(relativePath) {
  return join(DIST, relativePath);
}

/**
 * SQLI Logo paths.
 * Each logo is available in SVG and PNG formats.
 *
 * Theme guidance:
 * - Use `midnight` on light backgrounds (sqli-light theme)
 * - Use `cream` on dark backgrounds (sqli-dark theme)
 * - Use `sky` for accent contexts
 * - `withExclusion` variants include the required clear space around the logo
 */
export const logos = {
  cream: {
    svg: 'logos/Logo_cream.svg',
    png: 'logos/Logo_cream.png',
  },
  midnight: {
    svg: 'logos/Logo_midnight.svg',
    png: 'logos/Logo_midnight.png',
  },
  sky: {
    svg: 'logos/Logo_sky.svg',
    png: 'logos/Logo_sky.png',
  },
  creamWithExclusion: {
    svg: 'logos/Logo_cream_with_exclusion.svg',
    png: 'logos/Logo_cream_with_exclusion.png',
  },
  midnightWithExclusion: {
    svg: 'logos/Logo_midnight_with_exclusion.svg',
    png: 'logos/Logo_midnight_with_exclusion.png',
  },
  skyWithExclusion: {
    svg: 'logos/Logo_sky_with_exclusion.svg',
    png: 'logos/Logo_sky_with_exclusion.png',
  },
};

/**
 * SQLI Ascender graphic paths (the "sqli" text mark).
 * Available in all four brand colors.
 */
export const ascenders = {
  cobalt: {
    svg: 'logos/Ascenders-cobalt.svg',
    png: 'logos/Ascenders-cobalt-rgb.png',
  },
  cream: {
    svg: 'logos/Ascenders-cream.svg',
    png: 'logos/Ascenders-cream-rgb.png',
  },
  midnight: {
    svg: 'logos/Ascenders-midnight.svg',
    png: 'logos/Ascenders-midnight-rgb.png',
  },
  sky: {
    svg: 'logos/Ascenders-sky.svg',
    png: 'logos/Ascenders-sky-rgb.png',
  },
};

/**
 * Favicon paths for browser tab icons.
 * Use the color variant that matches your theme or brand context.
 */
export const favicons = {
  default: 'logos/favicon.svg',
  cream: 'logos/favicon-cream.svg',
  midnight: 'logos/favicon-midnight.svg',
  sky: 'logos/favicon-sky.svg',
};

/**
 * Font file paths for manual font loading or preloading.
 * Prefer importing fonts.css instead for automatic @font-face declarations.
 *
 * @example
 * // Preload the main font for performance
 * <link rel="preload" href={fonts.regular.woff2} as="font" type="font/woff2" crossorigin />
 */
export const fonts = {
  light: {
    woff2: 'fonts/TWKEverett-Light.woff2',
    woff: 'fonts/TWKEverett-Light.woff',
  },
  lightItalic: {
    woff2: 'fonts/TWKEverett-LightItalic.woff2',
    woff: 'fonts/TWKEverett-LightItalic.woff',
  },
  regular: {
    woff2: 'fonts/TWKEverett-Regular.woff2',
    woff: 'fonts/TWKEverett-Regular.woff',
  },
  regularItalic: {
    woff2: 'fonts/TWKEverett-RegularItalic.woff2',
    woff: 'fonts/TWKEverett-RegularItalic.woff',
  },
  medium: {
    woff2: 'fonts/TWKEverett-Medium.woff2',
    woff: 'fonts/TWKEverett-Medium.woff',
  },
  bold: {
    woff2: 'fonts/TWKEverett-Bold.woff2',
    woff: 'fonts/TWKEverett-Bold.woff',
  },
};
