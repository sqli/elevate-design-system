/**
 * @component Browser Mockup
 * @description DaisyUI Browser Mockup component with SQLI theme
 * @see https://daisyui.com/components/mockup-browser/
 */
export default {
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

export const Default = () => `
  <div class="mockup-browser border border-base-300 bg-base-300">
    <div class="mockup-browser-toolbar">
      <div class="input">https://sqli.com</div>
    </div>
    <div class="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
  </div>
`;

export const WithContent = () => `
  <div class="mockup-browser border border-base-300 bg-base-300">
    <div class="mockup-browser-toolbar">
      <div class="input">https://design.sqli.com</div>
    </div>
    <div class="bg-base-200 px-4 py-8">
      <h1 class="text-2xl font-bold mb-4">Elevate Design System</h1>
      <p class="mb-4">A comprehensive design system built with DaisyUI and Tailwind CSS.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
`;
WithContent.storyName = 'With Content';

export const ColorVariants = () => `
  <div class="flex flex-col gap-4">
    <div class="mockup-browser border border-base-300 bg-base-300">
      <div class="mockup-browser-toolbar">
        <div class="input">https://sqli.com</div>
      </div>
      <div class="bg-base-200 flex justify-center px-4 py-8">Default</div>
    </div>
    <div class="mockup-browser border bg-primary text-primary-content border-primary">
      <div class="mockup-browser-toolbar">
        <div class="input border-primary">https://sqli.com</div>
      </div>
      <div class="bg-primary flex justify-center px-4 py-8">Primary</div>
    </div>
  </div>
`;
ColorVariants.storyName = 'Color Variants';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="mockup-browser border border-base-300 bg-base-300">
      <div class="mockup-browser-toolbar">
        <div class="input">https://sqli.com</div>
      </div>
      <div class="bg-base-200 flex justify-center px-4 py-16">Hello from Dark Mode!</div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
