import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Mockup/Window',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Window Mockup** component for displaying macOS-style window frames.

## Usage
\`\`\`html
<div class="mockup-window border border-base-300 bg-base-300">
  <div class="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="mockup-window border border-base-300 bg-base-300">
    <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
  </div>
);

export const WithContent = () => (
  <div className="mockup-window border border-base-300 bg-base-300">
    <div className="bg-base-200 px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Elevate Design System</h1>
      <p className="mb-4">Built with DaisyUI and Tailwind CSS for modern web applications.</p>
      <div className="flex gap-2">
        <button className="btn btn-primary btn-sm">Learn More</button>
        <button className="btn btn-outline btn-sm">Documentation</button>
      </div>
    </div>
  </div>
);
WithContent.storyName = 'With Content';

export const WithTerminal = () => (
  <div className="mockup-window border border-base-300 bg-base-300">
    <div className="bg-neutral text-neutral-content p-4 font-mono text-sm">
      <p className="mb-1"><span className="text-success">user@sqli</span>:<span className="text-info">~</span>$ npm install</p>
      <p className="mb-1 opacity-70">added 150 packages in 12s</p>
      <p className="mb-1"><span className="text-success">user@sqli</span>:<span className="text-info">~</span>$ npm run dev</p>
      <p className="mb-1 opacity-70">Server running at http://localhost:3000</p>
      <p><span className="text-success">user@sqli</span>:<span className="text-info">~</span>$ <span className="animate-pulse">_</span></p>
    </div>
  </div>
);
WithTerminal.storyName = 'With Terminal';

export const ColorVariants = () => (
  <div className="flex flex-col gap-4">
    <div className="mockup-window border border-base-300 bg-base-300">
      <div className="bg-base-200 flex justify-center px-4 py-8">Default</div>
    </div>
    <div className="mockup-window border bg-primary text-primary-content border-primary">
      <div className="bg-primary flex justify-center px-4 py-8">Primary</div>
    </div>
    <div className="mockup-window border bg-neutral text-neutral-content border-neutral">
      <div className="bg-neutral flex justify-center px-4 py-8">Neutral</div>
    </div>
  </div>
);
ColorVariants.storyName = 'Color Variants';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="mockup-window border border-base-300 bg-base-300">
      <div className="bg-base-200 flex justify-center px-4 py-16">Hello from Dark Mode!</div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
