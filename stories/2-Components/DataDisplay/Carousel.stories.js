/**
 * @component Carousel
 * @description DaisyUI Carousel component with SQLI theme
 * @see https://daisyui.com/components/carousel/
 */
export default {
  title: 'Components/Data Display/Carousel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Carousel** component for image and content slideshows.

## Usage
\`\`\`html
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="..." class="w-full" />
  </div>
</div>
\`\`\`

## Variants
- Default - Scroll snap carousel
- \`carousel-center\` - Center items
- \`carousel-end\` - End aligned
- \`carousel-vertical\` - Vertical scroll
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="carousel rounded-box w-full">
    <div class="carousel-item">
      <div class="bg-primary text-primary-content w-64 h-48 flex items-center justify-center text-2xl font-bold">1</div>
    </div>
    <div class="carousel-item">
      <div class="bg-secondary text-secondary-content w-64 h-48 flex items-center justify-center text-2xl font-bold">2</div>
    </div>
    <div class="carousel-item">
      <div class="bg-accent text-accent-content w-64 h-48 flex items-center justify-center text-2xl font-bold">3</div>
    </div>
    <div class="carousel-item">
      <div class="bg-neutral text-neutral-content w-64 h-48 flex items-center justify-center text-2xl font-bold">4</div>
    </div>
  </div>
`;

export const CenterItems = () => `
  <div class="carousel carousel-center rounded-box bg-neutral max-w-md space-x-4 p-4">
    <div class="carousel-item">
      <div class="bg-primary text-primary-content rounded-box w-48 h-32 flex items-center justify-center text-xl font-bold">1</div>
    </div>
    <div class="carousel-item">
      <div class="bg-secondary text-secondary-content rounded-box w-48 h-32 flex items-center justify-center text-xl font-bold">2</div>
    </div>
    <div class="carousel-item">
      <div class="bg-accent text-accent-content rounded-box w-48 h-32 flex items-center justify-center text-xl font-bold">3</div>
    </div>
  </div>
`;
CenterItems.storyName = 'Center Items';

export const WithNavigation = () => `
  <div class="w-full">
    <div class="carousel w-full">
      <div id="carousel-slide1" class="carousel-item relative w-full">
        <div class="bg-primary text-primary-content w-full h-64 flex items-center justify-center text-4xl font-bold">1</div>
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#carousel-slide4" class="btn btn-circle">❮</a>
          <a href="#carousel-slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="carousel-slide2" class="carousel-item relative w-full">
        <div class="bg-secondary text-secondary-content w-full h-64 flex items-center justify-center text-4xl font-bold">2</div>
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#carousel-slide1" class="btn btn-circle">❮</a>
          <a href="#carousel-slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="carousel-slide3" class="carousel-item relative w-full">
        <div class="bg-accent text-accent-content w-full h-64 flex items-center justify-center text-4xl font-bold">3</div>
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#carousel-slide2" class="btn btn-circle">❮</a>
          <a href="#carousel-slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="carousel-slide4" class="carousel-item relative w-full">
        <div class="bg-neutral text-neutral-content w-full h-64 flex items-center justify-center text-4xl font-bold">4</div>
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#carousel-slide3" class="btn btn-circle">❮</a>
          <a href="#carousel-slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
`;
WithNavigation.storyName = 'With Navigation';

export const WithIndicators = () => `
  <div class="w-full">
    <div class="carousel w-full">
      <div id="item1" class="carousel-item w-full">
        <div class="bg-primary text-primary-content w-full h-48 flex items-center justify-center text-4xl font-bold">1</div>
      </div>
      <div id="item2" class="carousel-item w-full">
        <div class="bg-secondary text-secondary-content w-full h-48 flex items-center justify-center text-4xl font-bold">2</div>
      </div>
      <div id="item3" class="carousel-item w-full">
        <div class="bg-accent text-accent-content w-full h-48 flex items-center justify-center text-4xl font-bold">3</div>
      </div>
    </div>
    <div class="flex w-full justify-center gap-2 py-2">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
      <a href="#item3" class="btn btn-xs">3</a>
    </div>
  </div>
`;
WithIndicators.storyName = 'With Indicators';

export const Vertical = () => `
  <div class="carousel carousel-vertical rounded-box h-72">
    <div class="carousel-item h-full">
      <div class="bg-primary text-primary-content w-48 h-full flex items-center justify-center text-2xl font-bold">1</div>
    </div>
    <div class="carousel-item h-full">
      <div class="bg-secondary text-secondary-content w-48 h-full flex items-center justify-center text-2xl font-bold">2</div>
    </div>
    <div class="carousel-item h-full">
      <div class="bg-accent text-accent-content w-48 h-full flex items-center justify-center text-2xl font-bold">3</div>
    </div>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="carousel rounded-box w-full">
      <div class="carousel-item">
        <div class="bg-primary text-primary-content w-48 h-32 flex items-center justify-center text-xl font-bold">1</div>
      </div>
      <div class="carousel-item">
        <div class="bg-secondary text-secondary-content w-48 h-32 flex items-center justify-center text-xl font-bold">2</div>
      </div>
      <div class="carousel-item">
        <div class="bg-accent text-accent-content w-48 h-32 flex items-center justify-center text-xl font-bold">3</div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
