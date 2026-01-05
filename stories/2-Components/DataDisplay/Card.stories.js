/**
 * @component Card
 * @description DaisyUI Card component with SQLI theme
 * @see https://daisyui.com/components/card/
 */
// Local image assets
const IMAGES = {
  main: '/assets/images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg',
  secondary: '/assets/images/christin-hume-Hcfwew744z4-unsplash.jpg',
  portrait: '/assets/images/mengyi-CBGuFZoC6Mw-unsplash.jpg',
  workspace: '/assets/images/pexels-thirdman-6237888.jpg',
};

export default {
  title: 'Components/Data Display/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Card** component for grouping content.

## Usage
\`\`\`html
<div class="card bg-base-100 w-96 shadow-sm">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Content goes here</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
\`\`\`

## Modifiers
- \`card-bordered\` - Adds border
- \`card-compact\` - Reduces padding
- \`card-side\` - Horizontal layout
- \`image-full\` - Image as background
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Card title',
    },
    content: {
      control: { type: 'text' },
      description: 'Card content text',
    },
    bordered: {
      control: { type: 'boolean' },
      description: 'Show border instead of shadow',
      table: { defaultValue: { summary: 'false' } },
    },
    compact: {
      control: { type: 'boolean' },
      description: 'Compact padding',
      table: { defaultValue: { summary: 'false' } },
    },
    showImage: {
      control: { type: 'boolean' },
      description: 'Show image at top',
      table: { defaultValue: { summary: 'false' } },
    },
    showActions: {
      control: { type: 'boolean' },
      description: 'Show action buttons',
      table: { defaultValue: { summary: 'true' } },
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'neutral'],
      description: 'Card background color',
      table: { defaultValue: { summary: 'default' } },
    },
  },
  args: {
    title: 'Card Title',
    content: 'This is a card with customizable content.',
    bordered: false,
    compact: false,
    showImage: false,
    showActions: true,
    color: 'default',
  },
};

export const Default = () => `
  <div class="card bg-base-100 w-96 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Card Title</h2>
      <p>This is a basic card with some content inside.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Action</button>
      </div>
    </div>
  </div>
`;

export const WithImage = () => `
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img src="${IMAGES.main}" alt="Card image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Card with Image</h2>
      <p>A beautiful card with an image on top.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Learn More</button>
      </div>
    </div>
  </div>
`;
WithImage.storyName = 'With Image';

export const Bordered = () => `
  <div class="card card-bordered bg-base-100 w-96">
    <div class="card-body">
      <h2 class="card-title">Bordered Card</h2>
      <p>This card has a visible border instead of a shadow.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-outline">Action</button>
      </div>
    </div>
  </div>
`;

export const Compact = () => `
  <div class="card card-compact bg-base-100 w-96 shadow-sm">
    <figure>
      <img src="${IMAGES.secondary}" alt="Compact card" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Compact Card</h2>
      <p>Less padding for denser layouts.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary btn-sm">Action</button>
      </div>
    </div>
  </div>
`;

export const SideLayout = () => `
  <div class="card card-side bg-base-100 shadow-sm max-w-lg">
    <figure class="w-48">
      <img src="${IMAGES.portrait}" alt="Side card" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Side Layout</h2>
      <p>Image and content side by side.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Watch</button>
      </div>
    </div>
  </div>
`;
SideLayout.storyName = 'Side Layout';

export const ImageFull = () => `
  <div class="card image-full w-96 shadow-sm">
    <figure>
      <img src="${IMAGES.workspace}" alt="Full image card" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Image as Background</h2>
      <p>Content overlays the image with a gradient.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Explore</button>
      </div>
    </div>
  </div>
`;
ImageFull.storyName = 'Image as Background';

export const WithBadge = () => `
  <div class="card bg-base-100 w-96 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">
        Card Title
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>This card has a badge in the title.</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div>
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
`;
WithBadge.storyName = 'With Badge';

export const Colored = () => `
  <div class="flex flex-wrap gap-4">
    <div class="card bg-primary text-primary-content w-64">
      <div class="card-body">
        <h2 class="card-title">Primary</h2>
        <p>Primary colored card</p>
      </div>
    </div>
    <div class="card bg-secondary text-secondary-content w-64">
      <div class="card-body">
        <h2 class="card-title">Secondary</h2>
        <p>Secondary colored card</p>
      </div>
    </div>
    <div class="card bg-neutral text-neutral-content w-64">
      <div class="card-body">
        <h2 class="card-title">Neutral</h2>
        <p>Neutral colored card</p>
      </div>
    </div>
  </div>
`;
Colored.storyName = 'Colored Cards';

export const Glass = () => `
  <div class="bg-gradient-to-r from-primary to-secondary p-8 rounded-box">
    <div class="card glass w-96">
      <figure>
        <img src="${IMAGES.main}" alt="Glass card" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Glass Effect</h2>
        <p>A translucent card with blur effect.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-wrap gap-4">
      <div class="card bg-base-200 w-80 shadow-sm">
        <div class="card-body">
          <h2 class="card-title">Dark Card</h2>
          <p>Card in dark theme with SQLI colors.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Action</button>
          </div>
        </div>
      </div>
      <div class="card card-bordered w-80">
        <div class="card-body">
          <h2 class="card-title">Bordered</h2>
          <p>Bordered card in dark mode.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-outline">Action</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

export const Interactive = (args) => {
  const borderedClass = args.bordered ? 'card-bordered' : 'shadow-sm';
  const compactClass = args.compact ? 'card-compact' : '';
  const colorClasses =
    args.color === 'default' ? 'bg-base-100' : `bg-${args.color} text-${args.color}-content`;

  const image = args.showImage
    ? `<figure><img src="${IMAGES.main}" alt="Card image" /></figure>`
    : '';

  const actions = args.showActions
    ? `<div class="card-actions justify-end"><button class="btn btn-primary">Action</button></div>`
    : '';

  return `
    <div class="card ${borderedClass} ${compactClass} ${colorClasses} w-96">
      ${image}
      <div class="card-body">
        <h2 class="card-title">${args.title}</h2>
        <p>${args.content}</p>
        ${actions}
      </div>
    </div>
  `;
};
Interactive.storyName = 'Interactive';
Interactive.parameters = {
  docs: {
    description: {
      story: 'Use the controls panel to customize the card.',
    },
  },
};
