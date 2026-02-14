/**
 * Vitest Setup File
 *
 * This file is run before each test file.
 * It sets up the DOM environment and any global utilities.
 */

import { JSDOM } from 'jsdom';
import * as fs from 'fs';
import * as path from 'path';

// CSS content cache
let cssContent = null;

/**
 * Load compiled CSS from dist directory
 */
export function loadCSS() {
  if (!cssContent) {
    const distPath = path.resolve(process.cwd(), 'dist/sqli-design-system.css');

    if (fs.existsSync(distPath)) {
      cssContent = fs.readFileSync(distPath, 'utf-8');
    } else {
      throw new Error(
        'Compiled CSS not found at dist/sqli-design-system.css. Run npm run build:css first.'
      );
    }
  }
  return cssContent;
}

/**
 * Parse CSS and extract all custom properties (CSS variables)
 */
export function extractCSSVariables(css) {
  const variables = {};
  const regex = /--([\w-]+):\s*([^;]+);/g;
  let match;

  while ((match = regex.exec(css)) !== null) {
    const name = `--${match[1]}`;
    const value = match[2].trim();
    variables[name] = value;
  }

  return variables;
}

/**
 * Parse CSS and extract all class selectors
 */
export function extractClassSelectors(css) {
  const classes = new Set();
  // Match class selectors, handling complex selectors
  const regex = /\.([a-zA-Z_][\w-]*)/g;
  let match;

  while ((match = regex.exec(css)) !== null) {
    classes.add(match[1]);
  }

  return Array.from(classes);
}

/**
 * Extract dark mode selectors from CSS
 */
export function extractDarkModeSelectors(css) {
  const darkSelectors = [];
  // Match data-theme="sqli-dark" patterns
  const regex = /\[data-theme=['"]sqli-dark['"]\]\s*([^{]+)/g;
  let match;

  while ((match = regex.exec(css)) !== null) {
    darkSelectors.push(match[1].trim());
  }

  return darkSelectors;
}

/**
 * Create a DOM with the design system CSS loaded
 */
export function createStyledDOM(html = '') {
  const css = loadCSS();
  const dom = new JSDOM(
    `
    <!DOCTYPE html>
    <html data-theme="sqli-light">
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
    </html>
  `,
    { runScripts: 'outside-only' }
  );

  return dom;
}
