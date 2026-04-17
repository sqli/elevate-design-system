import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '../../../src/components/Skeleton';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Skeleton** component for loading placeholders, with a pulsing animation.

## Usage
\`\`\`tsx
import { Skeleton } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

<Skeleton className="h-32 w-32" />
\`\`\`

## Notes
- Skeletons show a pulsing animation
- Use with Tailwind sizing utilities via \`className\`
- Combine multiple skeletons for complex layouts
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: 'h-32 w-32',
  },
};

export const Circle = () => (
  <Skeleton className="h-16 w-16 rounded-full" />
);

export const Text = () => (
  <div className="flex flex-col gap-4 w-52">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-28" />
  </div>
);

export const CardSkeleton = () => (
  <div className="flex flex-col gap-4 w-52">
    <Skeleton className="h-32 w-full" />
    <Skeleton className="h-4 w-28" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
  </div>
);
CardSkeleton.storyName = 'Card Skeleton';

export const ProfileSkeleton = () => (
  <div className="flex items-center gap-4">
    <Skeleton className="h-16 w-16 shrink-0 rounded-full" />
    <div className="flex flex-col gap-4">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-28" />
    </div>
  </div>
);
ProfileSkeleton.storyName = 'Profile Skeleton';

export const ListSkeleton = () => (
  <div className="flex flex-col gap-4 w-full max-w-md">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    ))}
  </div>
);
ListSkeleton.storyName = 'List Skeleton';

export const FullCardSkeleton = () => (
  <div className="flex flex-col gap-4 w-52">
    <Skeleton className="h-32 w-full" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
    <Skeleton className="h-8 w-full" />
  </div>
);
FullCardSkeleton.storyName = 'Full Card Skeleton';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex gap-6">
      <div className="flex flex-col gap-4 w-52">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="h-16 w-16 shrink-0 rounded-full" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;
