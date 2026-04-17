'use strict';

var react = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var classVarianceAuthority = require('class-variance-authority');
var radixUi = require('radix-ui');

// src/components/ElevateTheme/ElevateTheme.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var ThemeContext = react.createContext(void 0);
function useTheme() {
  const context = react.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within an ElevateTheme provider");
  }
  return context;
}
function useThemeOptional() {
  return react.useContext(ThemeContext);
}
var THEME_MAP = {
  light: "sqli-light",
  dark: "sqli-dark"
};
function useMediaQuery(query) {
  const [matches, setMatches] = react.useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });
  react.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}
var ElevateTheme = react.forwardRef(
  ({ appearance = "inherit", radius = "medium", hasBackground = true, className, children, ...props }, ref) => {
    const parentContext = react.useContext(ThemeContext);
    const isRoot = !parentContext;
    const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
    const [controlledAppearance, setAppearance] = react.useState(appearance);
    react.useEffect(() => {
      setAppearance(appearance);
    }, [appearance]);
    const resolvedAppearance = react.useMemo(() => {
      if (controlledAppearance !== "inherit") return controlledAppearance;
      if (parentContext) return parentContext.resolvedAppearance;
      return prefersDark ? "dark" : "light";
    }, [controlledAppearance, parentContext, prefersDark]);
    const contextValue = react.useMemo(
      () => ({
        appearance: controlledAppearance,
        resolvedAppearance,
        radius,
        setAppearance,
        isRoot
      }),
      [controlledAppearance, resolvedAppearance, radius, isRoot]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(ThemeContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        "data-theme": THEME_MAP[resolvedAppearance],
        "data-radius": radius,
        className: cn(
          hasBackground && "bg-base-100",
          "text-base-content",
          className
        ),
        ...props,
        children
      }
    ) });
  }
);
ElevateTheme.displayName = "ElevateTheme";
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-content hover:bg-primary-hover",
        secondary: "bg-secondary text-secondary-content hover:opacity-90",
        accent: "bg-accent text-accent-content hover:opacity-90",
        ghost: "hover:bg-base-200 text-base-content",
        outline: "border border-border bg-transparent text-base-content hover:bg-base-200",
        link: "text-primary underline-offset-4 hover:underline bg-transparent",
        error: "bg-error text-error-content hover:opacity-90",
        success: "bg-success text-success-content hover:opacity-90",
        warning: "bg-warning text-warning-content hover:opacity-90",
        info: "bg-info text-info-content hover:opacity-90"
      },
      size: {
        xs: "h-6 px-2 text-xs gap-1 rounded-sm",
        sm: "h-8 px-3 text-sm gap-1.5 rounded-sm",
        md: "h-10 px-4 text-sm gap-2 rounded-md",
        lg: "h-12 px-6 text-base gap-2 rounded-md"
      },
      block: {
        true: "w-full"
      },
      circle: {
        true: "rounded-full"
      },
      square: {
        true: "aspect-square p-0"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = react.forwardRef(
  ({ className, variant, size, block, circle, square, loading, children, disabled, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      ref,
      className: cn(buttonVariants({ variant, size, block, circle, square }), className),
      disabled: disabled || loading,
      ...props,
      children: [
        loading && /* @__PURE__ */ jsxRuntime.jsxs("svg", { className: "animate-spin h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
        ] }),
        children
      ]
    }
  )
);
Button.displayName = "Button";
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-base-200 text-base-content",
        primary: "bg-primary text-primary-content",
        secondary: "bg-secondary text-secondary-content",
        accent: "bg-accent text-accent-content",
        info: "bg-info text-info-content",
        success: "bg-success text-success-content",
        warning: "bg-warning text-warning-content",
        error: "bg-error text-error-content",
        outline: "border border-current bg-transparent",
        ghost: "bg-transparent text-base-content"
      },
      size: {
        xs: "text-xs px-1.5 py-0.5 rounded-sm",
        sm: "text-xs px-2 py-0.5 rounded-sm",
        md: "text-sm px-2.5 py-0.5 rounded-md",
        lg: "text-sm px-3 py-1 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Badge = react.forwardRef(
  ({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      ref,
      className: cn(badgeVariants({ variant, size }), className),
      ...props
    }
  )
);
Badge.displayName = "Badge";
var alertVariants = classVarianceAuthority.cva(
  "flex items-start gap-3 p-4 rounded-md text-sm",
  {
    variants: {
      variant: {
        default: "bg-base-200 text-base-content",
        info: "bg-info/10 text-info border border-info/20",
        success: "bg-success/10 text-success border border-success/20",
        warning: "bg-warning/10 text-warning border border-warning/20",
        error: "bg-error/10 text-error border border-error/20"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = react.forwardRef(
  ({ className, variant, icon, action, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0 mt-0.5", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1", children }),
        action && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: action })
      ]
    }
  )
);
Alert.displayName = "Alert";
var cardVariants = classVarianceAuthority.cva(
  "rounded-lg bg-panel-solid text-base-content overflow-hidden",
  {
    variants: {
      variant: {
        default: "shadow-3",
        bordered: "border border-border",
        ghost: ""
      },
      padding: {
        none: "",
        compact: "",
        normal: ""
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "normal"
    }
  }
);
var Card = react.forwardRef(
  ({ className, variant, padding, side, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(
        cardVariants({ variant, padding }),
        side && "flex flex-row",
        className
      ),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardBody = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 flex flex-col gap-2", className), ...props })
);
CardBody.displayName = "CardBody";
var CardTitle = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("h2", { ref, className: cn("text-xl font-medium", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardActions = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("flex items-center gap-2 pt-2", className), ...props })
);
CardActions.displayName = "CardActions";
var CardFigure = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("figure", { ref, className: cn("overflow-hidden", className), ...props })
);
CardFigure.displayName = "CardFigure";
var avatarVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center overflow-hidden bg-base-200 text-base-content font-medium select-none",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-12 h-12 text-base",
        lg: "w-16 h-16 text-lg",
        xl: "w-24 h-24 text-2xl"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md"
      }
    },
    defaultVariants: {
      size: "md",
      shape: "circle"
    }
  }
);
var Avatar = react.forwardRef(
  ({ className, size, shape, src, alt, fallback, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(avatarVariants({ size, shape }), className),
      ...props,
      children: src ? /* @__PURE__ */ jsxRuntime.jsx("img", { src, alt: alt || "", className: "w-full h-full object-cover" }) : fallback || /* @__PURE__ */ jsxRuntime.jsx("span", { children: alt?.charAt(0)?.toUpperCase() })
    }
  )
);
Avatar.displayName = "Avatar";
var Divider = react.forwardRef(
  ({ className, orientation = "horizontal", children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      role: "separator",
      className: cn(
        "flex items-center gap-4 text-sm text-base-content/50",
        orientation === "horizontal" ? "flex-row before:flex-1 before:h-px before:bg-border after:flex-1 after:h-px after:bg-border" : "flex-col h-full before:flex-1 before:w-px before:bg-border after:flex-1 after:w-px after:bg-border",
        !children && orientation === "horizontal" && "before:flex-1 after:hidden h-px bg-border",
        !children && orientation === "vertical" && "before:flex-1 after:hidden w-px bg-border",
        className
      ),
      ...props,
      children
    }
  )
);
Divider.displayName = "Divider";
var loadingVariants = classVarianceAuthority.cva(
  "inline-block animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        xs: "w-4 h-4",
        sm: "w-5 h-5",
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16"
      },
      variant: {
        default: "text-base-content",
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        info: "text-info",
        success: "text-success",
        warning: "text-warning",
        error: "text-error"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
var Loading = react.forwardRef(
  ({ className, size, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      ref,
      role: "status",
      className: cn(loadingVariants({ size, variant }), className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Loading..." })
    }
  )
);
Loading.displayName = "Loading";
var Skeleton = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(
        "animate-pulse rounded-md bg-base-300",
        className
      ),
      ...props
    }
  )
);
Skeleton.displayName = "Skeleton";
var progressVariants = classVarianceAuthority.cva(
  "w-full overflow-hidden rounded-full bg-base-200",
  {
    variants: {
      size: {
        xs: "h-1",
        sm: "h-2",
        md: "h-3",
        lg: "h-4"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var progressBarVariants = classVarianceAuthority.cva(
  "h-full rounded-full transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-base-content",
        primary: "bg-primary",
        secondary: "bg-secondary",
        accent: "bg-accent",
        info: "bg-info",
        success: "bg-success",
        warning: "bg-warning",
        error: "bg-error"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);
var Progress = react.forwardRef(
  ({ className, size, variant, value = 0, max = 100, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, value / max * 100));
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        role: "progressbar",
        "aria-valuenow": value,
        "aria-valuemin": 0,
        "aria-valuemax": max,
        className: cn(progressVariants({ size }), className),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: progressBarVariants({ variant }),
            style: { width: `${percentage}%` }
          }
        )
      }
    );
  }
);
Progress.displayName = "Progress";
var kbdVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-sm border border-border bg-base-200 font-mono text-base-content",
  {
    variants: {
      size: {
        xs: "px-1 text-xs min-w-5 h-5",
        sm: "px-1.5 text-xs min-w-6 h-6",
        md: "px-2 text-sm min-w-7 h-7",
        lg: "px-2.5 text-base min-w-8 h-8"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Kbd = react.forwardRef(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "kbd",
    {
      ref,
      className: cn(kbdVariants({ size }), className),
      ...props
    }
  )
);
Kbd.displayName = "Kbd";
var overlayClass = "fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0";
var contentVariants = classVarianceAuthority.cva(
  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-panel-solid text-base-content p-6 shadow-6 rounded-lg data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  {
    variants: {
      size: {
        sm: "w-full max-w-sm",
        md: "w-full max-w-lg",
        lg: "w-full max-w-2xl",
        xl: "w-full max-w-4xl",
        full: "w-[calc(100%-2rem)] h-[calc(100%-2rem)] max-w-none"
      }
    },
    defaultVariants: { size: "md" }
  }
);
var Dialog = radixUi.Dialog.Root;
var DialogTrigger = radixUi.Dialog.Trigger;
var DialogClose = radixUi.Dialog.Close;
var DialogPortal = radixUi.Dialog.Portal;
var DialogOverlay = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Overlay, { ref, className: cn(overlayClass, className), ...props }));
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = react.forwardRef(
  ({ className, children, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsx(
      radixUi.Dialog.Content,
      {
        ref,
        className: cn(contentVariants({ size }), className),
        ...props,
        children
      }
    )
  ] })
);
DialogContent.displayName = "DialogContent";
var DialogHeader = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("flex flex-col gap-1.5 mb-4", className), ...props })
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("flex justify-end gap-2 mt-6", className), ...props })
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Title, { ref, className: cn("text-lg font-medium", className), ...props }));
DialogTitle.displayName = "DialogTitle";
var DialogDescription = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Dialog.Description,
  {
    ref,
    className: cn("text-sm text-base-content/70", className),
    ...props
  }
));
DialogDescription.displayName = "DialogDescription";
var DropdownMenu = radixUi.DropdownMenu.Root;
var DropdownMenuTrigger = radixUi.DropdownMenu.Trigger;
var DropdownMenuGroup = radixUi.DropdownMenu.Group;
var DropdownMenuSub = radixUi.DropdownMenu.Sub;
var DropdownMenuRadioGroup = radixUi.DropdownMenu.RadioGroup;
var contentClass = "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-panel-solid p-1 text-base-content shadow-4 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
var DropdownMenuContent = react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.DropdownMenu.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.DropdownMenu.Content,
  {
    ref,
    sideOffset,
    className: cn(contentClass, className),
    ...props
  }
) }));
DropdownMenuContent.displayName = "DropdownMenuContent";
var itemClass = "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-base-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50";
var DropdownMenuItem = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.DropdownMenu.Item, { ref, className: cn(itemClass, className), ...props }));
DropdownMenuItem.displayName = "DropdownMenuItem";
var DropdownMenuCheckboxItem = react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(radixUi.DropdownMenu.CheckboxItem, { ref, className: cn(itemClass, "pl-8", className), checked, ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(radixUi.DropdownMenu.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }) }),
  children
] }));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
var DropdownMenuRadioItem = react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(radixUi.DropdownMenu.RadioItem, { ref, className: cn(itemClass, "pl-8", className), ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(radixUi.DropdownMenu.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx("svg", { className: "h-2 w-2 fill-current", viewBox: "0 0 8 8", children: /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "4", cy: "4", r: "4" }) }) }) }),
  children
] }));
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
var DropdownMenuLabel = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.DropdownMenu.Label, { ref, className: cn("px-2 py-1.5 text-xs font-medium text-base-content/70", className), ...props }));
DropdownMenuLabel.displayName = "DropdownMenuLabel";
var DropdownMenuSeparator = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.DropdownMenu.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-border", className), ...props }));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
var DropdownMenuSubTrigger = react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(radixUi.DropdownMenu.SubTrigger, { ref, className: cn(itemClass, "data-[state=open]:bg-base-200", className), ...props, children: [
  children,
  /* @__PURE__ */ jsxRuntime.jsx("svg", { className: "ml-auto h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" }) })
] }));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
var DropdownMenuSubContent = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.DropdownMenu.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(radixUi.DropdownMenu.SubContent, { ref, className: cn(contentClass, className), ...props }) }));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
var TooltipProvider = radixUi.Tooltip.Provider;
var Tooltip = radixUi.Tooltip.Root;
var TooltipTrigger = radixUi.Tooltip.Trigger;
var TooltipContent = react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.Tooltip.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Tooltip.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-sm bg-neutral px-3 py-1.5 text-xs text-neutral-content shadow-3 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = "TooltipContent";
var Tabs = radixUi.Tabs.Root;
var TabsList = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Tabs.List,
  {
    ref,
    className: cn(
      "inline-flex items-center gap-1 border-b border-border",
      className
    ),
    ...props
  }
));
TabsList.displayName = "TabsList";
var TabsTrigger = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Tabs.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-base-content/70 transition-colors hover:text-base-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:pointer-events-none disabled:opacity-50 border-b-2 border-transparent -mb-px data-[state=active]:border-primary data-[state=active]:text-primary",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Tabs.Content,
  {
    ref,
    className: cn(
      "mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
      className
    ),
    ...props
  }
));
TabsContent.displayName = "TabsContent";
var Accordion = radixUi.Accordion.Root;
var AccordionItem = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Accordion.Item,
  {
    ref,
    className: cn("border-b border-border", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.Accordion.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
  radixUi.Accordion.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:text-primary [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(
        "svg",
        {
          className: "h-4 w-4 shrink-0 transition-transform duration-200",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Accordion.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = "AccordionContent";
var ToastProvider = radixUi.Toast.Provider;
var ToastViewport = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Toast.Viewport,
  {
    ref,
    className: cn(
      "fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = "ToastViewport";
var toastVariants = classVarianceAuthority.cva(
  "group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-md border p-4 shadow-4 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full",
  {
    variants: {
      variant: {
        default: "border-border bg-panel-solid text-base-content",
        info: "border-info/30 bg-info/10 text-info",
        success: "border-success/30 bg-success/10 text-success",
        warning: "border-warning/30 bg-warning/10 text-warning",
        error: "border-error/30 bg-error/10 text-error"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var Toast = react.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Toast.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  )
);
Toast.displayName = "Toast";
var ToastTitle = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.Toast.Title, { ref, className: cn("text-sm font-medium", className), ...props }));
ToastTitle.displayName = "ToastTitle";
var ToastDescription = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.Toast.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = "ToastDescription";
var ToastAction = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Toast.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 items-center justify-center rounded-sm border border-current/20 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-focus disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = "ToastAction";
var ToastClose = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Toast.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-sm p-1 opacity-0 transition-opacity hover:opacity-100 focus:opacity-100 group-hover:opacity-100",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
  }
));
ToastClose.displayName = "ToastClose";
var inputVariants = classVarianceAuthority.cva(
  "flex w-full rounded-md border bg-transparent text-base-content transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base-content/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-border",
        ghost: "border-transparent hover:bg-base-200",
        error: "border-error focus-visible:ring-error"
      },
      inputSize: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md"
    }
  }
);
var Input = react.forwardRef(
  ({ className, variant, inputSize, type, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      ref,
      type,
      className: cn(inputVariants({ variant, inputSize }), className),
      ...props
    }
  )
);
Input.displayName = "Input";
var textareaVariants = classVarianceAuthority.cva(
  "flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm text-base-content transition-colors placeholder:text-base-content/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-border",
        ghost: "border-transparent hover:bg-base-200",
        error: "border-error focus-visible:ring-error"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Textarea = react.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    {
      ref,
      className: cn(textareaVariants({ variant }), className),
      ...props
    }
  )
);
Textarea.displayName = "Textarea";
var Checkbox = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Checkbox.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-content",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(radixUi.Checkbox.Indicator, { className: "flex items-center justify-center text-current", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3, children: /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) })
  }
));
Checkbox.displayName = "Checkbox";
var RadioGroup = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.RadioGroup.Root, { ref, className: cn("grid gap-2", className), ...props }));
RadioGroup.displayName = "RadioGroup";
var RadioGroupItem = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.RadioGroup.Item,
  {
    ref,
    className: cn(
      "aspect-square h-4 w-4 rounded-full border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(radixUi.RadioGroup.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { className: "h-2.5 w-2.5 fill-primary", viewBox: "0 0 8 8", children: /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "4", cy: "4", r: "4" }) }) })
  }
));
RadioGroupItem.displayName = "RadioGroupItem";
var Switch = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Switch.Root,
    {
      ref,
      className: cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-base-300",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.Switch.Thumb,
        {
          className: cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-2 ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  )
);
Switch.displayName = "Switch";
var Label = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Label.Root,
  {
    ref,
    className: cn(
      "text-sm font-medium text-base-content peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    ),
    ...props
  }
));
Label.displayName = "Label";
var Select = radixUi.Select.Root;
var SelectGroup = radixUi.Select.Group;
var SelectValue = radixUi.Select.Value;
var SelectTrigger = react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  radixUi.Select.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-border bg-transparent px-3 py-2 text-sm text-base-content placeholder:text-base-content/50 focus:outline-none focus:ring-2 focus:ring-focus disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("svg", { className: "h-4 w-4 opacity-50", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) }) })
    ]
  }
));
SelectTrigger.displayName = "SelectTrigger";
var SelectContent = react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  radixUi.Select.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-border bg-panel-solid text-base-content shadow-4 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      radixUi.Select.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      }
    )
  }
) }));
SelectContent.displayName = "SelectContent";
var SelectItem = react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  radixUi.Select.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-base-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.ItemText, { children })
    ]
  }
));
SelectItem.displayName = "SelectItem";
var SelectLabel = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Label, { ref, className: cn("py-1.5 pl-8 pr-2 text-xs font-medium text-base-content/70", className), ...props }));
SelectLabel.displayName = "SelectLabel";
var SelectSeparator = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-border", className), ...props }));
SelectSeparator.displayName = "SelectSeparator";
var Slider = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  radixUi.Slider.Root,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(radixUi.Slider.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-base-200", children: /* @__PURE__ */ jsxRuntime.jsx(radixUi.Slider.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(radixUi.Slider.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-white shadow-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = "Slider";

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardActions = CardActions;
exports.CardBody = CardBody;
exports.CardFigure = CardFigure;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.Divider = Divider;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.ElevateTheme = ElevateTheme;
exports.Input = Input;
exports.Kbd = Kbd;
exports.Label = Label;
exports.Loading = Loading;
exports.Progress = Progress;
exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Switch = Switch;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Textarea = Textarea;
exports.Toast = Toast;
exports.ToastAction = ToastAction;
exports.ToastClose = ToastClose;
exports.ToastDescription = ToastDescription;
exports.ToastProvider = ToastProvider;
exports.ToastTitle = ToastTitle;
exports.ToastViewport = ToastViewport;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.alertVariants = alertVariants;
exports.avatarVariants = avatarVariants;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cardVariants = cardVariants;
exports.cn = cn;
exports.dialogContentVariants = contentVariants;
exports.inputVariants = inputVariants;
exports.kbdVariants = kbdVariants;
exports.loadingVariants = loadingVariants;
exports.progressBarVariants = progressBarVariants;
exports.progressVariants = progressVariants;
exports.textareaVariants = textareaVariants;
exports.toastVariants = toastVariants;
exports.useTheme = useTheme;
exports.useThemeOptional = useThemeOptional;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map