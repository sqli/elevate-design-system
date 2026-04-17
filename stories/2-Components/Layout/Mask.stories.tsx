import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Layout/Mask',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Mask component for cropping images into shapes using CSS clip-path.

## Usage
\`\`\`tsx
<div className="mask mask-squircle w-24 h-24 bg-primary" />
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

export default meta;

export const Default = () => (
  <div className="mask mask-squircle w-24 h-24 bg-primary" />
);

export const AllShapes = () => (
  <div className="flex flex-wrap gap-4">
    <div className="text-center">
      <div className="mask mask-squircle w-20 h-20 bg-primary" />
      <p className="text-xs mt-2 text-base-content">squircle</p>
    </div>
    <div className="text-center">
      <div className="mask mask-heart w-20 h-20 bg-secondary" />
      <p className="text-xs mt-2 text-base-content">heart</p>
    </div>
    <div className="text-center">
      <div className="mask mask-hexagon w-20 h-20 bg-accent" />
      <p className="text-xs mt-2 text-base-content">hexagon</p>
    </div>
    <div className="text-center">
      <div className="mask mask-hexagon-2 w-20 h-20 bg-primary" />
      <p className="text-xs mt-2 text-base-content">hexagon-2</p>
    </div>
    <div className="text-center">
      <div className="mask mask-decagon w-20 h-20 bg-secondary" />
      <p className="text-xs mt-2 text-base-content">decagon</p>
    </div>
    <div className="text-center">
      <div className="mask mask-pentagon w-20 h-20 bg-accent" />
      <p className="text-xs mt-2 text-base-content">pentagon</p>
    </div>
    <div className="text-center">
      <div className="mask mask-diamond w-20 h-20 bg-primary" />
      <p className="text-xs mt-2 text-base-content">diamond</p>
    </div>
    <div className="text-center">
      <div className="mask mask-square w-20 h-20 bg-secondary" />
      <p className="text-xs mt-2 text-base-content">square</p>
    </div>
    <div className="text-center">
      <div className="mask mask-circle w-20 h-20 bg-accent" />
      <p className="text-xs mt-2 text-base-content">circle</p>
    </div>
    <div className="text-center">
      <div className="mask mask-parallelogram w-20 h-20 bg-primary" />
      <p className="text-xs mt-2 text-base-content">parallelogram</p>
    </div>
    <div className="text-center">
      <div className="mask mask-parallelogram-2 w-20 h-20 bg-secondary" />
      <p className="text-xs mt-2 text-base-content">parallelogram-2</p>
    </div>
    <div className="text-center">
      <div className="mask mask-parallelogram-3 w-20 h-20 bg-accent" />
      <p className="text-xs mt-2 text-base-content">parallelogram-3</p>
    </div>
    <div className="text-center">
      <div className="mask mask-parallelogram-4 w-20 h-20 bg-primary" />
      <p className="text-xs mt-2 text-base-content">parallelogram-4</p>
    </div>
    <div className="text-center">
      <div className="mask mask-star w-20 h-20 bg-secondary" />
      <p className="text-xs mt-2 text-base-content">star</p>
    </div>
    <div className="text-center">
      <div className="mask mask-star-2 w-20 h-20 bg-accent" />
      <p className="text-xs mt-2 text-base-content">star-2</p>
    </div>
    <div className="text-center">
      <div className="mask mask-triangle w-20 h-20 bg-primary" />
      <p className="text-xs mt-2 text-base-content">triangle</p>
    </div>
    <div className="text-center">
      <div className="mask mask-triangle-2 w-20 h-20 bg-secondary" />
      <p className="text-xs mt-2 text-base-content">triangle-2</p>
    </div>
    <div className="text-center">
      <div className="mask mask-triangle-3 w-20 h-20 bg-accent" />
      <p className="text-xs mt-2 text-base-content">triangle-3</p>
    </div>
    <div className="text-center">
      <div className="mask mask-triangle-4 w-20 h-20 bg-primary" />
      <p className="text-xs mt-2 text-base-content">triangle-4</p>
    </div>
  </div>
);
AllShapes.storyName = 'All Shapes';

export const WithAvatar = () => (
  <div className="flex gap-4">
    <div className="avatar">
      <div className="mask mask-squircle w-24 bg-primary flex items-center justify-center text-primary-content text-2xl font-bold">
        SQ
      </div>
    </div>
    <div className="avatar">
      <div className="mask mask-hexagon w-24 bg-secondary flex items-center justify-center text-secondary-content text-2xl font-bold">
        HX
      </div>
    </div>
    <div className="avatar">
      <div className="mask mask-triangle w-24 bg-accent flex items-center justify-center text-accent-content text-2xl font-bold">
        TR
      </div>
    </div>
  </div>
);
WithAvatar.storyName = 'With Avatar';

export const HalfMasks = () => (
  <div className="flex gap-4">
    <div className="text-center">
      <div className="mask mask-half-1 mask-star-2 w-20 h-20 bg-warning" />
      <p className="text-xs mt-2 text-base-content">half-1</p>
    </div>
    <div className="text-center">
      <div className="mask mask-half-2 mask-star-2 w-20 h-20 bg-warning" />
      <p className="text-xs mt-2 text-base-content">half-2</p>
    </div>
  </div>
);
HalfMasks.storyName = 'Half Masks (for ratings)';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex gap-4">
      <div className="mask mask-squircle w-20 h-20 bg-primary" />
      <div className="mask mask-hexagon w-20 h-20 bg-secondary" />
      <div className="mask mask-heart w-20 h-20 bg-accent" />
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
