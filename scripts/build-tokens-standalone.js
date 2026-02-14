#!/usr/bin/env node
/**
 * Build Tokens Standalone CSS
 *
 * Generates dist/tokens.css from the single source of truth (src/tokens/colors.js).
 * This file provides CSS custom properties for consumers who do not use Tailwind CSS.
 *
 * Run with: npm run build:tokens
 *
 * @since v0.7.0-alpha
 */
import { writeFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { colors } from '../src/tokens/colors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const OUTPUT = join(ROOT, 'dist', 'tokens.css');

function generateTokensCSS() {
  return `/**
 * Elevate Design System - Standalone Tokens
 *
 * CSS custom properties for SQLI brand colors and typography.
 * Use this file when you only need the design tokens without DaisyUI components.
 *
 * Usage:
 *   @import '@sqli/elevate-design-system/tokens';
 *
 * Generated from src/tokens/colors.js - DO NOT EDIT MANUALLY.
 */

:root {
  /* ==========================================================================
     Brand Colors (HEX)
     ========================================================================== */

  /* Primary backgrounds */
  --color-sqli-cream: ${colors.cream.hex.toLowerCase()};
  --color-sqli-midnight: ${colors.midnight.hex.toLowerCase()};

  /* Interactive colors */
  --color-sqli-cobalt: ${colors.cobalt.hex.toLowerCase()};
  --color-sqli-sky: ${colors.sky.hex.toLowerCase()};

  /* Hover states */
  --color-sqli-cobalt-hover: ${colors.cobaltHover.hex.toLowerCase()};
  --color-sqli-sky-hover: ${colors.skyHover.hex.toLowerCase()};

  /* ==========================================================================
     Brand Colors (OKLCH) - For advanced color manipulation
     ========================================================================== */

  --color-sqli-cream-oklch: ${colors.cream.oklch};
  --color-sqli-midnight-oklch: ${colors.midnight.oklch};
  --color-sqli-cobalt-oklch: ${colors.cobalt.oklch};
  --color-sqli-sky-oklch: ${colors.sky.oklch};

  /* ==========================================================================
     Typography
     ========================================================================== */

  /* Font families */
  --font-family-sans: 'TWK Everett', system-ui, -apple-system, sans-serif;
  --font-family-everett: 'TWK Everett', system-ui, sans-serif;

  /* Font weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* ==========================================================================
     Semantic Colors (Light Theme Defaults)
     ========================================================================== */

  --color-background: var(--color-sqli-cream);
  --color-text: var(--color-sqli-midnight);
  --color-primary: var(--color-sqli-cobalt);
  --color-primary-hover: var(--color-sqli-cobalt-hover);
  --color-accent: var(--color-sqli-sky);
  --color-accent-hover: var(--color-sqli-sky-hover);
}

/* ==========================================================================
   Dark Theme Override
   ========================================================================== */

[data-theme='sqli-dark'],
[data-theme='dark'] {
  --color-background: var(--color-sqli-midnight);
  --color-text: var(--color-sqli-cream);
  --color-primary: var(--color-sqli-sky);
  --color-primary-hover: var(--color-sqli-sky-hover);
  --color-accent: var(--color-sqli-cobalt);
  --color-accent-hover: var(--color-sqli-cobalt-hover);
}

/* System preference support */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='sqli-light'], [data-theme='light']) {
    --color-background: var(--color-sqli-midnight);
    --color-text: var(--color-sqli-cream);
    --color-primary: var(--color-sqli-sky);
    --color-primary-hover: var(--color-sqli-sky-hover);
    --color-accent: var(--color-sqli-cobalt);
    --color-accent-hover: var(--color-sqli-cobalt-hover);
  }
}
`;
}

async function build() {
  await mkdir(join(ROOT, 'dist'), { recursive: true });
  const css = generateTokensCSS();
  await writeFile(OUTPUT, css, 'utf8');
  console.log('Generated dist/tokens.css from src/tokens/colors.js');
}

build().catch((err) => {
  console.error('Failed to build tokens:', err.message);
  process.exit(1);
});
