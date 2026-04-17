/**
 * SQLI Brand Colors - Generated from src/tokens/tokens.json
 * DO NOT EDIT MANUALLY - Run: npm run build:tokens
 */

interface BrandColor {
  readonly hex: string;
  readonly oklch: string;
}

export declare const brandColors: {
  readonly cream: BrandColor;
  readonly midnight: BrandColor;
  readonly cobalt: BrandColor;
  readonly sky: BrandColor;
  readonly cobaltHover: BrandColor;
  readonly skyHover: BrandColor;
};

export declare const semanticMap: {
  readonly light: { readonly primary: 'cobalt'; readonly background: 'cream'; readonly foreground: 'midnight'; readonly focus: 'cobalt' };
  readonly dark: { readonly primary: 'sky'; readonly background: 'midnight'; readonly foreground: 'cream'; readonly focus: 'sky' };
};
