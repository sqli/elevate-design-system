import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Mockup/Browser',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Browser Mockup** component for displaying browser window frames.

## Usage
\`\`\`html
<div class="mockup-browser border border-base-300">
  <div class="mockup-browser-toolbar">
    <div class="input">https://daisyui.com</div>
  </div>
  <div class="px-4 py-16 bg-base-200">Hello!</div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="mockup-browser border border-base-300 bg-base-300">
    <div className="mockup-browser-toolbar">
      <div className="input">https://sqli.com</div>
    </div>
    <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
  </div>
);

export const WithContent = () => (
  <div className="mockup-browser border border-base-300 bg-base-300">
    <div className="mockup-browser-toolbar">
      <div className="input">https://design.sqli.com</div>
    </div>
    <div className="bg-base-200 px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Elevate Design System</h1>
      <p className="mb-4">A comprehensive design system built with DaisyUI and Tailwind CSS.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
);
WithContent.storyName = 'With Content';

export const ColorVariants = () => (
  <div className="flex flex-col gap-4">
    <div className="mockup-browser border border-base-300 bg-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input">https://sqli.com</div>
      </div>
      <div className="bg-base-200 flex justify-center px-4 py-8">Default</div>
    </div>
    <div className="mockup-browser border bg-primary text-primary-content border-primary">
      <div className="mockup-browser-toolbar">
        <div className="input border-primary">https://sqli.com</div>
      </div>
      <div className="bg-primary flex justify-center px-4 py-8">Primary</div>
    </div>
  </div>
);
ColorVariants.storyName = 'Color Variants';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="mockup-browser border border-base-300 bg-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input">https://sqli.com</div>
      </div>
      <div className="bg-base-200 flex justify-center px-4 py-16">Hello from Dark Mode!</div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
