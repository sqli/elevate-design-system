#!/usr/bin/env node
/* global process */
/**
 * Color Validation Script
 *
 * Validates that CSS colors match the brand reference in SQLI-BRAND-REFERENCE.md.
 * Checks both _tokens.css (HEX values) and _themes.css (OKLCH values).
 *
 * Run with: npm run validate:colors
 *
 * @since v0.10.0-alpha
 */
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

// Brand colors from SQLI-BRAND-REFERENCE.md
const BRAND_COLORS = {
  cream: {
    hex: '#FFFAF0',
    oklch: 'oklch(98.5% 0.012 85)',
    name: 'Cream',
  },
  midnight: {
    hex: '#0F0E2B',
    oklch: 'oklch(15% 0.04 270)',
    name: 'Midnight Blue',
  },
  sky: {
    hex: '#6DA5FF',
    oklch: 'oklch(68% 0.14 250)',
    name: 'Sky Blue',
  },
  cobalt: {
    hex: '#1F24E9',
    oklch: 'oklch(42% 0.28 265)',
    name: 'Cobalt Blue',
  },
};

// Files to validate
const FILES = {
  tokens: 'src/css/_tokens.css',
  themes: 'src/css/_themes.css',
  brand: 'SQLI-BRAND-REFERENCE.md',
};

let errors = [];
let warnings = [];

/**
 * Extract HEX color from content
 */
function extractHex(content, varName) {
  const regex = new RegExp(`--color-sqli-${varName}:\\s*(#[a-fA-F0-9]{6})`, 'i');
  const match = content.match(regex);
  return match ? match[1].toLowerCase() : null;
}

/**
 * Check if OKLCH value exists in theme content
 */
function hasOklch(content, oklchValue) {
  // Normalize spaces for comparison
  const normalized = oklchValue.replace(/\s+/g, '\\s*');
  const regex = new RegExp(normalized, 'i');
  return regex.test(content);
}

/**
 * Extract HEX colors from brand reference markdown
 */
function extractBrandColors(content) {
  const colors = {};
  const lines = content.split('\n');

  for (const line of lines) {
    // Match table rows like: | **Cream** | `#FFFAF0` |
    const match = line.match(/\|\s*\*\*(\w+(?:\s+\w+)?)\*\*\s*\|\s*`(#[a-fA-F0-9]{6})`/);
    if (match) {
      const name = match[1].toLowerCase().replace(/\s+blue$/, '');
      colors[name] = match[2].toLowerCase();
    }
  }

  return colors;
}

/**
 * Main validation function
 */
async function validate() {
  console.log('🔍 Validating SQLI brand colors...\n');

  try {
    // Read files
    const [tokensContent, themesContent, brandContent] = await Promise.all([
      readFile(join(ROOT, FILES.tokens), 'utf8'),
      readFile(join(ROOT, FILES.themes), 'utf8'),
      readFile(join(ROOT, FILES.brand), 'utf8'),
    ]);

    // Extract brand colors from markdown
    const brandColors = extractBrandColors(brandContent);

    console.log('📋 Brand Reference Colors:');
    for (const [name, hex] of Object.entries(brandColors)) {
      console.log(`   ${name}: ${hex}`);
    }
    console.log('');

    // Validate _tokens.css HEX values
    console.log('📄 Checking _tokens.css...');
    for (const [key, color] of Object.entries(BRAND_COLORS)) {
      const tokenHex = extractHex(tokensContent, key);
      const brandHex = brandColors[key] || color.hex.toLowerCase();

      if (!tokenHex) {
        errors.push(`Missing --color-sqli-${key} in _tokens.css`);
      } else if (tokenHex !== brandHex.toLowerCase()) {
        errors.push(
          `Color mismatch for ${color.name}: ` +
            `_tokens.css has ${tokenHex}, brand reference has ${brandHex}`
        );
      } else {
        console.log(`   ✓ --color-sqli-${key}: ${tokenHex}`);
      }
    }
    console.log('');

    // Validate _themes.css OKLCH values
    console.log('📄 Checking _themes.css OKLCH values...');
    for (const color of Object.values(BRAND_COLORS)) {
      // Check if the OKLCH pattern exists in themes
      if (!hasOklch(themesContent, color.oklch)) {
        warnings.push(`OKLCH value for ${color.name} (${color.oklch}) not found in _themes.css`);
      } else {
        console.log(`   ✓ ${color.name}: ${color.oklch}`);
      }
    }
    console.log('');

    // Check for hardcoded HEX in themes (should use OKLCH)
    console.log('📄 Checking for hardcoded HEX in _themes.css...');
    const hexInThemes = themesContent.match(/#[a-fA-F0-9]{6}/g) || [];
    if (hexInThemes.length > 0) {
      warnings.push(
        `Found ${hexInThemes.length} HEX color(s) in _themes.css. ` +
          `Consider using OKLCH for theme definitions.`
      );
      console.log(`   ⚠ Found ${hexInThemes.length} HEX values (use OKLCH for themes)`);
    } else {
      console.log('   ✓ No HEX colors in theme definitions');
    }
    console.log('');

    // Report results
    if (errors.length > 0) {
      console.log('❌ ERRORS:');
      errors.forEach((e) => console.log(`   • ${e}`));
      console.log('');
    }

    if (warnings.length > 0) {
      console.log('⚠️  WARNINGS:');
      warnings.forEach((w) => console.log(`   • ${w}`));
      console.log('');
    }

    if (errors.length === 0 && warnings.length === 0) {
      console.log('✅ All colors validated successfully!\n');
      return 0;
    } else if (errors.length === 0) {
      console.log('✅ Validation passed with warnings.\n');
      return 0;
    } else {
      console.log('❌ Validation failed. Please fix the errors above.\n');
      return 1;
    }
  } catch (error) {
    console.error('❌ Validation error:', error.message);
    return 1;
  }
}

// Run validation
validate().then((exitCode) => {
  process.exit(exitCode);
});
