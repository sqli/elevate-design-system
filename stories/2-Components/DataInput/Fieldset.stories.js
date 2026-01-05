/**
 * @component Fieldset
 * @description DaisyUI Fieldset component with SQLI theme
 * @see https://daisyui.com/components/fieldset/
 */
export default {
  title: 'Components/Data Input/Fieldset',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Fieldset** component for grouping form elements.

## Usage
\`\`\`html
<fieldset class="fieldset">
  <legend class="fieldset-legend">Legend</legend>
  <input type="text" class="input" />
</fieldset>
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => `
  <fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
    <legend class="fieldset-legend">Personal Information</legend>
    <label class="form-control">
      <div class="label"><span class="label-text">Name</span></div>
      <input type="text" class="input input-bordered" placeholder="Enter your name" />
    </label>
    <label class="form-control">
      <div class="label"><span class="label-text">Email</span></div>
      <input type="email" class="input input-bordered" placeholder="Enter your email" />
    </label>
  </fieldset>
`;

export const WithBorder = () => `
  <fieldset class="fieldset border border-base-300 p-4 rounded-box">
    <legend class="fieldset-legend px-2">Account Settings</legend>
    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text">Email notifications</span>
        <input type="checkbox" class="toggle toggle-primary" />
      </label>
    </div>
    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text">SMS notifications</span>
        <input type="checkbox" class="toggle toggle-primary" />
      </label>
    </div>
  </fieldset>
`;
WithBorder.storyName = 'With Border';

export const MultipleFieldsets = () => `
  <div class="flex flex-col gap-4">
    <fieldset class="fieldset border border-base-300 p-4 rounded-box">
      <legend class="fieldset-legend px-2">Shipping Address</legend>
      <input type="text" class="input input-bordered w-full mb-2" placeholder="Street" />
      <div class="flex gap-2">
        <input type="text" class="input input-bordered flex-1" placeholder="City" />
        <input type="text" class="input input-bordered w-24" placeholder="ZIP" />
      </div>
    </fieldset>
    <fieldset class="fieldset border border-base-300 p-4 rounded-box">
      <legend class="fieldset-legend px-2">Billing Address</legend>
      <label class="label cursor-pointer justify-start gap-2">
        <input type="checkbox" class="checkbox checkbox-sm" />
        <span class="label-text">Same as shipping</span>
      </label>
    </fieldset>
  </div>
`;
MultipleFieldsets.storyName = 'Multiple Fieldsets';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <fieldset class="fieldset border border-base-300 p-4 rounded-box">
      <legend class="fieldset-legend px-2">Contact Form</legend>
      <label class="form-control">
        <div class="label"><span class="label-text">Subject</span></div>
        <input type="text" class="input input-bordered" placeholder="Enter subject" />
      </label>
      <label class="form-control">
        <div class="label"><span class="label-text">Message</span></div>
        <textarea class="textarea textarea-bordered" placeholder="Enter message"></textarea>
      </label>
    </fieldset>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
