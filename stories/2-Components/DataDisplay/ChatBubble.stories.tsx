import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/Chat Bubble',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Chat Bubble** component for messaging interfaces.

## Usage
\`\`\`html
<div class="chat chat-start">
  <div class="chat-bubble">Message</div>
</div>
\`\`\`

## Variants
- \`chat-start\` - Message from other user (left aligned)
- \`chat-end\` - Message from current user (right aligned)
- Color variants: \`chat-bubble-primary\`, \`chat-bubble-secondary\`, etc.
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="space-y-4">
    <div className="chat chat-start">
      <div className="chat-bubble">It's over Anakin, I have the high ground.</div>
    </div>
    <div className="chat chat-end">
      <div className="chat-bubble">You underestimate my power!</div>
    </div>
  </div>
);

export const WithImage = () => (
  <div className="space-y-4">
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
          OW
        </div>
      </div>
      <div className="chat-bubble">You were the Chosen One!</div>
    </div>
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-error flex items-center justify-center text-error-content font-bold">
          AS
        </div>
      </div>
      <div className="chat-bubble">I HATE YOU!</div>
    </div>
  </div>
);
WithImage.storyName = 'With Avatar';

export const WithHeader = () => (
  <div className="space-y-4">
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
          OW
        </div>
      </div>
      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble">You were my brother Anakin. I loved you.</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-error flex items-center justify-center text-error-content font-bold">
          AS
        </div>
      </div>
      <div className="chat-header">
        Anakin Skywalker
        <time className="text-xs opacity-50">12:46</time>
      </div>
      <div className="chat-bubble">I hate you!</div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  </div>
);
WithHeader.storyName = 'With Header & Footer';

export const Colors = () => (
  <div className="space-y-4">
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-primary">Primary color</div>
    </div>
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-secondary">Secondary color</div>
    </div>
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-accent">Accent color</div>
    </div>
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-info">Info color</div>
    </div>
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-success">Success color</div>
    </div>
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-warning">Warning color</div>
    </div>
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-error">Error color</div>
    </div>
  </div>
);

export const Conversation = () => (
  <div className="space-y-4">
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-content font-bold">
          J
        </div>
      </div>
      <div className="chat-header">Jane</div>
      <div className="chat-bubble">Hey! How's the project going?</div>
    </div>
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-primary">Going great! Just finished the design system.</div>
    </div>
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-primary">Should be ready for review tomorrow.</div>
    </div>
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-content font-bold">
          J
        </div>
      </div>
      <div className="chat-bubble">That's awesome! Can't wait to see it</div>
    </div>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="space-y-4">
      <div className="chat chat-start">
        <div className="chat-bubble">Hello from the dark side!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-primary">Hello there!</div>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
