import React from 'react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
import '../src/css/main.css';
import './preview.css';
import { ElevateTheme } from '../src/components/ElevateTheme';

// =============================================================================
// Storybook Viewports
// =============================================================================

const sqliViewports = {
  mobile: {
    name: 'Mobile',
    styles: { width: '375px', height: '667px' },
  },
  tablet: {
    name: 'Tablet',
    styles: { width: '768px', height: '1024px' },
  },
  desktop: {
    name: 'Desktop',
    styles: { width: '1280px', height: '800px' },
  },
  desktopLarge: {
    name: 'Desktop Large',
    styles: { width: '1920px', height: '1080px' },
  },
  ...MINIMAL_VIEWPORTS,
};

// =============================================================================
// Accessibility Rules Configuration
// =============================================================================

const a11yRules = [
  'color-contrast',
  'label',
  'aria-allowed-attr',
  'aria-required-attr',
  'aria-valid-attr',
  'aria-valid-attr-value',
  'button-name',
  'image-alt',
  'link-name',
  'list',
  'listitem',
  'heading-order',
  'landmark-one-main',
  'page-has-heading-one',
  'region',
].map((id) => ({ id, enabled: true }));

// =============================================================================
// Storybook Preview Configuration
// =============================================================================

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    backgrounds: {
      disabled: true,
    },
    docs: {
      toc: true,
    },
    layout: 'padded',
    viewport: {
      options: sqliViewports,
    },
    a11y: {
      config: {
        rules: a11yRules,
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        'Light Mode': 'sqli-light',
        'Dark Mode': 'sqli-dark',
      },
      defaultTheme: 'Light Mode',
      parentSelector: 'html',
      attributeName: 'data-theme',
    }),
    (Story, context) => {
      const currentTheme = context.globals?.theme;
      const appearance = currentTheme === 'Dark Mode' ? 'dark' : 'light';
      return (
        <ElevateTheme appearance={appearance} hasBackground={false}>
          <Story />
        </ElevateTheme>
      );
    },
    (Story) => (
      <div className="sqli-story-wrapper">
        <Story />
      </div>
    ),
  ],

  initialGlobals: {
    a11y: {
      manual: false,
    },
  },
};

export default preview;
