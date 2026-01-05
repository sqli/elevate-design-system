/**
 * @component Divider
 * @description DaisyUI Divider component with SQLI theme
 * @see https://daisyui.com/components/divider/
 */
export default {
  title: 'Components/Layout/Divider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Divider** component for separating content.

## Usage
\`\`\`html
<div class="divider">OR</div>
\`\`\`

## Variants
- \`divider-horizontal\` - Horizontal divider (default)
- \`divider-vertical\` - Vertical divider
- Color variants: \`divider-primary\`, \`divider-secondary\`, etc.
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="flex flex-col w-full">
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
    <div class="divider">OR</div>
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  </div>
`;

export const NoText = () => `
  <div class="flex flex-col w-full">
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
    <div class="divider"></div>
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  </div>
`;
NoText.storyName = 'Without Text';

export const Vertical = () => `
  <div class="flex w-full">
    <div class="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">content</div>
    <div class="divider divider-horizontal">OR</div>
    <div class="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">content</div>
  </div>
`;

export const Colors = () => `
  <div class="flex flex-col gap-4 w-full">
    <div class="divider divider-primary">Primary</div>
    <div class="divider divider-secondary">Secondary</div>
    <div class="divider divider-accent">Accent</div>
    <div class="divider divider-neutral">Neutral</div>
    <div class="divider divider-info">Info</div>
    <div class="divider divider-success">Success</div>
    <div class="divider divider-warning">Warning</div>
    <div class="divider divider-error">Error</div>
  </div>
`;
Colors.storyName = 'All Colors';

export const Positions = () => `
  <div class="flex flex-col gap-4 w-full">
    <div class="divider divider-start">Start</div>
    <div class="divider">Center (default)</div>
    <div class="divider divider-end">End</div>
  </div>
`;
Positions.storyName = 'Text Positions';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col w-full">
      <div class="card bg-base-300 rounded-box grid h-16 place-items-center">content</div>
      <div class="divider divider-primary">OR</div>
      <div class="card bg-base-300 rounded-box grid h-16 place-items-center">content</div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
