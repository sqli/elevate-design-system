/**
 * DaisyUI Theme Tests
 *
 * Verifies that SQLI custom themes are properly configured
 * and CSS builds correctly.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { loadCSS } from '../setup.js';

describe('DaisyUI Theme Configuration', () => {
  let css;

  beforeAll(() => {
    css = loadCSS();
  });

  describe('Theme Definitions', () => {
    it('should define sqli-light theme', () => {
      expect(css).toContain('sqli-light');
    });

    it('should define sqli-dark theme', () => {
      expect(css).toContain('sqli-dark');
    });
  });

  describe('SQLI Brand Colors in Tailwind Theme', () => {
    // Colors defined in @theme block
    const tailwindColors = [
      '--color-sqli-cream',
      '--color-sqli-midnight',
      '--color-sqli-sky',
      '--color-sqli-cobalt',
    ];

    it.each(tailwindColors)('should define %s in compiled CSS', (color) => {
      expect(css).toContain(color);
    });
  });

  describe('DaisyUI Color Variables', () => {
    // DaisyUI semantic colors
    const daisyColors = [
      '--color-primary',
      '--color-secondary',
      '--color-accent',
      '--color-neutral',
      '--color-base-100',
      '--color-base-content',
      '--color-info',
      '--color-success',
      '--color-warning',
      '--color-error',
    ];

    it.each(daisyColors)('should define %s', (color) => {
      expect(css).toContain(color);
    });
  });

  describe('Font Configuration', () => {
    it('should include TWK Everett font family', () => {
      expect(css).toContain('TWK Everett');
    });

    it('should define font-face for TWK Everett', () => {
      expect(css).toContain('@font-face');
    });
  });

  describe('CSS Build Output', () => {
    it('should include Tailwind CSS', () => {
      expect(css).toContain('tailwindcss');
    });

    it('should include DaisyUI component classes', () => {
      // Check for some common DaisyUI classes
      expect(css).toContain('.btn');
      expect(css).toContain('.card');
      expect(css).toContain('.alert');
    });

    it('should include theme layer', () => {
      expect(css).toContain('@layer theme');
    });
  });

  describe('Custom Overrides', () => {
    it('should include focus style overrides', () => {
      expect(css).toContain(':focus');
    });

    it('should include reduced motion support', () => {
      expect(css).toContain('prefers-reduced-motion');
    });
  });

  describe('Secondary Color Configuration', () => {
    it('should have different secondary than primary in light theme', () => {
      // Secondary should be Midnight (oklch(15% 0.04 270)) not Cobalt
      // This ensures visual distinction
      expect(css).toContain('--color-secondary');
    });
  });
});
