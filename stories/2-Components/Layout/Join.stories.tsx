import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Layout/Join',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Join layout component for grouping items together with connected borders.

## Usage
\`\`\`tsx
<div className="join">
  <Button className="join-item">Button</Button>
  <Button className="join-item">Button</Button>
</div>
\`\`\`

## Variants
- Default - Horizontal grouping
- \`join-vertical\` - Vertical grouping
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="join">
    <button className="btn join-item">Button</button>
    <button className="btn join-item">Button</button>
    <button className="btn join-item">Button</button>
  </div>
);

export const Vertical = () => (
  <div className="join join-vertical">
    <button className="btn join-item">Button</button>
    <button className="btn join-item">Button</button>
    <button className="btn join-item">Button</button>
  </div>
);

export const WithInputAndButton = () => (
  <div className="join">
    <input className="input input-bordered join-item" placeholder="Email" />
    <Button variant="primary" className="join-item">Subscribe</Button>
  </div>
);
WithInputAndButton.storyName = 'Input + Button';

export const WithSelect = () => (
  <div className="join">
    <select className="select select-bordered join-item" defaultValue="Category">
      <option>Category</option>
      <option>Sci-fi</option>
      <option>Drama</option>
      <option>Action</option>
    </select>
    <input className="input input-bordered join-item" placeholder="Search..." />
    <button className="btn join-item">Search</button>
  </div>
);
WithSelect.storyName = 'With Select';

export const RadioGroup = () => (
  <div className="join">
    <input className="join-item btn" type="radio" name="options" aria-label="Radio 1" defaultChecked />
    <input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
    <input className="join-item btn" type="radio" name="options" aria-label="Radio 3" />
  </div>
);
RadioGroup.storyName = 'Radio Group';

export const WithDropdown = () => (
  <div className="join">
    <button className="btn join-item">Action</button>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn join-item">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
);
WithDropdown.storyName = 'With Dropdown';

export const Responsive = () => (
  <div className="join join-vertical lg:join-horizontal">
    <button className="btn join-item">Button</button>
    <button className="btn join-item">Button</button>
    <button className="btn join-item">Button</button>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-4">
      <div className="join">
        <button className="btn join-item">Button 1</button>
        <button className="btn join-item">Button 2</button>
        <button className="btn join-item">Button 3</button>
      </div>
      <div className="join">
        <input className="input input-bordered join-item" placeholder="Email" />
        <Button variant="primary" className="join-item">Subscribe</Button>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
