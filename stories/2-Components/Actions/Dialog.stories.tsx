import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '../../../src/components/Dialog';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

export default {
  title: 'Components/Actions/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Accessible dialog/modal component built on Radix UI Dialog primitive with SQLI themes. Replaces the previous DaisyUI Modal.

## Usage
\`\`\`tsx
import {
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogFooter, DialogTitle,
  DialogDescription, DialogClose,
} from '@sqli/elevate-design-system';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <p>Body content</p>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancel</Button>
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`

## Sizes
- \`sm\` - Small (max-w-sm)
- \`md\` - Medium (max-w-lg, default)
- \`lg\` - Large (max-w-2xl)
- \`xl\` - Extra large (max-w-4xl)
- \`full\` - Nearly full screen
`,
      },
    },
  },
};

export const Default = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a description of the dialog content.
        </DialogDescription>
      </DialogHeader>
      <p className="text-sm">Dialog body content goes here.</p>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button>Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Sizes = () => (
  <div className="flex gap-2 flex-wrap">
    {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
      <Dialog key={size}>
        <DialogTrigger asChild>
          <Button variant="outline">{size.toUpperCase()}</Button>
        </DialogTrigger>
        <DialogContent size={size}>
          <DialogHeader>
            <DialogTitle>Size: {size}</DialogTitle>
            <DialogDescription>
              This dialog uses the &quot;{size}&quot; size variant.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm">
            Content area for the {size} dialog. The max-width changes based on
            the chosen size.
          </p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ))}
  </div>
);

export const WithForm = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary">Open Form</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Contact Form</DialogTitle>
        <DialogDescription>
          Fill in the form below to send us a message.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="h-10 px-3 rounded-md border border-border bg-transparent text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="h-10 px-3 rounded-md border border-border bg-transparent text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">Message</label>
          <textarea
            placeholder="Your message"
            rows={3}
            className="px-3 py-2 rounded-md border border-border bg-transparent text-sm resize-none"
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button>Send</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Confirmation = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="error">Delete Item</Button>
    </DialogTrigger>
    <DialogContent size="sm">
      <DialogHeader>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete the item
          from the system.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button variant="error">Delete</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog (Dark)</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dark Theme Dialog</DialogTitle>
          <DialogDescription>
            This dialog inherits the dark theme styling.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm">Dialog content styled with the sqli-dark theme.</p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;

export const Interactive = {
  args: {
    title: 'Dialog Title',
    description: 'A description of the dialog purpose.',
    body: 'This is the main body content of the dialog.',
    size: 'md',
    showFooter: true,
  },
  argTypes: {
    title: { control: 'text', description: 'Dialog title' },
    description: { control: 'text', description: 'Dialog description' },
    body: { control: 'text', description: 'Dialog body content' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Dialog size variant',
    },
    showFooter: { control: 'boolean', description: 'Show footer actions' },
  },
  render: (args: {
    title: string;
    description: string;
    body: string;
    size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    showFooter: boolean;
  }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Interactive Dialog</Button>
      </DialogTrigger>
      <DialogContent size={args.size}>
        <DialogHeader>
          <DialogTitle>{args.title}</DialogTitle>
          <DialogDescription>{args.description}</DialogDescription>
        </DialogHeader>
        <p className="text-sm">{args.body}</p>
        {args.showFooter && (
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button>Confirm</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  ),
};
