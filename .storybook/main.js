/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    // Built-in Storybook 10 essentials
    'storybook/viewport', // Viewport/responsive testing
    'storybook/measure', // Measure tool
    'storybook/outline', // Outline tool
    {
      name: 'storybook/backgrounds',
      options: { disabled: true }, // Disabled - using theme toggle instead
    },
    // External addons
    '@storybook/addon-themes', // Theme switching support
    '@storybook/addon-a11y', // Accessibility testing
    '@storybook/addon-docs', // Enhanced documentation
  ],

  framework: {
    name: '@storybook/html-vite',
    options: {},
  },

  staticDirs: ['../assets'],

  viteFinal: async (config) => {
    return config;
  },
};

export default config;
