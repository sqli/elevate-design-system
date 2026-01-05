/**
 * @component Mask
 * @description DaisyUI Mask component with SQLI theme
 * @see https://daisyui.com/components/mask/
 */
export default {
  title: 'Components/Layout/Mask',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Mask** component for cropping images into shapes.

## Usage
\`\`\`html
<div class="mask mask-squircle w-24 h-24 bg-primary"></div>
\`\`\`

## Shapes
- \`mask-squircle\` - Squircle
- \`mask-heart\` - Heart
- \`mask-hexagon\` - Hexagon
- \`mask-hexagon-2\` - Hexagon rotated
- \`mask-decagon\` - Decagon
- \`mask-pentagon\` - Pentagon
- \`mask-diamond\` - Diamond
- \`mask-square\` - Square
- \`mask-circle\` - Circle
- \`mask-parallelogram\` - Parallelogram
- \`mask-star\` - Star
- \`mask-star-2\` - Star 2
- \`mask-triangle\` - Triangle
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="mask mask-squircle w-24 h-24 bg-primary"></div>
`;

export const AllShapes = () => `
  <div class="flex flex-wrap gap-4">
    <div class="text-center">
      <div class="mask mask-squircle w-20 h-20 bg-primary"></div>
      <p class="text-xs mt-2">squircle</p>
    </div>
    <div class="text-center">
      <div class="mask mask-heart w-20 h-20 bg-secondary"></div>
      <p class="text-xs mt-2">heart</p>
    </div>
    <div class="text-center">
      <div class="mask mask-hexagon w-20 h-20 bg-accent"></div>
      <p class="text-xs mt-2">hexagon</p>
    </div>
    <div class="text-center">
      <div class="mask mask-hexagon-2 w-20 h-20 bg-primary"></div>
      <p class="text-xs mt-2">hexagon-2</p>
    </div>
    <div class="text-center">
      <div class="mask mask-decagon w-20 h-20 bg-secondary"></div>
      <p class="text-xs mt-2">decagon</p>
    </div>
    <div class="text-center">
      <div class="mask mask-pentagon w-20 h-20 bg-accent"></div>
      <p class="text-xs mt-2">pentagon</p>
    </div>
    <div class="text-center">
      <div class="mask mask-diamond w-20 h-20 bg-primary"></div>
      <p class="text-xs mt-2">diamond</p>
    </div>
    <div class="text-center">
      <div class="mask mask-square w-20 h-20 bg-secondary"></div>
      <p class="text-xs mt-2">square</p>
    </div>
    <div class="text-center">
      <div class="mask mask-circle w-20 h-20 bg-accent"></div>
      <p class="text-xs mt-2">circle</p>
    </div>
    <div class="text-center">
      <div class="mask mask-parallelogram w-20 h-20 bg-primary"></div>
      <p class="text-xs mt-2">parallelogram</p>
    </div>
    <div class="text-center">
      <div class="mask mask-parallelogram-2 w-20 h-20 bg-secondary"></div>
      <p class="text-xs mt-2">parallelogram-2</p>
    </div>
    <div class="text-center">
      <div class="mask mask-parallelogram-3 w-20 h-20 bg-accent"></div>
      <p class="text-xs mt-2">parallelogram-3</p>
    </div>
    <div class="text-center">
      <div class="mask mask-parallelogram-4 w-20 h-20 bg-primary"></div>
      <p class="text-xs mt-2">parallelogram-4</p>
    </div>
    <div class="text-center">
      <div class="mask mask-star w-20 h-20 bg-secondary"></div>
      <p class="text-xs mt-2">star</p>
    </div>
    <div class="text-center">
      <div class="mask mask-star-2 w-20 h-20 bg-accent"></div>
      <p class="text-xs mt-2">star-2</p>
    </div>
    <div class="text-center">
      <div class="mask mask-triangle w-20 h-20 bg-primary"></div>
      <p class="text-xs mt-2">triangle</p>
    </div>
    <div class="text-center">
      <div class="mask mask-triangle-2 w-20 h-20 bg-secondary"></div>
      <p class="text-xs mt-2">triangle-2</p>
    </div>
    <div class="text-center">
      <div class="mask mask-triangle-3 w-20 h-20 bg-accent"></div>
      <p class="text-xs mt-2">triangle-3</p>
    </div>
    <div class="text-center">
      <div class="mask mask-triangle-4 w-20 h-20 bg-primary"></div>
      <p class="text-xs mt-2">triangle-4</p>
    </div>
  </div>
`;
AllShapes.storyName = 'All Shapes';

export const WithAvatar = () => `
  <div class="flex gap-4">
    <div class="avatar">
      <div class="mask mask-squircle w-24 bg-primary flex items-center justify-center text-primary-content text-2xl font-bold">
        SQ
      </div>
    </div>
    <div class="avatar">
      <div class="mask mask-hexagon w-24 bg-secondary flex items-center justify-center text-secondary-content text-2xl font-bold">
        HX
      </div>
    </div>
    <div class="avatar">
      <div class="mask mask-triangle w-24 bg-accent flex items-center justify-center text-accent-content text-2xl font-bold">
        TR
      </div>
    </div>
  </div>
`;
WithAvatar.storyName = 'With Avatar';

export const HalfMasks = () => `
  <div class="flex gap-4">
    <div class="text-center">
      <div class="mask mask-half-1 mask-star-2 w-20 h-20 bg-warning"></div>
      <p class="text-xs mt-2">half-1</p>
    </div>
    <div class="text-center">
      <div class="mask mask-half-2 mask-star-2 w-20 h-20 bg-warning"></div>
      <p class="text-xs mt-2">half-2</p>
    </div>
  </div>
`;
HalfMasks.storyName = 'Half Masks (for ratings)';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex gap-4">
      <div class="mask mask-squircle w-20 h-20 bg-primary"></div>
      <div class="mask mask-hexagon w-20 h-20 bg-secondary"></div>
      <div class="mask mask-heart w-20 h-20 bg-accent"></div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
