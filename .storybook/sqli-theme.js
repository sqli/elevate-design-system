import { create } from 'storybook/theming/create';
import { brandColors } from '../src/tokens/generated/colors.js';

export default create({
  base: 'light',

  // Brand
  brandTitle: 'Elevate Design System',
  brandUrl: 'https://www.sqli.com',
  brandImage: '/logos/Logo_midnight.svg',
  brandImageHeight: 20,
  brandTarget: '_self',

  // Colors
  colorPrimary: brandColors.cobalt.hex,
  colorSecondary: brandColors.sky.hex,

  // UI
  appBg: brandColors.cream.hex,
  appContentBg: '#FFFFFF',
  appPreviewBg: brandColors.cream.hex,
  appBorderColor: `${brandColors.midnight.hex}20`,
  appBorderRadius: 8,

  // Text colors
  textColor: brandColors.midnight.hex,
  textInverseColor: brandColors.cream.hex,
  textMutedColor: `${brandColors.midnight.hex}99`,

  // Toolbar
  barTextColor: brandColors.midnight.hex,
  barSelectedColor: brandColors.cobalt.hex,
  barHoverColor: brandColors.cobalt.hex,
  barBg: brandColors.cream.hex,

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: `${brandColors.midnight.hex}30`,
  inputTextColor: brandColors.midnight.hex,
  inputBorderRadius: 4,

  // Font
  fontBase: '"TWK Everett", system-ui, -apple-system, sans-serif',
  fontCode: 'monospace',
});
