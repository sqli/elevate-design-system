import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/Diff',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Diff** component for comparing two items side by side.

## Usage
\`\`\`html
<div class="diff aspect-[16/9]">
  <div class="diff-item-1">
    <div class="bg-primary text-primary-content">SQLI</div>
  </div>
  <div class="diff-item-2">
    <div class="bg-base-200">SQLI</div>
  </div>
  <div class="diff-resizer"></div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="diff aspect-[16/9] w-full max-w-lg">
    <div className="diff-item-1">
      <div className="bg-primary text-primary-content grid place-content-center text-4xl font-bold h-full">SQLI</div>
    </div>
    <div className="diff-item-2">
      <div className="bg-base-200 grid place-content-center text-4xl font-bold h-full">SQLI</div>
    </div>
    <div className="diff-resizer"></div>
  </div>
);

export const Themes = () => (
  <div className="diff aspect-[16/9] w-full max-w-lg">
    <div className="diff-item-1">
      <DarkModeWrapper>
        <h2 className="text-3xl mb-4">Dark Theme</h2>
        <p className="text-sm opacity-70">sqli-dark</p>
      </DarkModeWrapper>
    </div>
    <div className="diff-item-2">
      <div data-theme="sqli-light" className="bg-base-100 text-base-content grid place-content-center text-2xl font-bold h-full p-8">
        <h2 className="text-3xl mb-4">Light Theme</h2>
        <p className="text-sm opacity-70">sqli-light</p>
      </div>
    </div>
    <div className="diff-resizer"></div>
  </div>
);
Themes.storyName = 'Theme Comparison';

export const ColorComparison = () => (
  <div className="diff aspect-[16/9] w-full max-w-lg">
    <div className="diff-item-1">
      <div className="bg-secondary text-secondary-content grid place-content-center text-4xl font-bold h-full">Sky</div>
    </div>
    <div className="diff-item-2">
      <div className="bg-primary text-primary-content grid place-content-center text-4xl font-bold h-full">Cobalt</div>
    </div>
    <div className="diff-resizer"></div>
  </div>
);
ColorComparison.storyName = 'Color Comparison';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="diff aspect-[16/9] w-full max-w-lg">
      <div className="diff-item-1">
        <div className="bg-primary text-primary-content grid place-content-center text-4xl font-bold h-full">Before</div>
      </div>
      <div className="diff-item-2">
        <div className="bg-secondary text-secondary-content grid place-content-center text-4xl font-bold h-full">After</div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
