/**
 * @component Kbd
 * @description DaisyUI Keyboard Key component with SQLI theme
 * @see https://daisyui.com/components/kbd/
 */
export default {
  title: 'Components/Data Display/Kbd',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Kbd** component for displaying keyboard keys.

## Usage
\`\`\`html
<kbd class="kbd">A</kbd>
\`\`\`

## Sizes
- \`kbd-xs\`, \`kbd-sm\`, \`kbd-md\`, \`kbd-lg\`
        `,
      },
    },
  },
};

export const Default = () => `
  <kbd class="kbd">A</kbd>
`;

export const KeyCombination = () => `
  <div class="flex gap-1">
    <kbd class="kbd">Ctrl</kbd>
    +
    <kbd class="kbd">Shift</kbd>
    +
    <kbd class="kbd">Del</kbd>
  </div>
`;
KeyCombination.storyName = 'Key Combination';

export const ArrowKeys = () => `
  <div class="flex flex-col items-center gap-1">
    <kbd class="kbd">▲</kbd>
    <div class="flex gap-12">
      <kbd class="kbd">◀</kbd>
      <kbd class="kbd">▶</kbd>
    </div>
    <kbd class="kbd">▼</kbd>
  </div>
`;
ArrowKeys.storyName = 'Arrow Keys';

export const FunctionKeys = () => `
  <div class="flex gap-1">
    <kbd class="kbd">F1</kbd>
    <kbd class="kbd">F2</kbd>
    <kbd class="kbd">F3</kbd>
    <kbd class="kbd">F4</kbd>
    <kbd class="kbd">F5</kbd>
    <kbd class="kbd">F6</kbd>
    <kbd class="kbd">F7</kbd>
    <kbd class="kbd">F8</kbd>
    <kbd class="kbd">F9</kbd>
    <kbd class="kbd">F10</kbd>
    <kbd class="kbd">F11</kbd>
    <kbd class="kbd">F12</kbd>
  </div>
`;
FunctionKeys.storyName = 'Function Keys';

export const FullKeyboard = () => `
  <div class="flex flex-col gap-1">
    <div class="flex justify-center gap-1 w-full">
      <kbd class="kbd">q</kbd>
      <kbd class="kbd">w</kbd>
      <kbd class="kbd">e</kbd>
      <kbd class="kbd">r</kbd>
      <kbd class="kbd">t</kbd>
      <kbd class="kbd">y</kbd>
      <kbd class="kbd">u</kbd>
      <kbd class="kbd">i</kbd>
      <kbd class="kbd">o</kbd>
      <kbd class="kbd">p</kbd>
    </div>
    <div class="flex justify-center gap-1 w-full">
      <kbd class="kbd">a</kbd>
      <kbd class="kbd">s</kbd>
      <kbd class="kbd">d</kbd>
      <kbd class="kbd">f</kbd>
      <kbd class="kbd">g</kbd>
      <kbd class="kbd">h</kbd>
      <kbd class="kbd">j</kbd>
      <kbd class="kbd">k</kbd>
      <kbd class="kbd">l</kbd>
    </div>
    <div class="flex justify-center gap-1 w-full">
      <kbd class="kbd">z</kbd>
      <kbd class="kbd">x</kbd>
      <kbd class="kbd">c</kbd>
      <kbd class="kbd">v</kbd>
      <kbd class="kbd">b</kbd>
      <kbd class="kbd">n</kbd>
      <kbd class="kbd">m</kbd>
      <kbd class="kbd">/</kbd>
    </div>
  </div>
`;
FullKeyboard.storyName = 'Full Keyboard';

export const Sizes = () => `
  <div class="flex items-center gap-4">
    <div class="text-center">
      <kbd class="kbd kbd-xs">Shift</kbd>
      <p class="text-xs mt-1">xs</p>
    </div>
    <div class="text-center">
      <kbd class="kbd kbd-sm">Shift</kbd>
      <p class="text-xs mt-1">sm</p>
    </div>
    <div class="text-center">
      <kbd class="kbd kbd-md">Shift</kbd>
      <p class="text-xs mt-1">md</p>
    </div>
    <div class="text-center">
      <kbd class="kbd kbd-lg">Shift</kbd>
      <p class="text-xs mt-1">lg</p>
    </div>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const InText = () => `
  <p class="text-base-content">
    Press <kbd class="kbd kbd-sm">F</kbd> to pay respects.
  </p>
`;
InText.storyName = 'In Text';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex gap-4">
      <div class="flex gap-1">
        <kbd class="kbd">⌘</kbd>
        +
        <kbd class="kbd">C</kbd>
      </div>
      <div class="flex gap-1">
        <kbd class="kbd">⌘</kbd>
        +
        <kbd class="kbd">V</kbd>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
