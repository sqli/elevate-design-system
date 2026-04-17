import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Input/Rating',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Rating** component for star ratings using DaisyUI mask classes.

## Usage
\`\`\`tsx
<div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
\`\`\`

## Variants
- \`mask-star\` - Star shape
- \`mask-star-2\` - Star shape 2
- \`mask-heart\` - Heart shape

## Sizes
- \`rating-xs\`, \`rating-sm\`, \`rating-md\`, \`rating-lg\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="rating">
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-1" className="mask mask-star" />
  </div>
);

export const Star2 = () => (
  <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  </div>
);
Star2.storyName = 'Star Style 2';

export const WithColors = () => (
  <div className="flex flex-col gap-4">
    <div className="rating">
      <input type="radio" name="rating-primary" className="mask mask-star bg-primary" />
      <input type="radio" name="rating-primary" className="mask mask-star bg-primary" />
      <input type="radio" name="rating-primary" className="mask mask-star bg-primary" defaultChecked />
      <input type="radio" name="rating-primary" className="mask mask-star bg-primary" />
      <input type="radio" name="rating-primary" className="mask mask-star bg-primary" />
    </div>
    <div className="rating">
      <input type="radio" name="rating-secondary" className="mask mask-star bg-secondary" />
      <input type="radio" name="rating-secondary" className="mask mask-star bg-secondary" />
      <input type="radio" name="rating-secondary" className="mask mask-star bg-secondary" />
      <input type="radio" name="rating-secondary" className="mask mask-star bg-secondary" defaultChecked />
      <input type="radio" name="rating-secondary" className="mask mask-star bg-secondary" />
    </div>
    <div className="rating">
      <input type="radio" name="rating-accent" className="mask mask-star bg-accent" />
      <input type="radio" name="rating-accent" className="mask mask-star bg-accent" />
      <input type="radio" name="rating-accent" className="mask mask-star bg-accent" />
      <input type="radio" name="rating-accent" className="mask mask-star bg-accent" />
      <input type="radio" name="rating-accent" className="mask mask-star bg-accent" defaultChecked />
    </div>
  </div>
);
WithColors.storyName = 'With Colors';

export const Hearts = () => (
  <div className="rating gap-1">
    <input type="radio" name="rating-heart" className="mask mask-heart bg-red-400" />
    <input type="radio" name="rating-heart" className="mask mask-heart bg-red-400" />
    <input type="radio" name="rating-heart" className="mask mask-heart bg-red-400" defaultChecked />
    <input type="radio" name="rating-heart" className="mask mask-heart bg-red-400" />
    <input type="radio" name="rating-heart" className="mask mask-heart bg-red-400" />
  </div>
);

export const Sizes = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="text-center">
      <div className="rating rating-xs">
        <input type="radio" name="rating-xs" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-xs" className="mask mask-star bg-primary" defaultChecked />
        <input type="radio" name="rating-xs" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-xs" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-xs" className="mask mask-star bg-primary" />
      </div>
      <p className="text-xs">xs</p>
    </div>
    <div className="text-center">
      <div className="rating rating-sm">
        <input type="radio" name="rating-sm" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-sm" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-sm" className="mask mask-star bg-primary" defaultChecked />
        <input type="radio" name="rating-sm" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-sm" className="mask mask-star bg-primary" />
      </div>
      <p className="text-xs">sm</p>
    </div>
    <div className="text-center">
      <div className="rating rating-md">
        <input type="radio" name="rating-md" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-md" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-md" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-md" className="mask mask-star bg-primary" defaultChecked />
        <input type="radio" name="rating-md" className="mask mask-star bg-primary" />
      </div>
      <p className="text-xs">md</p>
    </div>
    <div className="text-center">
      <div className="rating rating-lg">
        <input type="radio" name="rating-lg" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-lg" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-lg" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-lg" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-lg" className="mask mask-star bg-primary" defaultChecked />
      </div>
      <p className="text-xs">lg</p>
    </div>
  </div>
);
Sizes.storyName = 'All Sizes';

export const HalfStars = () => (
  <div className="rating rating-lg rating-half">
    <input type="radio" name="rating-half" className="rating-hidden" />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-1 bg-primary" />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-2 bg-primary" />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-1 bg-primary" defaultChecked />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-2 bg-primary" />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-1 bg-primary" />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-2 bg-primary" />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-1 bg-primary" />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-2 bg-primary" />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-1 bg-primary" />
    <input type="radio" name="rating-half" className="mask mask-star-2 mask-half-2 bg-primary" />
  </div>
);
HalfStars.storyName = 'Half Stars';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-4">
      <div className="rating">
        <input type="radio" name="dark-rating" className="mask mask-star bg-primary" />
        <input type="radio" name="dark-rating" className="mask mask-star bg-primary" />
        <input type="radio" name="dark-rating" className="mask mask-star bg-primary" defaultChecked />
        <input type="radio" name="dark-rating" className="mask mask-star bg-primary" />
        <input type="radio" name="dark-rating" className="mask mask-star bg-primary" />
      </div>
      <div className="rating gap-1">
        <input type="radio" name="dark-rating-heart" className="mask mask-heart bg-error" />
        <input type="radio" name="dark-rating-heart" className="mask mask-heart bg-error" />
        <input type="radio" name="dark-rating-heart" className="mask mask-heart bg-error" />
        <input type="radio" name="dark-rating-heart" className="mask mask-heart bg-error" defaultChecked />
        <input type="radio" name="dark-rating-heart" className="mask mask-heart bg-error" />
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
