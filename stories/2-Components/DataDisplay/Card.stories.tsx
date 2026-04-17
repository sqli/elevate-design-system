import React from 'react';
import { Card, CardBody, CardTitle, CardActions, CardFigure } from '../../../src/components/Card';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

export default {
  title: 'Components/DataDisplay/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `React Card component built with CVA variants and SQLI themes.

## Usage
\`\`\`tsx
import { Card, CardBody, CardTitle, CardActions, CardFigure } from '@sqli/elevate-design-system';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

<Card>
  <CardBody>
    <CardTitle>Title</CardTitle>
    <p>Content</p>
    <CardActions>
      <Button variant="primary" size="sm">Action</Button>
    </CardActions>
  </CardBody>
</Card>
\`\`\`

## Variants
- \`default\` - Shadow elevation (default)
- \`bordered\` - Border instead of shadow
- \`ghost\` - No border or shadow

## Props
- \`variant\` - Visual style: \`"default"\` | \`"bordered"\` | \`"ghost"\`
- \`padding\` - Padding: \`"none"\` | \`"compact"\` | \`"normal"\`
- \`side\` - Horizontal layout (image beside content)
`,
      },
    },
  },
};

const IMAGES = {
  main: '/images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg',
  secondary: '/images/christin-hume-Hcfwew744z4-unsplash.jpg',
  portrait: '/images/mengyi-CBGuFZoC6Mw-unsplash.jpg',
  workspace: '/images/pexels-thirdman-6237888.jpg',
};

export const Default = () => (
  <Card className="w-96">
    <CardBody>
      <CardTitle>Card Title</CardTitle>
      <p>This is a basic card with some content.</p>
      <CardActions>
        <Button variant="primary" size="sm">
          Action
        </Button>
      </CardActions>
    </CardBody>
  </Card>
);

export const WithImage = () => (
  <Card className="w-96">
    <CardFigure>
      <img
        src={IMAGES.main}
        alt="Example"
        className="w-full h-48 object-cover"
      />
    </CardFigure>
    <CardBody>
      <CardTitle>Card with Image</CardTitle>
      <p>A card featuring an image at the top.</p>
      <CardActions>
        <Button variant="primary" size="sm">
          Learn More
        </Button>
      </CardActions>
    </CardBody>
  </Card>
);

export const Bordered = () => (
  <Card variant="bordered" className="w-96">
    <CardBody>
      <CardTitle>Bordered Card</CardTitle>
      <p>This card uses a border instead of shadow.</p>
      <CardActions>
        <Button variant="outline" size="sm">
          Action
        </Button>
      </CardActions>
    </CardBody>
  </Card>
);

export const Ghost = () => (
  <Card variant="ghost" className="w-96">
    <CardBody>
      <CardTitle>Ghost Card</CardTitle>
      <p>No border or shadow, blends into the background.</p>
    </CardBody>
  </Card>
);

export const Variants = () => (
  <div className="flex flex-wrap gap-4">
    <Card className="w-64">
      <CardBody>
        <CardTitle>Default</CardTitle>
        <p>Shadow elevation</p>
      </CardBody>
    </Card>
    <Card variant="bordered" className="w-64">
      <CardBody>
        <CardTitle>Bordered</CardTitle>
        <p>Border instead of shadow</p>
      </CardBody>
    </Card>
    <Card variant="ghost" className="w-64">
      <CardBody>
        <CardTitle>Ghost</CardTitle>
        <p>No border or shadow</p>
      </CardBody>
    </Card>
  </div>
);

export const SideLayout = () => (
  <Card side className="w-full max-w-xl">
    <CardFigure className="w-48 shrink-0">
      <img
        src={IMAGES.portrait}
        alt="Example"
        className="w-full h-full object-cover"
      />
    </CardFigure>
    <CardBody>
      <CardTitle>Side Layout</CardTitle>
      <p>Image on the side for horizontal cards.</p>
      <CardActions>
        <Button variant="primary" size="sm">
          Watch
        </Button>
      </CardActions>
    </CardBody>
  </Card>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <div className="flex flex-wrap gap-4">
      <Card className="w-80">
        <CardBody>
          <CardTitle>Dark Card</CardTitle>
          <p>Card in dark theme with SQLI colors.</p>
          <CardActions>
            <Button variant="primary" size="sm">
              Action
            </Button>
          </CardActions>
        </CardBody>
      </Card>
      <Card variant="bordered" className="w-80">
        <CardBody>
          <CardTitle>Bordered</CardTitle>
          <p>Bordered card in dark mode.</p>
          <CardActions>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </CardActions>
        </CardBody>
      </Card>
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;

export const Interactive = {
  args: {
    variant: 'default',
    side: false,
    className: 'w-96',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'ghost'],
      description: 'Card visual variant',
    },
    side: {
      control: { type: 'boolean' },
      description: 'Horizontal layout',
    },
  },
  render: (args: { variant: 'default' | 'bordered' | 'ghost'; side: boolean; className: string }) => (
    <Card variant={args.variant} side={args.side} className={args.className}>
      {args.side && (
        <CardFigure className="w-48 shrink-0">
          <img
            src={IMAGES.portrait}
            alt="Example"
            className="w-full h-full object-cover"
          />
        </CardFigure>
      )}
      <CardBody>
        <CardTitle>Interactive Card</CardTitle>
        <p>Use the controls panel to customize this card.</p>
        <CardActions>
          <Button variant="primary" size="sm">
            Action
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};
