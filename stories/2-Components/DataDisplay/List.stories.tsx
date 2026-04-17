import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **List** component for displaying lists of items.

## Usage
\`\`\`html
<ul class="list bg-base-100 rounded-box shadow-md">
  <li class="list-row">
    <div>Item</div>
  </li>
</ul>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

const PlayIcon = () => (
  <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
      <path d="M6 3L20 12 6 21 6 3z"></path>
    </g>
  </svg>
);

export const Default = () => (
  <ul className="list bg-base-100 rounded-box shadow-md w-80">
    <li className="list-row">
      <div className="text-4xl font-thin opacity-30">01</div>
      <div>
        <div>Dio Lupa</div>
        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
      </div>
      <p className="list-col-wrap text-xs">
        Lost in the echoes of a satisfying meeting, the band takes listeners on a journey through the icy winds.
      </p>
      <button className="btn btn-square btn-ghost">
        <PlayIcon />
      </button>
    </li>
    <li className="list-row">
      <div className="text-4xl font-thin opacity-30">02</div>
      <div>
        <div>Elijah Mitchell</div>
        <div className="text-xs uppercase font-semibold opacity-60">Colors of a Daydream</div>
      </div>
      <p className="list-col-wrap text-xs">
        A vibrant track that feels like a sonic journey through kaleidoscopic emotions and dreamlike landscapes.
      </p>
      <button className="btn btn-square btn-ghost">
        <PlayIcon />
      </button>
    </li>
  </ul>
);

export const SimpleList = () => (
  <ul className="list bg-base-100 rounded-box shadow-md w-64">
    <li className="list-row">Item 1</li>
    <li className="list-row">Item 2</li>
    <li className="list-row">Item 3</li>
  </ul>
);
SimpleList.storyName = 'Simple List';

export const WithAvatars = () => (
  <ul className="list bg-base-100 rounded-box shadow-md w-80">
    <li className="list-row">
      <div className="avatar">
        <div className="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
          JS
        </div>
      </div>
      <div>
        <div className="font-medium">John Smith</div>
        <div className="text-xs opacity-60">john@example.com</div>
      </div>
    </li>
    <li className="list-row">
      <div className="avatar">
        <div className="w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-content font-bold">
          JD
        </div>
      </div>
      <div>
        <div className="font-medium">Jane Doe</div>
        <div className="text-xs opacity-60">jane@example.com</div>
      </div>
    </li>
  </ul>
);
WithAvatars.storyName = 'With Avatars';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <ul className="list bg-base-200 rounded-box w-64">
      <li className="list-row">Item 1</li>
      <li className="list-row">Item 2</li>
      <li className="list-row">Item 3</li>
    </ul>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
