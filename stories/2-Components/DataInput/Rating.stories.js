/**
 * @component Rating
 * @description DaisyUI Rating component with SQLI theme
 * @see https://daisyui.com/components/rating/
 */
export default {
  title: 'Components/Data Input/Rating',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Rating** component for star ratings.

## Usage
\`\`\`html
<div class="rating">
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" checked />
  ...
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

export const Default = () => `
  <div class="rating">
    <input type="radio" name="rating-1" class="mask mask-star" />
    <input type="radio" name="rating-1" class="mask mask-star" />
    <input type="radio" name="rating-1" class="mask mask-star" checked />
    <input type="radio" name="rating-1" class="mask mask-star" />
    <input type="radio" name="rating-1" class="mask mask-star" />
  </div>
`;

export const Star2 = () => `
  <div class="rating">
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  </div>
`;
Star2.storyName = 'Star Style 2';

export const WithColors = () => `
  <div class="flex flex-col gap-4">
    <div class="rating">
      <input type="radio" name="rating-primary" class="mask mask-star bg-primary" />
      <input type="radio" name="rating-primary" class="mask mask-star bg-primary" />
      <input type="radio" name="rating-primary" class="mask mask-star bg-primary" checked />
      <input type="radio" name="rating-primary" class="mask mask-star bg-primary" />
      <input type="radio" name="rating-primary" class="mask mask-star bg-primary" />
    </div>
    <div class="rating">
      <input type="radio" name="rating-secondary" class="mask mask-star bg-secondary" />
      <input type="radio" name="rating-secondary" class="mask mask-star bg-secondary" />
      <input type="radio" name="rating-secondary" class="mask mask-star bg-secondary" />
      <input type="radio" name="rating-secondary" class="mask mask-star bg-secondary" checked />
      <input type="radio" name="rating-secondary" class="mask mask-star bg-secondary" />
    </div>
    <div class="rating">
      <input type="radio" name="rating-accent" class="mask mask-star bg-accent" />
      <input type="radio" name="rating-accent" class="mask mask-star bg-accent" />
      <input type="radio" name="rating-accent" class="mask mask-star bg-accent" />
      <input type="radio" name="rating-accent" class="mask mask-star bg-accent" />
      <input type="radio" name="rating-accent" class="mask mask-star bg-accent" checked />
    </div>
  </div>
`;
WithColors.storyName = 'With Colors';

export const Hearts = () => `
  <div class="rating gap-1">
    <input type="radio" name="rating-heart" class="mask mask-heart bg-red-400" />
    <input type="radio" name="rating-heart" class="mask mask-heart bg-red-400" />
    <input type="radio" name="rating-heart" class="mask mask-heart bg-red-400" checked />
    <input type="radio" name="rating-heart" class="mask mask-heart bg-red-400" />
    <input type="radio" name="rating-heart" class="mask mask-heart bg-red-400" />
  </div>
`;

export const Sizes = () => `
  <div class="flex flex-col gap-4 items-start">
    <div class="text-center">
      <div class="rating rating-xs">
        <input type="radio" name="rating-xs" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-xs" class="mask mask-star bg-primary" checked />
        <input type="radio" name="rating-xs" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-xs" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-xs" class="mask mask-star bg-primary" />
      </div>
      <p class="text-xs">xs</p>
    </div>
    <div class="text-center">
      <div class="rating rating-sm">
        <input type="radio" name="rating-sm" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-sm" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-sm" class="mask mask-star bg-primary" checked />
        <input type="radio" name="rating-sm" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-sm" class="mask mask-star bg-primary" />
      </div>
      <p class="text-xs">sm</p>
    </div>
    <div class="text-center">
      <div class="rating rating-md">
        <input type="radio" name="rating-md" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-md" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-md" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-md" class="mask mask-star bg-primary" checked />
        <input type="radio" name="rating-md" class="mask mask-star bg-primary" />
      </div>
      <p class="text-xs">md</p>
    </div>
    <div class="text-center">
      <div class="rating rating-lg">
        <input type="radio" name="rating-lg" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-lg" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-lg" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-lg" class="mask mask-star bg-primary" />
        <input type="radio" name="rating-lg" class="mask mask-star bg-primary" checked />
      </div>
      <p class="text-xs">lg</p>
    </div>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const HalfStars = () => `
  <div class="rating rating-lg rating-half">
    <input type="radio" name="rating-half" class="rating-hidden" />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-1 bg-primary" />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-2 bg-primary" />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-1 bg-primary" checked />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-2 bg-primary" />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-1 bg-primary" />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-2 bg-primary" />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-1 bg-primary" />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-2 bg-primary" />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-1 bg-primary" />
    <input type="radio" name="rating-half" class="mask mask-star-2 mask-half-2 bg-primary" />
  </div>
`;
HalfStars.storyName = 'Half Stars';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4">
      <div class="rating">
        <input type="radio" name="dark-rating" class="mask mask-star bg-primary" />
        <input type="radio" name="dark-rating" class="mask mask-star bg-primary" />
        <input type="radio" name="dark-rating" class="mask mask-star bg-primary" checked />
        <input type="radio" name="dark-rating" class="mask mask-star bg-primary" />
        <input type="radio" name="dark-rating" class="mask mask-star bg-primary" />
      </div>
      <div class="rating gap-1">
        <input type="radio" name="dark-rating-heart" class="mask mask-heart bg-error" />
        <input type="radio" name="dark-rating-heart" class="mask mask-heart bg-error" />
        <input type="radio" name="dark-rating-heart" class="mask mask-heart bg-error" />
        <input type="radio" name="dark-rating-heart" class="mask mask-heart bg-error" checked />
        <input type="radio" name="dark-rating-heart" class="mask mask-heart bg-error" />
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
