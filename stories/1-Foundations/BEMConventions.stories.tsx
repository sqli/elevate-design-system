import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../utils/story-helpers';

/**
 * CSS Naming Conventions
 *
 * Documentation of CSS naming conventions in the Elevate Design System.
 * The design system has evolved from BEM to a component-based architecture
 * using semantic class names from the SQLI theme system.
 */
const meta: Meta = {
  title: 'Foundations/CSS Conventions',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Elevate Design System uses a **component-based architecture** with semantic class names. As the system evolves towards React components, the underlying CSS conventions remain important for styling and theming.

## Semantic Class Naming

| Component | Class Pattern | Examples |
|-----------|---------------|----------|
| Button | \`btn btn-{variant}\` | \`btn btn-primary\`, \`btn btn-secondary\` |
| Card | \`card\`, \`card-body\` | \`card bg-base-100 shadow-xl\` |
| Badge | \`badge badge-{variant}\` | \`badge badge-primary\` |
| Alert | \`alert alert-{type}\` | \`alert alert-info\`, \`alert alert-error\` |
| Input | \`input input-{style}\` | \`input input-bordered\` |

## Theme Colors

The SQLI theme system uses semantic color names that adapt to the current theme:
- \`primary\` - Main action color (Cobalt in light, Sky in dark)
- \`secondary\` - Secondary color
- \`accent\` - Accent highlights
- \`neutral\` - Neutral elements
- \`base-100/200/300\` - Background levels
- \`base-content\` - Text color
        `,
      },
    },
  },
};

export default meta;

export const SemanticClasses = () => (
  <div className="flex flex-col gap-8">
    <div>
      <h3 className="text-lg font-medium mb-4">Semantic Component Classes</h3>
      <p className="text-sm opacity-70 mb-6">
        Components use semantic class names that map to the SQLI theme system.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card bg-base-200">
        <div className="card-body">
          <h4 className="font-medium mb-3">Buttons</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="btn">Default</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
          </div>
          <div className="mockup-code text-xs">
            <pre><code>{'<button class="btn btn-primary">Primary</button>'}</code></pre>
          </div>
        </div>
      </div>

      <div className="card bg-base-200">
        <div className="card-body">
          <h4 className="font-medium mb-3">Badges</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge">Default</span>
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-secondary">Secondary</span>
          </div>
          <div className="mockup-code text-xs">
            <pre><code>{'<span class="badge badge-primary">Primary</span>'}</code></pre>
          </div>
        </div>
      </div>

      <div className="card bg-base-200">
        <div className="card-body">
          <h4 className="font-medium mb-3">Inputs</h4>
          <input type="text" placeholder="Type here" className="input input-bordered w-full mb-4" />
          <div className="mockup-code text-xs">
            <pre><code>{'<input class="input input-bordered" />'}</code></pre>
          </div>
        </div>
      </div>

      <div className="card bg-base-200">
        <div className="card-body">
          <h4 className="font-medium mb-3">Alerts</h4>
          <div className="alert alert-info mb-4">
            <span>Info message</span>
          </div>
          <div className="mockup-code text-xs">
            <pre><code>{'<div class="alert alert-info">...</div>'}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
);
SemanticClasses.storyName = 'Semantic Classes';

export const SemanticColors = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-lg font-medium mb-4">Semantic Color Classes</h3>
      <p className="text-sm opacity-70 mb-6">
        The SQLI theme system provides semantic color classes that adapt to the current theme.
      </p>
    </div>

    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Color Class</th>
            <th>Background</th>
            <th>Text</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>primary</code></td>
            <td><div className="w-8 h-8 rounded bg-primary" /></td>
            <td><span className="text-primary font-medium">Text</span></td>
            <td>Main actions, links</td>
          </tr>
          <tr>
            <td><code>secondary</code></td>
            <td><div className="w-8 h-8 rounded bg-secondary" /></td>
            <td><span className="text-secondary font-medium">Text</span></td>
            <td>Secondary actions</td>
          </tr>
          <tr>
            <td><code>accent</code></td>
            <td><div className="w-8 h-8 rounded bg-accent" /></td>
            <td><span className="text-accent font-medium">Text</span></td>
            <td>Highlights, emphasis</td>
          </tr>
          <tr>
            <td><code>neutral</code></td>
            <td><div className="w-8 h-8 rounded bg-neutral" /></td>
            <td><span className="text-neutral font-medium">Text</span></td>
            <td>Neutral elements</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
SemanticColors.storyName = 'Semantic Colors';

export const StatusClasses = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-lg font-medium mb-4">Status Color Classes</h3>
      <p className="text-sm opacity-70 mb-6">
        Status colors for feedback and alerts.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-lg bg-info" />
        <code className="text-xs">info</code>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-lg bg-success" />
        <code className="text-xs">success</code>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-lg bg-warning" />
        <code className="text-xs">warning</code>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-lg bg-error" />
        <code className="text-xs">error</code>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <div className="alert alert-info"><span>Info alert</span></div>
      <div className="alert alert-success"><span>Success alert</span></div>
      <div className="alert alert-warning"><span>Warning alert</span></div>
      <div className="alert alert-error"><span>Error alert</span></div>
    </div>
  </div>
);
StatusClasses.storyName = 'Status Classes';

export const SizeModifiers = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-lg font-medium mb-4">Size Modifiers</h3>
      <p className="text-sm opacity-70 mb-6">
        Many components support size modifiers: xs, sm, md (default), lg.
      </p>
    </div>

    <div className="flex flex-col gap-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Buttons</h4>
        <div className="flex items-center gap-2 flex-wrap">
          <button className="btn btn-xs btn-primary">XS</button>
          <button className="btn btn-sm btn-primary">SM</button>
          <button className="btn btn-primary">MD</button>
          <button className="btn btn-lg btn-primary">LG</button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Badges</h4>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="badge badge-xs badge-primary">XS</span>
          <span className="badge badge-sm badge-primary">SM</span>
          <span className="badge badge-primary">MD</span>
          <span className="badge badge-lg badge-primary">LG</span>
        </div>
      </div>

      <div className="mockup-code text-xs mt-4">
        <pre><code>{`<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-lg btn-primary">Large</button>`}</code></pre>
      </div>
    </div>
  </div>
);
SizeModifiers.storyName = 'Size Modifiers';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium mb-6">Dark Mode</h3>
    <p className="text-sm opacity-70 mb-6">
      The same classes work in both themes. Colors adapt automatically.
    </p>

    <div className="flex flex-wrap gap-3 mb-6">
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      <span className="badge badge-primary">Primary</span>
      <span className="badge badge-secondary">Secondary</span>
      <span className="badge badge-accent">Accent</span>
    </div>

    <div className="alert">
      <span>Use <code>data-theme=&quot;sqli-dark&quot;</code> to enable dark mode.</span>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

export const MigrationFromBEM = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-lg font-medium mb-4">Migration from BEM Classes</h3>
      <p className="text-sm opacity-70 mb-6">
        If you are migrating from the old sqli-* BEM classes, here is a quick reference.
      </p>
    </div>

    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Old (v0.9.x)</th>
            <th>New (v0.10.x+)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="text-error">sqli-btn sqli-btn--primary</code></td>
            <td><code className="text-success">btn btn-primary</code></td>
          </tr>
          <tr>
            <td><code className="text-error">sqli-card sqli-card__body</code></td>
            <td><code className="text-success">card card-body</code></td>
          </tr>
          <tr>
            <td><code className="text-error">sqli-badge sqli-badge--cobalt</code></td>
            <td><code className="text-success">badge badge-primary</code></td>
          </tr>
          <tr>
            <td><code className="text-error">sqli-alert sqli-alert--error</code></td>
            <td><code className="text-success">alert alert-error</code></td>
          </tr>
          <tr>
            <td><code className="text-error">sqli-input</code></td>
            <td><code className="text-success">input input-bordered</code></td>
          </tr>
          <tr>
            <td><code className="text-error">class=&quot;dark&quot;</code></td>
            <td><code className="text-success">data-theme=&quot;sqli-dark&quot;</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="alert alert-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>See the component documentation for the complete list of available components and their class names.</span>
    </div>
  </div>
);
MigrationFromBEM.storyName = 'Migration from BEM';
