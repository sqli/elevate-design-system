/**
 * @component Textarea
 * @description DaisyUI Textarea component with SQLI theme
 * @see https://daisyui.com/components/textarea/
 */
export default {
  title: 'Components/Data Input/Textarea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Textarea** component for multiline text input.

## Usage
\`\`\`html
<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
\`\`\`

## Variants
- \`textarea-bordered\` - With border
- \`textarea-ghost\` - Ghost style

## Sizes
- \`textarea-xs\`, \`textarea-sm\`, \`textarea-md\`, \`textarea-lg\`
        `,
      },
    },
  },
};

export const Default = () => `
  <textarea class="textarea" placeholder="Bio"></textarea>
`;

export const Bordered = () => `
  <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
`;

export const Ghost = () => `
  <textarea class="textarea textarea-ghost" placeholder="Bio"></textarea>
`;

export const Colors = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <textarea class="textarea textarea-primary" placeholder="Primary"></textarea>
    <textarea class="textarea textarea-secondary" placeholder="Secondary"></textarea>
    <textarea class="textarea textarea-accent" placeholder="Accent"></textarea>
    <textarea class="textarea textarea-info" placeholder="Info"></textarea>
    <textarea class="textarea textarea-success" placeholder="Success"></textarea>
    <textarea class="textarea textarea-warning" placeholder="Warning"></textarea>
    <textarea class="textarea textarea-error" placeholder="Error"></textarea>
  </div>
`;
Colors.storyName = 'All Colors';

export const Sizes = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <textarea class="textarea textarea-bordered textarea-xs" placeholder="Extra Small"></textarea>
    <textarea class="textarea textarea-bordered textarea-sm" placeholder="Small"></textarea>
    <textarea class="textarea textarea-bordered textarea-md" placeholder="Medium"></textarea>
    <textarea class="textarea textarea-bordered textarea-lg" placeholder="Large"></textarea>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const Disabled = () => `
  <textarea class="textarea textarea-bordered" placeholder="You can't type here" disabled></textarea>
`;

export const WithLabel = () => `
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Your bio</span>
      <span class="label-text-alt">Alt label</span>
    </div>
    <textarea class="textarea textarea-bordered h-24" placeholder="Tell us about yourself..."></textarea>
    <div class="label">
      <span class="label-text-alt">Max 500 characters</span>
      <span class="label-text-alt">0/500</span>
    </div>
  </label>
`;
WithLabel.storyName = 'With Label';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4 w-full max-w-xs">
      <textarea class="textarea textarea-bordered" placeholder="Default textarea"></textarea>
      <textarea class="textarea textarea-primary" placeholder="Primary textarea"></textarea>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
