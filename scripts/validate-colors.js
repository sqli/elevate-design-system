#!/usr/bin/env node
/**
 * Color Validation Script
 *
 * Validates that CSS colors across the codebase match the single source of truth
 * defined in src/tokens/colors.js and the brand reference in SQLI-BRAND-REFERENCE.md.
 *
 * Checks:
 * - _tokens.css HEX values match colors.js
 * - main.css OKLCH values match colors.js
 * - SQLI-BRAND-REFERENCE.md HEX values match colors.js
 *
 * Run with: npm run validate:colors
 *
 * @since v0.7.0-alpha
 */
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { colors } from '../src/tokens/colors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const FILES = {
  tokens: 'src/css/_tokens.css',
  main: 'src/css/main.css',
  brand: 'SQLI-BRAND-REFERENCE.md',
};

let errors = [];
let warnings = [];

/**
 * Extract HEX color from CSS content by variable name
 */
function extractHex(content, varName) {
  const regex = new RegExp(`--color-sqli-${varName}:\\s*(#[a-fA-F0-9]{6})`, 'i');
  const match = content.match(regex);
  return match ? match[1].toLowerCase() : null;
}

/**
 * Check if OKLCH value exists in content
 */
function hasOklch(content, oklchValue) {
  // Escape regex special chars (parentheses, dots, percent) then allow flexible whitespace
  const escaped = oklchValue.replace(/[.*+?^${}()|[\]\\%]/g, '\\$&');
  const normalized = escaped.replace(/\s+/g, '\\s*');
  const regex = new RegExp(normalized, 'i');
  return regex.test(content);
}

/**
 * Extract HEX colors from brand reference markdown
 */
function extractBrandColors(content) {
  const brandColors = {};
  const lines = content.split('\n');

  for (const line of lines) {
    const match = line.match(/\|\s*\*\*(\w+(?:\s+\w+)?)\*\*\s*\|\s*`(#[a-fA-F0-9]{6})`/);
    if (match) {
      const name = match[1].toLowerCase().replace(/\s+blue$/, '');
      brandColors[name] = match[2].toLowerCase();
    }
  }

  return brandColors;
}

/**
 * Map colors.js keys to CSS variable names
 */
const COLOR_MAP = {
  cream: { cssVar: 'cream', name: 'Cream' },
  midnight: { cssVar: 'midnight', name: 'Midnight Blue' },
  sky: { cssVar: 'sky', name: 'Sky Blue' },
  cobalt: { cssVar: 'cobalt', name: 'Cobalt Blue' },
  cobaltHover: { cssVar: 'cobalt-hover', name: 'Cobalt Hover' },
  skyHover: { cssVar: 'sky-hover', name: 'Sky Hover' },
};

async function validate() {
  console.log('Validating SQLI brand colors...\n');
  console.log('Source of truth: src/tokens/colors.js\n');

  try {
    const filesToRead = [
      readFile(join(ROOT, FILES.tokens), 'utf8'),
      readFile(join(ROOT, FILES.main), 'utf8'),
      readFile(join(ROOT, FILES.brand), 'utf8'),
    ];

    const [tokensContent, mainContent, brandContent] = await Promise.all(filesToRead);

    // Show reference colors from SSOT
    console.log('Reference colors (colors.js):');
    for (const [key, value] of Object.entries(colors)) {
      console.log(`   ${key}: ${value.hex} / ${value.oklch}`);
    }
    console.log('');

    // Validate _tokens.css HEX values
    console.log('Checking _tokens.css...');
    for (const [key, { cssVar, name }] of Object.entries(COLOR_MAP)) {
      const tokenHex = extractHex(tokensContent, cssVar);
      const expectedHex = colors[key].hex.toLowerCase();

      if (!tokenHex) {
        errors.push(`Missing --color-sqli-${cssVar} in _tokens.css`);
      } else if (tokenHex !== expectedHex) {
        errors.push(
          `Color mismatch for ${name}: _tokens.css has ${tokenHex}, colors.js has ${expectedHex}`
        );
      } else {
        console.log(`   OK --color-sqli-${cssVar}: ${tokenHex}`);
      }
    }
    console.log('');

    // Validate main.css OKLCH values (DaisyUI theme definitions)
    console.log('Checking main.css OKLCH values...');
    for (const [key, color] of Object.entries(colors)) {
      if (hasOklch(mainContent, color.oklch)) {
        console.log(`   OK ${COLOR_MAP[key]?.name || key}: ${color.oklch}`);
      } else {
        warnings.push(
          `OKLCH value for ${COLOR_MAP[key]?.name || key} (${color.oklch}) not found in main.css`
        );
      }
    }
    console.log('');

    // Validate brand reference matches SSOT
    const brandColors = extractBrandColors(brandContent);
    if (Object.keys(brandColors).length > 0) {
      console.log('Checking SQLI-BRAND-REFERENCE.md...');
      for (const [brandKey, brandHex] of Object.entries(brandColors)) {
        const ssotColor = colors[brandKey];
        if (ssotColor && ssotColor.hex.toLowerCase() !== brandHex) {
          errors.push(
            `Brand reference mismatch for ${brandKey}: SQLI-BRAND-REFERENCE.md has ${brandHex}, colors.js has ${ssotColor.hex.toLowerCase()}`
          );
        } else if (ssotColor) {
          console.log(`   OK ${brandKey}: ${brandHex}`);
        }
      }
      console.log('');
    }

    // Report results
    if (errors.length > 0) {
      console.log('ERRORS:');
      errors.forEach((e) => console.log(`   - ${e}`));
      console.log('');
    }

    if (warnings.length > 0) {
      console.log('WARNINGS:');
      warnings.forEach((w) => console.log(`   - ${w}`));
      console.log('');
    }

    if (errors.length === 0 && warnings.length === 0) {
      console.log('All colors validated successfully!\n');
      return 0;
    } else if (errors.length === 0) {
      console.log('Validation passed with warnings.\n');
      return 0;
    } else {
      console.log('Validation failed. Please fix the errors above.\n');
      return 1;
    }
  } catch (error) {
    console.error('Validation error:', error.message);
    return 1;
  }
}

validate().then((exitCode) => {
  process.exit(exitCode);
});
