import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
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
- \`phone-1\` - 320x568
- \`phone-2\` - 375x667
- \`phone-3\` - 414x736
- \`phone-4\` - 375x812
- \`phone-5\` - 414x896
- \`phone-6\` - 320x568 (horizontal)
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="mockup-phone">
    <div className="camera"></div>
    <div className="display">
      <div className="artboard artboard-demo phone-1 bg-base-200 flex flex-col items-center justify-center">
        <p className="text-sm opacity-70">320 x 568</p>
      </div>
    </div>
  </div>
);

export const Sizes = () => (
  <div className="flex flex-wrap gap-8 items-end">
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 bg-base-200 flex flex-col items-center justify-center">
          <p className="text-xs opacity-70">phone-1</p>
          <p className="text-xs opacity-50">320 x 568</p>
        </div>
      </div>
    </div>
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-2 bg-base-200 flex flex-col items-center justify-center">
          <p className="text-xs opacity-70">phone-2</p>
          <p className="text-xs opacity-50">375 x 667</p>
        </div>
      </div>
    </div>
  </div>
);
Sizes.storyName = 'Artboard Sizes';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 bg-base-200 flex flex-col items-center justify-center">
          <p className="text-sm opacity-70">320 x 568</p>
        </div>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
