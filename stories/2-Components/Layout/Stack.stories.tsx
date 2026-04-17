import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Layout/Stack',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Stack layout component for stacking elements on top of each other.

## Usage
\`\`\`tsx
<div className="stack">
  <div className="card bg-primary">Card 1</div>
  <div className="card bg-primary">Card 2</div>
  <div className="card bg-primary">Card 3</div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="stack">
    <div className="card bg-primary text-primary-content w-36 shadow-md">
      <div className="card-body">
        <h2 className="card-title">A</h2>
      </div>
    </div>
    <div className="card bg-accent text-accent-content w-36 shadow-md">
      <div className="card-body">
        <h2 className="card-title">B</h2>
      </div>
    </div>
    <div className="card bg-secondary text-secondary-content w-36 shadow-md">
      <div className="card-body">
        <h2 className="card-title">C</h2>
      </div>
    </div>
  </div>
);

export const StackedCards = () => (
  <div className="stack">
    <div className="card bg-base-100 w-64 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-base-content">Notification 1</h2>
        <p className="text-base-content">You have 3 unread messages.</p>
      </div>
    </div>
    <div className="card bg-base-100 w-64 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-base-content">Notification 2</h2>
        <p className="text-base-content">You have 2 unread messages.</p>
      </div>
    </div>
    <div className="card bg-base-100 w-64 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-base-content">Notification 3</h2>
        <p className="text-base-content">You have 1 unread message.</p>
      </div>
    </div>
  </div>
);
StackedCards.storyName = 'Stacked Cards';

export const StackedImages = () => (
  <div className="stack">
    <div className="w-24 h-24 rounded-xl bg-primary flex items-center justify-center text-primary-content font-bold text-2xl">1</div>
    <div className="w-24 h-24 rounded-xl bg-secondary flex items-center justify-center text-secondary-content font-bold text-2xl">2</div>
    <div className="w-24 h-24 rounded-xl bg-accent flex items-center justify-center text-accent-content font-bold text-2xl">3</div>
  </div>
);
StackedImages.storyName = 'Stacked Images';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="stack">
      <div className="card bg-primary text-primary-content w-36 shadow-md">
        <div className="card-body">
          <h2 className="card-title">A</h2>
        </div>
      </div>
      <div className="card bg-accent text-accent-content w-36 shadow-md">
        <div className="card-body">
          <h2 className="card-title">B</h2>
        </div>
      </div>
      <div className="card bg-secondary text-secondary-content w-36 shadow-md">
        <div className="card-body">
          <h2 className="card-title">C</h2>
        </div>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
