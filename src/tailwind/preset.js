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

export default {
  theme: {
    extend: {
      colors: {
        // Primary backgrounds
        'sqli-cream': '#FFFAF0',
        'sqli-midnight': '#0F0E2B',

        // Interactive colors
        'sqli-cobalt': '#1F24E9',
        'sqli-sky': '#6DA5FF',

        // Hover states
        'sqli-cobalt-hover': '#1418C8',
        'sqli-sky-hover': '#5A96F0',

        // Semantic aliases (for convenience)
        sqli: {
          cream: '#FFFAF0',
          midnight: '#0F0E2B',
          cobalt: '#1F24E9',
          sky: '#6DA5FF',
          'cobalt-hover': '#1418C8',
          'sky-hover': '#5A96F0',
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
