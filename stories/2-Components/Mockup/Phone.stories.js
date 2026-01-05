/**
 * @component Phone Mockup
 * @description DaisyUI Phone Mockup component with SQLI theme
 * @see https://daisyui.com/components/mockup-phone/
 */
export default {
  title: 'Components/Mockup/Phone',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Phone Mockup** component for displaying mobile phone frames.

## Usage
\`\`\`html
<div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
\`\`\`

## Artboard Sizes
- \`phone-1\` - 320×568
- \`phone-2\` - 375×667
- \`phone-3\` - 414×736
- \`phone-4\` - 375×812
- \`phone-5\` - 414×896
- \`phone-6\` - 320×568 (horizontal)
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="mockup-phone">
    <div class="camera"></div>
    <div class="display">
      <div class="artboard artboard-demo phone-1 bg-base-200 flex flex-col items-center justify-center">
        <p class="text-sm opacity-70">320 x 568</p>
      </div>
    </div>
  </div>
`;

export const Sizes = () => `
  <div class="flex flex-wrap gap-8 items-end">
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-1 bg-base-200 flex flex-col items-center justify-center">
          <p class="text-xs opacity-70">phone-1</p>
          <p class="text-xs opacity-50">320 x 568</p>
        </div>
      </div>
    </div>
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-2 bg-base-200 flex flex-col items-center justify-center">
          <p class="text-xs opacity-70">phone-2</p>
          <p class="text-xs opacity-50">375 x 667</p>
        </div>
      </div>
    </div>
  </div>
`;
Sizes.storyName = 'Artboard Sizes';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-1 bg-base-200 flex flex-col items-center justify-center">
          <p class="text-sm opacity-70">320 x 568</p>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
