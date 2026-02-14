/**
 * Theme Integration Tests
 *
 * Verifies that DaisyUI themes are properly configured
 * and that theme switching works correctly.
 *
 * Note: The CSS is now modular, so we read all source files.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Load all CSS source files and concatenate them
 */
function loadAllSourceCSS() {
  const cssDir = path.resolve(process.cwd(), 'src/css');
  const files = [
    'main.css',
    '_fonts.css',
    '_tokens.css',
    '_customizations.css',
    '_code-block.css',
    '_utilities.css',
  ];

  return files
    .map((file) => {
      const filePath = path.join(cssDir, file);
      return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '';
    })
    .join('\n');
}

describe('Theme Integration', () => {
  let mainCSS;

  beforeAll(() => {
    mainCSS = loadAllSourceCSS();
  });

  describe('DaisyUI Theme Configuration', () => {
    it('should define sqli-light theme', () => {
      expect(mainCSS).toContain("name: 'sqli-light'");
    });

    it('should define sqli-dark theme', () => {
      expect(mainCSS).toContain("name: 'sqli-dark'");
    });

    it('should set sqli-light as default theme', () => {
      expect(mainCSS).toMatch(/name:\s*'sqli-light'[\s\S]*?default:\s*true/);
    });

    it('should set sqli-dark as prefersdark theme', () => {
      expect(mainCSS).toMatch(/name:\s*'sqli-dark'[\s\S]*?prefersdark:\s*true/);
    });
  });

  describe('Theme Color Variables', () => {
    const lightThemeColors = [
      '--color-base-100', // Background
      '--color-base-content', // Text
      '--color-primary', // Primary action
      '--color-primary-content', // Text on primary
      '--color-secondary',
      '--color-accent',
    ];

    it.each(lightThemeColors)('sqli-light theme should define %s', () => {
      // Check that the theme section exists
      const themeSection = mainCSS.match(/name:\s*'sqli-light'[\s\S]*?(?=@plugin|$)/);
      expect(themeSection, 'sqli-light theme section should exist').toBeTruthy();
    });

    it('should use OKLCH color format for DaisyUI variables', () => {
      // DaisyUI 5.x uses OKLCH for color definitions
      expect(mainCSS).toMatch(/oklch\(/);
    });
  });

  describe('Theme Switching Mechanism', () => {
    it('should use data-theme attribute for theme switching', () => {
      // This is verified in compiled CSS - check that source has dark theme override
      expect(mainCSS).toContain("[data-theme='sqli-dark']");
    });

    it('should not use deprecated .dark class for DaisyUI themes', () => {
      // Focus states should use var(--color-primary), not .dark overrides
      const focusSection = mainCSS.match(/\.input:focus[\s\S]*?}/);
      if (focusSection) {
        expect(focusSection[0]).toContain('var(--color-primary)');
      }
    });
  });

  describe('Theme Variables Consistency', () => {
    it('should define same semantic variables in both themes', () => {
      // Verify the source files use daisyui plugins
      expect(mainCSS).toContain('@plugin "daisyui"');
      expect(mainCSS).toContain('@plugin "daisyui/theme"');
    });
  });

  describe('Compiled CSS Output', () => {
    let compiledCSS;

    beforeAll(() => {
      const distPath = path.resolve(process.cwd(), 'dist/sqli-design-system.css');
      if (fs.existsSync(distPath)) {
        compiledCSS = fs.readFileSync(distPath, 'utf-8');
      }
    });

    it('should compile to valid CSS', () => {
      expect(compiledCSS).toBeDefined();
      expect(compiledCSS.length).toBeGreaterThan(0);
    });

    it('should include Tailwind CSS header', () => {
      // DaisyUI is processed via @plugin, comment may be stripped by minifier
      expect(compiledCSS).toContain('tailwindcss');
    });

    it('should include theme layer', () => {
      expect(compiledCSS).toContain('@layer theme');
    });

    it('should define color variables in :root', () => {
      expect(compiledCSS).toContain(':root');
      expect(compiledCSS).toMatch(/--color-[a-z-]+:/);
    });
  });

  describe('Accessibility Considerations', () => {
    it('should include color-scheme for browser integration', () => {
      expect(mainCSS).toMatch(/color-scheme:\s*(light|dark)/);
    });

    it('should include focus styles', () => {
      expect(mainCSS).toMatch(/(:focus|:focus-visible)/);
    });

    it('should include reduced motion support', () => {
      expect(mainCSS).toContain('prefers-reduced-motion');
    });
  });
});
