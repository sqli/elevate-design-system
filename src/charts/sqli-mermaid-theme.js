/**
 * SQLI Mermaid Theme - Generated from src/tokens/tokens.json
 * DO NOT EDIT MANUALLY - Run: npm run build:tokens
 *
 * Provides SQLI brand-themed Mermaid configurations for light and dark modes.
 * Can be used in Storybook, web apps, or CLI tools.
 *
 * @example
 * import { mermaidLightTheme, mermaidDarkTheme, mermaidBaseConfig } from '@sqli/elevate-design-system/charts';
 * import mermaid from 'mermaid';
 * mermaid.initialize({ ...mermaidBaseConfig, themeVariables: mermaidLightTheme });
 */

// Brand colors from DTCG tokens
const cream = '#FFFAF0';
const midnight = '#0F0E2B';
const cobalt = '#1F24E9';
const sky = '#6DA5FF';
const white = '#FFFFFF';
const red = '#E06C75';

// Alpha color helper
function rgba(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const fontFamily = 'TWK Everett, ui-sans-serif, system-ui, sans-serif';

export const mermaidBaseConfig = {
  startOnLoad: false,
  theme: 'base',
  flowchart: {
    curve: 'basis',
    padding: 20,
    htmlLabels: true,
    useMaxWidth: true,
  },
  sequence: {
    actorMargin: 80,
    boxMargin: 10,
    boxTextMargin: 8,
    noteMargin: 15,
    messageMargin: 40,
    mirrorActors: true,
    useMaxWidth: true,
  },
  gantt: {
    useMaxWidth: true,
    barHeight: 30,
    barGap: 6,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: '12px',
    sectionFontSize: '14px',
    numberSectionStyles: 4,
  },
  pie: { useMaxWidth: true, textPosition: 0.75 },
};

export const mermaidLightTheme = {
  // Core
  background: cream,
  mainBkg: cream,
  textColor: midnight,
  lineColor: midnight,
  primaryColor: cobalt,
  primaryTextColor: white,
  primaryBorderColor: cobalt,
  secondaryColor: sky,
  secondaryTextColor: midnight,
  secondaryBorderColor: cobalt,
  tertiaryColor: white,
  tertiaryTextColor: midnight,
  tertiaryBorderColor: midnight,
  // Flowchart
  nodeBkg: white,
  nodeBorder: midnight,
  nodeTextColor: midnight,
  clusterBkg: rgba(sky, 0.15),
  clusterBorder: cobalt,
  defaultLinkColor: midnight,
  edgeLabelBackground: cream,
  // Sequence
  actorBkg: cobalt,
  actorBorder: cobalt,
  actorTextColor: white,
  actorLineColor: midnight,
  signalColor: midnight,
  signalTextColor: midnight,
  labelBoxBkgColor: white,
  labelBoxBorderColor: midnight,
  labelTextColor: midnight,
  loopTextColor: midnight,
  noteBkgColor: rgba(sky, 0.25),
  noteBorderColor: cobalt,
  noteTextColor: midnight,
  activationBkgColor: sky,
  activationBorderColor: cobalt,
  sequenceNumberColor: white,
  labelColor: midnight,
  altBackground: rgba(sky, 0.1),
  // State
  stateBkg: white,
  stateLabelColor: midnight,
  stateTextColor: midnight,
  transitionColor: midnight,
  transitionLabelColor: midnight,
  compositeBackground: white,
  compositeBorder: midnight,
  compositeTitleBackground: rgba(sky, 0.15),
  innerEndBackground: midnight,
  specialStateColor: cobalt,
  // Class / Entity
  classText: midnight,
  entityBkg: white,
  entityBorder: midnight,
  attributeBackgroundColorOdd: rgba(sky, 0.12),
  attributeBackgroundColorEven: white,
  // Gantt
  taskBkgColor: cobalt,
  taskTextColor: white,
  taskTextDarkColor: cobalt,
  taskTextLightColor: white,
  taskBorderColor: cobalt,
  taskTextOutsideColor: cobalt,
  activeTaskBkgColor: sky,
  activeTaskBorderColor: cobalt,
  doneTaskBkgColor: rgba(cobalt, 0.3),
  doneTaskBorderColor: cobalt,
  critBkgColor: red,
  critBorderColor: red,
  gridColor: rgba(cobalt, 0.15),
  todayLineColor: cobalt,
  sectionBkgColor: rgba(cobalt, 0.05),
  sectionBkgColor2: rgba(cobalt, 0.1),
  altSectionBkgColor: rgba(cobalt, 0.03),
  // Pie
  pie1: cobalt,
  pie2: sky,
  pie3: rgba(cobalt, 0.6),
  pie4: rgba(cobalt, 0.4),
  pie5: rgba(sky, 0.8),
  pie6: rgba(sky, 0.5),
  pie7: rgba(cobalt, 0.25),
  pie8: rgba(sky, 0.3),
  pieStrokeColor: cobalt,
  pieStrokeWidth: '2px',
  pieTitleTextColor: cobalt,
  pieSectionTextColor: white,
  pieLegendTextColor: cobalt,
  // Git
  git0: cobalt,
  git1: sky,
  git2: rgba(cobalt, 0.6),
  git3: rgba(sky, 0.8),
  git4: rgba(cobalt, 0.4),
  git5: rgba(sky, 0.5),
  git6: rgba(cobalt, 0.25),
  git7: rgba(sky, 0.3),
  gitBranchLabel0: white,
  gitBranchLabel1: cobalt,
  gitBranchLabel2: white,
  gitInv0: white,
  commitLabelColor: cobalt,
  commitLabelBackground: white,
  // Typography
  fontFamily,
  fontSize: '14px',
};

export const mermaidDarkTheme = {
  // Core
  background: midnight,
  mainBkg: midnight,
  textColor: cream,
  lineColor: sky,
  primaryColor: sky,
  primaryTextColor: midnight,
  primaryBorderColor: sky,
  secondaryColor: rgba(cobalt, 0.4),
  secondaryTextColor: cream,
  secondaryBorderColor: sky,
  tertiaryColor: rgba(sky, 0.1),
  tertiaryTextColor: cream,
  tertiaryBorderColor: sky,
  // Flowchart
  nodeBkg: rgba(sky, 0.2),
  nodeBorder: sky,
  nodeTextColor: cream,
  clusterBkg: rgba(sky, 0.12),
  clusterBorder: sky,
  defaultLinkColor: sky,
  edgeLabelBackground: midnight,
  // Sequence
  actorBkg: sky,
  actorBorder: sky,
  actorTextColor: midnight,
  actorLineColor: sky,
  signalColor: sky,
  signalTextColor: cream,
  labelBoxBkgColor: rgba(sky, 0.15),
  labelBoxBorderColor: sky,
  labelTextColor: cream,
  loopTextColor: cream,
  noteBkgColor: rgba(sky, 0.3),
  noteBorderColor: sky,
  noteTextColor: cream,
  activationBkgColor: rgba(sky, 0.35),
  activationBorderColor: sky,
  sequenceNumberColor: midnight,
  labelColor: cream,
  altBackground: rgba(sky, 0.1),
  // State
  stateBkg: rgba(sky, 0.15),
  stateLabelColor: cream,
  stateTextColor: cream,
  transitionColor: sky,
  transitionLabelColor: cream,
  compositeBackground: rgba(sky, 0.1),
  compositeBorder: sky,
  compositeTitleBackground: rgba(sky, 0.2),
  innerEndBackground: cream,
  specialStateColor: sky,
  // Class / Entity
  classText: cream,
  entityBkg: rgba(sky, 0.15),
  entityBorder: sky,
  attributeBackgroundColorOdd: rgba(sky, 0.12),
  attributeBackgroundColorEven: rgba(sky, 0.06),
  // Gantt
  taskBkgColor: sky,
  taskTextColor: midnight,
  taskTextDarkColor: sky,
  taskTextLightColor: midnight,
  taskBorderColor: sky,
  taskTextOutsideColor: sky,
  activeTaskBkgColor: rgba(sky, 0.6),
  activeTaskBorderColor: sky,
  doneTaskBkgColor: rgba(sky, 0.3),
  doneTaskBorderColor: sky,
  critBkgColor: red,
  critBorderColor: red,
  gridColor: rgba(sky, 0.15),
  todayLineColor: sky,
  sectionBkgColor: rgba(sky, 0.05),
  sectionBkgColor2: rgba(sky, 0.1),
  altSectionBkgColor: rgba(sky, 0.03),
  // Pie
  pie1: sky,
  pie2: rgba(sky, 0.7),
  pie3: rgba(sky, 0.5),
  pie4: rgba(sky, 0.35),
  pie5: rgba(sky, 0.25),
  pie6: rgba(sky, 0.15),
  pie7: cobalt,
  pie8: rgba(cobalt, 0.6),
  pieStrokeColor: sky,
  pieStrokeWidth: '2px',
  pieTitleTextColor: sky,
  pieSectionTextColor: midnight,
  pieLegendTextColor: sky,
  // Git
  git0: sky,
  git1: rgba(sky, 0.7),
  git2: rgba(sky, 0.5),
  git3: rgba(sky, 0.35),
  git4: rgba(sky, 0.25),
  git5: cobalt,
  git6: rgba(cobalt, 0.6),
  git7: rgba(cobalt, 0.4),
  gitBranchLabel0: midnight,
  gitBranchLabel1: sky,
  gitBranchLabel2: midnight,
  gitInv0: midnight,
  commitLabelColor: sky,
  commitLabelBackground: rgba(sky, 0.15),
  // Typography
  fontFamily,
  fontSize: '14px',
};
