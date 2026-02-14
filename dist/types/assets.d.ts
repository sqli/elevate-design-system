/**
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
