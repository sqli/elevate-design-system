/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['../assets'],

  viteFinal: async (config) => {
    config.build = {
      ...config.build,
      rollupOptions: {
        ...config.build?.rollupOptions,
        output: {
          ...config.build?.rollupOptions?.output,
          manualChunks: {
            mermaid: ['mermaid'],
            recharts: ['recharts'],
          },
        },
      },
    };
    return config;
  },
};

export default config;
