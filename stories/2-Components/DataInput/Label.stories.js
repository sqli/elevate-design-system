/**
 * @component Label
 * @description DaisyUI Label component with SQLI theme
 * @see https://daisyui.com/components/label/
 */
export default {
  title: 'Components/Data Input/Label',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Label** component for form inputs.

## Usage
\`\`\`html
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Label</span>
    <span class="label-text-alt">Alt label</span>
  </div>
  <input type="text" class="input input-bordered" />
</label>
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => `
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">What is your name?</span>
    </div>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  </label>
`;

export const WithAltLabel = () => `
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">What is your name?</span>
      <span class="label-text-alt">Top Right label</span>
    </div>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <div class="label">
      <span class="label-text-alt">Bottom Left label</span>
      <span class="label-text-alt">Bottom Right label</span>
    </div>
  </label>
`;
WithAltLabel.storyName = 'With Alt Labels';

export const ForCheckbox = () => `
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="checkbox checkbox-primary" />
    </label>
  </div>
`;
ForCheckbox.storyName = 'For Checkbox';

export const ForToggle = () => `
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">Enable notifications</span>
      <input type="checkbox" class="toggle toggle-primary" />
    </label>
  </div>
`;
ForToggle.storyName = 'For Toggle';

export const ForRadio = () => `
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">Red pill</span>
      <input type="radio" name="radio-10" class="radio radio-primary" checked />
    </label>
    <label class="cursor-pointer label">
      <span class="label-text">Blue pill</span>
      <input type="radio" name="radio-10" class="radio radio-primary" />
    </label>
  </div>
`;
ForRadio.storyName = 'For Radio';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Email</span>
        <span class="label-text-alt">Required</span>
      </div>
      <input type="email" placeholder="email@example.com" class="input input-bordered w-full max-w-xs" />
      <div class="label">
        <span class="label-text-alt">We'll never share your email</span>
      </div>
    </label>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
