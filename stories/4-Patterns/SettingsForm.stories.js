/**
 * @component SettingsForm
 * @description Settings page pattern with profile fields, toggles, radio group, and action buttons
 * @see https://daisyui.com/components/fieldset/
 */
import { heroicon } from '../utils/heroicons.js';

export default {
  title: 'Patterns/Settings Form',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A complete **Settings Form** pattern combining Fieldset, Text Inputs, Select, Toggle switches, Radio buttons, and Button groups.

## Features
- Fieldset with legend for "Profile Settings"
- Text inputs for name and email
- Select dropdown for preferred language
- Toggle switches for notification preferences (email, push, marketing)
- Radio group for theme preference (light, dark, system)
- Save and Cancel button group

## Usage
Copy the HTML structure and wire up form submission handling. Adjust field values, language options, and notification types to match your application.
        `,
      },
    },
  },
};

const settingsHTML = (theme) => {
  const wrapper = theme
    ? `data-theme="${theme}" class="bg-base-200 p-8 rounded-lg min-h-[700px]"`
    : 'class="bg-base-200 p-8 rounded-lg min-h-[700px]"';
  const heading = theme
    ? `<h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>`
    : '';

  return `
  <div ${wrapper}>
    ${heading}
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-base-content mb-6">Settings</h2>

      <form class="flex flex-col gap-6">
        <!-- Profile Settings -->
        <fieldset class="fieldset border border-base-300 bg-base-100 p-6 rounded-box">
          <legend class="fieldset-legend px-2 text-base font-semibold">Profile Settings</legend>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text font-medium">Full Name</span>
              </div>
              <input type="text" value="Jane Doe" class="input input-bordered w-full" />
            </label>

            <label class="form-control w-full">
              <div class="label">
                <span class="label-text font-medium">Email Address</span>
              </div>
              <input type="email" value="jane.doe@sqli.com" class="input input-bordered w-full" />
              <div class="label">
                <span class="label-text-alt text-base-content/50">Used for account notifications</span>
              </div>
            </label>
          </div>

          <label class="form-control w-full mt-2">
            <div class="label">
              <span class="label-text font-medium">Language</span>
            </div>
            <select class="select select-bordered w-full sm:w-64">
              <option selected>English</option>
              <option>French</option>
              <option>German</option>
              <option>Spanish</option>
              <option>Arabic</option>
            </select>
          </label>
        </fieldset>

        <!-- Notification Preferences -->
        <fieldset class="fieldset border border-base-300 bg-base-100 p-6 rounded-box">
          <legend class="fieldset-legend px-2 text-base font-semibold">Notification Preferences</legend>

          <div class="flex flex-col gap-1">
            <label class="label cursor-pointer justify-between">
              <div>
                <span class="label-text font-medium">Email Notifications</span>
                <p class="text-xs text-base-content/50 mt-0.5">Receive order updates and account alerts via email</p>
              </div>
              <input type="checkbox" class="toggle toggle-primary" checked />
            </label>

            <div class="divider my-0"></div>

            <label class="label cursor-pointer justify-between">
              <div>
                <span class="label-text font-medium">Push Notifications</span>
                <p class="text-xs text-base-content/50 mt-0.5">Get real-time alerts on your device</p>
              </div>
              <input type="checkbox" class="toggle toggle-primary" checked />
            </label>

            <div class="divider my-0"></div>

            <label class="label cursor-pointer justify-between">
              <div>
                <span class="label-text font-medium">Marketing Communications</span>
                <p class="text-xs text-base-content/50 mt-0.5">Receive product news, tips, and promotional offers</p>
              </div>
              <input type="checkbox" class="toggle toggle-primary" />
            </label>
          </div>
        </fieldset>

        <!-- Theme Preference -->
        <fieldset class="fieldset border border-base-300 bg-base-100 p-6 rounded-box">
          <legend class="fieldset-legend px-2 text-base font-semibold">Theme Preference</legend>

          <div class="flex flex-col gap-3">
            <label class="label cursor-pointer justify-start gap-4">
              <input type="radio" name="theme-preference" class="radio radio-primary" checked />
              <div>
                <span class="label-text font-medium">Light</span>
                <p class="text-xs text-base-content/50">Use the light theme across the application</p>
              </div>
            </label>

            <label class="label cursor-pointer justify-start gap-4">
              <input type="radio" name="theme-preference" class="radio radio-primary" />
              <div>
                <span class="label-text font-medium">Dark</span>
                <p class="text-xs text-base-content/50">Use the dark theme for reduced eye strain</p>
              </div>
            </label>

            <label class="label cursor-pointer justify-start gap-4">
              <input type="radio" name="theme-preference" class="radio radio-primary" />
              <div>
                <span class="label-text font-medium">System</span>
                <p class="text-xs text-base-content/50">Automatically match your operating system setting</p>
              </div>
            </label>
          </div>
        </fieldset>

        <!-- Action buttons -->
        <div class="flex justify-end gap-3 pt-2">
          <button type="button" class="btn btn-ghost">Cancel</button>
          <button type="submit" class="btn btn-primary">
            ${heroicon('check', { class: 'h-5 w-5' })}
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
  `;
};

export const Default = () => settingsHTML(null);

export const DarkMode = () => settingsHTML('sqli-dark');
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
