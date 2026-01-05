/**
 * @component ChatBubble
 * @description DaisyUI Chat Bubble component with SQLI theme
 * @see https://daisyui.com/components/chat/
 */
export default {
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

export const Default = () => `
  <div class="space-y-4">
    <div class="chat chat-start">
      <div class="chat-bubble">It's over Anakin, I have the high ground.</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble">You underestimate my power!</div>
    </div>
  </div>
`;

export const WithImage = () => `
  <div class="space-y-4">
    <div class="chat chat-start">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
          OW
        </div>
      </div>
      <div class="chat-bubble">You were the Chosen One!</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full bg-error flex items-center justify-center text-error-content font-bold">
          AS
        </div>
      </div>
      <div class="chat-bubble">I HATE YOU!</div>
    </div>
  </div>
`;
WithImage.storyName = 'With Avatar';

export const WithHeader = () => `
  <div class="space-y-4">
    <div class="chat chat-start">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
          OW
        </div>
      </div>
      <div class="chat-header">
        Obi-Wan Kenobi
        <time class="text-xs opacity-50">12:45</time>
      </div>
      <div class="chat-bubble">You were my brother Anakin. I loved you.</div>
      <div class="chat-footer opacity-50">Delivered</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full bg-error flex items-center justify-center text-error-content font-bold">
          AS
        </div>
      </div>
      <div class="chat-header">
        Anakin Skywalker
        <time class="text-xs opacity-50">12:46</time>
      </div>
      <div class="chat-bubble">I hate you!</div>
      <div class="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  </div>
`;
WithHeader.storyName = 'With Header & Footer';

export const Colors = () => `
  <div class="space-y-4">
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-primary">Primary color</div>
    </div>
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-secondary">Secondary color</div>
    </div>
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-accent">Accent color</div>
    </div>
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-info">Info color</div>
    </div>
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-success">Success color</div>
    </div>
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-warning">Warning color</div>
    </div>
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-error">Error color</div>
    </div>
  </div>
`;

export const Conversation = () => `
  <div class="space-y-4">
    <div class="chat chat-start">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-content font-bold">
          J
        </div>
      </div>
      <div class="chat-header">Jane</div>
      <div class="chat-bubble">Hey! How's the project going?</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble chat-bubble-primary">Going great! Just finished the design system.</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble chat-bubble-primary">Should be ready for review tomorrow.</div>
    </div>
    <div class="chat chat-start">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-content font-bold">
          J
        </div>
      </div>
      <div class="chat-bubble">That's awesome! Can't wait to see it 🎉</div>
    </div>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="space-y-4">
      <div class="chat chat-start">
        <div class="chat-bubble">Hello from the dark side!</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-primary">Hello there!</div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
