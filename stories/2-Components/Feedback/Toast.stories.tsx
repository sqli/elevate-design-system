import React, { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from '../../../src/components/Toast';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Feedback/Toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Toast** component built on Radix UI primitives with SQLI themes.

## Usage
\`\`\`tsx
import {
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';
  ToastProvider, ToastViewport, Toast,
  ToastTitle, ToastDescription, ToastAction, ToastClose,
} from '@sqli/elevate-design-system/react';

<ToastProvider>
  <Toast variant="info">
    <ToastTitle>Notification</ToastTitle>
    <ToastDescription>New message arrived.</ToastDescription>
    <ToastClose />
  </Toast>
  <ToastViewport />
</ToastProvider>
\`\`\`

## Variants
- \`default\` - Neutral toast
- \`info\` - Information (blue)
- \`success\` - Success (green)
- \`warning\` - Warning (yellow)
- \`error\` - Error (red)

## Features
- Swipe to dismiss
- Auto-close with configurable duration
- Accessible with ARIA roles
        `,
      },
    },
  },
};

export default meta;

const ToastDemo = ({
  variant,
  title,
  description,
}: {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error';
  title: string;
  description: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        variant="outline"
        onClick={() => {
          setOpen(false);
          setTimeout(() => setOpen(true), 100);
        }}
      >
        Show {variant || 'default'} toast
      </Button>
      <Toast variant={variant} open={open} onOpenChange={setOpen} duration={5000}>
        <div className="grid gap-1">
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export const Default = () => (
  <ToastDemo title="Notification" description="New message arrived." />
);

export const InfoToast = () => (
  <ToastDemo variant="info" title="Info" description="New software update available." />
);
InfoToast.storyName = 'Info';

export const SuccessToast = () => (
  <ToastDemo variant="success" title="Success" description="Message sent successfully." />
);
SuccessToast.storyName = 'Success';

export const WarningToast = () => (
  <ToastDemo variant="warning" title="Warning" description="Check your settings." />
);
WarningToast.storyName = 'Warning';

export const ErrorToast = () => (
  <ToastDemo variant="error" title="Error" description="Something went wrong." />
);
ErrorToast.storyName = 'Error';

export const Variants = () => {
  const [openDefault, setOpenDefault] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openError, setOpenError] = useState(false);

  const triggerAll = () => {
    setOpenDefault(false);
    setOpenInfo(false);
    setOpenSuccess(false);
    setOpenWarning(false);
    setOpenError(false);
    setTimeout(() => {
      setOpenDefault(true);
      setOpenInfo(true);
      setOpenSuccess(true);
      setOpenWarning(true);
      setOpenError(true);
    }, 100);
  };

  return (
    <ToastProvider swipeDirection="right">
      <Button variant="primary" onClick={triggerAll}>
        Show All Variants
      </Button>
      <Toast open={openDefault} onOpenChange={setOpenDefault} duration={8000}>
        <div className="grid gap-1">
          <ToastTitle>Default</ToastTitle>
          <ToastDescription>Default toast notification.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="info" open={openInfo} onOpenChange={setOpenInfo} duration={8000}>
        <div className="grid gap-1">
          <ToastTitle>Info</ToastTitle>
          <ToastDescription>New mail arrived.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="success" open={openSuccess} onOpenChange={setOpenSuccess} duration={8000}>
        <div className="grid gap-1">
          <ToastTitle>Success</ToastTitle>
          <ToastDescription>Message sent successfully.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="warning" open={openWarning} onOpenChange={setOpenWarning} duration={8000}>
        <div className="grid gap-1">
          <ToastTitle>Warning</ToastTitle>
          <ToastDescription>Warning: Check your settings.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="error" open={openError} onOpenChange={setOpenError} duration={8000}>
        <div className="grid gap-1">
          <ToastTitle>Error</ToastTitle>
          <ToastDescription>Error: Something went wrong.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};
Variants.storyName = 'All Variants';

export const WithAction = () => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        variant="outline"
        onClick={() => {
          setOpen(false);
          setTimeout(() => setOpen(true), 100);
        }}
      >
        Show toast with action
      </Button>
      <Toast open={open} onOpenChange={setOpen} duration={10000}>
        <div className="grid gap-1">
          <ToastTitle>New message arrived.</ToastTitle>
          <ToastDescription>You have 1 unread message.</ToastDescription>
        </div>
        <ToastAction altText="View message">View</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};
WithAction.storyName = 'With Action';

export const TopCenter = () => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="down">
      <Button
        variant="outline"
        onClick={() => {
          setOpen(false);
          setTimeout(() => setOpen(true), 100);
        }}
      >
        Show top center toast
      </Button>
      <Toast variant="info" open={open} onOpenChange={setOpen} duration={5000}>
        <div className="grid gap-1">
          <ToastTitle>Info</ToastTitle>
          <ToastDescription>Top center toast notification.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport className="fixed top-0 left-1/2 -translate-x-1/2 flex flex-col gap-2 p-4 sm:max-w-[420px] z-[100]" />
    </ToastProvider>
  );
};
TopCenter.storyName = 'Top Center';

export const DarkMode = () => {
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  return (
    <DarkModeWrapper>
      <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
      <ToastProvider swipeDirection="right">
        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={() => {
              setOpen(false);
              setOpenSuccess(false);
              setTimeout(() => {
                setOpen(true);
                setOpenSuccess(true);
              }, 100);
            }}
          >
            Show dark mode toasts
          </Button>
        </div>
        <Toast variant="info" open={open} onOpenChange={setOpen} duration={8000}>
          <div className="grid gap-1">
            <ToastTitle>Info</ToastTitle>
            <ToastDescription>Info toast in dark mode.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <Toast variant="success" open={openSuccess} onOpenChange={setOpenSuccess} duration={8000}>
          <div className="grid gap-1">
            <ToastTitle>Success</ToastTitle>
            <ToastDescription>Success toast in dark mode.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </DarkModeWrapper>
  );
};
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;
