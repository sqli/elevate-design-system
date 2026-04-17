import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/Stat',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Stat** component for displaying statistics.

## Usage
\`\`\`html
<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">Total Page Views</div>
    <div class="stat-value">89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
</div>
\`\`\`

## Elements
- \`stat-title\` - Title text
- \`stat-value\` - Main value
- \`stat-desc\` - Description text
- \`stat-figure\` - Icon or image
- \`stat-actions\` - Action buttons
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="stats shadow">
    <div className="stat">
      <div className="stat-title">Total Page Views</div>
      <div className="stat-value">89,400</div>
      <div className="stat-desc">21% more than last month</div>
    </div>
  </div>
);

export const WithIconsAndDesc = () => (
  <div className="stats shadow">
    <div className="stat">
      <div className="stat-figure text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </div>
      <div className="stat-title">Total Likes</div>
      <div className="stat-value text-primary">25.6K</div>
      <div className="stat-desc">21% more than last month</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <div className="stat-title">Page Views</div>
      <div className="stat-value text-secondary">2.6M</div>
      <div className="stat-desc">21% more than last month</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-secondary">
        <div className="avatar online">
          <div className="w-16 rounded-full bg-primary flex items-center justify-center text-primary-content text-xl font-bold">
            SQ
          </div>
        </div>
      </div>
      <div className="stat-value">86%</div>
      <div className="stat-title">Tasks done</div>
      <div className="stat-desc text-secondary">31 tasks remaining</div>
    </div>
  </div>
);
WithIconsAndDesc.storyName = 'With Icons';

export const Vertical = () => (
  <div className="stats stats-vertical shadow">
    <div className="stat">
      <div className="stat-title">Downloads</div>
      <div className="stat-value">31K</div>
      <div className="stat-desc">Jan 1st - Feb 1st</div>
    </div>

    <div className="stat">
      <div className="stat-title">New Users</div>
      <div className="stat-value">4,200</div>
      <div className="stat-desc">&#8599;&#65038; 400 (22%)</div>
    </div>

    <div className="stat">
      <div className="stat-title">New Registers</div>
      <div className="stat-value">1,200</div>
      <div className="stat-desc">&#8600;&#65038; 90 (14%)</div>
    </div>
  </div>
);

export const Centered = () => (
  <div className="stats shadow">
    <div className="stat place-items-center">
      <div className="stat-title">Downloads</div>
      <div className="stat-value">31K</div>
      <div className="stat-desc">From January 1st to February 1st</div>
    </div>

    <div className="stat place-items-center">
      <div className="stat-title">Users</div>
      <div className="stat-value text-secondary">4,200</div>
      <div className="stat-desc text-secondary">&#8599;&#65038; 40 (2%)</div>
    </div>

    <div className="stat place-items-center">
      <div className="stat-title">New Registers</div>
      <div className="stat-value">1,200</div>
      <div className="stat-desc">&#8600;&#65038; 90 (14%)</div>
    </div>
  </div>
);
Centered.storyName = 'Centered';

export const WithActions = () => (
  <div className="stats shadow">
    <div className="stat">
      <div className="stat-title">Account balance</div>
      <div className="stat-value">$89,400</div>
      <div className="stat-actions">
        <button className="btn btn-sm btn-success">Add funds</button>
        <button className="btn btn-sm">Withdrawal</button>
      </div>
    </div>

    <div className="stat">
      <div className="stat-title">Current balance</div>
      <div className="stat-value">$89,400</div>
      <div className="stat-actions">
        <button className="btn btn-sm">Withdrawal</button>
        <button className="btn btn-sm">Deposit</button>
      </div>
    </div>
  </div>
);
WithActions.storyName = 'With Actions';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="stats shadow bg-base-200">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-primary">31K</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
        </div>
        <div className="stat-title">New Users</div>
        <div className="stat-value">4,200</div>
        <div className="stat-desc text-secondary">&#8599;&#65038; 400 (22%)</div>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
