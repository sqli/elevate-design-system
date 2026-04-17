import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/Timeline',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Timeline** component for displaying chronological events.

## Usage
\`\`\`html
<ul class="timeline">
  <li>
    <div class="timeline-start">1984</div>
    <div class="timeline-middle">...</div>
    <div class="timeline-end">Event</div>
    <hr />
  </li>
</ul>
\`\`\`

## Variants
- \`timeline-vertical\` - Vertical layout
- \`timeline-horizontal\` - Horizontal layout
- \`timeline-snap-icon\` - Snap icon to start/end
- \`timeline-compact\` - Compact version
        `,
      },
    },
  },
};

export default meta;

const CheckIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5 ${className}`}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

export const Default = () => (
  <ul className="timeline">
    <li>
      <div className="timeline-start">1984</div>
      <div className="timeline-middle">
        <CheckIcon />
      </div>
      <div className="timeline-end timeline-box">First Macintosh computer</div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-start">1998</div>
      <div className="timeline-middle">
        <CheckIcon />
      </div>
      <div className="timeline-end timeline-box">iMac</div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-start">2001</div>
      <div className="timeline-middle">
        <CheckIcon />
      </div>
      <div className="timeline-end timeline-box">iPod</div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-start">2007</div>
      <div className="timeline-middle">
        <CheckIcon />
      </div>
      <div className="timeline-end timeline-box">iPhone</div>
    </li>
  </ul>
);

export const Vertical = () => (
  <ul className="timeline timeline-vertical">
    <li>
      <div className="timeline-start timeline-box">Q1 2024</div>
      <div className="timeline-middle">
        <CheckIcon className="text-primary" />
      </div>
      <div className="timeline-end">Project kickoff</div>
      <hr className="bg-primary" />
    </li>
    <li>
      <hr className="bg-primary" />
      <div className="timeline-start timeline-box">Q2 2024</div>
      <div className="timeline-middle">
        <CheckIcon className="text-primary" />
      </div>
      <div className="timeline-end">Design phase</div>
      <hr className="bg-primary" />
    </li>
    <li>
      <hr className="bg-primary" />
      <div className="timeline-start timeline-box">Q3 2024</div>
      <div className="timeline-middle">
        <CheckIcon />
      </div>
      <div className="timeline-end">Development</div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-start timeline-box">Q4 2024</div>
      <div className="timeline-middle">
        <CheckIcon />
      </div>
      <div className="timeline-end">Launch</div>
    </li>
  </ul>
);

export const BottomAligned = () => (
  <ul className="timeline">
    <li>
      <div className="timeline-middle">
        <CheckIcon />
      </div>
      <div className="timeline-end timeline-box">First step</div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <CheckIcon />
      </div>
      <div className="timeline-end timeline-box">Second step</div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <CheckIcon />
      </div>
      <div className="timeline-end timeline-box">Third step</div>
    </li>
  </ul>
);
BottomAligned.storyName = 'Bottom Aligned';

export const Colored = () => (
  <ul className="timeline">
    <li>
      <div className="timeline-start timeline-box bg-primary text-primary-content">Start</div>
      <div className="timeline-middle">
        <CheckIcon className="text-primary" />
      </div>
      <hr className="bg-primary" />
    </li>
    <li>
      <hr className="bg-primary" />
      <div className="timeline-start timeline-box bg-secondary text-secondary-content">Middle</div>
      <div className="timeline-middle">
        <CheckIcon className="text-secondary" />
      </div>
      <hr className="bg-secondary" />
    </li>
    <li>
      <hr className="bg-secondary" />
      <div className="timeline-start timeline-box bg-accent text-accent-content">End</div>
      <div className="timeline-middle">
        <CheckIcon className="text-accent" />
      </div>
    </li>
  </ul>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <ul className="timeline timeline-vertical">
      <li>
        <div className="timeline-start timeline-box">Jan</div>
        <div className="timeline-middle">
          <CheckIcon className="text-primary" />
        </div>
        <div className="timeline-end">Phase 1 Complete</div>
        <hr className="bg-primary" />
      </li>
      <li>
        <hr className="bg-primary" />
        <div className="timeline-start timeline-box">Feb</div>
        <div className="timeline-middle">
          <CheckIcon />
        </div>
        <div className="timeline-end">Phase 2 in progress</div>
      </li>
    </ul>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
