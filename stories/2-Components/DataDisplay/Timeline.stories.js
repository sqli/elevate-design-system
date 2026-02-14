/**
 * @component Timeline
 * @description DaisyUI Timeline component with SQLI theme
 * @see https://daisyui.com/components/timeline/
 */
import { heroicon } from '../../utils/heroicons.js';

export default {
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
    <div class="timeline-middle">●</div>
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

export const Default = () => `
  <ul class="timeline">
    <li>
      <div class="timeline-start">1984</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
      </div>
      <div class="timeline-end timeline-box">First Macintosh computer</div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start">1998</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
      </div>
      <div class="timeline-end timeline-box">iMac</div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start">2001</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
      </div>
      <div class="timeline-end timeline-box">iPod</div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start">2007</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
      </div>
      <div class="timeline-end timeline-box">iPhone</div>
    </li>
  </ul>
`;

export const Vertical = () => `
  <ul class="timeline timeline-vertical">
    <li>
      <div class="timeline-start timeline-box">Q1 2024</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'text-primary h-5 w-5' })}
      </div>
      <div class="timeline-end">Project kickoff</div>
      <hr class="bg-primary" />
    </li>
    <li>
      <hr class="bg-primary" />
      <div class="timeline-start timeline-box">Q2 2024</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'text-primary h-5 w-5' })}
      </div>
      <div class="timeline-end">Design phase</div>
      <hr class="bg-primary" />
    </li>
    <li>
      <hr class="bg-primary" />
      <div class="timeline-start timeline-box">Q3 2024</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
      </div>
      <div class="timeline-end">Development</div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start timeline-box">Q4 2024</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
      </div>
      <div class="timeline-end">Launch</div>
    </li>
  </ul>
`;

export const BottomAligned = () => `
  <ul class="timeline">
    <li>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
      </div>
      <div class="timeline-end timeline-box">First step</div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
      </div>
      <div class="timeline-end timeline-box">Second step</div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
      </div>
      <div class="timeline-end timeline-box">Third step</div>
    </li>
  </ul>
`;
BottomAligned.storyName = 'Bottom Aligned';

export const Colored = () => `
  <ul class="timeline">
    <li>
      <div class="timeline-start timeline-box bg-primary text-primary-content">Start</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'text-primary h-5 w-5' })}
      </div>
      <hr class="bg-primary" />
    </li>
    <li>
      <hr class="bg-primary" />
      <div class="timeline-start timeline-box bg-secondary text-secondary-content">Middle</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'text-secondary h-5 w-5' })}
      </div>
      <hr class="bg-secondary" />
    </li>
    <li>
      <hr class="bg-secondary" />
      <div class="timeline-start timeline-box bg-accent text-accent-content">End</div>
      <div class="timeline-middle">
        ${heroicon('check-circle', { variant: 'solid', class: 'text-accent h-5 w-5' })}
      </div>
    </li>
  </ul>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <ul class="timeline timeline-vertical">
      <li>
        <div class="timeline-start timeline-box">Jan</div>
        <div class="timeline-middle">
          ${heroicon('check-circle', { variant: 'solid', class: 'text-primary h-5 w-5' })}
        </div>
        <div class="timeline-end">Phase 1 Complete</div>
        <hr class="bg-primary" />
      </li>
      <li>
        <hr class="bg-primary" />
        <div class="timeline-start timeline-box">Feb</div>
        <div class="timeline-middle">
          ${heroicon('check-circle', { variant: 'solid', class: 'h-5 w-5' })}
        </div>
        <div class="timeline-end">Phase 2 in progress</div>
      </li>
    </ul>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
