import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov', 'cobertura'],
      reportsDirectory: '.coverage',
      include: ['src/**/*.css', 'tests/**/*.js'],
      exclude: ['node_modules/', 'dist/', 'storybook-static/'],
    },
  },
});
