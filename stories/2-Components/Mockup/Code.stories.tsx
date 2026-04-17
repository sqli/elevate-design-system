import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Mockup/Code',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Code Mockup** component for displaying code blocks.

## Usage
\`\`\`html
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
\`\`\`

## Prefix
Use \`data-prefix\` attribute to add line prefixes like \`$\`, \`>\`, or line numbers.
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="mockup-code">
    <pre data-prefix="$"><code>npm i daisyui</code></pre>
  </div>
);

export const MultiLine = () => (
  <div className="mockup-code">
    <pre data-prefix="$"><code>npm i daisyui</code></pre>
    <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
    <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
  </div>
);
MultiLine.storyName = 'Multi Line';

export const WithLineNumbers = () => (
  <div className="mockup-code">
    <pre data-prefix="1"><code>{"import daisyui from 'daisyui';"}</code></pre>
    <pre data-prefix="2"><code></code></pre>
    <pre data-prefix="3"><code>{"export default {"}</code></pre>
    <pre data-prefix="4"><code>{"  plugins: [daisyui],"}</code></pre>
    <pre data-prefix="5"><code>{"}"}</code></pre>
  </div>
);
WithLineNumbers.storyName = 'With Line Numbers';

export const HighlightedLine = () => (
  <div className="mockup-code">
    <pre data-prefix="1"><code>{"function greet(name) {"}</code></pre>
    <pre data-prefix="2" className="bg-warning text-warning-content"><code>{'  console.log("Hello, " + name);'}</code></pre>
    <pre data-prefix="3"><code>{"}"}</code></pre>
  </div>
);
HighlightedLine.storyName = 'Highlighted Line';

export const NoPrefix = () => (
  <div className="mockup-code">
    <pre><code>{"const theme = 'sqli-light';"}</code></pre>
    <pre><code>{"document.documentElement.setAttribute('data-theme', theme);"}</code></pre>
  </div>
);
NoPrefix.storyName = 'Without Prefix';

export const ColorVariants = () => (
  <div className="flex flex-col gap-4">
    <div className="mockup-code bg-primary text-primary-content">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
    </div>
    <div className="mockup-code bg-secondary text-secondary-content">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
    </div>
    <div className="mockup-code bg-neutral text-neutral-content">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
    </div>
  </div>
);
ColorVariants.storyName = 'Color Variants';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="mockup-code">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
      <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
      <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
