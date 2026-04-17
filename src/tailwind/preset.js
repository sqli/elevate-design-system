/**
 * Elevate Design System - Tailwind CSS Preset
 *
 * Use this preset to extend your Tailwind configuration with SQLI brand colors
 * and typography settings.
 *
 * Usage in tailwind.config.js:
 *
 *   import sqliPreset from '@sqli/elevate-design-system/preset';
 *
 *   export default {
 *     presets: [sqliPreset],
 *     // ... your config
 *   }
 *
 * This preset provides:
 * - SQLI brand colors (sqli-cream, sqli-midnight, sqli-cobalt, sqli-sky)
 * - TWK Everett as default sans-serif font
 * - Font weight utilities matching brand guidelines
 */

import { brandColors } from '../tokens/generated/colors.js';

export default {
  theme: {
    extend: {
      colors: {
        // Primary backgrounds
        'sqli-cream': brandColors.cream.hex,
        'sqli-midnight': brandColors.midnight.hex,

        // Interactive colors
        'sqli-cobalt': brandColors.cobalt.hex,
        'sqli-sky': brandColors.sky.hex,

        // Hover states
        'sqli-cobalt-hover': brandColors.cobaltHover.hex,
        'sqli-sky-hover': brandColors.skyHover.hex,

        // Semantic aliases (for convenience)
        sqli: {
          cream: brandColors.cream.hex,
          midnight: brandColors.midnight.hex,
          cobalt: brandColors.cobalt.hex,
          sky: brandColors.sky.hex,
          'cobalt-hover': brandColors.cobaltHover.hex,
          'sky-hover': brandColors.skyHover.hex,
        },
      },
      fontFamily: {
        sans: ['TWK Everett', 'system-ui', '-apple-system', 'sans-serif'],
        everett: ['TWK Everett', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
};
