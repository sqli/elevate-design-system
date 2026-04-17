import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Actions/FAB',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**FAB** (Floating Action Button) for primary actions.

## Usage
\`\`\`tsx
import { Button } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper } from '../../utils/story-helpers';

<Button variant="primary" className="btn-circle fixed bottom-4 right-4">
  <PlusIcon />
</Button>
\`\`\`

## Notes
- Use fixed positioning for floating effect
- Combine with dropdown for speed dial functionality
        `,
      },
    },
  },
};

export default meta;

const PlusIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
  </svg>
);

export const Default = () => (
  <div className="relative h-48 w-full">
    <Button variant="primary" className="btn-circle absolute bottom-4 right-4">
      <PlusIcon />
    </Button>
  </div>
);

export const Sizes = () => (
  <div className="flex gap-4 items-center">
    <Button variant="primary" size="sm" className="btn-circle">
      <PlusIcon className="h-4 w-4" />
    </Button>
    <Button variant="primary" className="btn-circle">
      <PlusIcon />
    </Button>
    <Button variant="primary" size="lg" className="btn-circle">
      <PlusIcon className="h-8 w-8" />
    </Button>
  </div>
);
Sizes.storyName = 'All Sizes';

export const Colors = () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="primary" className="btn-circle">
      <PlusIcon />
    </Button>
    <Button variant="secondary" className="btn-circle">
      <PlusIcon />
    </Button>
    <Button variant="accent" className="btn-circle">
      <PlusIcon />
    </Button>
    <Button variant="success" className="btn-circle">
      <PlusIcon />
    </Button>
    <Button variant="error" className="btn-circle">
      <PlusIcon />
    </Button>
  </div>
);
Colors.storyName = 'All Colors';

export const SpeedDial = () => (
  <div className="relative h-64 w-full">
    <div className="absolute bottom-4 right-4">
      <div className="dropdown dropdown-top dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-circle btn-primary btn-lg">
          <PlusIcon />
        </div>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mb-2">
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Upload
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              New Folder
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              New Document
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
SpeedDial.storyName = 'Speed Dial';

export const Positions = () => (
  <div className="relative h-48 w-full border border-base-300 rounded-lg">
    <Button variant="primary" size="sm" className="btn-circle absolute top-4 left-4">
      <PlusIcon className="h-4 w-4" />
    </Button>
    <Button variant="secondary" size="sm" className="btn-circle absolute top-4 right-4">
      <PlusIcon className="h-4 w-4" />
    </Button>
    <Button variant="accent" size="sm" className="btn-circle absolute bottom-4 left-4">
      <PlusIcon className="h-4 w-4" />
    </Button>
    <button className="btn btn-circle btn-sm btn-neutral absolute bottom-4 right-4">
      <PlusIcon className="h-4 w-4" />
    </button>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <Button variant="primary" className="btn-circle absolute bottom-4 right-4">
      <PlusIcon />
    </Button>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
