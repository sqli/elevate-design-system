import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const HomeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const DetailsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StatsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const meta: Meta = {
  title: 'Components/Navigation/Dock',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Dock component for bottom navigation.

## Usage
\`\`\`tsx
<div className="dock">
  <button className="dock-active">
    <svg>...</svg>
  </button>
  <button>
    <svg>...</svg>
  </button>
</div>
\`\`\`

## Sizes
- \`dock-xs\`, \`dock-sm\`, \`dock-md\`, \`dock-lg\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="dock">
    <button>
      <HomeIcon className="h-5 w-5" />
    </button>
    <button className="dock-active">
      <DetailsIcon className="h-5 w-5" />
    </button>
    <button>
      <StatsIcon className="h-5 w-5" />
    </button>
  </div>
);

export const WithLabels = () => (
  <div className="dock">
    <button>
      <HomeIcon className="h-5 w-5" />
      <span className="dock-label">Home</span>
    </button>
    <button className="dock-active">
      <DetailsIcon className="h-5 w-5" />
      <span className="dock-label">Details</span>
    </button>
    <button>
      <StatsIcon className="h-5 w-5" />
      <span className="dock-label">Stats</span>
    </button>
  </div>
);
WithLabels.storyName = 'With Labels';

export const Sizes = () => (
  <div className="flex flex-col gap-8">
    <div>
      <p className="text-sm mb-2 opacity-70 text-base-content">Extra Small (xs)</p>
      <div className="dock dock-xs">
        <button>
          <HomeIcon className="h-4 w-4" />
        </button>
        <button className="dock-active">
          <DetailsIcon className="h-4 w-4" />
        </button>
        <button>
          <StatsIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
    <div>
      <p className="text-sm mb-2 opacity-70 text-base-content">Large (lg)</p>
      <div className="dock dock-lg">
        <button>
          <HomeIcon className="h-6 w-6" />
        </button>
        <button className="dock-active">
          <DetailsIcon className="h-6 w-6" />
        </button>
        <button>
          <StatsIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
);
Sizes.storyName = 'Sizes';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="dock">
      <button>
        <HomeIcon className="h-5 w-5" />
        <span className="dock-label">Home</span>
      </button>
      <button className="dock-active">
        <DetailsIcon className="h-5 w-5" />
        <span className="dock-label">Details</span>
      </button>
      <button>
        <StatsIcon className="h-5 w-5" />
        <span className="dock-label">Stats</span>
      </button>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
