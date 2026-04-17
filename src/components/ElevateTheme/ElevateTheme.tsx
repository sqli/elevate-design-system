import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { cn } from '../../lib/utils';

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

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within an ElevateTheme provider');
  }
  return context;
}

export function useThemeOptional(): ThemeContextValue | undefined {
  return useContext(ThemeContext);
}

const THEME_MAP: Record<ResolvedAppearance, string> = {
  light: 'sqli-light',
  dark: 'sqli-dark',
};

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

export interface ElevateThemeProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: Appearance;
  radius?: Radius;
  hasBackground?: boolean;
}

export const ElevateTheme = forwardRef<HTMLDivElement, ElevateThemeProps>(
  (
    { appearance = 'inherit', radius = 'medium', hasBackground = true, className, children, ...props },
    ref
  ) => {
    const parentContext = useContext(ThemeContext);
    const isRoot = !parentContext;
    const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

    const [controlledAppearance, setAppearance] = useState<Appearance>(appearance);

    useEffect(() => {
      setAppearance(appearance);
    }, [appearance]);

    const resolvedAppearance: ResolvedAppearance = useMemo(() => {
      if (controlledAppearance !== 'inherit') return controlledAppearance;
      if (parentContext) return parentContext.resolvedAppearance;
      return prefersDark ? 'dark' : 'light';
    }, [controlledAppearance, parentContext, prefersDark]);

    const contextValue = useMemo<ThemeContextValue>(
      () => ({
        appearance: controlledAppearance,
        resolvedAppearance,
        radius,
        setAppearance,
        isRoot,
      }),
      [controlledAppearance, resolvedAppearance, radius, isRoot]
    );

    return (
      <ThemeContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-theme={THEME_MAP[resolvedAppearance]}
          data-radius={radius}
          className={cn(
            hasBackground && 'bg-base-100',
            'text-base-content',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }
);
ElevateTheme.displayName = 'ElevateTheme';
