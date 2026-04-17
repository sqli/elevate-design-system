/**
 * SQLI Chart Theme - Recharts Integration
 *
 * Provides SQLI brand colors and configurations for Recharts.
 *
 * @example
 * import { sqliChartTheme, sqliColors } from '@sqli/elevate-design-system/charts';
 *
 * // Access colors
 * <Bar fill={sqliColors.cobalt} />
 *
 * // Access theme-specific config
 * const theme = isDarkMode ? sqliChartTheme.dark : sqliChartTheme.light;
 * <XAxis {...defaultAxisProps[isDarkMode ? 'dark' : 'light']} />
 */

export {
  sqliColors,
  sqliChartTheme,
  lightTheme,
  darkTheme,
  defaultAxisProps,
  defaultTooltipProps,
  defaultGridProps,
  defaultLegendProps,
} from './sqli-chart-theme';

export {
  mermaidBaseConfig,
  mermaidLightTheme,
  mermaidDarkTheme,
} from './sqli-mermaid-theme';
