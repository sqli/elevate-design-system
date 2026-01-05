/**
 * @component Phone Mockup
 * @description DaisyUI Phone Mockup component with SQLI theme
 * @see https://daisyui.com/components/mockup-phone/
 */
export default {
  title: 'Components/Mockup/Phone',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Phone Mockup** component for displaying mobile phone frames.

## Usage
\`\`\`html
<div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
\`\`\`

## Artboard Sizes
- \`phone-1\` - 320×568
- \`phone-2\` - 375×667
- \`phone-3\` - 414×736
- \`phone-4\` - 375×812
- \`phone-5\` - 414×896
- \`phone-6\` - 320×568 (horizontal)
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="mockup-phone">
    <div class="camera"></div>
    <div class="display">
      <div class="artboard artboard-demo phone-1 bg-base-200 flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold mb-4">SQLI</h1>
        <p>Elevate. Digitally</p>
      </div>
    </div>
  </div>
`;

export const WithApp = () => `
  <div class="mockup-phone">
    <div class="camera"></div>
    <div class="display">
      <div class="artboard phone-1 bg-base-100 flex flex-col">
        <div class="navbar bg-primary text-primary-content px-4">
          <span class="text-lg font-bold">SQLI App</span>
        </div>
        <div class="flex-1 p-4">
          <h2 class="text-lg font-medium mb-2">Welcome</h2>
          <p class="text-sm opacity-70 mb-4">Your digital transformation starts here.</p>
          <button class="btn btn-primary btn-block">Get Started</button>
        </div>
        <div class="btm-nav">
          <button class="active">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
`;
WithApp.storyName = 'With App Content';

export const Colors = () => `
  <div class="flex gap-4">
    <div class="mockup-phone border-primary">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard phone-1 bg-primary text-primary-content flex items-center justify-center">
          Primary
        </div>
      </div>
    </div>
    <div class="mockup-phone border-secondary">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard phone-1 bg-secondary text-secondary-content flex items-center justify-center">
          Secondary
        </div>
      </div>
    </div>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-1 bg-base-200 flex flex-col items-center justify-center">
          <h1 class="text-2xl font-bold mb-4">SQLI</h1>
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
