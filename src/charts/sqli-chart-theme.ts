/**
 * SQLI Chart Theme for Recharts
 *
 * This module provides SQLI brand colors and configurations for Recharts.
 *
 * Usage:
 *   import { sqliChartTheme, sqliColors } from '@sqli/elevate-design-system/charts';
 *
 *   // Use colors in your charts
 *   <BarChart>
 *     <Bar dataKey="value" fill={sqliColors.primary} />
 *   </BarChart>
 *
 *   // Or use the full theme
 *   const colors = isDarkMode ? sqliChartTheme.dark : sqliChartTheme.light;
 */

import { brandColors } from '../tokens/generated/colors.js';

// SQLI Brand Colors
export const sqliColors = {
  // Primary colors
  cream: brandColors.cream.hex,
  midnight: brandColors.midnight.hex,
  cobalt: brandColors.cobalt.hex,
  sky: brandColors.sky.hex,

  // Hover states
  cobaltHover: brandColors.cobaltHover.hex,
  skyHover: brandColors.skyHover.hex,

  // Semantic aliases
  primary: brandColors.cobalt.hex, // Cobalt (light mode)
  primaryDark: brandColors.sky.hex, // Sky (dark mode)

  // Chart-specific palette (for multiple series)
  palette: [
    brandColors.cobalt.hex,  // Cobalt
    brandColors.sky.hex,     // Sky
    brandColors.midnight.hex, // Midnight
    '#3B3A5C', // Midnight lighter
    '#8B8AA8', // Muted purple
    '#C4C3D8', // Light purple
  ],

  // Success/Warning/Error for semantic charts
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: brandColors.sky.hex,
} as const;

interface ThemeConfig {
  background: string;
  text: string;
  textMuted: string;
  axis: string;
  grid: string;
  gridStroke: string;
  primary: string;
  secondary: string;
  tertiary: string;
  tooltipBackground: string;
  tooltipBorder: string;
  tooltipText: string;
  legendText: string;
  colors: readonly string[];
}

// Light theme configuration
export const lightTheme: ThemeConfig = {
  background: sqliColors.cream,
  text: sqliColors.midnight,
  textMuted: '#6B7280',
  axis: sqliColors.midnight,
  grid: '#E5E7EB',
  gridStroke: '#E5E7EB',
  primary: sqliColors.cobalt,
  secondary: sqliColors.midnight,
  tertiary: sqliColors.sky,
  tooltipBackground: '#FFFFFF',
  tooltipBorder: '#E5E7EB',
  tooltipText: sqliColors.midnight,
  legendText: sqliColors.midnight,
  colors: sqliColors.palette,
};

// Dark theme configuration
export const darkTheme: ThemeConfig = {
  background: sqliColors.midnight,
  text: sqliColors.cream,
  textMuted: '#9CA3AF',
  axis: sqliColors.cream,
  grid: '#374151',
  gridStroke: '#374151',
  primary: sqliColors.sky,
  secondary: sqliColors.cream,
  tertiary: sqliColors.cobalt,
  tooltipBackground: '#1F2937',
  tooltipBorder: '#374151',
  tooltipText: sqliColors.cream,
  legendText: sqliColors.cream,
  colors: [
    brandColors.sky.hex, // Sky
    '#8B9FFF', // Light cobalt
    brandColors.cream.hex, // Cream
    '#A5B4FC', // Indigo light
    '#C4C3D8', // Light purple
    '#818CF8', // Indigo
  ],
};

// Combined theme object
export const sqliChartTheme = {
  light: lightTheme,
  dark: darkTheme,
  colors: sqliColors,
} as const;

// Default axis props
export const defaultAxisProps = {
  light: {
    stroke: lightTheme.axis,
    tick: { fill: lightTheme.text, fontSize: 12 },
    tickLine: { stroke: lightTheme.grid },
    axisLine: { stroke: lightTheme.grid },
  },
  dark: {
    stroke: darkTheme.axis,
    tick: { fill: darkTheme.text, fontSize: 12 },
    tickLine: { stroke: darkTheme.grid },
    axisLine: { stroke: darkTheme.grid },
  },
} as const;

// Default tooltip props
export const defaultTooltipProps = {
  light: {
    contentStyle: {
      backgroundColor: lightTheme.tooltipBackground,
      border: `1px solid ${lightTheme.tooltipBorder}`,
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    labelStyle: { color: lightTheme.tooltipText, fontWeight: 500 },
    itemStyle: { color: lightTheme.tooltipText },
  },
  dark: {
    contentStyle: {
      backgroundColor: darkTheme.tooltipBackground,
      border: `1px solid ${darkTheme.tooltipBorder}`,
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    },
    labelStyle: { color: darkTheme.tooltipText, fontWeight: 500 },
    itemStyle: { color: darkTheme.tooltipText },
  },
} as const;

// Default grid props
export const defaultGridProps = {
  light: {
    strokeDasharray: '3 3',
    stroke: lightTheme.gridStroke,
    vertical: false,
  },
  dark: {
    strokeDasharray: '3 3',
    stroke: darkTheme.gridStroke,
    vertical: false,
  },
} as const;

// Default legend props
export const defaultLegendProps = {
  light: {
    wrapperStyle: { color: lightTheme.legendText },
  },
  dark: {
    wrapperStyle: { color: darkTheme.legendText },
  },
} as const;

export default sqliChartTheme;
