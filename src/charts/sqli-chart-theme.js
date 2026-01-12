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

// SQLI Brand Colors
export const sqliColors = {
  // Primary colors
  cream: '#FFFAF0',
  midnight: '#0F0E2B',
  cobalt: '#1F24E9',
  sky: '#6DA5FF',

  // Hover states
  cobaltHover: '#1418C8',
  skyHover: '#5A96F0',

  // Semantic aliases
  primary: '#1F24E9', // Cobalt (light mode)
  primaryDark: '#6DA5FF', // Sky (dark mode)

  // Chart-specific palette (for multiple series)
  palette: [
    '#1F24E9', // Cobalt
    '#6DA5FF', // Sky
    '#0F0E2B', // Midnight
    '#3B3A5C', // Midnight lighter
    '#8B8AA8', // Muted purple
    '#C4C3D8', // Light purple
  ],

  // Success/Warning/Error for semantic charts
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#6DA5FF',
};

// Light theme configuration
export const lightTheme = {
  // Background and text
  background: sqliColors.cream,
  text: sqliColors.midnight,
  textMuted: '#6B7280',

  // Axis and grid
  axis: sqliColors.midnight,
  grid: '#E5E7EB',
  gridStroke: '#E5E7EB',

  // Primary chart colors
  primary: sqliColors.cobalt,
  secondary: sqliColors.midnight,
  tertiary: sqliColors.sky,

  // Tooltip
  tooltipBackground: '#FFFFFF',
  tooltipBorder: '#E5E7EB',
  tooltipText: sqliColors.midnight,

  // Legend
  legendText: sqliColors.midnight,

  // Color palette for multiple series
  colors: sqliColors.palette,
};

// Dark theme configuration
export const darkTheme = {
  // Background and text
  background: sqliColors.midnight,
  text: sqliColors.cream,
  textMuted: '#9CA3AF',

  // Axis and grid
  axis: sqliColors.cream,
  grid: '#374151',
  gridStroke: '#374151',

  // Primary chart colors
  primary: sqliColors.sky,
  secondary: sqliColors.cream,
  tertiary: sqliColors.cobalt,

  // Tooltip
  tooltipBackground: '#1F2937',
  tooltipBorder: '#374151',
  tooltipText: sqliColors.cream,

  // Legend
  legendText: sqliColors.cream,

  // Color palette for multiple series (adjusted for dark)
  colors: [
    '#6DA5FF', // Sky
    '#8B9FFF', // Light cobalt
    '#FFFAF0', // Cream
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
