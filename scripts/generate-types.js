#!/usr/bin/env node
/**
 * TypeScript Definition Generator
 *
 * Generates .d.ts files for the design system exports:
 * - dist/types/index.d.ts    : CSS class names, color tokens, theme types
 * - dist/types/preset.d.ts   : Tailwind preset type
 * - dist/types/charts.d.ts   : Recharts theme types
 *
 * Run with: npm run build:types
 *
 * @since v0.7.0-alpha
 */
import { writeFile, mkdir, readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { colors } from '../src/tokens/colors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const TYPES_DIR = join(ROOT, 'dist', 'types');

/**
 * Extract CSS class selectors from compiled CSS
 */
function extractClassNames(cssContent) {
  const classRegex = /\.([a-zA-Z][\w-]*)/g;
  const classes = new Set();
  let match;
  while ((match = classRegex.exec(cssContent)) !== null) {
    classes.add(match[1]);
  }
  return [...classes].sort();
}

/**
 * Generate the main index.d.ts
 */
function generateIndexTypes(classNames) {
  // Group DaisyUI component classes by prefix
  const componentPrefixes = [
    'btn',
    'card',
    'badge',
    'alert',
    'avatar',
    'input',
    'select',
    'checkbox',
    'radio',
    'toggle',
    'textarea',
    'range',
    'rating',
    'file-input',
    'table',
    'tab',
    'tabs',
    'menu',
    'navbar',
    'breadcrumbs',
    'pagination',
    'steps',
    'modal',
    'drawer',
    'dropdown',
    'collapse',
    'accordion',
    'carousel',
    'tooltip',
    'toast',
    'loading',
    'progress',
    'skeleton',
    'hero',
    'footer',
    'divider',
    'stack',
    'indicator',
    'join',
    'mask',
    'stat',
    'countdown',
    'kbd',
    'diff',
    'timeline',
    'chat',
    'list',
    'mockup',
    'dock',
    'fieldset',
    'label',
    'link',
    'swap',
    'fab',
    'form-control',
    'label-text',
  ];

  const daisyuiClasses = classNames.filter((cls) =>
    componentPrefixes.some((prefix) => cls === prefix || cls.startsWith(`${prefix}-`))
  );

  const colorKeys = Object.keys(colors);
  const cssVarEntries = [];
  for (const [key] of Object.entries(colors)) {
    const cssName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    cssVarEntries.push(`  | '--color-sqli-${cssName}'`);
  }

  return `/**
 * Elevate Design System - TypeScript Definitions
 *
 * CSS class names and design tokens for autocompletion.
 * This is a CSS-only library; these types are informational.
 *
 * @example
 * import type { SqliColor, SqliTheme, DaisyUIClass } from '@sqli/elevate-design-system/types';
 *
 * Generated from compiled CSS and src/tokens/colors.js - DO NOT EDIT MANUALLY.
 */

/** DaisyUI component class names available in the SQLI theme */
export type DaisyUIClass =
${daisyuiClasses.map((c) => `  | '${c}'`).join('\n')};

/** SQLI brand color names for Tailwind utility classes (e.g. bg-sqli-cream, text-sqli-cobalt) */
export type SqliColor =
  | 'sqli-cream'
  | 'sqli-midnight'
  | 'sqli-cobalt'
  | 'sqli-sky'
  | 'sqli-cobalt-hover'
  | 'sqli-sky-hover';

/** SQLI theme names for the data-theme attribute */
export type SqliTheme = 'sqli-light' | 'sqli-dark';

/** CSS custom property names for SQLI tokens */
export type SqliCSSVariable =
${cssVarEntries.join('\n')}
  | '--font-family-sans'
  | '--font-family-everett'
  | '--color-background'
  | '--color-text'
  | '--color-primary'
  | '--color-primary-hover'
  | '--color-accent'
  | '--color-accent-hover';

/** SQLI brand color values */
export declare const sqliColors: {
${colorKeys.map((k) => `  readonly ${k}: '${colors[k].hex}';`).join('\n')}
};
`;
}

/**
 * Generate preset.d.ts
 */
function generatePresetTypes() {
  return `/**
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
`;
}

/**
 * Generate charts.d.ts
 */
function generateChartsTypes() {
  return `/**
 * Elevate Design System - Chart Theme Types
 *
 * Type definitions for the Recharts theme integration.
 *
 * @example
 * import { sqliChartTheme, sqliColors } from '@sqli/elevate-design-system/charts';
 */

export interface SqliChartColors {
  readonly cream: string;
  readonly midnight: string;
  readonly cobalt: string;
  readonly sky: string;
  readonly cobaltHover: string;
  readonly skyHover: string;
  readonly primary: string;
  readonly primaryDark: string;
  readonly palette: readonly string[];
  readonly success: string;
  readonly warning: string;
  readonly error: string;
  readonly info: string;
}

export interface ChartTheme {
  readonly background: string;
  readonly text: string;
  readonly textMuted: string;
  readonly axis: string;
  readonly grid: string;
  readonly gridStroke: string;
  readonly primary: string;
  readonly secondary: string;
  readonly tertiary: string;
  readonly tooltipBackground: string;
  readonly tooltipBorder: string;
  readonly tooltipText: string;
  readonly legendText: string;
  readonly colors: readonly string[];
}

export interface AxisProps {
  readonly stroke: string;
  readonly tick: { readonly fill: string; readonly fontSize: number };
  readonly tickLine: { readonly stroke: string };
  readonly axisLine: { readonly stroke: string };
}

export interface TooltipProps {
  readonly contentStyle: {
    readonly backgroundColor: string;
    readonly border: string;
    readonly borderRadius: string;
    readonly boxShadow: string;
  };
  readonly labelStyle: { readonly color: string; readonly fontWeight: number };
  readonly itemStyle: { readonly color: string };
}

export interface GridProps {
  readonly strokeDasharray: string;
  readonly stroke: string;
  readonly vertical: boolean;
}

export interface LegendProps {
  readonly wrapperStyle: { readonly color: string };
}

export declare const sqliColors: SqliChartColors;
export declare const lightTheme: ChartTheme;
export declare const darkTheme: ChartTheme;

export declare const sqliChartTheme: {
  readonly light: ChartTheme;
  readonly dark: ChartTheme;
  readonly colors: SqliChartColors;
};

export declare const defaultAxisProps: {
  readonly light: AxisProps;
  readonly dark: AxisProps;
};

export declare const defaultTooltipProps: {
  readonly light: TooltipProps;
  readonly dark: TooltipProps;
};

export declare const defaultGridProps: {
  readonly light: GridProps;
  readonly dark: GridProps;
};

export declare const defaultLegendProps: {
  readonly light: LegendProps;
  readonly dark: LegendProps;
};

export default sqliChartTheme;
`;
}

/**
 * Generate assets.d.ts
 */
function generateAssetsTypes() {
  return `/**
 * Elevate Design System - Asset Path Types
 *
 * Type definitions for brand asset imports (logos, favicons, fonts).
 *
 * @example
 * import { logos, favicons, fonts, resolve } from '@sqli/elevate-design-system/assets';
 *
 * <img src={logos.midnight.svg} alt="SQLI" />
 * <link rel="icon" href={favicons.default} />
 */

interface AssetVariant {
  readonly svg: string;
  readonly png: string;
}

interface FontVariant {
  readonly woff2: string;
  readonly woff: string;
}

export declare function resolve(relativePath: string): string;

export declare const logos: {
  readonly cream: AssetVariant;
  readonly midnight: AssetVariant;
  readonly sky: AssetVariant;
  readonly creamWithExclusion: AssetVariant;
  readonly midnightWithExclusion: AssetVariant;
  readonly skyWithExclusion: AssetVariant;
};

export declare const ascenders: {
  readonly cobalt: AssetVariant;
  readonly cream: AssetVariant;
  readonly midnight: AssetVariant;
  readonly sky: AssetVariant;
};

export declare const favicons: {
  readonly default: string;
  readonly cream: string;
  readonly midnight: string;
  readonly sky: string;
};

export declare const fonts: {
  readonly light: FontVariant;
  readonly lightItalic: FontVariant;
  readonly regular: FontVariant;
  readonly regularItalic: FontVariant;
  readonly medium: FontVariant;
  readonly bold: FontVariant;
};
`;
}

async function generate() {
  await mkdir(TYPES_DIR, { recursive: true });

  // Try to read compiled CSS for class extraction
  let classNames = [];
  try {
    const cssPath = join(ROOT, 'dist', 'sqli-design-system.css');
    const cssContent = await readFile(cssPath, 'utf8');
    classNames = extractClassNames(cssContent);
    console.log(`Extracted ${classNames.length} CSS class names from compiled CSS`);
  } catch {
    console.log('No compiled CSS found, generating types with empty class list');
    console.log('Run "npm run build:css" first for complete class name types');
  }

  await Promise.all([
    writeFile(join(TYPES_DIR, 'index.d.ts'), generateIndexTypes(classNames), 'utf8'),
    writeFile(join(TYPES_DIR, 'preset.d.ts'), generatePresetTypes(), 'utf8'),
    writeFile(join(TYPES_DIR, 'charts.d.ts'), generateChartsTypes(), 'utf8'),
    writeFile(join(TYPES_DIR, 'assets.d.ts'), generateAssetsTypes(), 'utf8'),
  ]);

  console.log('Generated dist/types/index.d.ts');
  console.log('Generated dist/types/preset.d.ts');
  console.log('Generated dist/types/charts.d.ts');
  console.log('Generated dist/types/assets.d.ts');
}

generate().catch((err) => {
  console.error('Failed to generate types:', err.message);
  process.exit(1);
});
