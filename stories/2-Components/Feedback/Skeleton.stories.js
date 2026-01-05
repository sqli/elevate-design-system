/**
 * @component Skeleton
 * @description DaisyUI Skeleton component with SQLI theme
 * @see https://daisyui.com/components/skeleton/
 */
export default {
  title: 'Components/Feedback/Skeleton',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Skeleton** component for loading placeholders.

## Usage
\`\`\`html
<div class="skeleton h-32 w-32"></div>
\`\`\`

## Notes
- Skeletons show a pulsing animation
- Use with Tailwind sizing utilities
- Combine multiple skeletons for complex layouts
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="skeleton h-32 w-32"></div>
`;

export const Circle = () => `
  <div class="skeleton h-16 w-16 rounded-full"></div>
`;

export const Text = () => `
  <div class="flex flex-col gap-4 w-52">
    <div class="skeleton h-4 w-full"></div>
    <div class="skeleton h-4 w-full"></div>
    <div class="skeleton h-4 w-28"></div>
  </div>
`;

export const CardSkeleton = () => `
  <div class="flex flex-col gap-4 w-52">
    <div class="skeleton h-32 w-full"></div>
    <div class="skeleton h-4 w-28"></div>
    <div class="skeleton h-4 w-full"></div>
    <div class="skeleton h-4 w-full"></div>
  </div>
`;
CardSkeleton.storyName = 'Card Skeleton';

export const ProfileSkeleton = () => `
  <div class="flex items-center gap-4">
    <div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
    <div class="flex flex-col gap-4">
      <div class="skeleton h-4 w-20"></div>
      <div class="skeleton h-4 w-28"></div>
    </div>
  </div>
`;
ProfileSkeleton.storyName = 'Profile Skeleton';

export const ListSkeleton = () => `
  <div class="flex flex-col gap-4 w-full max-w-md">
    <div class="flex items-center gap-4">
      <div class="skeleton h-12 w-12 shrink-0 rounded-full"></div>
      <div class="flex flex-col gap-2 flex-1">
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-3/4"></div>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="skeleton h-12 w-12 shrink-0 rounded-full"></div>
      <div class="flex flex-col gap-2 flex-1">
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-3/4"></div>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="skeleton h-12 w-12 shrink-0 rounded-full"></div>
      <div class="flex flex-col gap-2 flex-1">
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-3/4"></div>
      </div>
    </div>
  </div>
`;
ListSkeleton.storyName = 'List Skeleton';

export const WithContent = () => `
  <div class="flex flex-col gap-4 w-52">
    <div class="skeleton h-32 w-full"></div>
    <div class="flex flex-col gap-2">
      <div class="skeleton h-4 w-20"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
    <div class="skeleton h-8 w-full"></div>
  </div>
`;
WithContent.storyName = 'Full Card Skeleton';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex gap-6">
      <div class="flex flex-col gap-4 w-52">
        <div class="skeleton h-32 w-full"></div>
        <div class="skeleton h-4 w-28"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
      <div class="flex items-center gap-4">
        <div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div class="flex flex-col gap-4">
          <div class="skeleton h-4 w-20"></div>
          <div class="skeleton h-4 w-28"></div>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
