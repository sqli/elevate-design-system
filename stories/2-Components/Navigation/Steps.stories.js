/**
 * @component Steps
 * @description DaisyUI Steps component with SQLI theme
 * @see https://daisyui.com/components/steps/
 */
export default {
  title: 'Components/Navigation/Steps',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Steps** component for process indicators.

## Usage
\`\`\`html
<ul class="steps">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
</ul>
\`\`\`

## Variants
- \`steps-vertical\` - Vertical layout
- \`steps-horizontal\` - Horizontal layout (default)
        `,
      },
    },
  },
};

export const Default = () => `
  <ul class="steps">
    <li class="step step-primary">Register</li>
    <li class="step step-primary">Choose plan</li>
    <li class="step">Purchase</li>
    <li class="step">Receive Product</li>
  </ul>
`;

export const WithDataContent = () => `
  <ul class="steps">
    <li class="step step-neutral" data-content="?">Step 1</li>
    <li class="step step-neutral" data-content="!">Step 2</li>
    <li class="step step-neutral" data-content="✓">Step 3</li>
    <li class="step step-neutral" data-content="✕">Step 4</li>
    <li class="step step-neutral" data-content="★">Step 5</li>
  </ul>
`;
WithDataContent.storyName = 'With Custom Content';

export const WithNumbers = () => `
  <ul class="steps">
    <li class="step step-primary" data-content="1">Register</li>
    <li class="step step-primary" data-content="2">Choose plan</li>
    <li class="step" data-content="3">Purchase</li>
    <li class="step" data-content="4">Complete</li>
  </ul>
`;
WithNumbers.storyName = 'With Numbers';

export const Colors = () => `
  <ul class="steps">
    <li class="step step-primary">Primary</li>
    <li class="step step-secondary">Secondary</li>
    <li class="step step-accent">Accent</li>
    <li class="step step-info">Info</li>
    <li class="step step-success">Success</li>
    <li class="step step-warning">Warning</li>
    <li class="step step-error">Error</li>
  </ul>
`;
Colors.storyName = 'All Colors';

export const Vertical = () => `
  <ul class="steps steps-vertical">
    <li class="step step-primary">Register</li>
    <li class="step step-primary">Choose plan</li>
    <li class="step">Purchase</li>
    <li class="step">Receive Product</li>
  </ul>
`;

export const Responsive = () => `
  <ul class="steps steps-vertical lg:steps-horizontal">
    <li class="step step-primary">Register</li>
    <li class="step step-primary">Choose plan</li>
    <li class="step">Purchase</li>
    <li class="step">Receive Product</li>
  </ul>
`;

export const Scrollable = () => `
  <ul class="steps">
    <li class="step">Step 1</li>
    <li class="step step-primary">Step 2</li>
    <li class="step">Step 3</li>
    <li class="step">Step 4</li>
    <li class="step">Step 5</li>
    <li class="step step-secondary">Step 6</li>
    <li class="step">Step 7</li>
    <li class="step">Step 8</li>
  </ul>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <ul class="steps">
      <li class="step step-primary">Register</li>
      <li class="step step-primary">Choose plan</li>
      <li class="step">Purchase</li>
      <li class="step">Complete</li>
    </ul>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
