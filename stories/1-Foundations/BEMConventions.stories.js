/**
 * CSS Naming Conventions
 *
 * Documentation of CSS naming conventions in the Elevate Design System.
 * With DaisyUI, we use semantic class names instead of BEM.
 */
export default {
  title: 'Foundations/CSS Conventions',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Elevate Design System uses **DaisyUI** for component styling. Components use DaisyUI's semantic class system.

## DaisyUI Class Naming

| Component | Class Pattern | Examples |
|-----------|---------------|----------|
| Button | \`btn btn-{variant}\` | \`btn btn-primary\`, \`btn btn-secondary\` |
| Card | \`card\`, \`card-body\` | \`card bg-base-100 shadow-xl\` |
| Badge | \`badge badge-{variant}\` | \`badge badge-primary\` |
| Alert | \`alert alert-{type}\` | \`alert alert-info\`, \`alert alert-error\` |
| Input | \`input input-{style}\` | \`input input-bordered\` |

## Theme Colors

DaisyUI uses semantic color names that adapt to the current theme:
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

// DaisyUI Classes
export const DaisyUIClasses = () => `
  <div class="flex flex-col gap-8">
    <div>
      <h3 class="text-lg font-medium mb-4">DaisyUI Component Classes</h3>
      <p class="text-sm opacity-70 mb-6">
        Components use DaisyUI's semantic class system instead of BEM.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="font-medium mb-3">Buttons</h4>
          <div class="flex flex-wrap gap-2 mb-4">
            <button class="btn">Default</button>
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
          </div>
          <div class="mockup-code text-xs">
            <pre><code>&lt;button class="btn btn-primary"&gt;Primary&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>

      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="font-medium mb-3">Badges</h4>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="badge">Default</span>
            <span class="badge badge-primary">Primary</span>
            <span class="badge badge-secondary">Secondary</span>
          </div>
          <div class="mockup-code text-xs">
            <pre><code>&lt;span class="badge badge-primary"&gt;Primary&lt;/span&gt;</code></pre>
          </div>
        </div>
      </div>

      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="font-medium mb-3">Inputs</h4>
          <input type="text" placeholder="Type here" class="input input-bordered w-full mb-4" />
          <div class="mockup-code text-xs">
            <pre><code>&lt;input class="input input-bordered" /&gt;</code></pre>
          </div>
        </div>
      </div>

      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="font-medium mb-3">Alerts</h4>
          <div class="alert alert-info mb-4">
            <span>Info message</span>
          </div>
          <div class="mockup-code text-xs">
            <pre><code>&lt;div class="alert alert-info"&gt;...&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
DaisyUIClasses.storyName = 'DaisyUI Classes';

// Theme Semantic Colors
export const SemanticColors = () => `
  <div class="flex flex-col gap-6">
    <div>
      <h3 class="text-lg font-medium mb-4">Semantic Color Classes</h3>
      <p class="text-sm opacity-70 mb-6">
        DaisyUI provides semantic color classes that adapt to the current theme.
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="table">
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
            <td><div class="w-8 h-8 rounded bg-primary"></div></td>
            <td><span class="text-primary font-medium">Text</span></td>
            <td>Main actions, links</td>
          </tr>
          <tr>
            <td><code>secondary</code></td>
            <td><div class="w-8 h-8 rounded bg-secondary"></div></td>
            <td><span class="text-secondary font-medium">Text</span></td>
            <td>Secondary actions</td>
          </tr>
          <tr>
            <td><code>accent</code></td>
            <td><div class="w-8 h-8 rounded bg-accent"></div></td>
            <td><span class="text-accent font-medium">Text</span></td>
            <td>Highlights, emphasis</td>
          </tr>
          <tr>
            <td><code>neutral</code></td>
            <td><div class="w-8 h-8 rounded bg-neutral"></div></td>
            <td><span class="text-neutral font-medium">Text</span></td>
            <td>Neutral elements</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;
SemanticColors.storyName = 'Semantic Colors';

// Status Classes
export const StatusClasses = () => `
  <div class="flex flex-col gap-6">
    <div>
      <h3 class="text-lg font-medium mb-4">Status Color Classes</h3>
      <p class="text-sm opacity-70 mb-6">
        Status colors for feedback and alerts.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-center gap-2">
        <div class="w-12 h-12 rounded-lg bg-info"></div>
        <code class="text-xs">info</code>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="w-12 h-12 rounded-lg bg-success"></div>
        <code class="text-xs">success</code>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="w-12 h-12 rounded-lg bg-warning"></div>
        <code class="text-xs">warning</code>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="w-12 h-12 rounded-lg bg-error"></div>
        <code class="text-xs">error</code>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="alert alert-info"><span>Info alert</span></div>
      <div class="alert alert-success"><span>Success alert</span></div>
      <div class="alert alert-warning"><span>Warning alert</span></div>
      <div class="alert alert-error"><span>Error alert</span></div>
    </div>
  </div>
`;
StatusClasses.storyName = 'Status Classes';

// Size Modifiers
export const SizeModifiers = () => `
  <div class="flex flex-col gap-6">
    <div>
      <h3 class="text-lg font-medium mb-4">Size Modifiers</h3>
      <p class="text-sm opacity-70 mb-6">
        Many components support size modifiers: xs, sm, md (default), lg.
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <div>
        <h4 class="text-sm font-medium mb-2">Buttons</h4>
        <div class="flex items-center gap-2 flex-wrap">
          <button class="btn btn-xs btn-primary">XS</button>
          <button class="btn btn-sm btn-primary">SM</button>
          <button class="btn btn-primary">MD</button>
          <button class="btn btn-lg btn-primary">LG</button>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-medium mb-2">Badges</h4>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="badge badge-xs badge-primary">XS</span>
          <span class="badge badge-sm badge-primary">SM</span>
          <span class="badge badge-primary">MD</span>
          <span class="badge badge-lg badge-primary">LG</span>
        </div>
      </div>

      <div class="mockup-code text-xs mt-4">
        <pre><code>&lt;button class="btn btn-sm btn-primary"&gt;Small&lt;/button&gt;
&lt;button class="btn btn-lg btn-primary"&gt;Large&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>
`;
SizeModifiers.storyName = 'Size Modifiers';

// Dark Mode
export const DarkMode = () => `
  <div data-theme="sqli-dark" class="p-8 rounded-lg bg-base-100">
    <h3 class="text-lg font-medium mb-6">Dark Mode</h3>
    <p class="text-sm opacity-70 mb-6">
      The same classes work in both themes. Colors adapt automatically.
    </p>

    <div class="flex flex-wrap gap-3 mb-6">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
    </div>

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-secondary">Secondary</span>
      <span class="badge badge-accent">Accent</span>
    </div>

    <div class="alert">
      <span>Use <code>data-theme="sqli-dark"</code> to enable dark mode.</span>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

// Migration from BEM
export const MigrationFromBEM = () => `
  <div class="flex flex-col gap-6">
    <div>
      <h3 class="text-lg font-medium mb-4">Migration from BEM Classes</h3>
      <p class="text-sm opacity-70 mb-6">
        If you're migrating from the old sqli-* BEM classes, here's a quick reference.
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Old (v0.9.x)</th>
            <th>New (v0.10.x)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="text-error">sqli-btn sqli-btn--primary</code></td>
            <td><code class="text-success">btn btn-primary</code></td>
          </tr>
          <tr>
            <td><code class="text-error">sqli-card sqli-card__body</code></td>
            <td><code class="text-success">card card-body</code></td>
          </tr>
          <tr>
            <td><code class="text-error">sqli-badge sqli-badge--cobalt</code></td>
            <td><code class="text-success">badge badge-primary</code></td>
          </tr>
          <tr>
            <td><code class="text-error">sqli-alert sqli-alert--error</code></td>
            <td><code class="text-success">alert alert-error</code></td>
          </tr>
          <tr>
            <td><code class="text-error">sqli-input</code></td>
            <td><code class="text-success">input input-bordered</code></td>
          </tr>
          <tr>
            <td><code class="text-error">class="dark"</code></td>
            <td><code class="text-success">data-theme="sqli-dark"</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="alert alert-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>See the <a href="https://daisyui.com/components/" class="link">DaisyUI documentation</a> for the complete list of components.</span>
    </div>
  </div>
`;
MigrationFromBEM.storyName = 'Migration from BEM';
