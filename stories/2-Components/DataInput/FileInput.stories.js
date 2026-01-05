/**
 * @component FileInput
 * @description DaisyUI File Input component with SQLI theme
 * @see https://daisyui.com/components/file-input/
 */
export default {
  title: 'Components/Data Input/File Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **File Input** component for file uploads.

## Usage
\`\`\`html
<input type="file" class="file-input file-input-bordered w-full max-w-xs" />
\`\`\`

## Variants
- \`file-input-bordered\` - With border
- \`file-input-ghost\` - Ghost style

## Sizes
- \`file-input-xs\`, \`file-input-sm\`, \`file-input-md\`, \`file-input-lg\`
        `,
      },
    },
  },
};

export const Default = () => `
  <input type="file" class="file-input w-full max-w-xs" />
`;

export const Bordered = () => `
  <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
`;

export const Ghost = () => `
  <input type="file" class="file-input file-input-ghost w-full max-w-xs" />
`;

export const Colors = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <input type="file" class="file-input file-input-bordered file-input-primary w-full" />
    <input type="file" class="file-input file-input-bordered file-input-secondary w-full" />
    <input type="file" class="file-input file-input-bordered file-input-accent w-full" />
    <input type="file" class="file-input file-input-bordered file-input-info w-full" />
    <input type="file" class="file-input file-input-bordered file-input-success w-full" />
    <input type="file" class="file-input file-input-bordered file-input-warning w-full" />
    <input type="file" class="file-input file-input-bordered file-input-error w-full" />
  </div>
`;
Colors.storyName = 'All Colors';

export const Sizes = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <input type="file" class="file-input file-input-bordered file-input-xs w-full" />
    <input type="file" class="file-input file-input-bordered file-input-sm w-full" />
    <input type="file" class="file-input file-input-bordered file-input-md w-full" />
    <input type="file" class="file-input file-input-bordered file-input-lg w-full" />
  </div>
`;
Sizes.storyName = 'All Sizes';

export const Disabled = () => `
  <input type="file" class="file-input file-input-bordered w-full max-w-xs" disabled />
`;

export const WithLabel = () => `
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Pick a file</span>
      <span class="label-text-alt">Alt label</span>
    </div>
    <input type="file" class="file-input file-input-bordered w-full" />
    <div class="label">
      <span class="label-text-alt">Max file size: 10MB</span>
      <span class="label-text-alt">PNG, JPG, GIF</span>
    </div>
  </label>
`;
WithLabel.storyName = 'With Label';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4 w-full max-w-xs">
      <input type="file" class="file-input file-input-bordered w-full" />
      <input type="file" class="file-input file-input-bordered file-input-primary w-full" />
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
