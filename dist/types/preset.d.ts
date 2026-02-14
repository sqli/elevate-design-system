/**
 * Elevate Design System - Tailwind Preset Types
 *
 * Type definitions for the Tailwind CSS preset.
 *
 * @example
 * import sqliPreset from '@sqli/elevate-design-system/preset';
 *
 * export default {
 *   presets: [sqliPreset],
 * }
 */

declare const sqliPreset: {
  theme: {
    extend: {
      colors: {
        'sqli-cream': string;
        'sqli-midnight': string;
        'sqli-cobalt': string;
        'sqli-sky': string;
        'sqli-cobalt-hover': string;
        'sqli-sky-hover': string;
      };
      fontFamily: {
        sans: string[];
        everett: string[];
      };
      fontWeight: {
        light: string;
        normal: string;
        medium: string;
        bold: string;
      };
      borderRadius: {
        'sqli-sm': string;
        'sqli-md': string;
        'sqli-lg': string;
      };
      boxShadow: {
        'sqli-sm': string;
        'sqli-md': string;
        'sqli-lg': string;
      };
      animation: {
        'sqli-fade-in': string;
        'sqli-slide-up': string;
        'sqli-slide-down': string;
      };
      keyframes: {
        'sqli-fade-in': Record<string, Record<string, string>>;
        'sqli-slide-up': Record<string, Record<string, string>>;
        'sqli-slide-down': Record<string, Record<string, string>>;
      };
      transitionTimingFunction: {
        'sqli-ease': string;
      };
    };
  };
};

export default sqliPreset;
