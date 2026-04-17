import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../../../src/components/Avatar';
import { DarkModeWrapper } from '../../utils/story-helpers';

const AVATARS = {
  diego: '/assets/images/avatars/diego-hernandez-MSepzbKFz10-unsplash.jpg',
  nicolas: '/assets/images/avatars/nicolas-horn-MTZTGvDsHFY-unsplash.jpg',
  sigmund: '/assets/images/avatars/sigmund-a19OVaa2rzA-unsplash.jpg',
};

const meta: Meta<typeof Avatar> = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Avatar** component for user images and placeholders.

## Usage
\`\`\`tsx
import { Avatar } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper } from '../../utils/story-helpers';

<Avatar src="/path/to/image.jpg" alt="User" />
<Avatar fallback={<span>JD</span>} />
\`\`\`

## Sizes
- \`xs\` - 24px
- \`sm\` - 32px
- \`md\` - 48px (default)
- \`lg\` - 64px
- \`xl\` - 96px

## Shapes
- \`circle\` - Circular (default)
- \`square\` - Rounded square
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Avatar shape',
    },
    src: { control: 'text', description: 'Image source URL' },
    alt: { control: 'text', description: 'Alt text for the image' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: AVATARS.diego,
    alt: 'Avatar',
    size: 'xl',
  },
};

export const Shapes = () => (
  <div className="flex gap-4 items-center">
    <Avatar src={AVATARS.diego} alt="Circle" size="lg" shape="circle" />
    <Avatar src={AVATARS.nicolas} alt="Square" size="lg" shape="square" />
  </div>
);

export const Sizes = () => (
  <div className="flex gap-4 items-center">
    <div className="text-center">
      <Avatar src={AVATARS.diego} alt="XS" size="xs" />
      <p className="text-xs mt-1">xs</p>
    </div>
    <div className="text-center">
      <Avatar src={AVATARS.nicolas} alt="SM" size="sm" />
      <p className="text-xs mt-1">sm</p>
    </div>
    <div className="text-center">
      <Avatar src={AVATARS.sigmund} alt="MD" size="md" />
      <p className="text-xs mt-1">md</p>
    </div>
    <div className="text-center">
      <Avatar src={AVATARS.diego} alt="LG" size="lg" />
      <p className="text-xs mt-1">lg</p>
    </div>
    <div className="text-center">
      <Avatar src={AVATARS.nicolas} alt="XL" size="xl" />
      <p className="text-xs mt-1">xl</p>
    </div>
  </div>
);
Sizes.storyName = 'All Sizes';

export const Placeholder = () => (
  <div className="flex gap-4 items-center">
    <Avatar fallback={<span>JD</span>} alt="JD" size="md" />
    <Avatar fallback={<span>AB</span>} alt="AB" size="md" />
    <Avatar fallback={<span>XY</span>} alt="XY" size="md" />
    <Avatar fallback={<span>MK</span>} alt="MK" size="md" />
  </div>
);
Placeholder.storyName = 'Placeholder (Initials)';

export const Group = () => (
  <div className="flex -space-x-4">
    <Avatar src={AVATARS.diego} alt="User 1" size="md" />
    <Avatar src={AVATARS.nicolas} alt="User 2" size="md" />
    <Avatar src={AVATARS.sigmund} alt="User 3" size="md" />
    <Avatar fallback={<span className="text-xs">+99</span>} alt="+99" size="md" />
  </div>
);
Group.storyName = 'Avatar Group';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex gap-4 mb-4">
      <Avatar src={AVATARS.sigmund} alt="User 1" size="lg" />
      <Avatar src={AVATARS.diego} alt="User 2" size="lg" />
    </div>
    <div className="flex gap-4">
      <Avatar fallback={<span>AB</span>} alt="AB" size="md" />
      <Avatar fallback={<span>CD</span>} alt="CD" size="md" />
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

export const Interactive: Story = {
  args: {
    src: AVATARS.diego,
    alt: 'Avatar',
    size: 'md',
    shape: 'circle',
  },
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Use the controls panel to customize the avatar.',
    },
  },
};
