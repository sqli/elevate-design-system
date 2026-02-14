/**
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
