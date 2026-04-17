import * as react from 'react';
import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { Dialog as Dialog$1, DropdownMenu as DropdownMenu$1, Tooltip as Tooltip$1, Tabs as Tabs$1, Accordion as Accordion$1, Toast as Toast$1, Checkbox as Checkbox$1, RadioGroup as RadioGroup$1, Switch as Switch$1, Label as Label$1, Select as Select$1, Slider as Slider$1 } from 'radix-ui';

type Appearance = 'light' | 'dark' | 'inherit';
type ResolvedAppearance = 'light' | 'dark';
type Radius = 'none' | 'small' | 'medium' | 'large' | 'full';
interface ThemeContextValue {
    appearance: Appearance;
    resolvedAppearance: ResolvedAppearance;
    radius: Radius;
    setAppearance: (appearance: Appearance) => void;
    isRoot: boolean;
}
declare function useTheme(): ThemeContextValue;
declare function useThemeOptional(): ThemeContextValue | undefined;
interface ElevateThemeProps extends React.HTMLAttributes<HTMLDivElement> {
    appearance?: Appearance;
    radius?: Radius;
    hasBackground?: boolean;
}
declare const ElevateTheme: react.ForwardRefExoticComponent<ElevateThemeProps & react.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

declare const buttonVariants: (props?: ({
    variant?: "link" | "primary" | "secondary" | "accent" | "ghost" | "outline" | "error" | "success" | "warning" | "info" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    block?: boolean | null | undefined;
    circle?: boolean | null | undefined;
    square?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const badgeVariants: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "ghost" | "outline" | "error" | "success" | "warning" | "info" | "default" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

declare const alertVariants: (props?: ({
    variant?: "error" | "success" | "warning" | "info" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    icon?: React.ReactNode;
    action?: React.ReactNode;
}
declare const Alert: react.ForwardRefExoticComponent<AlertProps & react.RefAttributes<HTMLDivElement>>;

declare const cardVariants: (props?: ({
    variant?: "ghost" | "default" | "bordered" | null | undefined;
    padding?: "none" | "compact" | "normal" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    side?: boolean;
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;
declare const CardBody: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardTitle: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const CardActions: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardFigure: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLElement> & react.RefAttributes<HTMLElement>>;

declare const avatarVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: React.ReactNode;
}
declare const Avatar: react.ForwardRefExoticComponent<AvatarProps & react.RefAttributes<HTMLDivElement>>;

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
}
declare const Divider: react.ForwardRefExoticComponent<DividerProps & react.RefAttributes<HTMLDivElement>>;

declare const loadingVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    variant?: "primary" | "secondary" | "accent" | "error" | "success" | "warning" | "info" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LoadingProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof loadingVariants> {
}
declare const Loading: react.ForwardRefExoticComponent<LoadingProps & react.RefAttributes<HTMLSpanElement>>;

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;
declare const Skeleton: react.ForwardRefExoticComponent<SkeletonProps & react.RefAttributes<HTMLDivElement>>;

declare const progressVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const progressBarVariants: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "error" | "success" | "warning" | "info" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof progressVariants>, VariantProps<typeof progressBarVariants> {
    value?: number;
    max?: number;
}
declare const Progress: react.ForwardRefExoticComponent<ProgressProps & react.RefAttributes<HTMLDivElement>>;

declare const kbdVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface KbdProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {
}
declare const Kbd: react.ForwardRefExoticComponent<KbdProps & react.RefAttributes<HTMLElement>>;

declare const contentVariants: (props?: ({
    size?: "full" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Dialog: react.FC<Dialog$1.DialogProps>;
declare const DialogTrigger: react.ForwardRefExoticComponent<Dialog$1.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DialogClose: react.ForwardRefExoticComponent<Dialog$1.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: react.FC<Dialog$1.DialogPortalProps>;
declare const DialogOverlay: react.ForwardRefExoticComponent<Omit<Dialog$1.DialogOverlayProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof Dialog$1.Content>, VariantProps<typeof contentVariants> {
}
declare const DialogContent: react.ForwardRefExoticComponent<DialogContentProps & react.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const DialogFooter: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const DialogTitle: react.ForwardRefExoticComponent<Omit<Dialog$1.DialogTitleProps & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: react.ForwardRefExoticComponent<Omit<Dialog$1.DialogDescriptionProps & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;

declare const DropdownMenu: react.FC<DropdownMenu$1.DropdownMenuProps>;
declare const DropdownMenuTrigger: react.ForwardRefExoticComponent<DropdownMenu$1.DropdownMenuTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: react.ForwardRefExoticComponent<DropdownMenu$1.DropdownMenuGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSub: react.FC<DropdownMenu$1.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: react.ForwardRefExoticComponent<DropdownMenu$1.DropdownMenuRadioGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: react.ForwardRefExoticComponent<Omit<DropdownMenu$1.DropdownMenuContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: react.ForwardRefExoticComponent<Omit<DropdownMenu$1.DropdownMenuItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: react.ForwardRefExoticComponent<Omit<DropdownMenu$1.DropdownMenuCheckboxItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: react.ForwardRefExoticComponent<Omit<DropdownMenu$1.DropdownMenuRadioItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: react.ForwardRefExoticComponent<Omit<DropdownMenu$1.DropdownMenuLabelProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: react.ForwardRefExoticComponent<Omit<DropdownMenu$1.DropdownMenuSeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: react.ForwardRefExoticComponent<Omit<DropdownMenu$1.DropdownMenuSubTriggerProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: react.ForwardRefExoticComponent<Omit<DropdownMenu$1.DropdownMenuSubContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const TooltipProvider: react.FC<Tooltip$1.TooltipProviderProps>;
declare const Tooltip: react.FC<Tooltip$1.TooltipProps>;
declare const TooltipTrigger: react.ForwardRefExoticComponent<Tooltip$1.TooltipTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: react.ForwardRefExoticComponent<Omit<Tooltip$1.TooltipContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Tabs: react.ForwardRefExoticComponent<Tabs$1.TabsProps & react.RefAttributes<HTMLDivElement>>;
declare const TabsList: react.ForwardRefExoticComponent<Omit<Tabs$1.TabsListProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: react.ForwardRefExoticComponent<Omit<Tabs$1.TabsTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: react.ForwardRefExoticComponent<Omit<Tabs$1.TabsContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Accordion: react.ForwardRefExoticComponent<(Accordion$1.AccordionSingleProps | Accordion$1.AccordionMultipleProps) & react.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: react.ForwardRefExoticComponent<Omit<Accordion$1.AccordionItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: react.ForwardRefExoticComponent<Omit<Accordion$1.AccordionTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: react.ForwardRefExoticComponent<Omit<Accordion$1.AccordionContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const ToastProvider: react.FC<Toast$1.ToastProviderProps>;
declare const ToastViewport: react.ForwardRefExoticComponent<Omit<Toast$1.ToastViewportProps & react.RefAttributes<HTMLOListElement>, "ref"> & react.RefAttributes<HTMLOListElement>>;
declare const toastVariants: (props?: ({
    variant?: "error" | "success" | "warning" | "info" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ToastProps extends React.ComponentPropsWithoutRef<typeof Toast$1.Root>, VariantProps<typeof toastVariants> {
}
declare const Toast: react.ForwardRefExoticComponent<ToastProps & react.RefAttributes<HTMLLIElement>>;
declare const ToastTitle: react.ForwardRefExoticComponent<Omit<Toast$1.ToastTitleProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: react.ForwardRefExoticComponent<Omit<Toast$1.ToastDescriptionProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ToastAction: react.ForwardRefExoticComponent<Omit<Toast$1.ToastActionProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: react.ForwardRefExoticComponent<Omit<Toast$1.ToastCloseProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;

declare const inputVariants: (props?: ({
    variant?: "ghost" | "error" | "default" | null | undefined;
    inputSize?: "xs" | "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

declare const textareaVariants: (props?: ({
    variant?: "ghost" | "error" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

type CheckboxProps = React.ComponentPropsWithoutRef<typeof Checkbox$1.Root>;
declare const Checkbox: react.ForwardRefExoticComponent<Omit<Checkbox$1.CheckboxProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;

declare const RadioGroup: react.ForwardRefExoticComponent<Omit<RadioGroup$1.RadioGroupProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: react.ForwardRefExoticComponent<Omit<RadioGroup$1.RadioGroupItemProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;

type SwitchProps = React.ComponentPropsWithoutRef<typeof Switch$1.Root>;
declare const Switch: react.ForwardRefExoticComponent<Omit<Switch$1.SwitchProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;

declare const Label: react.ForwardRefExoticComponent<Omit<Label$1.LabelProps & react.RefAttributes<HTMLLabelElement>, "ref"> & react.RefAttributes<HTMLLabelElement>>;

declare const Select: react.FC<Select$1.SelectProps>;
declare const SelectGroup: react.ForwardRefExoticComponent<Select$1.SelectGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const SelectValue: react.ForwardRefExoticComponent<Select$1.SelectValueProps & react.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: react.ForwardRefExoticComponent<Omit<Select$1.SelectTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: react.ForwardRefExoticComponent<Omit<Select$1.SelectContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const SelectItem: react.ForwardRefExoticComponent<Omit<Select$1.SelectItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: react.ForwardRefExoticComponent<Omit<Select$1.SelectLabelProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: react.ForwardRefExoticComponent<Omit<Select$1.SelectSeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Slider: react.ForwardRefExoticComponent<Omit<Slider$1.SliderProps & react.RefAttributes<HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, Button, type ButtonProps, Card, CardActions, CardBody, CardFigure, type CardProps, CardTitle, Checkbox, type CheckboxProps, Dialog, DialogClose, DialogContent, type DialogContentProps, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Divider, type DividerProps, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, ElevateTheme, type ElevateThemeProps, Input, type InputProps, Kbd, type KbdProps, Label, Loading, type LoadingProps, Progress, type ProgressProps, RadioGroup, RadioGroupItem, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Skeleton, type SkeletonProps, Slider, Switch, type SwitchProps, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, Toast, ToastAction, ToastClose, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, alertVariants, avatarVariants, badgeVariants, buttonVariants, cardVariants, cn, contentVariants as dialogContentVariants, inputVariants, kbdVariants, loadingVariants, progressBarVariants, progressVariants, textareaVariants, toastVariants, useTheme, useThemeOptional };
