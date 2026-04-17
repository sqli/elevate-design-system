import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
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

export default meta;

export const Default = () => (
  <div className="carousel rounded-box w-full">
    <div className="carousel-item">
      <div className="bg-primary text-primary-content w-64 h-48 flex items-center justify-center text-2xl font-bold">1</div>
    </div>
    <div className="carousel-item">
      <div className="bg-secondary text-secondary-content w-64 h-48 flex items-center justify-center text-2xl font-bold">2</div>
    </div>
    <div className="carousel-item">
      <div className="bg-accent text-accent-content w-64 h-48 flex items-center justify-center text-2xl font-bold">3</div>
    </div>
    <div className="carousel-item">
      <div className="bg-neutral text-neutral-content w-64 h-48 flex items-center justify-center text-2xl font-bold">4</div>
    </div>
  </div>
);

export const CenterItems = () => (
  <div className="carousel carousel-center rounded-box bg-neutral max-w-md space-x-4 p-4">
    <div className="carousel-item">
      <div className="bg-primary text-primary-content rounded-box w-48 h-32 flex items-center justify-center text-xl font-bold">1</div>
    </div>
    <div className="carousel-item">
      <div className="bg-secondary text-secondary-content rounded-box w-48 h-32 flex items-center justify-center text-xl font-bold">2</div>
    </div>
    <div className="carousel-item">
      <div className="bg-accent text-accent-content rounded-box w-48 h-32 flex items-center justify-center text-xl font-bold">3</div>
    </div>
  </div>
);
CenterItems.storyName = 'Center Items';

export const WithNavigation = () => (
  <div className="w-full">
    <div className="carousel w-full">
      <div id="carousel-slide1" className="carousel-item relative w-full">
        <div className="bg-primary text-primary-content w-full h-64 flex items-center justify-center text-4xl font-bold">1</div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#carousel-slide4" className="btn btn-circle">&#10094;</a>
          <a href="#carousel-slide2" className="btn btn-circle">&#10095;</a>
        </div>
      </div>
      <div id="carousel-slide2" className="carousel-item relative w-full">
        <div className="bg-secondary text-secondary-content w-full h-64 flex items-center justify-center text-4xl font-bold">2</div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#carousel-slide1" className="btn btn-circle">&#10094;</a>
          <a href="#carousel-slide3" className="btn btn-circle">&#10095;</a>
        </div>
      </div>
      <div id="carousel-slide3" className="carousel-item relative w-full">
        <div className="bg-accent text-accent-content w-full h-64 flex items-center justify-center text-4xl font-bold">3</div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#carousel-slide2" className="btn btn-circle">&#10094;</a>
          <a href="#carousel-slide4" className="btn btn-circle">&#10095;</a>
        </div>
      </div>
      <div id="carousel-slide4" className="carousel-item relative w-full">
        <div className="bg-neutral text-neutral-content w-full h-64 flex items-center justify-center text-4xl font-bold">4</div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#carousel-slide3" className="btn btn-circle">&#10094;</a>
          <a href="#carousel-slide1" className="btn btn-circle">&#10095;</a>
        </div>
      </div>
    </div>
  </div>
);
WithNavigation.storyName = 'With Navigation';

export const WithIndicators = () => (
  <div className="w-full">
    <div className="carousel w-full">
      <div id="item1" className="carousel-item w-full">
        <div className="bg-primary text-primary-content w-full h-48 flex items-center justify-center text-4xl font-bold">1</div>
      </div>
      <div id="item2" className="carousel-item w-full">
        <div className="bg-secondary text-secondary-content w-full h-48 flex items-center justify-center text-4xl font-bold">2</div>
      </div>
      <div id="item3" className="carousel-item w-full">
        <div className="bg-accent text-accent-content w-full h-48 flex items-center justify-center text-4xl font-bold">3</div>
      </div>
    </div>
    <div className="flex w-full justify-center gap-2 py-2">
      <a href="#item1" className="btn btn-xs">1</a>
      <a href="#item2" className="btn btn-xs">2</a>
      <a href="#item3" className="btn btn-xs">3</a>
    </div>
  </div>
);
WithIndicators.storyName = 'With Indicators';

export const Vertical = () => (
  <div className="carousel carousel-vertical rounded-box h-72">
    <div className="carousel-item h-full">
      <div className="bg-primary text-primary-content w-48 h-full flex items-center justify-center text-2xl font-bold">1</div>
    </div>
    <div className="carousel-item h-full">
      <div className="bg-secondary text-secondary-content w-48 h-full flex items-center justify-center text-2xl font-bold">2</div>
    </div>
    <div className="carousel-item h-full">
      <div className="bg-accent text-accent-content w-48 h-full flex items-center justify-center text-2xl font-bold">3</div>
    </div>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="carousel rounded-box w-full">
      <div className="carousel-item">
        <div className="bg-primary text-primary-content w-48 h-32 flex items-center justify-center text-xl font-bold">1</div>
      </div>
      <div className="carousel-item">
        <div className="bg-secondary text-secondary-content w-48 h-32 flex items-center justify-center text-xl font-bold">2</div>
      </div>
      <div className="carousel-item">
        <div className="bg-accent text-accent-content w-48 h-32 flex items-center justify-center text-xl font-bold">3</div>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
