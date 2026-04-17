import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Navigation/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Breadcrumbs component for navigation hierarchy.

## Usage
\`\`\`tsx
<div className="breadcrumbs text-sm">
  <ul>
    <li><a>Home</a></li>
    <li><a>Documents</a></li>
    <li>Add Document</li>
  </ul>
</div>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="breadcrumbs text-sm text-base-content">
    <ul>
      <li><a>Home</a></li>
      <li><a>Documents</a></li>
      <li>Add Document</li>
    </ul>
  </div>
);

export const WithIcons = () => (
  <div className="breadcrumbs text-sm text-base-content">
    <ul>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          Home
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          Documents
        </a>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Add Document
      </li>
    </ul>
  </div>
);
WithIcons.storyName = 'With Icons';

export const MaxWidth = () => (
  <div className="breadcrumbs text-sm max-w-xs text-base-content">
    <ul>
      <li><a>Long text 1</a></li>
      <li><a>Long text 2</a></li>
      <li><a>Long text 3</a></li>
      <li><a>Long text 4</a></li>
      <li>Long text 5</li>
    </ul>
  </div>
);
MaxWidth.storyName = 'Max Width';

export const LongPath = () => (
  <div className="breadcrumbs text-sm text-base-content">
    <ul>
      <li><a>Home</a></li>
      <li><a>Documents</a></li>
      <li><a>Folder 1</a></li>
      <li><a>Subfolder A</a></li>
      <li><a>Subfolder B</a></li>
      <li>Current Page</li>
    </ul>
  </div>
);
LongPath.storyName = 'Long Path';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="breadcrumbs text-sm text-base-content">
      <ul>
        <li><a>Home</a></li>
        <li><a>Documents</a></li>
        <li>Add Document</li>
      </ul>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
