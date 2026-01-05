/**
 * @component Tooltip
 * @description DaisyUI Tooltip component with SQLI theme
 * @see https://daisyui.com/components/tooltip/
 */
export default {
  title: 'Components/Data Display/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Tooltip** component for displaying helpful information on hover.

## Usage
\`\`\`html
<div class="tooltip" data-tip="hello">
  <button class="btn">Hover me</button>
</div>
\`\`\`

## Positions
- \`tooltip-top\` (default)
- \`tooltip-bottom\`
- \`tooltip-left\`
- \`tooltip-right\`

## Colors
- \`tooltip-primary\`, \`tooltip-secondary\`, \`tooltip-accent\`
- \`tooltip-info\`, \`tooltip-success\`, \`tooltip-warning\`, \`tooltip-error\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
`;

export const Positions = () => `
  <div class="flex flex-wrap gap-4 p-8">
    <div class="tooltip tooltip-top" data-tip="Top">
      <button class="btn">Top</button>
    </div>
    <div class="tooltip tooltip-bottom" data-tip="Bottom">
      <button class="btn">Bottom</button>
    </div>
    <div class="tooltip tooltip-left" data-tip="Left">
      <button class="btn">Left</button>
    </div>
    <div class="tooltip tooltip-right" data-tip="Right">
      <button class="btn">Right</button>
    </div>
  </div>
`;
Positions.storyName = 'All Positions';

export const Colors = () => `
  <div class="flex flex-wrap gap-4 p-4">
    <div class="tooltip tooltip-primary" data-tip="Primary">
      <button class="btn btn-primary">Primary</button>
    </div>
    <div class="tooltip tooltip-secondary" data-tip="Secondary">
      <button class="btn btn-secondary">Secondary</button>
    </div>
    <div class="tooltip tooltip-accent" data-tip="Accent">
      <button class="btn btn-accent">Accent</button>
    </div>
    <div class="tooltip tooltip-info" data-tip="Info">
      <button class="btn btn-info">Info</button>
    </div>
    <div class="tooltip tooltip-success" data-tip="Success">
      <button class="btn btn-success">Success</button>
    </div>
    <div class="tooltip tooltip-warning" data-tip="Warning">
      <button class="btn btn-warning">Warning</button>
    </div>
    <div class="tooltip tooltip-error" data-tip="Error">
      <button class="btn btn-error">Error</button>
    </div>
  </div>
`;
Colors.storyName = 'All Colors';

export const ForceOpen = () => `
  <div class="tooltip tooltip-open" data-tip="Force open">
    <button class="btn">I'm always visible</button>
  </div>
`;
ForceOpen.storyName = 'Force Open';

export const OnText = () => `
  <p class="text-base-content">
    A language based on
    <span class="tooltip" data-tip="HyperText Markup Language">
      <span class="underline decoration-dotted cursor-help">HTML</span>
    </span>
    and target and target a browser.
  </p>
`;
OnText.storyName = 'On Text';

export const MultilineContent = () => `
  <div class="tooltip" data-tip="This is a very long tooltip text that demonstrates multiline content. It can contain helpful descriptions or additional information.">
    <button class="btn">Hover for long text</button>
  </div>
`;
MultilineContent.storyName = 'Multiline Content';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-8 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-6">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-wrap gap-4">
      <div class="tooltip tooltip-primary" data-tip="Primary tooltip">
        <button class="btn btn-primary">Primary</button>
      </div>
      <div class="tooltip tooltip-secondary" data-tip="Secondary tooltip">
        <button class="btn btn-secondary">Secondary</button>
      </div>
      <div class="tooltip" data-tip="Default tooltip">
        <button class="btn">Default</button>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
