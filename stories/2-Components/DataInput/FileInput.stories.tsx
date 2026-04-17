import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Label } from '../../../src/components/Label';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Input/File Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**File Input** for file uploads, using native HTML file input styled with Tailwind classes.

## Usage
\`\`\`tsx
<input type="file" className="file-input file-input-bordered w-full max-w-xs" />
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

export default meta;

export const Default = () => (
  <input type="file" className="file-input w-full max-w-xs" />
);

export const Bordered = () => (
  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
);

export const Ghost = () => (
  <input type="file" className="file-input file-input-ghost w-full max-w-xs" />
);

export const Colors = () => (
  <div className="flex flex-col gap-4 w-full max-w-xs">
    <input type="file" className="file-input file-input-bordered file-input-primary w-full" />
    <input type="file" className="file-input file-input-bordered file-input-secondary w-full" />
    <input type="file" className="file-input file-input-bordered file-input-accent w-full" />
    <input type="file" className="file-input file-input-bordered file-input-info w-full" />
    <input type="file" className="file-input file-input-bordered file-input-success w-full" />
    <input type="file" className="file-input file-input-bordered file-input-warning w-full" />
    <input type="file" className="file-input file-input-bordered file-input-error w-full" />
  </div>
);
Colors.storyName = 'All Colors';

export const Sizes = () => (
  <div className="flex flex-col gap-4 w-full max-w-xs">
    <input type="file" className="file-input file-input-bordered file-input-xs w-full" />
    <input type="file" className="file-input file-input-bordered file-input-sm w-full" />
    <input type="file" className="file-input file-input-bordered file-input-md w-full" />
    <input type="file" className="file-input file-input-bordered file-input-lg w-full" />
  </div>
);
Sizes.storyName = 'All Sizes';

export const Disabled = () => (
  <input type="file" className="file-input file-input-bordered w-full max-w-xs" disabled />
);

export const WithLabel = () => (
  <div className="flex flex-col gap-2 w-full max-w-xs">
    <div className="flex justify-between">
      <Label htmlFor="file-pick">Pick a file</Label>
      <span className="text-xs opacity-60">Optional</span>
    </div>
    <input type="file" id="file-pick" className="file-input file-input-bordered w-full" />
    <div className="flex justify-between">
      <span className="text-xs opacity-60">Max file size: 10MB</span>
      <span className="text-xs opacity-60">PNG, JPG, GIF</span>
    </div>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-4 w-full max-w-xs">
      <input type="file" className="file-input file-input-bordered w-full" />
      <input type="file" className="file-input file-input-bordered file-input-primary w-full" />
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
