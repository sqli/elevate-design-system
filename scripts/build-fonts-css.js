#!/usr/bin/env node

/**
 * Build fonts.css for standalone/CDN usage
 *
 * Generates dist/fonts.css with relative paths (./fonts/...)
 * so fonts work correctly when loaded via CDN or direct file include.
 *
 * Usage:
 *   node scripts/build-fonts-css.js
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const fontsCss = `/**
 * Elevate Design System - TWK Everett Font Declarations
 *
 * Standalone font file for CDN or direct embed usage.
 * Paths are relative to this CSS file location.
 *
 * Usage via CDN:
 *   <link rel="stylesheet" href="https://unpkg.com/@sqli/elevate-design-system/dist/fonts.css" />
 *
 * Usage standalone:
 *   <link rel="stylesheet" href="./fonts.css" />
 *   (Ensure fonts/ folder is in same directory)
 */

/* Light (300) - Body text, paragraphs */
@font-face {
  font-family: 'TWK Everett';
  src:
    url('./fonts/TWKEverett-Light.woff2') format('woff2'),
    url('./fonts/TWKEverett-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Everett';
  src:
    url('./fonts/TWKEverett-LightItalic.woff2') format('woff2'),
    url('./fonts/TWKEverett-LightItalic.woff') format('woff');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

/* Regular (400) - Standard text, UI elements */
@font-face {
  font-family: 'TWK Everett';
  src:
    url('./fonts/TWKEverett-Regular.woff2') format('woff2'),
    url('./fonts/TWKEverett-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Everett';
  src:
    url('./fonts/TWKEverett-RegularItalic.woff2') format('woff2'),
    url('./fonts/TWKEverett-RegularItalic.woff') format('woff');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

/* Medium (500) - Headings, emphasis */
@font-face {
  font-family: 'TWK Everett';
  src:
    url('./fonts/TWKEverett-Medium.woff2') format('woff2'),
    url('./fonts/TWKEverett-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* Bold (700) - Strong emphasis */
@font-face {
  font-family: 'TWK Everett';
  src:
    url('./fonts/TWKEverett-Bold.woff2') format('woff2'),
    url('./fonts/TWKEverett-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
`;

const outputPath = join(__dirname, '..', 'dist', 'fonts.css');
writeFileSync(outputPath, fontsCss, 'utf8');
console.log('Generated dist/fonts.css');
