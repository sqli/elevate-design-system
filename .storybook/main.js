/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    // External addons only - built-in essentials are auto-included
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
    // Optimize chunking for large dependencies
    config.build = {
      ...config.build,
      rollupOptions: {
        ...config.build?.rollupOptions,
        output: {
          ...config.build?.rollupOptions?.output,
          manualChunks: {
            mermaid: ['mermaid'],
          },
        },
      },
    };
    return config;
  },
};

export default config;
