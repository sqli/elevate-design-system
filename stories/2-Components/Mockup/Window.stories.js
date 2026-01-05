/**
 * @component Window Mockup
 * @description DaisyUI Window Mockup component with SQLI theme
 * @see https://daisyui.com/components/mockup-window/
 */
export default {
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

export const Default = () => `
  <div class="mockup-window border border-base-300 bg-base-300">
    <div class="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
  </div>
`;

export const WithContent = () => `
  <div class="mockup-window border border-base-300 bg-base-300">
    <div class="bg-base-200 px-4 py-8">
      <h1 class="text-2xl font-bold mb-4">Elevate Design System</h1>
      <p class="mb-4">Built with DaisyUI and Tailwind CSS for modern web applications.</p>
      <div class="flex gap-2">
        <button class="btn btn-primary btn-sm">Learn More</button>
        <button class="btn btn-outline btn-sm">Documentation</button>
      </div>
    </div>
  </div>
`;
WithContent.storyName = 'With Content';

export const WithTerminal = () => `
  <div class="mockup-window border border-base-300 bg-base-300">
    <div class="bg-neutral text-neutral-content p-4 font-mono text-sm">
      <p class="mb-1"><span class="text-success">user@sqli</span>:<span class="text-info">~</span>$ npm install</p>
      <p class="mb-1 opacity-70">added 150 packages in 12s</p>
      <p class="mb-1"><span class="text-success">user@sqli</span>:<span class="text-info">~</span>$ npm run dev</p>
      <p class="mb-1 opacity-70">Server running at http://localhost:3000</p>
      <p><span class="text-success">user@sqli</span>:<span class="text-info">~</span>$ <span class="animate-pulse">_</span></p>
    </div>
  </div>
`;
WithTerminal.storyName = 'With Terminal';

export const ColorVariants = () => `
  <div class="flex flex-col gap-4">
    <div class="mockup-window border border-base-300 bg-base-300">
      <div class="bg-base-200 flex justify-center px-4 py-8">Default</div>
    </div>
    <div class="mockup-window border bg-primary text-primary-content border-primary">
      <div class="bg-primary flex justify-center px-4 py-8">Primary</div>
    </div>
    <div class="mockup-window border bg-neutral text-neutral-content border-neutral">
      <div class="bg-neutral flex justify-center px-4 py-8">Neutral</div>
    </div>
  </div>
`;
ColorVariants.storyName = 'Color Variants';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="mockup-window border border-base-300 bg-base-300">
      <div class="bg-base-200 flex justify-center px-4 py-16">Hello from Dark Mode!</div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
