import React from 'react';
import type { Meta } from '@storybook/react-vite';
import {
  Home01Icon,
  UserIcon,
  Mail01Icon,
  Notification01Icon,
  FavouriteIcon,
  StarIcon,
  Search01Icon,
  Setting07Icon,
  Tick01Icon,
  Cancel01Icon,
  Add01Icon,
  MinusSignIcon,
  PencilIcon,
  Delete01Icon,
  EyeIcon,
  LockIcon,
  Calendar01Icon,
  Clock01Icon,
  File01Icon,
  Folder01Icon,
  Download01Icon,
  Upload01Icon,
  Share01Icon,
  Link01Icon,
  GlobeIcon,
  Sun01Icon,
  Moon01Icon,
  PlayIcon,
  PauseIcon,
  ShoppingCart01Icon,
  CodeIcon,
  CommandLineIcon,
  ArrowDown01Icon,
  ArrowUp01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Menu01Icon,
  CheckmarkCircle01Icon,
  CancelCircleIcon,
  InformationCircleIcon,
  AlertCircleIcon,
  Alert02Icon,
  MoreVerticalIcon,
} from 'hugeicons-react';
import type { HugeiconsIcon } from 'hugeicons-react';
import { DarkModeWrapper, darkModeParameters } from '../utils/story-helpers';

/**
 * Icons - Elevate Design System
 *
 * This story showcases the available icons using hugeicons-react.
 * Icons are React components that render inline SVGs for maximum flexibility.
 */
const meta: Meta = {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Icon Library

The Elevate Design System uses **hugeicons-react** -- a modern icon library with 46,000+ icons.

### Usage

\`\`\`tsx
import { Home01Icon, Search01Icon } from 'hugeicons-react';

<Home01Icon size={24} />
<Search01Icon size={20} color="currentColor" />
\`\`\`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`size\` | \`number\` | \`24\` | Icon size in pixels |
| \`color\` | \`string\` | \`currentColor\` | Icon color |
| \`strokeWidth\` | \`number\` | \`1.5\` | Stroke thickness |

### Styling

Icons inherit \`currentColor\` for stroke, so use Tailwind text color utilities:

\`\`\`tsx
<Home01Icon size={24} className="text-primary" />
<AlertCircleIcon size={24} className="text-error" />
\`\`\`

For the complete icon catalog, visit [hugeicons.com](https://hugeicons.com).
        `,
      },
    },
  },
};

export default meta;

interface IconEntry {
  name: string;
  Icon: HugeiconsIcon;
}

const strokeIcons: IconEntry[] = [
  { name: 'home-01', Icon: Home01Icon },
  { name: 'user', Icon: UserIcon },
  { name: 'mail-01', Icon: Mail01Icon },
  { name: 'notification-01', Icon: Notification01Icon },
  { name: 'favourite', Icon: FavouriteIcon },
  { name: 'star', Icon: StarIcon },
  { name: 'search-01', Icon: Search01Icon },
  { name: 'setting-07', Icon: Setting07Icon },
  { name: 'tick-01', Icon: Tick01Icon },
  { name: 'cancel-01', Icon: Cancel01Icon },
  { name: 'add-01', Icon: Add01Icon },
  { name: 'minus-sign', Icon: MinusSignIcon },
  { name: 'pencil', Icon: PencilIcon },
  { name: 'delete-01', Icon: Delete01Icon },
  { name: 'eye', Icon: EyeIcon },
  { name: 'lock', Icon: LockIcon },
  { name: 'calendar-01', Icon: Calendar01Icon },
  { name: 'clock-01', Icon: Clock01Icon },
  { name: 'file-01', Icon: File01Icon },
  { name: 'folder-01', Icon: Folder01Icon },
  { name: 'download-01', Icon: Download01Icon },
  { name: 'upload-01', Icon: Upload01Icon },
  { name: 'share-01', Icon: Share01Icon },
  { name: 'link-01', Icon: Link01Icon },
  { name: 'globe', Icon: GlobeIcon },
  { name: 'sun-01', Icon: Sun01Icon },
  { name: 'moon-01', Icon: Moon01Icon },
  { name: 'play', Icon: PlayIcon },
  { name: 'pause', Icon: PauseIcon },
  { name: 'shopping-cart-01', Icon: ShoppingCart01Icon },
  { name: 'code', Icon: CodeIcon },
  { name: 'command-line', Icon: CommandLineIcon },
  { name: 'arrow-down-01', Icon: ArrowDown01Icon },
  { name: 'arrow-up-01', Icon: ArrowUp01Icon },
  { name: 'arrow-left-01', Icon: ArrowLeft01Icon },
  { name: 'arrow-right-01', Icon: ArrowRight01Icon },
  { name: 'menu-01', Icon: Menu01Icon },
  { name: 'checkmark-circle-01', Icon: CheckmarkCircle01Icon },
  { name: 'cancel-circle', Icon: CancelCircleIcon },
  { name: 'information-circle', Icon: InformationCircleIcon },
  { name: 'alert-circle', Icon: AlertCircleIcon },
  { name: 'alert-02', Icon: Alert02Icon },
];

/**
 * Stroke Icons (default)
 */
export const StrokeIcons = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-medium">Stroke Icons</h3>
    <p className="text-sm text-base-content/70">Default icon style -- clean and minimal stroke icons.</p>
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4">
      {strokeIcons.map(({ name, Icon }) => (
        <div key={name} className="flex flex-col items-center gap-2 p-2 rounded hover:bg-base-200 transition-colors">
          <Icon size={24} />
          <span className="text-[10px] text-base-content/60 text-center truncate w-full">{name}</span>
        </div>
      ))}
    </div>
  </div>
);
StrokeIcons.storyName = 'Stroke Icons';

/**
 * Colored Icons
 */
export const ColoredIcons = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Colored Icons</h3>
    <p className="text-sm text-base-content/70">Icons inherit <code>currentColor</code>, so use text color utilities to style them.</p>

    <h4 className="text-sm font-medium">Semantic Colors</h4>
    <div className="flex gap-6 flex-wrap">
      <div className="flex items-center gap-2">
        <InformationCircleIcon size={24} className="text-primary" />
        <span className="text-sm">Primary</span>
      </div>
      <div className="flex items-center gap-2">
        <UserIcon size={24} className="text-secondary" />
        <span className="text-sm">Secondary</span>
      </div>
      <div className="flex items-center gap-2">
        <StarIcon size={24} className="text-accent" />
        <span className="text-sm">Accent</span>
      </div>
    </div>

    <h4 className="text-sm font-medium">Status Colors</h4>
    <div className="flex gap-6 flex-wrap">
      <div className="flex items-center gap-2">
        <InformationCircleIcon size={24} className="text-info" />
        <span className="text-sm">Info</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckmarkCircle01Icon size={24} className="text-success" />
        <span className="text-sm">Success</span>
      </div>
      <div className="flex items-center gap-2">
        <Alert02Icon size={24} className="text-warning" />
        <span className="text-sm">Warning</span>
      </div>
      <div className="flex items-center gap-2">
        <CancelCircleIcon size={24} className="text-error" />
        <span className="text-sm">Error</span>
      </div>
    </div>
  </div>
);

/**
 * Stroke Width Variants
 */
export const StrokeWidths = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Stroke Width Variants</h3>
    <p className="text-sm text-base-content/70">Use the <code>strokeWidth</code> prop to control icon weight.</p>

    <div className="flex gap-8 items-end flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <Home01Icon size={32} strokeWidth={1} />
        <span className="text-xs text-base-content/60">Thin (1)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Home01Icon size={32} strokeWidth={1.5} />
        <span className="text-xs text-base-content/60">Regular (1.5)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Home01Icon size={32} strokeWidth={2} />
        <span className="text-xs text-base-content/60">Medium (2)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Home01Icon size={32} strokeWidth={3} />
        <span className="text-xs text-base-content/60">Bold (3)</span>
      </div>
    </div>
  </div>
);

/**
 * Icon Sizes
 */
export const IconSizes = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Icon Sizes</h3>
    <p className="text-sm text-base-content/70">Use the <code>size</code> prop to set icon dimensions.</p>

    <div className="flex gap-8 items-end flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <Home01Icon size={16} />
        <span className="text-xs text-base-content/60">16px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Home01Icon size={20} />
        <span className="text-xs text-base-content/60">20px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Home01Icon size={24} />
        <span className="text-xs text-base-content/60">24px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Home01Icon size={32} />
        <span className="text-xs text-base-content/60">32px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Home01Icon size={48} />
        <span className="text-xs text-base-content/60">48px</span>
      </div>
    </div>
  </div>
);

/**
 * Icons in Buttons
 */
export const IconsInButtons = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Icons in Buttons</h3>
    <p className="text-sm text-base-content/70">Common patterns for using icons with buttons.</p>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Icon + Text</h4>
      <div className="flex gap-2 flex-wrap">
        <button className="btn btn-primary">
          <Add01Icon size={20} />
          Add Item
        </button>
        <button className="btn btn-secondary">
          <Download01Icon size={20} />
          Download
        </button>
        <button className="btn btn-ghost">
          <Setting07Icon size={20} />
          Settings
        </button>
      </div>

      <h4 className="text-sm font-medium mt-6">Text + Icon</h4>
      <div className="flex gap-2 flex-wrap">
        <button className="btn btn-primary">
          Next
          <ArrowRight01Icon size={20} />
        </button>
        <button className="btn btn-secondary">
          Learn More
          <ArrowRight01Icon size={20} />
        </button>
      </div>

      <h4 className="text-sm font-medium mt-6">Icon-Only Buttons</h4>
      <div className="flex gap-2 flex-wrap items-center">
        <button className="btn btn-primary btn-square">
          <Add01Icon size={20} />
        </button>
        <button className="btn btn-secondary btn-square">
          <PencilIcon size={20} />
        </button>
        <button className="btn btn-ghost btn-square">
          <Delete01Icon size={20} />
        </button>
        <button className="btn btn-circle btn-primary">
          <FavouriteIcon size={20} />
        </button>
        <button className="btn btn-circle btn-ghost">
          <MoreVerticalIcon size={20} />
        </button>
      </div>

      <h4 className="text-sm font-medium mt-6">Button Sizes</h4>
      <div className="flex gap-2 flex-wrap items-center">
        <button className="btn btn-primary btn-xs">
          <Add01Icon size={12} />
          Tiny
        </button>
        <button className="btn btn-primary btn-sm">
          <Add01Icon size={16} />
          Small
        </button>
        <button className="btn btn-primary">
          <Add01Icon size={20} />
          Default
        </button>
        <button className="btn btn-primary btn-lg">
          <Add01Icon size={24} />
          Large
        </button>
      </div>
    </div>
  </div>
);

/**
 * Icons in Form Elements
 */
export const IconsInForms = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Icons in Form Elements</h3>
    <p className="text-sm text-base-content/70">Using icons with input fields and form controls.</p>

    <div className="space-y-4 max-w-md">
      <h4 className="text-sm font-medium">Input with Icon</h4>
      <label className="input input-bordered flex items-center gap-2">
        <Search01Icon size={20} className="opacity-50" />
        <input type="text" className="grow" placeholder="Search..." />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <Mail01Icon size={20} className="opacity-50" />
        <input type="email" className="grow" placeholder="Email" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <LockIcon size={20} className="opacity-50" />
        <input type="password" className="grow" placeholder="Password" />
        <button className="btn btn-ghost btn-xs btn-circle">
          <EyeIcon size={16} />
        </button>
      </label>

      <h4 className="text-sm font-medium mt-6">Input with Button</h4>
      <div className="join w-full">
        <input type="text" placeholder="Enter URL" className="input input-bordered join-item flex-1" />
        <button className="btn btn-primary join-item">
          <Link01Icon size={20} />
        </button>
      </div>
    </div>
  </div>
);

/**
 * Icons in Alerts
 */
export const IconsInAlerts = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Icons in Alerts</h3>
    <p className="text-sm text-base-content/70">Using status icons with alerts.</p>

    <div className="space-y-4 max-w-xl">
      <div role="alert" className="alert alert-info">
        <InformationCircleIcon size={24} />
        <span>New software update available.</span>
      </div>

      <div role="alert" className="alert alert-success">
        <CheckmarkCircle01Icon size={24} />
        <span>Your purchase has been confirmed!</span>
      </div>

      <div role="alert" className="alert alert-warning">
        <Alert02Icon size={24} />
        <span>Warning: Invalid email address!</span>
      </div>

      <div role="alert" className="alert alert-error">
        <CancelCircleIcon size={24} />
        <span>Error! Task failed successfully.</span>
      </div>
    </div>
  </div>
);

/**
 * Dark Mode
 */
export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium">Icons in Dark Mode</h3>
    <p className="text-sm text-base-content/70">Icons automatically adapt to the theme&apos;s text color.</p>

    <div className="flex gap-4 flex-wrap">
      <Home01Icon size={24} />
      <UserIcon size={24} />
      <Mail01Icon size={24} />
      <Notification01Icon size={24} />
      <Setting07Icon size={24} />
    </div>

    <div className="flex gap-4 flex-wrap">
      <InformationCircleIcon size={24} className="text-primary" />
      <CheckmarkCircle01Icon size={24} className="text-success" />
      <Alert02Icon size={24} className="text-warning" />
      <CancelCircleIcon size={24} className="text-error" />
    </div>

    <div className="flex gap-2">
      <button className="btn btn-primary">
        <Add01Icon size={20} />
        Add
      </button>
      <button className="btn btn-ghost">
        <PencilIcon size={20} />
        Edit
      </button>
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;

/**
 * Usage Reference
 */
export const UsageReference = () => (
  <div className="prose max-w-none">
    <h3>Usage Reference</h3>

    <h4>Import</h4>
    <pre><code>{`import { Home01Icon, UserIcon } from 'hugeicons-react';`}</code></pre>

    <h4>React Component API</h4>
    <table className="table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>size</code></td>
          <td><code>number</code></td>
          <td><code>24</code></td>
          <td>Icon size in pixels</td>
        </tr>
        <tr>
          <td><code>color</code></td>
          <td><code>string</code></td>
          <td><code>currentColor</code></td>
          <td>Icon color</td>
        </tr>
        <tr>
          <td><code>strokeWidth</code></td>
          <td><code>number</code></td>
          <td><code>1.5</code></td>
          <td>Stroke thickness</td>
        </tr>
        <tr>
          <td><code>className</code></td>
          <td><code>string</code></td>
          <td>-</td>
          <td>CSS class for styling</td>
        </tr>
      </tbody>
    </table>

    <h4>Examples</h4>
    <pre><code>{`// Default (24px, stroke)
<Home01Icon />

// Custom size
<Home01Icon size={32} />

// With color via Tailwind
<Home01Icon className="text-primary" />

// With explicit color
<Home01Icon color="#1F24E9" />

// Custom stroke weight
<Home01Icon strokeWidth={2} />`}</code></pre>

    <h4>Icon Catalog</h4>
    <p>For the complete catalog of 46,000+ icons, visit <a href="https://hugeicons.com" target="_blank" rel="noopener noreferrer">hugeicons.com</a></p>
  </div>
);
