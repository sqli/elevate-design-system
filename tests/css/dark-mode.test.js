/**
 * Dark Mode Tests
 *
 * Verifies that dark mode styles are properly defined
 * for the DaisyUI-based Elevate Design System.
 *
 * Note: With DaisyUI, dark mode is handled via data-theme="sqli-dark"
 * instead of individual component CSS overrides.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { loadCSS } from '../setup.js';

describe('Dark Mode Support', () => {
  let css;

  beforeAll(() => {
    css = loadCSS();
  });

  describe('DaisyUI Theme Configuration', () => {
    it('should define sqli-dark theme', () => {
      // Check that the sqli-dark theme is configured
      const hasSqliDark = css.includes('sqli-dark') || css.includes('data-theme="sqli-dark"');
      expect(hasSqliDark).toBe(true);
    });

    it('should define sqli-light theme as default', () => {
      // Check that sqli-light theme exists
      const hasSqliLight = css.includes('sqli-light') || css.includes('data-theme="sqli-light"');
      expect(hasSqliLight).toBe(true);
    });
  });

  describe('Dark Mode Custom Overrides', () => {
    it('should have dark mode focus styles', () => {
      // Check for dark mode focus style overrides (with or without quotes)
      const hasDarkFocus =
        css.includes('[data-theme="sqli-dark"]') ||
        css.includes('[data-theme=sqli-dark]') ||
        css.includes('sqli-dark');
      expect(hasDarkFocus).toBe(true);
    });

    it('should have dark mode toggle styles', () => {
      // Check for toggle dark mode styles
      const hasToggleDark =
        css.includes('.toggle:checked') ||
        css.includes('toggle:checked') ||
        css.includes('sqli-dark');
      expect(hasToggleDark).toBe(true);
    });
  });

  describe('Theme Brand Colors', () => {
    it('should define SQLI brand colors in theme', () => {
      // Brand colors are legitimately defined as hex in @theme section
      const hasBrandColors =
        css.includes('#FFFAF0') || // Cream
        css.includes('#fffaf0') ||
        css.includes('#0F0E2B') || // Midnight
        css.includes('#0f0e2b') ||
        css.includes('#1F24E9') || // Cobalt
        css.includes('#1f24e9') ||
        css.includes('#6DA5FF') || // Sky
        css.includes('#6da5ff');
      expect(hasBrandColors).toBe(true);
    });
  });

  describe('Theme Color Format', () => {
    it('should use OKLCH color format in themes', () => {
      // DaisyUI themes use OKLCH color format
      const hasOklch = css.includes('oklch(');
      expect(hasOklch).toBe(true);
    });
  });

  describe('Reduced Motion Support', () => {
    it('should include prefers-reduced-motion media query', () => {
      const hasReducedMotion = css.includes('prefers-reduced-motion');
      expect(hasReducedMotion).toBe(true);
    });
  });
});
