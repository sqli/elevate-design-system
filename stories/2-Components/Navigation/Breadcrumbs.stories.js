import { heroicon } from '../../utils/heroicons.js';

/**
 * @component Breadcrumbs
 * @description DaisyUI Breadcrumbs component with SQLI theme
 * @see https://daisyui.com/components/breadcrumbs/
 */
export default {
  title: 'Components/Navigation/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Breadcrumbs** component for navigation hierarchy.

## Usage
\`\`\`html
<div class="breadcrumbs text-sm">
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

export const Default = () => `
  <div class="breadcrumbs text-sm">
    <ul>
      <li><a>Home</a></li>
      <li><a>Documents</a></li>
      <li>Add Document</li>
    </ul>
  </div>
`;

export const WithIcons = () => `
  <div class="breadcrumbs text-sm">
    <ul>
      <li>
        <a>
          ${heroicon('folder', { class: 'h-4 w-4' })}
          Home
        </a>
      </li>
      <li>
        <a>
          ${heroicon('folder', { class: 'h-4 w-4' })}
          Documents
        </a>
      </li>
      <li>
        ${heroicon('document', { class: 'h-4 w-4' })}
        Add Document
      </li>
    </ul>
  </div>
`;
WithIcons.storyName = 'With Icons';

export const MaxWidth = () => `
  <div class="breadcrumbs text-sm max-w-xs">
    <ul>
      <li><a>Long text 1</a></li>
      <li><a>Long text 2</a></li>
      <li><a>Long text 3</a></li>
      <li><a>Long text 4</a></li>
      <li>Long text 5</li>
    </ul>
  </div>
`;
MaxWidth.storyName = 'Max Width';

export const LongPath = () => `
  <div class="breadcrumbs text-sm">
    <ul>
      <li><a>Home</a></li>
      <li><a>Documents</a></li>
      <li><a>Folder 1</a></li>
      <li><a>Subfolder A</a></li>
      <li><a>Subfolder B</a></li>
      <li>Current Page</li>
    </ul>
  </div>
`;
LongPath.storyName = 'Long Path';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="breadcrumbs text-sm">
      <ul>
        <li><a>Home</a></li>
        <li><a>Documents</a></li>
        <li>Add Document</li>
      </ul>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
