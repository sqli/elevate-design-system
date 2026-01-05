/**
 * Color Contrast Tests
 *
 * Verifies that color combinations meet WCAG 2.1 AA standards
 * for accessibility (4.5:1 for normal text, 3:1 for large text).
 */

import { describe, it, expect } from 'vitest';

/**
 * SQLI Brand Colors in RGB format
 */
const colors = {
  cream: { r: 255, g: 250, b: 240 }, // #FFFAF0
  midnight: { r: 15, g: 14, b: 43 }, // #0F0E2B
  cobalt: { r: 31, g: 36, b: 233 }, // #1F24E9
  sky: { r: 109, g: 165, b: 255 }, // #6DA5FF
  white: { r: 255, g: 255, b: 255 }, // #FFFFFF
  black: { r: 0, g: 0, b: 0 }, // #000000
  success: { r: 34, g: 197, b: 94 }, // #22C55E
  warning: { r: 234, g: 179, b: 8 }, // #EAB308
  error: { r: 239, g: 68, b: 68 }, // #EF4444
};

/**
 * Calculate relative luminance (WCAG formula)
 * @see https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
function getLuminance({ r, g, b }) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * @see https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 */
function getContrastRatio(color1, color2) {
  const L1 = getLuminance(color1);
  const L2 = getLuminance(color2);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Format contrast ratio for display
 */
function formatRatio(ratio) {
  return ratio.toFixed(2) + ':1';
}

describe('Color Contrast Accessibility', () => {
  describe('Light Theme Combinations', () => {
    it('cream background + midnight text meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.cream, colors.midnight);
      expect(ratio, `cream/midnight = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });

    it('cream background + cobalt interactive meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.cream, colors.cobalt);
      expect(ratio, `cream/cobalt = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });

    it('white background + midnight text meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.white, colors.midnight);
      expect(ratio, `white/midnight = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });

    it('white background + cobalt interactive meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.white, colors.cobalt);
      expect(ratio, `white/cobalt = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });
  });

  describe('Dark Theme Combinations', () => {
    it('midnight background + cream text meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.midnight, colors.cream);
      expect(ratio, `midnight/cream = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });

    it('midnight background + white text meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.midnight, colors.white);
      expect(ratio, `midnight/white = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });

    it('midnight background + sky interactive meets AA for large text (3:1)', () => {
      const ratio = getContrastRatio(colors.midnight, colors.sky);
      expect(ratio, `midnight/sky = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Button States', () => {
    it('cobalt button + white text meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.cobalt, colors.white);
      expect(ratio, `cobalt/white = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });

    it('sky button + midnight text meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.sky, colors.midnight);
      expect(ratio, `sky/midnight = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });
  });

  describe('Status Colors', () => {
    // Note: Status colors are typically used with backgrounds, not as text
    // These tests verify the contrast when used as background with appropriate text

    it('success background + midnight text meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.success, colors.midnight);
      expect(ratio, `success/midnight = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });

    it('error background + white text meets AA for large text (3:1)', () => {
      const ratio = getContrastRatio(colors.error, colors.white);
      // Red #EF4444 with white meets large text standard but not normal text
      expect(ratio, `error/white = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(3);
    });

    it('warning background + midnight text meets AA (4.5:1)', () => {
      const ratio = getContrastRatio(colors.warning, colors.midnight);
      expect(ratio, `warning/midnight = ${formatRatio(ratio)}`).toBeGreaterThanOrEqual(4.5);
    });

    // Document low contrast combinations that require attention
    it('should document status color contrast limitations', () => {
      const successOnCream = getContrastRatio(colors.cream, colors.success);
      const errorOnCream = getContrastRatio(colors.cream, colors.error);

      // These combinations don't meet AA for normal text
      // They should only be used for decorative purposes or with icons
      expect(successOnCream).toBeLessThan(3);
      expect(errorOnCream).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Contrast Ratio Snapshot', () => {
    it('should document all primary color combinations', () => {
      const combinations = [
        { name: 'cream/midnight', bg: colors.cream, fg: colors.midnight },
        { name: 'cream/cobalt', bg: colors.cream, fg: colors.cobalt },
        { name: 'midnight/cream', bg: colors.midnight, fg: colors.cream },
        { name: 'midnight/sky', bg: colors.midnight, fg: colors.sky },
        { name: 'cobalt/white', bg: colors.cobalt, fg: colors.white },
        { name: 'sky/midnight', bg: colors.sky, fg: colors.midnight },
      ];

      const results = combinations.map(({ name, bg, fg }) => ({
        combination: name,
        ratio: formatRatio(getContrastRatio(bg, fg)),
        passesAA: getContrastRatio(bg, fg) >= 4.5,
        passesAALarge: getContrastRatio(bg, fg) >= 3,
      }));

      // All combinations should pass at least AA Large
      results.forEach((result) => {
        expect(
          result.passesAALarge,
          `${result.combination} (${result.ratio}) should pass AA Large`
        ).toBe(true);
      });
    });
  });
});
