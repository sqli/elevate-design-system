import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Button } from '../../../src/components/Button';
import { Input } from '../../../src/components/Input';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Layout/Hero',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Hero layout component for landing page sections.

## Usage
\`\`\`tsx
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Description text</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="hero min-h-64 bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-base-content">Hello there</h1>
        <p className="py-6 text-base-content">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
        </p>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  </div>
);

export const WithFigure = () => (
  <div className="hero min-h-64 bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="w-48 h-48 rounded-lg bg-primary flex items-center justify-center text-primary-content text-4xl font-bold">
        SQLI
      </div>
      <div>
        <h1 className="text-5xl font-bold text-base-content">Elevate. Digitally</h1>
        <p className="py-6 text-base-content">
          Transform your business with cutting-edge digital solutions.
        </p>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  </div>
);
WithFigure.storyName = 'With Figure';

export const FigureOnRight = () => (
  <div className="hero min-h-64 bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="w-48 h-48 rounded-lg bg-secondary flex items-center justify-center text-secondary-content text-4xl font-bold">
        SQLI
      </div>
      <div>
        <h1 className="text-5xl font-bold text-base-content">Elevate. Digitally</h1>
        <p className="py-6 text-base-content">
          Transform your business with cutting-edge digital solutions.
        </p>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  </div>
);
FigureOnRight.storyName = 'Figure on Right';

export const WithForm = () => (
  <div className="hero min-h-64 bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-base-content">Login now!</h1>
        <p className="py-6 text-base-content">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">Email</span>
            </label>
            <Input type="email" placeholder="email" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">Password</span>
            </label>
            <Input type="password" placeholder="password" />
            <label className="label">
              <a className="label-text-alt link link-hover text-primary">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <Button variant="primary" block>Login</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
WithForm.storyName = 'With Form';

export const Overlay = () => (
  <div className="hero min-h-64 bg-neutral">
    <div className="hero-overlay bg-opacity-60" />
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
        </p>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <div className="hero min-h-64 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-base-content">Elevate. Digitally</h1>
          <p className="py-6 text-base-content">
            Transform your business with SQLI's digital expertise.
          </p>
          <Button variant="primary">Contact Us</Button>
        </div>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;
