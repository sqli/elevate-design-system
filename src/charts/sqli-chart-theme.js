/**
 * SQLI Chart Theme for Recharts
 *
 * This module provides SQLI brand colors and configurations for Recharts.
 * Colors are imported from the single source of truth (src/tokens/colors.js).
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

import { colors } from '../tokens/colors.js';

// SQLI Brand Colors for charts
export const sqliColors = {
  // Primary colors
  cream: colors.cream.hex,
  midnight: colors.midnight.hex,
  cobalt: colors.cobalt.hex,
  sky: colors.sky.hex,

  // Hover states
  cobaltHover: colors.cobaltHover.hex,
  skyHover: colors.skyHover.hex,

  // Semantic aliases
  primary: colors.cobalt.hex,
  primaryDark: colors.sky.hex,

  // Chart-specific palette (for multiple series)
  palette: [
    colors.cobalt.hex,
    colors.sky.hex,
    colors.midnight.hex,
    '#3B3A5C', // Midnight lighter
    '#8B8AA8', // Muted purple
    '#C4C3D8', // Light purple
  ],

  // Success/Warning/Error for semantic charts
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: colors.sky.hex,
};

// Light theme configuration
export const lightTheme = {
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
export const darkTheme = {
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
    colors.sky.hex,
    '#8B9FFF', // Light cobalt
    colors.cream.hex,
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
};

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
};

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
};

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
};

// Default legend props
export const defaultLegendProps = {
  light: {
    wrapperStyle: { color: lightTheme.legendText },
  },
  dark: {
    wrapperStyle: { color: darkTheme.legendText },
  },
};

export default sqliChartTheme;
