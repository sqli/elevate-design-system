import { create } from 'storybook/theming/create';

export default create({
  base: 'light',

  // Brand
  brandTitle: 'Elevate Design System',
  brandUrl: 'https://www.sqli.com',
  brandImage: '/logos/Logo_midnight.svg',
  brandImageHeight: 20,
  brandTarget: '_self',

  // Colors
  colorPrimary: '#1F24E9',
  colorSecondary: '#6DA5FF',

  // UI
  appBg: '#FFFAF0',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFAF0',
  appBorderColor: '#0F0E2B20',
  appBorderRadius: 8,

  // Text colors
  textColor: '#0F0E2B',
  textInverseColor: '#FFFAF0',
  textMutedColor: '#0F0E2B99',

  // Toolbar
  barTextColor: '#0F0E2B',
  barSelectedColor: '#1F24E9',
  barHoverColor: '#1F24E9',
  barBg: '#FFFAF0',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#0F0E2B30',
  inputTextColor: '#0F0E2B',
  inputBorderRadius: 4,

  // Font
  fontBase: '"TWK Everett", system-ui, -apple-system, sans-serif',
  fontCode: 'monospace',
});
