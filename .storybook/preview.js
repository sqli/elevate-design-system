import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
import mermaid from 'mermaid';
import '../src/css/main.css';
import './preview.css';

// =============================================================================
// SQLI Design Tokens
// =============================================================================

/**
 * SQLI Brand Colors
 * Single source of truth for all color values used in Storybook configuration.
 * These match the tokens defined in src/css/tokens/_colors.css
 */
const SQLI_COLORS = {
  // Primary brand colors
  cream: '#FFFAF0',
  midnight: '#0F0E2B',
  sky: '#6DA5FF',
  cobalt: '#1F24E9',

  // Utility colors
  white: '#FFFFFF',

  // Semantic colors (for code highlighting, charts, etc.)
  red: '#E06C75',
  green: '#98C379',
  orange: '#D19A66',
  purple: '#C678DD',
};

/**
 * Color utilities for generating opacity variants
 */
const colorUtils = {
  /**
   * Creates an rgba color string from a hex color and opacity
   */
  rgba: (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  },

  /**
   * Pre-computed opacity variants for common use cases
   */
  cobaltAlpha: (opacity) => colorUtils.rgba(SQLI_COLORS.cobalt, opacity),
  skyAlpha: (opacity) => colorUtils.rgba(SQLI_COLORS.sky, opacity),
};

/**
 * SQLI Typography
 */
const SQLI_TYPOGRAPHY = {
  fontFamily: 'TWK Everett, ui-sans-serif, system-ui, sans-serif',
  fontSize: {
    base: '14px',
    sm: '12px',
    lg: '14px',
  },
};

/**
 * SQLI Spacing & Layout
 */
const SQLI_SPACING = {
  padding: {
    md: 20, // Used by Mermaid flowchart config
  },
  margin: {
    actor: 80,
    box: 10,
    boxText: 8,
    note: 15,
    message: 40,
  },
  gantt: {
    barHeight: 30,
    barGap: 6,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
  },
};

/**
 * SQLI Responsive Breakpoints
 * Matches the design system media queries defined in src/css/tokens/_breakpoints.css
 */
const SQLI_BREAKPOINTS = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 800 },
  desktopLarge: { width: 1920, height: 1080 },
};

// =============================================================================
// Mermaid Theme Configuration
// =============================================================================

/**
 * Base Mermaid configuration shared between light and dark themes
 */
const mermaidBaseConfig = {
  startOnLoad: false,
  theme: 'base',
  flowchart: {
    curve: 'basis',
    padding: SQLI_SPACING.padding.md,
    htmlLabels: true,
    useMaxWidth: true,
  },
  sequence: {
    actorMargin: SQLI_SPACING.margin.actor,
    boxMargin: SQLI_SPACING.margin.box,
    boxTextMargin: SQLI_SPACING.margin.boxText,
    noteMargin: SQLI_SPACING.margin.note,
    messageMargin: SQLI_SPACING.margin.message,
    mirrorActors: true,
    useMaxWidth: true,
  },
  gantt: {
    useMaxWidth: true,
    barHeight: SQLI_SPACING.gantt.barHeight,
    barGap: SQLI_SPACING.gantt.barGap,
    topPadding: SQLI_SPACING.gantt.topPadding,
    leftPadding: SQLI_SPACING.gantt.leftPadding,
    gridLineStartPadding: SQLI_SPACING.gantt.gridLineStartPadding,
    fontSize: SQLI_TYPOGRAPHY.fontSize.sm,
    sectionFontSize: SQLI_TYPOGRAPHY.fontSize.lg,
    numberSectionStyles: 4,
  },
  pie: {
    useMaxWidth: true,
    textPosition: 0.75,
  },
};

/**
 * Light theme variables for Mermaid
 * Uses Cream background with Cobalt accents
 */
const mermaidLightTheme = {
  // Base colors
  background: SQLI_COLORS.cream,
  mainBkg: SQLI_COLORS.cream,
  textColor: SQLI_COLORS.cobalt,
  lineColor: SQLI_COLORS.cobalt,

  // Primary - White fill with Cobalt border
  primaryColor: SQLI_COLORS.white,
  primaryTextColor: SQLI_COLORS.cobalt,
  primaryBorderColor: SQLI_COLORS.cobalt,

  // Secondary
  secondaryColor: SQLI_COLORS.white,
  secondaryTextColor: SQLI_COLORS.cobalt,
  secondaryBorderColor: SQLI_COLORS.cobalt,

  // Tertiary
  tertiaryColor: SQLI_COLORS.white,
  tertiaryTextColor: SQLI_COLORS.cobalt,
  tertiaryBorderColor: SQLI_COLORS.cobalt,

  // Flowchart
  nodeBkg: SQLI_COLORS.white,
  nodeBorder: SQLI_COLORS.cobalt,
  nodeTextColor: SQLI_COLORS.cobalt,
  clusterBkg: colorUtils.cobaltAlpha(0.05),
  clusterBorder: SQLI_COLORS.cobalt,
  defaultLinkColor: SQLI_COLORS.cobalt,
  edgeLabelBackground: SQLI_COLORS.cream,

  // Sequence diagram
  actorBkg: SQLI_COLORS.white,
  actorBorder: SQLI_COLORS.cobalt,
  actorTextColor: SQLI_COLORS.cobalt,
  actorLineColor: SQLI_COLORS.cobalt,
  signalColor: SQLI_COLORS.cobalt,
  signalTextColor: SQLI_COLORS.cobalt,
  labelBoxBkgColor: SQLI_COLORS.white,
  labelBoxBorderColor: SQLI_COLORS.cobalt,
  labelTextColor: SQLI_COLORS.cobalt,
  loopTextColor: SQLI_COLORS.cobalt,
  noteBkgColor: colorUtils.cobaltAlpha(0.08),
  noteBorderColor: SQLI_COLORS.cobalt,
  noteTextColor: SQLI_COLORS.cobalt,
  activationBkgColor: colorUtils.cobaltAlpha(0.1),
  activationBorderColor: SQLI_COLORS.cobalt,
  sequenceNumberColor: SQLI_COLORS.white,

  // State diagram
  labelColor: SQLI_COLORS.cobalt,
  altBackground: colorUtils.cobaltAlpha(0.05),

  // Class diagram
  classText: SQLI_COLORS.cobalt,

  // ER diagram
  entityBkg: SQLI_COLORS.white,
  entityBorder: SQLI_COLORS.cobalt,
  attributeBackgroundColorOdd: colorUtils.cobaltAlpha(0.05),
  attributeBackgroundColorEven: SQLI_COLORS.white,

  // Gantt
  taskBkgColor: SQLI_COLORS.cobalt,
  taskTextColor: SQLI_COLORS.white,
  taskTextDarkColor: SQLI_COLORS.cobalt,
  taskTextLightColor: SQLI_COLORS.white,
  taskBorderColor: SQLI_COLORS.cobalt,
  taskTextOutsideColor: SQLI_COLORS.cobalt,
  activeTaskBkgColor: SQLI_COLORS.sky,
  activeTaskBorderColor: SQLI_COLORS.cobalt,
  doneTaskBkgColor: colorUtils.cobaltAlpha(0.3),
  doneTaskBorderColor: SQLI_COLORS.cobalt,
  critBkgColor: SQLI_COLORS.red,
  critBorderColor: SQLI_COLORS.red,
  gridColor: colorUtils.cobaltAlpha(0.15),
  todayLineColor: SQLI_COLORS.cobalt,
  sectionBkgColor: colorUtils.cobaltAlpha(0.05),
  sectionBkgColor2: colorUtils.cobaltAlpha(0.1),
  altSectionBkgColor: colorUtils.cobaltAlpha(0.03),

  // Pie chart
  pie1: SQLI_COLORS.cobalt,
  pie2: SQLI_COLORS.sky,
  pie3: colorUtils.cobaltAlpha(0.6),
  pie4: colorUtils.cobaltAlpha(0.4),
  pie5: colorUtils.skyAlpha(0.8),
  pie6: colorUtils.skyAlpha(0.5),
  pie7: colorUtils.cobaltAlpha(0.25),
  pie8: colorUtils.skyAlpha(0.3),
  pieStrokeColor: SQLI_COLORS.cobalt,
  pieStrokeWidth: '2px',
  pieTitleTextColor: SQLI_COLORS.cobalt,
  pieSectionTextColor: SQLI_COLORS.white,
  pieLegendTextColor: SQLI_COLORS.cobalt,

  // Git graph
  git0: SQLI_COLORS.cobalt,
  git1: SQLI_COLORS.sky,
  git2: colorUtils.cobaltAlpha(0.6),
  git3: colorUtils.skyAlpha(0.8),
  git4: colorUtils.cobaltAlpha(0.4),
  git5: colorUtils.skyAlpha(0.5),
  git6: colorUtils.cobaltAlpha(0.25),
  git7: colorUtils.skyAlpha(0.3),
  gitBranchLabel0: SQLI_COLORS.white,
  gitBranchLabel1: SQLI_COLORS.cobalt,
  gitBranchLabel2: SQLI_COLORS.white,
  gitInv0: SQLI_COLORS.white,
  commitLabelColor: SQLI_COLORS.cobalt,
  commitLabelBackground: SQLI_COLORS.white,

  // Typography
  fontFamily: SQLI_TYPOGRAPHY.fontFamily,
  fontSize: SQLI_TYPOGRAPHY.fontSize.base,
};

/**
 * Dark theme variables for Mermaid
 * Uses Midnight background with Sky accents
 */
const mermaidDarkTheme = {
  // Base colors
  background: SQLI_COLORS.midnight,
  mainBkg: SQLI_COLORS.midnight,
  textColor: SQLI_COLORS.sky,
  lineColor: SQLI_COLORS.sky,

  // Primary - Transparent fill with Sky border
  primaryColor: colorUtils.skyAlpha(0.15),
  primaryTextColor: SQLI_COLORS.sky,
  primaryBorderColor: SQLI_COLORS.sky,

  // Secondary
  secondaryColor: colorUtils.skyAlpha(0.1),
  secondaryTextColor: SQLI_COLORS.sky,
  secondaryBorderColor: SQLI_COLORS.sky,

  // Tertiary
  tertiaryColor: colorUtils.skyAlpha(0.08),
  tertiaryTextColor: SQLI_COLORS.sky,
  tertiaryBorderColor: SQLI_COLORS.sky,

  // Flowchart
  nodeBkg: colorUtils.skyAlpha(0.1),
  nodeBorder: SQLI_COLORS.sky,
  nodeTextColor: SQLI_COLORS.sky,
  clusterBkg: colorUtils.skyAlpha(0.05),
  clusterBorder: SQLI_COLORS.sky,
  defaultLinkColor: SQLI_COLORS.sky,
  edgeLabelBackground: SQLI_COLORS.midnight,

  // Sequence diagram
  actorBkg: colorUtils.skyAlpha(0.1),
  actorBorder: SQLI_COLORS.sky,
  actorTextColor: SQLI_COLORS.sky,
  actorLineColor: SQLI_COLORS.sky,
  signalColor: SQLI_COLORS.sky,
  signalTextColor: SQLI_COLORS.sky,
  labelBoxBkgColor: colorUtils.skyAlpha(0.1),
  labelBoxBorderColor: SQLI_COLORS.sky,
  labelTextColor: SQLI_COLORS.sky,
  loopTextColor: SQLI_COLORS.sky,
  noteBkgColor: colorUtils.skyAlpha(0.15),
  noteBorderColor: SQLI_COLORS.sky,
  noteTextColor: SQLI_COLORS.sky,
  activationBkgColor: colorUtils.skyAlpha(0.2),
  activationBorderColor: SQLI_COLORS.sky,
  sequenceNumberColor: SQLI_COLORS.midnight,

  // State diagram
  labelColor: SQLI_COLORS.sky,
  altBackground: colorUtils.skyAlpha(0.05),

  // Class diagram
  classText: SQLI_COLORS.sky,

  // ER diagram
  entityBkg: colorUtils.skyAlpha(0.1),
  entityBorder: SQLI_COLORS.sky,
  attributeBackgroundColorOdd: colorUtils.skyAlpha(0.08),
  attributeBackgroundColorEven: colorUtils.skyAlpha(0.04),

  // Gantt
  taskBkgColor: SQLI_COLORS.sky,
  taskTextColor: SQLI_COLORS.midnight,
  taskTextDarkColor: SQLI_COLORS.sky,
  taskTextLightColor: SQLI_COLORS.midnight,
  taskBorderColor: SQLI_COLORS.sky,
  taskTextOutsideColor: SQLI_COLORS.sky,
  activeTaskBkgColor: colorUtils.skyAlpha(0.6),
  activeTaskBorderColor: SQLI_COLORS.sky,
  doneTaskBkgColor: colorUtils.skyAlpha(0.3),
  doneTaskBorderColor: SQLI_COLORS.sky,
  critBkgColor: SQLI_COLORS.red,
  critBorderColor: SQLI_COLORS.red,
  gridColor: colorUtils.skyAlpha(0.15),
  todayLineColor: SQLI_COLORS.sky,
  sectionBkgColor: colorUtils.skyAlpha(0.05),
  sectionBkgColor2: colorUtils.skyAlpha(0.1),
  altSectionBkgColor: colorUtils.skyAlpha(0.03),

  // Pie chart
  pie1: SQLI_COLORS.sky,
  pie2: colorUtils.skyAlpha(0.7),
  pie3: colorUtils.skyAlpha(0.5),
  pie4: colorUtils.skyAlpha(0.35),
  pie5: colorUtils.skyAlpha(0.25),
  pie6: colorUtils.skyAlpha(0.15),
  pie7: SQLI_COLORS.cobalt,
  pie8: colorUtils.cobaltAlpha(0.6),
  pieStrokeColor: SQLI_COLORS.sky,
  pieStrokeWidth: '2px',
  pieTitleTextColor: SQLI_COLORS.sky,
  pieSectionTextColor: SQLI_COLORS.midnight,
  pieLegendTextColor: SQLI_COLORS.sky,

  // Git graph
  git0: SQLI_COLORS.sky,
  git1: colorUtils.skyAlpha(0.7),
  git2: colorUtils.skyAlpha(0.5),
  git3: colorUtils.skyAlpha(0.35),
  git4: colorUtils.skyAlpha(0.25),
  git5: SQLI_COLORS.cobalt,
  git6: colorUtils.cobaltAlpha(0.6),
  git7: colorUtils.cobaltAlpha(0.4),
  gitBranchLabel0: SQLI_COLORS.midnight,
  gitBranchLabel1: SQLI_COLORS.sky,
  gitBranchLabel2: SQLI_COLORS.midnight,
  gitInv0: SQLI_COLORS.midnight,
  commitLabelColor: SQLI_COLORS.sky,
  commitLabelBackground: colorUtils.skyAlpha(0.15),

  // Typography
  fontFamily: SQLI_TYPOGRAPHY.fontFamily,
  fontSize: SQLI_TYPOGRAPHY.fontSize.base,
};

// Initialize Mermaid with light theme (default)
mermaid.initialize({
  ...mermaidBaseConfig,
  themeVariables: mermaidLightTheme,
});

// =============================================================================
// Storybook Viewports
// =============================================================================

/**
 * SQLI Custom Viewports
 * Extends MINIMAL_VIEWPORTS with SQLI-specific breakpoints
 */
const sqliViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: `${SQLI_BREAKPOINTS.mobile.width}px`,
      height: `${SQLI_BREAKPOINTS.mobile.height}px`,
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: `${SQLI_BREAKPOINTS.tablet.width}px`,
      height: `${SQLI_BREAKPOINTS.tablet.height}px`,
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: `${SQLI_BREAKPOINTS.desktop.width}px`,
      height: `${SQLI_BREAKPOINTS.desktop.height}px`,
    },
  },
  desktopLarge: {
    name: 'Desktop Large',
    styles: {
      width: `${SQLI_BREAKPOINTS.desktopLarge.width}px`,
      height: `${SQLI_BREAKPOINTS.desktopLarge.height}px`,
    },
  },
  ...MINIMAL_VIEWPORTS,
};

// =============================================================================
// Accessibility Rules Configuration
// =============================================================================

const a11yRules = [
  'color-contrast',
  'label',
  'aria-allowed-attr',
  'aria-required-attr',
  'aria-valid-attr',
  'aria-valid-attr-value',
  'button-name',
  'image-alt',
  'link-name',
  'list',
  'listitem',
  'heading-order',
  'landmark-one-main',
  'page-has-heading-one',
  'region',
].map((id) => ({ id, enabled: true }));

// =============================================================================
// Storybook Preview Configuration
// =============================================================================

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    backgrounds: {
      disabled: true,
    },
    docs: {
      toc: true,
    },
    layout: 'padded',
    viewport: {
      options: sqliViewports,
    },
    a11y: {
      config: {
        rules: a11yRules,
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        'Light Mode': 'sqli-light',
        'Dark Mode': 'sqli-dark',
      },
      defaultTheme: 'Light Mode',
      parentSelector: 'html',
      attributeName: 'data-theme',
    }),
    (Story, context) => {
      const html = `
        <div class="sqli-story-wrapper">
          ${Story()}
        </div>
      `;

      // Render Mermaid diagrams after DOM update
      setTimeout(async () => {
        const mermaidElements = document.querySelectorAll('.mermaid:not([data-processed])');
        if (mermaidElements.length > 0) {
          try {
            const isDark =
              context?.globals?.theme === 'Dark Mode' ||
              document.documentElement.classList.contains('dark');

            // Update Mermaid theme based on current theme
            if (isDark) {
              mermaid.initialize({
                ...mermaidBaseConfig,
                themeVariables: mermaidDarkTheme,
              });
            }

            await mermaid.run({
              nodes: mermaidElements,
            });
          } catch (error) {
            console.warn('Mermaid rendering error:', error);
          }
        }
      }, 100);

      return html;
    },
  ],

  initialGlobals: {
    a11y: {
      manual: false,
    },
  },
};

export default preview;
