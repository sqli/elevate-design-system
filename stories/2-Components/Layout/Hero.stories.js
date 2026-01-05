/**
 * @component Hero
 * @description DaisyUI Hero component with SQLI theme
 * @see https://daisyui.com/components/hero/
 */
export default {
  title: 'Components/Layout/Hero',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Hero** component for landing page sections.

## Usage
\`\`\`html
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Description text</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="hero min-h-64 bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
`;

export const WithFigure = () => `
  <div class="hero min-h-64 bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <div class="w-48 h-48 rounded-lg bg-primary flex items-center justify-center text-primary-content text-4xl font-bold">
        SQLI
      </div>
      <div>
        <h1 class="text-5xl font-bold">Elevate. Digitally</h1>
        <p class="py-6">Transform your business with cutting-edge digital solutions.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
`;
WithFigure.storyName = 'With Figure';

export const FigureOnRight = () => `
  <div class="hero min-h-64 bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="w-48 h-48 rounded-lg bg-secondary flex items-center justify-center text-secondary-content text-4xl font-bold">
        SQLI
      </div>
      <div>
        <h1 class="text-5xl font-bold">Elevate. Digitally</h1>
        <p class="py-6">Transform your business with cutting-edge digital solutions.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
`;
FigureOnRight.storyName = 'Figure on Right';

export const WithForm = () => `
  <div class="hero min-h-64 bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
      </div>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" class="input input-bordered" />
            <label class="label">
              <a class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
WithForm.storyName = 'With Form';

export const Overlay = () => `
  <div class="hero min-h-64 bg-neutral">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark">
    <div class="hero min-h-64 bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Elevate. Digitally</h1>
          <p class="py-6">Transform your business with SQLI's digital expertise.</p>
          <button class="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
