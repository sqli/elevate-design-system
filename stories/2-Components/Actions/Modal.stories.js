/**
 * @component Modal
 * @description DaisyUI Modal component with SQLI theme
 * @see https://daisyui.com/components/modal/
 */
export default {
  title: 'Components/Actions/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Modal** dialog component.

## Usage
\`\`\`html
<button class="btn" onclick="my_modal.showModal()">Open Modal</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
\`\`\`

## Modifiers
- \`modal-bottom\` - Positioned at bottom (mobile style)
- \`modal-middle\` - Centered vertically
- \`modal-top\` - Positioned at top
        `,
      },
    },
  },
};

export const Default = () => `
  <button class="btn" onclick="modal_default.showModal()">Open Modal</button>
  <dialog id="modal_default" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
`;

export const WithBackdropClose = () => `
  <button class="btn btn-primary" onclick="modal_backdrop.showModal()">Open Modal</button>
  <dialog id="modal_backdrop" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Click outside to close</h3>
      <p class="py-4">Press ESC key or click outside to close this modal.</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
`;
WithBackdropClose.storyName = 'With Backdrop Close';

export const WithCloseButton = () => `
  <button class="btn btn-primary" onclick="modal_close_btn.showModal()">Open Modal</button>
  <dialog id="modal_close_btn" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
      </form>
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press X button, ESC key, or click outside to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
`;
WithCloseButton.storyName = 'With Close Button';

export const WithActions = () => `
  <button class="btn btn-primary" onclick="modal_actions.showModal()">Open Modal</button>
  <dialog id="modal_actions" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Confirm Action</h3>
      <p class="py-4">Are you sure you want to proceed with this action?</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-ghost mr-2">Cancel</button>
          <button class="btn btn-primary">Confirm</button>
        </form>
      </div>
    </div>
  </dialog>
`;
WithActions.storyName = 'With Action Buttons';

export const PositionBottom = () => `
  <button class="btn" onclick="modal_bottom.showModal()">Open Bottom Modal</button>
  <dialog id="modal_bottom" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Bottom Modal</h3>
      <p class="py-4">This modal appears at the bottom on mobile, and centered on larger screens.</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
`;
PositionBottom.storyName = 'Bottom Position (Mobile)';

export const LargeContent = () => `
  <button class="btn btn-primary" onclick="modal_large.showModal()">Open Large Modal</button>
  <dialog id="modal_large" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h3 class="text-lg font-bold">Large Modal</h3>
      <p class="py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p class="py-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
`;
LargeContent.storyName = 'Large Content';

export const WithForm = () => `
  <button class="btn btn-primary" onclick="modal_form.showModal()">Open Form Modal</button>
  <dialog id="modal_form" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold mb-4">Contact Form</h3>
      <div class="form-control mb-4">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input type="text" placeholder="Your name" class="input input-bordered" />
      </div>
      <div class="form-control mb-4">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="your@email.com" class="input input-bordered" />
      </div>
      <div class="form-control mb-4">
        <label class="label">
          <span class="label-text">Message</span>
        </label>
        <textarea class="textarea textarea-bordered" placeholder="Your message"></textarea>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-ghost mr-2">Cancel</button>
          <button class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
`;
WithForm.storyName = 'With Form';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <button class="btn btn-primary" onclick="modal_dark.showModal()">Open Modal</button>
    <dialog id="modal_dark" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Dark Theme Modal</h3>
        <p class="py-4">This modal inherits the dark theme styling.</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
