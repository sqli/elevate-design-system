import React, { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper, darkModeParameters } from '../utils/story-helpers';

// Radix-based Elevate components
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '../../src/components/Dialog';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../src/components/Accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../src/components/Tabs';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '../../src/components/Select';
import { Checkbox } from '../../src/components/Checkbox';
import { RadioGroup, RadioGroupItem } from '../../src/components/RadioGroup';
import { Switch } from '../../src/components/Switch';
import { Slider } from '../../src/components/Slider';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../../src/components/DropdownMenu';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '../../src/components/Tooltip';
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from '../../src/components/Toast';
import { Label } from '../../src/components/Label';
import { Button } from '../../src/components/Button';

const meta: Meta = {
  title: 'Foundations/Radix Primitives',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Radix UI Primitives

Elevate Design System wraps **12 Radix UI primitives** to provide accessible, unstyled interactive components with SQLI theming.

## Architecture

Each Radix primitive is wrapped following a consistent pattern:

1. **Import** the primitive from \`radix-ui\`
2. **Re-export** compound sub-components (\`Root\`, \`Trigger\`, \`Content\`, etc.)
3. **Apply** SQLI styling via Tailwind CSS + CVA variants
4. **Forward refs** for composition with other components

\`\`\`tsx
import { Dialog as DialogPrimitive } from 'radix-ui';

export const DialogContent = forwardRef(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="..." />
    <DialogPrimitive.Content ref={ref} className={cn('...', className)} {...props}>
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
\`\`\`

## Primitives Overview

| Primitive | Category | Sub-components | Source |
|-----------|----------|----------------|--------|
| Dialog | Overlay | Root, Trigger, Content, Title, Description, Close, Portal, Overlay | \`src/components/Dialog\` |
| DropdownMenu | Overlay | Root, Trigger, Content, Item, CheckboxItem, RadioItem, Label, Separator, Sub | \`src/components/DropdownMenu\` |
| Tooltip | Overlay | Provider, Root, Trigger, Content | \`src/components/Tooltip\` |
| Toast | Overlay | Provider, Viewport, Root, Title, Description, Action, Close | \`src/components/Toast\` |
| Accordion | Layout | Root, Item, Trigger, Content | \`src/components/Accordion\` |
| Tabs | Layout | Root, List, Trigger, Content | \`src/components/Tabs\` |
| Select | Form | Root, Trigger, Content, Item, Value, Group, Label, Separator | \`src/components/Select\` |
| Checkbox | Form | Root (+ Indicator) | \`src/components/Checkbox\` |
| RadioGroup | Form | Root, Item (+ Indicator) | \`src/components/RadioGroup\` |
| Switch | Form | Root (+ Thumb) | \`src/components/Switch\` |
| Slider | Form | Root (+ Track, Range, Thumb) | \`src/components/Slider\` |
| Label | Form | Root | \`src/components/Label\` |

## Accessibility

All primitives inherit Radix UI's built-in accessibility:
- **Keyboard navigation** (Arrow keys, Enter, Escape, Tab)
- **ARIA attributes** (roles, states, properties)
- **Focus management** (focus trapping in modals, focus return)
- **Screen reader** announcements

## Dependency

\`\`\`json
"radix-ui": "^1.4.2"
\`\`\`
        `,
      },
    },
  },
};

export default meta;

// ---------------------------------------------------------------------------
// Overlay Primitives
// ---------------------------------------------------------------------------

export const DialogPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">Dialog</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Modal dialog with overlay, focus trap, and Escape to close. Built on <code>@radix-ui/react-dialog</code>.
    </p>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle>Radix Dialog Primitive</DialogTitle>
          <DialogDescription>
            This dialog uses Portal, Overlay, and Content sub-components. Focus is trapped inside and pressing Escape closes it.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-sm">
          <p>Sub-components used:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><code>Dialog</code> (Root)</li>
            <li><code>DialogTrigger</code></li>
            <li><code>DialogPortal</code> + <code>DialogOverlay</code></li>
            <li><code>DialogContent</code></li>
            <li><code>DialogTitle</code> + <code>DialogDescription</code></li>
            <li><code>DialogClose</code></li>
          </ul>
        </div>
        <div className="flex justify-end">
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  </div>
);
DialogPrimitive.storyName = 'Dialog';

export const DropdownMenuPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">DropdownMenu</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Context menu triggered by a button. Supports items, checkbox items, radio items, sub-menus, and keyboard navigation.
    </p>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Archive</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
DropdownMenuPrimitive.storyName = 'DropdownMenu';

export const TooltipPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">Tooltip</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Informational popup on hover/focus. Renders in a Portal and auto-positions to avoid overflow.
    </p>
    <div className="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip content via Radix Portal</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost">Or me</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Right-aligned tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
);
TooltipPrimitive.storyName = 'Tooltip';

export const ToastPrimitive = () => {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">Toast</h3>
        <p className="text-sm text-base-content/70 mb-2">
          Non-intrusive notification with auto-dismiss, swipe-to-dismiss, and action button support.
        </p>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Show Toast
        </Button>
        <Toast open={open} onOpenChange={setOpen}>
          <div className="flex flex-col gap-1">
            <ToastTitle>Notification</ToastTitle>
            <ToastDescription>This toast uses Radix Toast primitive with SQLI styling.</ToastDescription>
          </div>
          <ToastAction altText="Dismiss">Dismiss</ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </div>
    </ToastProvider>
  );
};
ToastPrimitive.storyName = 'Toast';

// ---------------------------------------------------------------------------
// Layout Primitives
// ---------------------------------------------------------------------------

export const AccordionPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">Accordion</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Collapsible content sections. Supports single or multiple open items, keyboard navigation with Arrow keys.
    </p>
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="architecture">
        <AccordionTrigger>Architecture</AccordionTrigger>
        <AccordionContent>
          Wraps <code>@radix-ui/react-accordion</code> with Header + Trigger + Content compound components.
          Animated height transitions via CSS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="accessibility">
        <AccordionTrigger>Accessibility</AccordionTrigger>
        <AccordionContent>
          Full keyboard support: Enter/Space to toggle, Arrow Up/Down to navigate between triggers, Home/End to jump.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="styling">
        <AccordionTrigger>Styling</AccordionTrigger>
        <AccordionContent>
          Chevron rotation and content height animation are handled by <code>data-[state=open]</code> CSS selectors.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
AccordionPrimitive.storyName = 'Accordion';

export const TabsPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">Tabs</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Tabbed interface with automatic or manual activation. Arrow keys navigate between tabs.
    </p>
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="api">API</TabsTrigger>
        <TabsTrigger value="source">Source</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-sm">
          Wraps <code>@radix-ui/react-tabs</code>. The active tab trigger gets a bottom
          border via <code>data-[state=active]</code>.
        </p>
      </TabsContent>
      <TabsContent value="api">
        <p className="text-sm">
          Sub-components: <code>Tabs</code> (Root), <code>TabsList</code>, <code>TabsTrigger</code>, <code>TabsContent</code>.
        </p>
      </TabsContent>
      <TabsContent value="source">
        <p className="text-sm">
          Source: <code>src/components/Tabs/Tabs.tsx</code>
        </p>
      </TabsContent>
    </Tabs>
  </div>
);
TabsPrimitive.storyName = 'Tabs';

// ---------------------------------------------------------------------------
// Form Primitives
// ---------------------------------------------------------------------------

export const SelectPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">Select</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Custom select with Portal-based dropdown, typeahead search, and full keyboard support.
    </p>
    <div className="w-full max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick a primitive..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dialog">Dialog</SelectItem>
          <SelectItem value="accordion">Accordion</SelectItem>
          <SelectItem value="tabs">Tabs</SelectItem>
          <SelectItem value="select">Select</SelectItem>
          <SelectItem value="tooltip">Tooltip</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
);
SelectPrimitive.storyName = 'Select';

export const CheckboxPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">Checkbox</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Accessible checkbox with indeterminate state support. Toggles via Space key.
    </p>
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="cb-1" defaultChecked />
        <Label htmlFor="cb-1">Checked by default</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-2" />
        <Label htmlFor="cb-2">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-3" disabled />
        <Label htmlFor="cb-3" className="opacity-50">Disabled</Label>
      </div>
    </div>
  </div>
);
CheckboxPrimitive.storyName = 'Checkbox';

export const RadioGroupPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">RadioGroup</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Radio button group with roving tabindex. Arrow keys move between options.
    </p>
    <RadioGroup defaultValue="cva">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="cva" id="rg-cva" />
        <Label htmlFor="rg-cva">CVA (class-variance-authority)</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="tailwind" id="rg-tw" />
        <Label htmlFor="rg-tw">Tailwind CSS</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="radix" id="rg-radix" />
        <Label htmlFor="rg-radix">Radix UI</Label>
      </div>
    </RadioGroup>
  </div>
);
RadioGroupPrimitive.storyName = 'RadioGroup';

export const SwitchPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">Switch</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Toggle switch with accessible on/off semantics. Space key toggles.
    </p>
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Switch id="sw-1" defaultChecked />
        <Label htmlFor="sw-1">Notifications</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw-2" />
        <Label htmlFor="sw-2">Dark mode</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw-3" disabled />
        <Label htmlFor="sw-3" className="opacity-50">Disabled</Label>
      </div>
    </div>
  </div>
);
SwitchPrimitive.storyName = 'Switch';

export const SliderPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">Slider</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Range input with track, range fill, and draggable thumb. Arrow keys for precise control.
    </p>
    <div className="w-full max-w-xs flex flex-col gap-6">
      <div>
        <Label className="mb-2 block text-sm">Volume</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div>
        <Label className="mb-2 block text-sm">Price range</Label>
        <Slider defaultValue={[25, 75]} max={100} step={5} />
      </div>
    </div>
  </div>
);
SliderPrimitive.storyName = 'Slider';

export const LabelPrimitive = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium">Label</h3>
    <p className="text-sm text-base-content/70 mb-2">
      Accessible label that associates with form controls via <code>htmlFor</code>. Clicking the label focuses its target.
    </p>
    <div className="flex flex-col gap-3 max-w-xs">
      <div className="flex items-center gap-2">
        <Checkbox id="label-demo" />
        <Label htmlFor="label-demo">Click this label to toggle the checkbox</Label>
      </div>
    </div>
  </div>
);
LabelPrimitive.storyName = 'Label';

// ---------------------------------------------------------------------------
// All Primitives - Compact Overview
// ---------------------------------------------------------------------------

export const AllPrimitives = () => {
  const primitives = [
    { name: 'Dialog', category: 'Overlay', parts: 'Root, Trigger, Portal, Overlay, Content, Title, Description, Close', path: 'src/components/Dialog' },
    { name: 'DropdownMenu', category: 'Overlay', parts: 'Root, Trigger, Content, Item, CheckboxItem, RadioItem, Label, Separator, Sub', path: 'src/components/DropdownMenu' },
    { name: 'Tooltip', category: 'Overlay', parts: 'Provider, Root, Trigger, Content', path: 'src/components/Tooltip' },
    { name: 'Toast', category: 'Overlay', parts: 'Provider, Viewport, Root, Title, Description, Action, Close', path: 'src/components/Toast' },
    { name: 'Accordion', category: 'Layout', parts: 'Root, Item, Header + Trigger, Content', path: 'src/components/Accordion' },
    { name: 'Tabs', category: 'Layout', parts: 'Root, List, Trigger, Content', path: 'src/components/Tabs' },
    { name: 'Select', category: 'Form', parts: 'Root, Trigger, Value, Icon, Portal, Content, Viewport, Item, Group, Label, Separator', path: 'src/components/Select' },
    { name: 'Checkbox', category: 'Form', parts: 'Root, Indicator', path: 'src/components/Checkbox' },
    { name: 'RadioGroup', category: 'Form', parts: 'Root, Item, Indicator', path: 'src/components/RadioGroup' },
    { name: 'Switch', category: 'Form', parts: 'Root, Thumb', path: 'src/components/Switch' },
    { name: 'Slider', category: 'Form', parts: 'Root, Track, Range, Thumb', path: 'src/components/Slider' },
    { name: 'Label', category: 'Form', parts: 'Root', path: 'src/components/Label' },
  ];

  const categories = ['Overlay', 'Layout', 'Form'];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Radix Primitives Inventory</h3>
        <p className="text-sm text-base-content/70">
          12 Radix UI primitives wrapped with SQLI theming. All components use <code>forwardRef</code>, <code>cn()</code> for class merging, and CSS variables for theme-aware styling.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h4 className="text-base font-medium mb-3 text-primary">{category}</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium">Component</th>
                  <th className="text-left py-2 pr-4 font-medium">Radix Sub-components</th>
                  <th className="text-left py-2 font-medium">Source</th>
                </tr>
              </thead>
              <tbody>
                {primitives
                  .filter((p) => p.category === category)
                  .map((p) => (
                    <tr key={p.name} className="border-b border-border/50">
                      <td className="py-2 pr-4 font-medium">{p.name}</td>
                      <td className="py-2 pr-4 text-base-content/70">{p.parts}</td>
                      <td className="py-2">
                        <code className="text-xs">{p.path}</code>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};
AllPrimitives.storyName = 'All Primitives';

// ---------------------------------------------------------------------------
// Dark Mode
// ---------------------------------------------------------------------------

export const DarkMode = () => (
  <DarkModeWrapper>
    <div className="flex flex-col gap-8">
      <h3 className="text-lg font-medium">Radix Primitives in Dark Mode</h3>

      <div className="flex flex-wrap gap-4 items-start">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Checkbox</Label>
          <div className="flex items-center gap-2">
            <Checkbox id="dark-cb" defaultChecked />
            <Label htmlFor="dark-cb">Enabled</Label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Switch</Label>
          <Switch defaultChecked />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Slider</Label>
          <Slider defaultValue={[60]} max={100} className="w-40" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
          </SelectContent>
        </Select>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Action 1</DropdownMenuItem>
            <DropdownMenuItem>Action 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>Dark mode tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Accordion type="single" collapsible className="max-w-md">
        <AccordionItem value="dark-1">
          <AccordionTrigger>Dark mode accordion</AccordionTrigger>
          <AccordionContent>Content rendered in sqli-dark theme.</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Tabs defaultValue="t1" className="max-w-md">
        <TabsList>
          <TabsTrigger value="t1">Tab 1</TabsTrigger>
          <TabsTrigger value="t2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="t1">
          <p className="text-sm">Tabs with dark theme styling.</p>
        </TabsContent>
        <TabsContent value="t2">
          <p className="text-sm">Second tab content.</p>
        </TabsContent>
      </Tabs>
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
