/**
 * @component Progress
 * @description DaisyUI Progress component with SQLI theme
 * @see https://daisyui.com/components/progress/
 */
export default {
  title: 'Components/Feedback/Progress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Progress** bar component.

## Usage
\`\`\`html
<progress class="progress w-56" value="0" max="100"></progress>
\`\`\`

## Colors
- \`progress-primary\`, \`progress-secondary\`, \`progress-accent\`
- \`progress-info\`, \`progress-success\`, \`progress-warning\`, \`progress-error\`
        `,
      },
    },
  },
};

export const Default = () => `
  <progress class="progress w-56" value="0" max="100"></progress>
`;

export const Values = () => `
  <div class="flex flex-col gap-4 w-56">
    <progress class="progress" value="0" max="100"></progress>
    <progress class="progress" value="10" max="100"></progress>
    <progress class="progress" value="40" max="100"></progress>
    <progress class="progress" value="70" max="100"></progress>
    <progress class="progress" value="100" max="100"></progress>
  </div>
`;

export const Colors = () => `
  <div class="flex flex-col gap-4 w-56">
    <progress class="progress progress-primary" value="40" max="100"></progress>
    <progress class="progress progress-secondary" value="50" max="100"></progress>
    <progress class="progress progress-accent" value="60" max="100"></progress>
    <progress class="progress progress-info" value="70" max="100"></progress>
    <progress class="progress progress-success" value="80" max="100"></progress>
    <progress class="progress progress-warning" value="90" max="100"></progress>
    <progress class="progress progress-error" value="100" max="100"></progress>
  </div>
`;
Colors.storyName = 'All Colors';

export const Indeterminate = () => `
  <progress class="progress w-56"></progress>
`;

export const WithLabel = () => `
  <div class="w-56">
    <div class="flex justify-between mb-1">
      <span class="text-sm">Upload progress</span>
      <span class="text-sm">70%</span>
    </div>
    <progress class="progress progress-primary" value="70" max="100"></progress>
  </div>
`;
WithLabel.storyName = 'With Label';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4 w-56">
      <progress class="progress progress-primary" value="40" max="100"></progress>
      <progress class="progress progress-secondary" value="60" max="100"></progress>
      <progress class="progress" value="80" max="100"></progress>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
