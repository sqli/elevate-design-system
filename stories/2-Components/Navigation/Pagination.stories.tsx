import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Navigation/Pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Pagination component using join group for page navigation.

## Usage
\`\`\`tsx
<div className="join">
  <button className="join-item btn">1</button>
  <button className="join-item btn btn-active">2</button>
  <button className="join-item btn">3</button>
</div>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="join">
    <button className="join-item btn">1</button>
    <button className="join-item btn btn-active">2</button>
    <button className="join-item btn">3</button>
    <button className="join-item btn">4</button>
  </div>
);

export const WithPrevNext = () => (
  <div className="join">
    <button className="join-item btn">&laquo;</button>
    <button className="join-item btn">Page 22</button>
    <button className="join-item btn">&raquo;</button>
  </div>
);
WithPrevNext.storyName = 'With Prev/Next';

export const WithLabels = () => (
  <div className="join">
    <button className="join-item btn">Previous</button>
    <button className="join-item btn">Next</button>
  </div>
);
WithLabels.storyName = 'With Labels';

export const Sizes = () => (
  <div className="flex flex-col gap-4 items-start">
    <div>
      <p className="text-sm mb-2 opacity-70 text-base-content">Extra Small (xs)</p>
      <div className="join">
        <button className="join-item btn btn-xs">1</button>
        <button className="join-item btn btn-xs btn-active">2</button>
        <button className="join-item btn btn-xs">3</button>
      </div>
    </div>
    <div>
      <p className="text-sm mb-2 opacity-70 text-base-content">Small (sm)</p>
      <div className="join">
        <button className="join-item btn btn-sm">1</button>
        <button className="join-item btn btn-sm btn-active">2</button>
        <button className="join-item btn btn-sm">3</button>
      </div>
    </div>
    <div>
      <p className="text-sm mb-2 opacity-70 text-base-content">Medium (md)</p>
      <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
      </div>
    </div>
    <div>
      <p className="text-sm mb-2 opacity-70 text-base-content">Large (lg)</p>
      <div className="join">
        <button className="join-item btn btn-lg">1</button>
        <button className="join-item btn btn-lg btn-active">2</button>
        <button className="join-item btn btn-lg">3</button>
      </div>
    </div>
  </div>
);
Sizes.storyName = 'All Sizes';

export const RadioGroup = () => (
  <div className="join">
    <input className="join-item btn" type="radio" name="pagination-options" aria-label="1" />
    <input className="join-item btn" type="radio" name="pagination-options" aria-label="2" defaultChecked />
    <input className="join-item btn" type="radio" name="pagination-options" aria-label="3" />
    <input className="join-item btn" type="radio" name="pagination-options" aria-label="4" />
  </div>
);
RadioGroup.storyName = 'Radio Group';

export const Disabled = () => (
  <div className="join">
    <button className="join-item btn">1</button>
    <button className="join-item btn btn-active">2</button>
    <button className="join-item btn btn-disabled">...</button>
    <button className="join-item btn">99</button>
    <button className="join-item btn">100</button>
  </div>
);
Disabled.storyName = 'With Disabled';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="join">
      <button className="join-item btn">&laquo;</button>
      <button className="join-item btn">1</button>
      <button className="join-item btn btn-active">2</button>
      <button className="join-item btn">3</button>
      <button className="join-item btn">&raquo;</button>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
