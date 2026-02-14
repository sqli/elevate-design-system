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
 * - Border radius, shadows, animations prefixed with sqli-
 */

import { colors } from '../tokens/colors.js';

export default {
  theme: {
    extend: {
      colors: {
        'sqli-cream': colors.cream.hex,
        'sqli-midnight': colors.midnight.hex,
        'sqli-cobalt': colors.cobalt.hex,
        'sqli-sky': colors.sky.hex,
        'sqli-cobalt-hover': colors.cobaltHover.hex,
        'sqli-sky-hover': colors.skyHover.hex,
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
      borderRadius: {
        'sqli-sm': '0.25rem',
        'sqli-md': '0.5rem',
        'sqli-lg': '1rem',
      },
      boxShadow: {
        'sqli-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sqli-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'sqli-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      animation: {
        'sqli-fade-in': 'sqli-fade-in 0.2s ease-out',
        'sqli-slide-up': 'sqli-slide-up 0.3s ease-out',
        'sqli-slide-down': 'sqli-slide-down 0.3s ease-out',
      },
      keyframes: {
        'sqli-fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'sqli-slide-up': {
          from: { opacity: '0', transform: 'translateY(0.5rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'sqli-slide-down': {
          from: { opacity: '0', transform: 'translateY(-0.5rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'sqli-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
};
