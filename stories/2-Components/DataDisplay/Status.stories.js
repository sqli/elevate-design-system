/**
 * @component Status
 * @description DaisyUI Status indicator component with SQLI theme
 * @see https://daisyui.com/components/status/
 */
export default {
  title: 'Components/Data Display/Status',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Status** indicator component for showing status dots.

## Usage
\`\`\`html
<span class="status status-success"></span>
\`\`\`

## Colors
- \`status-primary\`, \`status-secondary\`, \`status-accent\`
- \`status-info\`, \`status-success\`, \`status-warning\`, \`status-error\`

## Sizes
- \`status-xs\`, \`status-sm\`, \`status-md\`, \`status-lg\`
        `,
      },
    },
  },
};

export const Default = () => `
  <span class="status status-primary"></span>
`;

export const Colors = () => `
  <div class="flex gap-4">
    <span class="status status-primary"></span>
    <span class="status status-secondary"></span>
    <span class="status status-accent"></span>
    <span class="status status-info"></span>
    <span class="status status-success"></span>
    <span class="status status-warning"></span>
    <span class="status status-error"></span>
  </div>
`;
Colors.storyName = 'All Colors';

export const Sizes = () => `
  <div class="flex items-center gap-4">
    <span class="status status-success status-xs"></span>
    <span class="status status-success status-sm"></span>
    <span class="status status-success status-md"></span>
    <span class="status status-success status-lg"></span>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const WithText = () => `
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <span class="status status-success"></span>
      <span>Online</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="status status-warning"></span>
      <span>Away</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="status status-error"></span>
      <span>Offline</span>
    </div>
  </div>
`;
WithText.storyName = 'With Text';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <span class="status status-success"></span>
        <span class="text-base-content">Online</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="status status-warning"></span>
        <span class="text-base-content">Away</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="status status-error"></span>
        <span class="text-base-content">Offline</span>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
