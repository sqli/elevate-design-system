import { create } from 'storybook/theming/create';
import { colors } from '../src/tokens/colors.js';

export default create({
  base: 'light',

  // Brand
  brandTitle: 'Elevate Design System',
  brandUrl: 'https://www.sqli.com',
  brandImage: '/logos/Logo_midnight.svg',
  brandImageHeight: 20,
  brandTarget: '_self',

  // Colors
  colorPrimary: colors.cobalt.hex,
  colorSecondary: colors.sky.hex,

  // UI
  appBg: colors.cream.hex,
  appContentBg: '#FFFFFF',
  appPreviewBg: colors.cream.hex,
  appBorderColor: `${colors.midnight.hex}20`,
  appBorderRadius: 8,

  // Text colors
  textColor: colors.midnight.hex,
  textInverseColor: colors.cream.hex,
  textMutedColor: `${colors.midnight.hex}99`,

  // Toolbar
  barTextColor: colors.midnight.hex,
  barSelectedColor: colors.cobalt.hex,
  barHoverColor: colors.cobalt.hex,
  barBg: colors.cream.hex,

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: `${colors.midnight.hex}30`,
  inputTextColor: colors.midnight.hex,
  inputBorderRadius: 4,

  // Font
  fontBase: '"TWK Everett", system-ui, -apple-system, sans-serif',
  fontCode: 'monospace',
});
