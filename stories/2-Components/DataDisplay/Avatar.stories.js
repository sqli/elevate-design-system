/**
 * @component Avatar
 * @description DaisyUI Avatar component with SQLI theme
 * @see https://daisyui.com/components/avatar/
 */
export default {
  title: 'Components/Data Display/Avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Avatar** component for user images and placeholders.

## Usage
\`\`\`html
<div class="avatar">
  <div class="w-24 rounded">
    <img src="..." alt="Avatar" />
  </div>
</div>
\`\`\`

## Placeholder (Initials)
\`\`\`html
<div class="avatar placeholder">
  <div class="bg-neutral text-neutral-content w-12 h-12 rounded-full flex items-center justify-center">
    <span class="text-sm">JD</span>
  </div>
</div>
\`\`\`

## Shapes
- \`rounded\` - Slightly rounded
- \`rounded-full\` - Circular
- \`mask mask-squircle\` - Squircle shape

## Modifiers
- \`online\` - Green indicator
- \`offline\` - Gray indicator
- \`placeholder\` - For initials (use with flex centering)
        `,
      },
    },
  },
};

// Local avatar assets
const AVATARS = {
  diego: '/assets/images/avatars/diego-hernandez-MSepzbKFz10-unsplash.jpg',
  nicolas: '/assets/images/avatars/nicolas-horn-MTZTGvDsHFY-unsplash.jpg',
  sigmund: '/assets/images/avatars/sigmund-a19OVaa2rzA-unsplash.jpg',
};

export const Default = () => `
  <div class="avatar">
    <div class="w-24 rounded">
      <img src="${AVATARS.diego}" alt="Avatar" />
    </div>
  </div>
`;

export const Shapes = () => `
  <div class="flex gap-4 items-center">
    <div class="avatar">
      <div class="w-16 rounded">
        <img src="${AVATARS.diego}" alt="Rounded" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-16 rounded-full">
        <img src="${AVATARS.nicolas}" alt="Circle" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-16 mask mask-squircle">
        <img src="${AVATARS.sigmund}" alt="Squircle" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-16 mask mask-hexagon">
        <img src="${AVATARS.diego}" alt="Hexagon" />
      </div>
    </div>
  </div>
`;

export const Sizes = () => `
  <div class="flex gap-4 items-center">
    <div class="avatar">
      <div class="w-8 rounded-full">
        <img src="${AVATARS.diego}" alt="XS" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-12 rounded-full">
        <img src="${AVATARS.nicolas}" alt="SM" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-16 rounded-full">
        <img src="${AVATARS.sigmund}" alt="MD" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-24 rounded-full">
        <img src="${AVATARS.diego}" alt="LG" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-32 rounded-full">
        <img src="${AVATARS.nicolas}" alt="XL" />
      </div>
    </div>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const WithIndicator = () => `
  <div class="flex gap-4">
    <div class="avatar online">
      <div class="w-16 rounded-full">
        <img src="${AVATARS.sigmund}" alt="Online" />
      </div>
    </div>
    <div class="avatar offline">
      <div class="w-16 rounded-full">
        <img src="${AVATARS.diego}" alt="Offline" />
      </div>
    </div>
  </div>
`;
WithIndicator.storyName = 'With Status Indicator';

export const Placeholder = () => `
  <div class="flex gap-4">
    <div class="avatar placeholder">
      <div class="bg-neutral text-neutral-content w-12 h-12 rounded-full flex items-center justify-center">
        <span class="text-sm">JD</span>
      </div>
    </div>
    <div class="avatar placeholder">
      <div class="bg-primary text-primary-content w-12 h-12 rounded-full flex items-center justify-center">
        <span class="text-sm">AB</span>
      </div>
    </div>
    <div class="avatar placeholder">
      <div class="bg-secondary text-secondary-content w-12 h-12 rounded-full flex items-center justify-center">
        <span class="text-sm">XY</span>
      </div>
    </div>
    <div class="avatar placeholder">
      <div class="bg-accent text-accent-content w-12 h-12 rounded-full flex items-center justify-center">
        <span class="text-sm">MK</span>
      </div>
    </div>
  </div>
`;
Placeholder.storyName = 'Placeholder (Initials)';

export const Group = () => `
  <div class="avatar-group -space-x-6 rtl:space-x-reverse">
    <div class="avatar">
      <div class="w-12">
        <img src="${AVATARS.diego}" alt="User 1" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-12">
        <img src="${AVATARS.nicolas}" alt="User 2" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-12">
        <img src="${AVATARS.sigmund}" alt="User 3" />
      </div>
    </div>
    <div class="avatar placeholder">
      <div class="bg-neutral text-neutral-content w-12 h-12 flex items-center justify-center">
        <span class="text-xs">+99</span>
      </div>
    </div>
  </div>
`;
Group.storyName = 'Avatar Group';

export const WithRing = () => `
  <div class="flex gap-4">
    <div class="avatar">
      <div class="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
        <img src="${AVATARS.diego}" alt="Ring primary" />
      </div>
    </div>
    <div class="avatar">
      <div class="ring-secondary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
        <img src="${AVATARS.nicolas}" alt="Ring secondary" />
      </div>
    </div>
    <div class="avatar">
      <div class="ring-accent ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
        <img src="${AVATARS.sigmund}" alt="Ring accent" />
      </div>
    </div>
  </div>
`;
WithRing.storyName = 'With Ring';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex gap-4 mb-4">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="${AVATARS.sigmund}" alt="Online" />
        </div>
      </div>
      <div class="avatar offline">
        <div class="w-16 rounded-full">
          <img src="${AVATARS.diego}" alt="Offline" />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="avatar placeholder">
        <div class="bg-primary text-primary-content w-12 h-12 rounded-full flex items-center justify-center">
          <span class="text-sm">AB</span>
        </div>
      </div>
      <div class="avatar placeholder">
        <div class="bg-secondary text-secondary-content w-12 h-12 rounded-full flex items-center justify-center">
          <span class="text-sm">CD</span>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
