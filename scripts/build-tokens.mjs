#!/usr/bin/env node

/**
 * Build script for SQLI Design Tokens
 *
 * Reads src/tokens/tokens.json (W3C DTCG format) and generates:
 * - src/css/generated/_theme-light.css
 * - src/css/generated/_theme-dark.css
 * - src/css/generated/_theme-auto-dark.css
 * - src/css/generated/_tokens-tw.css
 * - src/tokens/generated/colors.js + .d.ts
 * - src/charts/sqli-mermaid-theme.js + .d.ts
 * - dist/tokens.css (standalone)
 * - dist/tokens.json (DTCG export)
 *
 * Usage:
 *   node scripts/build-tokens.mjs          # Generate all files
 *   node scripts/build-tokens.mjs --check  # Verify files are up to date
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const isCheck = process.argv.includes('--check');

// ---------------------------------------------------------------------------
// 1. Read DTCG source
// ---------------------------------------------------------------------------

const tokensPath = resolve(ROOT, 'src/tokens/tokens.json');
const tokens = JSON.parse(readFileSync(tokensPath, 'utf-8'));

// ---------------------------------------------------------------------------
// 2. Helpers
// ---------------------------------------------------------------------------

/** Extract flat token map from a DTCG group: { 'name': '$value' } */
function flattenGroup(group, parentType) {
  const result = {};
  const groupType = group.$type || parentType;
  for (const [key, val] of Object.entries(group)) {
    if (key.startsWith('$')) continue;
    if (val.$value !== undefined) {
      result[key] = val.$value;
    }
  }
  return result;
}

/** Generate CSS custom properties block */
function cssVarsBlock(tokenMap, prefix) {
  return Object.entries(tokenMap)
    .map(([name, value]) => `  --${prefix}${name}: ${value};`)
    .join('\n');
}

/** Build a complete CSS theme block for a given theme */
function buildThemeBlock(themeTokens) {
  const colors = flattenGroup(themeTokens.color);
  const radii = flattenGroup(themeTokens.radius);
  const shadows = flattenGroup(themeTokens.shadow);

  const lines = [];

  // Color scheme
  lines.push('');

  // Colors
  for (const [name, value] of Object.entries(colors)) {
    lines.push(`  --color-${name}: ${value};`);
  }

  // Radius
  lines.push('');
  for (const [name, value] of Object.entries(radii)) {
    lines.push(`  --radius-${name}: ${value};`);
  }

  // Focus alias
  lines.push('');
  lines.push('  --color-focus: var(--color-primary);');
  lines.push('  --ring-color: var(--color-focus);');
  lines.push('  --ring-offset: 2px;');

  // Shadows
  lines.push('');
  for (const [name, value] of Object.entries(shadows)) {
    lines.push(`  --shadow-${name}: ${value};`);
  }

  // Typography
  lines.push('');
  lines.push("  font-family: 'TWK Everett', system-ui, -apple-system, sans-serif;");

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// 3. Generate CSS theme files
// ---------------------------------------------------------------------------

const lightBody = buildThemeBlock(tokens.semantic.light);
const darkBody = buildThemeBlock(tokens.semantic.dark);

const themeLightCSS = `/**
 * SQLI Light Theme - Generated from src/tokens/tokens.json
 * DO NOT EDIT MANUALLY - Run: npm run build:tokens
 */

:root,
[data-theme='sqli-light'] {
  color-scheme: light;
${lightBody}
}
`;

const themeDarkCSS = `/**
 * SQLI Dark Theme - Generated from src/tokens/tokens.json
 * DO NOT EDIT MANUALLY - Run: npm run build:tokens
 */

[data-theme='sqli-dark'] {
  color-scheme: dark;
${darkBody}
}
`;

const themeAutoDarkCSS = `/**
 * Auto Dark Mode - Generated from src/tokens/tokens.json
 * Respects OS preference when no data-theme is set.
 * DO NOT EDIT MANUALLY - Run: npm run build:tokens
 */

@media (prefers-color-scheme: dark) {
  :root:not([data-theme='sqli-light']) {
    color-scheme: dark;
${darkBody}
  }
}
`;

// ---------------------------------------------------------------------------
// 4. Generate Tailwind @theme block
// ---------------------------------------------------------------------------

const brandColors = tokens.brand.color;
const typo = tokens.typography;

const twLines = [];
twLines.push('/**');
twLines.push(' * Tailwind CSS 4 Theme Tokens - Generated from src/tokens/tokens.json');
twLines.push(' * DO NOT EDIT MANUALLY - Run: npm run build:tokens');
twLines.push(' */');
twLines.push('');
twLines.push('@theme {');
twLines.push('  /* Brand Colors */');

for (const [name, token] of Object.entries(brandColors)) {
  if (name.startsWith('$')) continue;
  twLines.push(`  --color-sqli-${name}: ${token.$value};`);
}

twLines.push('');
twLines.push('  /* Typography */');

for (const [name, token] of Object.entries(typo.fontFamily)) {
  if (name.startsWith('$')) continue;
  const value = Array.isArray(token.$value)
    ? token.$value.map((f) => (f.includes(' ') ? `'${f}'` : f)).join(', ')
    : token.$value;
  twLines.push(`  --font-family-${name}: ${value};`);
}

// Semantic colors: register all theme variables so Tailwind generates
// utility classes like bg-primary, text-base-content, etc.
// Values are `initial` because actual values come from :root / [data-theme] blocks.
twLines.push('');
twLines.push('  /* Semantic Colors (theme-aware, values set by :root / [data-theme]) */');

const twSemanticColors = flattenGroup(tokens.semantic.light.color);
for (const name of Object.keys(twSemanticColors)) {
  twLines.push(`  --color-${name}: initial;`);
}
// Focus alias
twLines.push('  --color-focus: initial;');

// Semantic radii
twLines.push('');
twLines.push('  /* Border Radius Tokens */');

const twSemanticRadii = flattenGroup(tokens.semantic.light.radius);
for (const name of Object.keys(twSemanticRadii)) {
  twLines.push(`  --radius-${name}: initial;`);
}

// Semantic shadows
twLines.push('');
twLines.push('  /* Shadow Tokens */');

const twSemanticShadows = flattenGroup(tokens.semantic.light.shadow);
for (const name of Object.keys(twSemanticShadows)) {
  twLines.push(`  --shadow-${name}: initial;`);
}

twLines.push('}');

const tokensTwCSS = twLines.join('\n') + '\n';

// ---------------------------------------------------------------------------
// 5. Generate TypeScript brand colors module
// ---------------------------------------------------------------------------

const brandEntries = Object.entries(brandColors).filter(([k]) => !k.startsWith('$'));

const camelCase = (s) =>
  s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

const tsLines = [];
tsLines.push('/**');
tsLines.push(' * SQLI Brand Colors - Generated from src/tokens/tokens.json');
tsLines.push(' * DO NOT EDIT MANUALLY - Run: npm run build:tokens');
tsLines.push(' */');
tsLines.push('');
tsLines.push('export const brandColors = {');
for (const [name, token] of brandEntries) {
  const key = camelCase(name);
  tsLines.push(`  ${key}: { hex: '${token.$value.toUpperCase()}', oklch: '${token.oklch}' },`);
}
tsLines.push('};');
tsLines.push('');
tsLines.push('export const semanticMap = {');
tsLines.push("  light: { primary: 'cobalt', background: 'cream', foreground: 'midnight', focus: 'cobalt' },");
tsLines.push("  dark:  { primary: 'sky',    background: 'midnight', foreground: 'cream', focus: 'sky' },");
tsLines.push('};');
tsLines.push('');

const colorsJS = tsLines.join('\n');

// Generate .d.ts declaration file
const brandKeys = brandEntries.map(([name]) => camelCase(name));
const dtsLines = [];
dtsLines.push('/**');
dtsLines.push(' * SQLI Brand Colors - Generated from src/tokens/tokens.json');
dtsLines.push(' * DO NOT EDIT MANUALLY - Run: npm run build:tokens');
dtsLines.push(' */');
dtsLines.push('');
dtsLines.push('interface BrandColor {');
dtsLines.push('  readonly hex: string;');
dtsLines.push('  readonly oklch: string;');
dtsLines.push('}');
dtsLines.push('');
dtsLines.push('export declare const brandColors: {');
for (const key of brandKeys) {
  dtsLines.push(`  readonly ${key}: BrandColor;`);
}
dtsLines.push('};');
dtsLines.push('');
dtsLines.push('export declare const semanticMap: {');
dtsLines.push("  readonly light: { readonly primary: 'cobalt'; readonly background: 'cream'; readonly foreground: 'midnight'; readonly focus: 'cobalt' };");
dtsLines.push("  readonly dark: { readonly primary: 'sky'; readonly background: 'midnight'; readonly foreground: 'cream'; readonly focus: 'sky' };");
dtsLines.push('};');
dtsLines.push('');

const colorsDTS = dtsLines.join('\n');

// ---------------------------------------------------------------------------
// 5b. Generate Mermaid theme module
// ---------------------------------------------------------------------------

/** Build hex->rgba helper as inline code */
const mermaidLines = [];
mermaidLines.push('/**');
mermaidLines.push(' * SQLI Mermaid Theme - Generated from src/tokens/tokens.json');
mermaidLines.push(' * DO NOT EDIT MANUALLY - Run: npm run build:tokens');
mermaidLines.push(' *');
mermaidLines.push(' * Provides SQLI brand-themed Mermaid configurations for light and dark modes.');
mermaidLines.push(' * Can be used in Storybook, web apps, or CLI tools.');
mermaidLines.push(' *');
mermaidLines.push(' * @example');
mermaidLines.push(' * import { mermaidLightTheme, mermaidDarkTheme, mermaidBaseConfig } from \'@sqli/elevate-design-system/charts\';');
mermaidLines.push(' * import mermaid from \'mermaid\';');
mermaidLines.push(' * mermaid.initialize({ ...mermaidBaseConfig, themeVariables: mermaidLightTheme });');
mermaidLines.push(' */');
mermaidLines.push('');

// Build brand color constants from DTCG
const bc = {};
for (const [name, token] of brandEntries) {
  bc[camelCase(name)] = token.$value.toUpperCase();
}

mermaidLines.push('// Brand colors from DTCG tokens');
mermaidLines.push(`const cream = '${bc.cream}';`);
mermaidLines.push(`const midnight = '${bc.midnight}';`);
mermaidLines.push(`const cobalt = '${bc.cobalt}';`);
mermaidLines.push(`const sky = '${bc.sky}';`);
mermaidLines.push(`const white = '#FFFFFF';`);
mermaidLines.push(`const red = '#E06C75';`);
mermaidLines.push('');
mermaidLines.push('// Alpha color helper');
mermaidLines.push('function rgba(hex, opacity) {');
mermaidLines.push('  const r = parseInt(hex.slice(1, 3), 16);');
mermaidLines.push('  const g = parseInt(hex.slice(3, 5), 16);');
mermaidLines.push('  const b = parseInt(hex.slice(5, 7), 16);');
mermaidLines.push('  return `rgba(${r}, ${g}, ${b}, ${opacity})`;');
mermaidLines.push('}');
mermaidLines.push('');
mermaidLines.push("const fontFamily = 'TWK Everett, ui-sans-serif, system-ui, sans-serif';");
mermaidLines.push('');

// Base config
mermaidLines.push('export const mermaidBaseConfig = {');
mermaidLines.push('  startOnLoad: false,');
mermaidLines.push("  theme: 'base',");
mermaidLines.push('  flowchart: {');
mermaidLines.push("    curve: 'basis',");
mermaidLines.push('    padding: 20,');
mermaidLines.push('    htmlLabels: true,');
mermaidLines.push('    useMaxWidth: true,');
mermaidLines.push('  },');
mermaidLines.push('  sequence: {');
mermaidLines.push('    actorMargin: 80,');
mermaidLines.push('    boxMargin: 10,');
mermaidLines.push('    boxTextMargin: 8,');
mermaidLines.push('    noteMargin: 15,');
mermaidLines.push('    messageMargin: 40,');
mermaidLines.push('    mirrorActors: true,');
mermaidLines.push('    useMaxWidth: true,');
mermaidLines.push('  },');
mermaidLines.push('  gantt: {');
mermaidLines.push('    useMaxWidth: true,');
mermaidLines.push('    barHeight: 30,');
mermaidLines.push('    barGap: 6,');
mermaidLines.push('    topPadding: 50,');
mermaidLines.push('    leftPadding: 75,');
mermaidLines.push('    gridLineStartPadding: 35,');
mermaidLines.push("    fontSize: '12px',");
mermaidLines.push("    sectionFontSize: '14px',");
mermaidLines.push('    numberSectionStyles: 4,');
mermaidLines.push('  },');
mermaidLines.push('  pie: { useMaxWidth: true, textPosition: 0.75 },');
mermaidLines.push('};');
mermaidLines.push('');

// Light theme
mermaidLines.push('export const mermaidLightTheme = {');
mermaidLines.push('  // Core');
mermaidLines.push('  background: cream,');
mermaidLines.push('  mainBkg: cream,');
mermaidLines.push('  textColor: midnight,');
mermaidLines.push('  lineColor: midnight,');
mermaidLines.push('  primaryColor: cobalt,');
mermaidLines.push('  primaryTextColor: white,');
mermaidLines.push('  primaryBorderColor: cobalt,');
mermaidLines.push('  secondaryColor: sky,');
mermaidLines.push('  secondaryTextColor: midnight,');
mermaidLines.push('  secondaryBorderColor: cobalt,');
mermaidLines.push('  tertiaryColor: white,');
mermaidLines.push('  tertiaryTextColor: midnight,');
mermaidLines.push('  tertiaryBorderColor: midnight,');
mermaidLines.push('  // Flowchart');
mermaidLines.push('  nodeBkg: white,');
mermaidLines.push('  nodeBorder: midnight,');
mermaidLines.push('  nodeTextColor: midnight,');
mermaidLines.push('  clusterBkg: rgba(sky, 0.15),');
mermaidLines.push('  clusterBorder: cobalt,');
mermaidLines.push('  defaultLinkColor: midnight,');
mermaidLines.push('  edgeLabelBackground: cream,');
mermaidLines.push('  // Sequence');
mermaidLines.push('  actorBkg: cobalt,');
mermaidLines.push('  actorBorder: cobalt,');
mermaidLines.push('  actorTextColor: white,');
mermaidLines.push('  actorLineColor: midnight,');
mermaidLines.push('  signalColor: midnight,');
mermaidLines.push('  signalTextColor: midnight,');
mermaidLines.push('  labelBoxBkgColor: white,');
mermaidLines.push('  labelBoxBorderColor: midnight,');
mermaidLines.push('  labelTextColor: midnight,');
mermaidLines.push('  loopTextColor: midnight,');
mermaidLines.push('  noteBkgColor: rgba(sky, 0.25),');
mermaidLines.push('  noteBorderColor: cobalt,');
mermaidLines.push('  noteTextColor: midnight,');
mermaidLines.push('  activationBkgColor: sky,');
mermaidLines.push('  activationBorderColor: cobalt,');
mermaidLines.push('  sequenceNumberColor: white,');
mermaidLines.push('  labelColor: midnight,');
mermaidLines.push('  altBackground: rgba(sky, 0.1),');
mermaidLines.push('  // State');
mermaidLines.push('  stateBkg: white,');
mermaidLines.push('  stateLabelColor: midnight,');
mermaidLines.push('  stateTextColor: midnight,');
mermaidLines.push('  transitionColor: midnight,');
mermaidLines.push('  transitionLabelColor: midnight,');
mermaidLines.push('  compositeBackground: white,');
mermaidLines.push('  compositeBorder: midnight,');
mermaidLines.push('  compositeTitleBackground: rgba(sky, 0.15),');
mermaidLines.push('  innerEndBackground: midnight,');
mermaidLines.push('  specialStateColor: cobalt,');
mermaidLines.push('  // Class / Entity');
mermaidLines.push('  classText: midnight,');
mermaidLines.push('  entityBkg: white,');
mermaidLines.push('  entityBorder: midnight,');
mermaidLines.push('  attributeBackgroundColorOdd: rgba(sky, 0.12),');
mermaidLines.push('  attributeBackgroundColorEven: white,');
mermaidLines.push('  // Gantt');
mermaidLines.push('  taskBkgColor: cobalt,');
mermaidLines.push('  taskTextColor: white,');
mermaidLines.push('  taskTextDarkColor: cobalt,');
mermaidLines.push('  taskTextLightColor: white,');
mermaidLines.push('  taskBorderColor: cobalt,');
mermaidLines.push('  taskTextOutsideColor: cobalt,');
mermaidLines.push('  activeTaskBkgColor: sky,');
mermaidLines.push('  activeTaskBorderColor: cobalt,');
mermaidLines.push('  doneTaskBkgColor: rgba(cobalt, 0.3),');
mermaidLines.push('  doneTaskBorderColor: cobalt,');
mermaidLines.push('  critBkgColor: red,');
mermaidLines.push('  critBorderColor: red,');
mermaidLines.push('  gridColor: rgba(cobalt, 0.15),');
mermaidLines.push('  todayLineColor: cobalt,');
mermaidLines.push('  sectionBkgColor: rgba(cobalt, 0.05),');
mermaidLines.push('  sectionBkgColor2: rgba(cobalt, 0.1),');
mermaidLines.push('  altSectionBkgColor: rgba(cobalt, 0.03),');
mermaidLines.push('  // Pie');
mermaidLines.push('  pie1: cobalt,');
mermaidLines.push('  pie2: sky,');
mermaidLines.push('  pie3: rgba(cobalt, 0.6),');
mermaidLines.push('  pie4: rgba(cobalt, 0.4),');
mermaidLines.push('  pie5: rgba(sky, 0.8),');
mermaidLines.push('  pie6: rgba(sky, 0.5),');
mermaidLines.push('  pie7: rgba(cobalt, 0.25),');
mermaidLines.push('  pie8: rgba(sky, 0.3),');
mermaidLines.push('  pieStrokeColor: cobalt,');
mermaidLines.push("  pieStrokeWidth: '2px',");
mermaidLines.push('  pieTitleTextColor: cobalt,');
mermaidLines.push('  pieSectionTextColor: white,');
mermaidLines.push('  pieLegendTextColor: cobalt,');
mermaidLines.push('  // Git');
mermaidLines.push('  git0: cobalt,');
mermaidLines.push('  git1: sky,');
mermaidLines.push('  git2: rgba(cobalt, 0.6),');
mermaidLines.push('  git3: rgba(sky, 0.8),');
mermaidLines.push('  git4: rgba(cobalt, 0.4),');
mermaidLines.push('  git5: rgba(sky, 0.5),');
mermaidLines.push('  git6: rgba(cobalt, 0.25),');
mermaidLines.push('  git7: rgba(sky, 0.3),');
mermaidLines.push('  gitBranchLabel0: white,');
mermaidLines.push('  gitBranchLabel1: cobalt,');
mermaidLines.push('  gitBranchLabel2: white,');
mermaidLines.push('  gitInv0: white,');
mermaidLines.push('  commitLabelColor: cobalt,');
mermaidLines.push('  commitLabelBackground: white,');
mermaidLines.push('  // Typography');
mermaidLines.push('  fontFamily,');
mermaidLines.push("  fontSize: '14px',");
mermaidLines.push('};');
mermaidLines.push('');

// Dark theme
mermaidLines.push('export const mermaidDarkTheme = {');
mermaidLines.push('  // Core');
mermaidLines.push('  background: midnight,');
mermaidLines.push('  mainBkg: midnight,');
mermaidLines.push('  textColor: cream,');
mermaidLines.push('  lineColor: sky,');
mermaidLines.push('  primaryColor: sky,');
mermaidLines.push('  primaryTextColor: midnight,');
mermaidLines.push('  primaryBorderColor: sky,');
mermaidLines.push('  secondaryColor: rgba(cobalt, 0.4),');
mermaidLines.push('  secondaryTextColor: cream,');
mermaidLines.push('  secondaryBorderColor: sky,');
mermaidLines.push('  tertiaryColor: rgba(sky, 0.1),');
mermaidLines.push('  tertiaryTextColor: cream,');
mermaidLines.push('  tertiaryBorderColor: sky,');
mermaidLines.push('  // Flowchart');
mermaidLines.push('  nodeBkg: rgba(sky, 0.2),');
mermaidLines.push('  nodeBorder: sky,');
mermaidLines.push('  nodeTextColor: cream,');
mermaidLines.push('  clusterBkg: rgba(sky, 0.12),');
mermaidLines.push('  clusterBorder: sky,');
mermaidLines.push('  defaultLinkColor: sky,');
mermaidLines.push('  edgeLabelBackground: midnight,');
mermaidLines.push('  // Sequence');
mermaidLines.push('  actorBkg: sky,');
mermaidLines.push('  actorBorder: sky,');
mermaidLines.push('  actorTextColor: midnight,');
mermaidLines.push('  actorLineColor: sky,');
mermaidLines.push('  signalColor: sky,');
mermaidLines.push('  signalTextColor: cream,');
mermaidLines.push('  labelBoxBkgColor: rgba(sky, 0.15),');
mermaidLines.push('  labelBoxBorderColor: sky,');
mermaidLines.push('  labelTextColor: cream,');
mermaidLines.push('  loopTextColor: cream,');
mermaidLines.push('  noteBkgColor: rgba(sky, 0.3),');
mermaidLines.push('  noteBorderColor: sky,');
mermaidLines.push('  noteTextColor: cream,');
mermaidLines.push('  activationBkgColor: rgba(sky, 0.35),');
mermaidLines.push('  activationBorderColor: sky,');
mermaidLines.push('  sequenceNumberColor: midnight,');
mermaidLines.push('  labelColor: cream,');
mermaidLines.push('  altBackground: rgba(sky, 0.1),');
mermaidLines.push('  // State');
mermaidLines.push('  stateBkg: rgba(sky, 0.15),');
mermaidLines.push('  stateLabelColor: cream,');
mermaidLines.push('  stateTextColor: cream,');
mermaidLines.push('  transitionColor: sky,');
mermaidLines.push('  transitionLabelColor: cream,');
mermaidLines.push('  compositeBackground: rgba(sky, 0.1),');
mermaidLines.push('  compositeBorder: sky,');
mermaidLines.push('  compositeTitleBackground: rgba(sky, 0.2),');
mermaidLines.push('  innerEndBackground: cream,');
mermaidLines.push('  specialStateColor: sky,');
mermaidLines.push('  // Class / Entity');
mermaidLines.push('  classText: cream,');
mermaidLines.push('  entityBkg: rgba(sky, 0.15),');
mermaidLines.push('  entityBorder: sky,');
mermaidLines.push('  attributeBackgroundColorOdd: rgba(sky, 0.12),');
mermaidLines.push('  attributeBackgroundColorEven: rgba(sky, 0.06),');
mermaidLines.push('  // Gantt');
mermaidLines.push('  taskBkgColor: sky,');
mermaidLines.push('  taskTextColor: midnight,');
mermaidLines.push('  taskTextDarkColor: sky,');
mermaidLines.push('  taskTextLightColor: midnight,');
mermaidLines.push('  taskBorderColor: sky,');
mermaidLines.push('  taskTextOutsideColor: sky,');
mermaidLines.push('  activeTaskBkgColor: rgba(sky, 0.6),');
mermaidLines.push('  activeTaskBorderColor: sky,');
mermaidLines.push('  doneTaskBkgColor: rgba(sky, 0.3),');
mermaidLines.push('  doneTaskBorderColor: sky,');
mermaidLines.push('  critBkgColor: red,');
mermaidLines.push('  critBorderColor: red,');
mermaidLines.push('  gridColor: rgba(sky, 0.15),');
mermaidLines.push('  todayLineColor: sky,');
mermaidLines.push('  sectionBkgColor: rgba(sky, 0.05),');
mermaidLines.push('  sectionBkgColor2: rgba(sky, 0.1),');
mermaidLines.push('  altSectionBkgColor: rgba(sky, 0.03),');
mermaidLines.push('  // Pie');
mermaidLines.push('  pie1: sky,');
mermaidLines.push('  pie2: rgba(sky, 0.7),');
mermaidLines.push('  pie3: rgba(sky, 0.5),');
mermaidLines.push('  pie4: rgba(sky, 0.35),');
mermaidLines.push('  pie5: rgba(sky, 0.25),');
mermaidLines.push('  pie6: rgba(sky, 0.15),');
mermaidLines.push('  pie7: cobalt,');
mermaidLines.push('  pie8: rgba(cobalt, 0.6),');
mermaidLines.push('  pieStrokeColor: sky,');
mermaidLines.push("  pieStrokeWidth: '2px',");
mermaidLines.push('  pieTitleTextColor: sky,');
mermaidLines.push('  pieSectionTextColor: midnight,');
mermaidLines.push('  pieLegendTextColor: sky,');
mermaidLines.push('  // Git');
mermaidLines.push('  git0: sky,');
mermaidLines.push('  git1: rgba(sky, 0.7),');
mermaidLines.push('  git2: rgba(sky, 0.5),');
mermaidLines.push('  git3: rgba(sky, 0.35),');
mermaidLines.push('  git4: rgba(sky, 0.25),');
mermaidLines.push('  git5: cobalt,');
mermaidLines.push('  git6: rgba(cobalt, 0.6),');
mermaidLines.push('  git7: rgba(cobalt, 0.4),');
mermaidLines.push('  gitBranchLabel0: midnight,');
mermaidLines.push('  gitBranchLabel1: sky,');
mermaidLines.push('  gitBranchLabel2: midnight,');
mermaidLines.push('  gitInv0: midnight,');
mermaidLines.push('  commitLabelColor: sky,');
mermaidLines.push('  commitLabelBackground: rgba(sky, 0.15),');
mermaidLines.push('  // Typography');
mermaidLines.push('  fontFamily,');
mermaidLines.push("  fontSize: '14px',");
mermaidLines.push('};');
mermaidLines.push('');

const mermaidJS = mermaidLines.join('\n');

// Mermaid .d.ts
const mermaidDtsLines = [];
mermaidDtsLines.push('/**');
mermaidDtsLines.push(' * SQLI Mermaid Theme - Generated from src/tokens/tokens.json');
mermaidDtsLines.push(' * DO NOT EDIT MANUALLY - Run: npm run build:tokens');
mermaidDtsLines.push(' */');
mermaidDtsLines.push('');
mermaidDtsLines.push('export declare const mermaidBaseConfig: {');
mermaidDtsLines.push('  readonly startOnLoad: boolean;');
mermaidDtsLines.push('  readonly theme: string;');
mermaidDtsLines.push('  readonly flowchart: Record<string, unknown>;');
mermaidDtsLines.push('  readonly sequence: Record<string, unknown>;');
mermaidDtsLines.push('  readonly gantt: Record<string, unknown>;');
mermaidDtsLines.push('  readonly pie: Record<string, unknown>;');
mermaidDtsLines.push('};');
mermaidDtsLines.push('');
mermaidDtsLines.push('export declare const mermaidLightTheme: Record<string, string>;');
mermaidDtsLines.push('export declare const mermaidDarkTheme: Record<string, string>;');
mermaidDtsLines.push('');

const mermaidDTS = mermaidDtsLines.join('\n');

// ---------------------------------------------------------------------------
// 6. Generate standalone tokens CSS (dist/tokens.css)
// ---------------------------------------------------------------------------

const standaloneLines = [];
standaloneLines.push('/**');
standaloneLines.push(' * Elevate Design System - Standalone Tokens');
standaloneLines.push(' * Generated from src/tokens/tokens.json (W3C DTCG format)');
standaloneLines.push(' * DO NOT EDIT MANUALLY - Run: npm run build:tokens');
standaloneLines.push(' *');
standaloneLines.push(' * Usage:');
standaloneLines.push(" *   @import '@sqli/elevate-design-system/tokens';");
standaloneLines.push(' */');
standaloneLines.push('');
standaloneLines.push(':root {');

// Brand colors HEX
standaloneLines.push('  /* Brand Colors (HEX) */');
for (const [name, token] of brandEntries) {
  standaloneLines.push(`  --color-sqli-${name}: ${token.$value};`);
}

// Brand colors OKLCH
standaloneLines.push('');
standaloneLines.push('  /* Brand Colors (OKLCH) */');
for (const [name, token] of brandEntries) {
  if (token.oklch) {
    standaloneLines.push(`  --color-sqli-${name}-oklch: ${token.oklch};`);
  }
}

// Typography
standaloneLines.push('');
standaloneLines.push('  /* Typography */');
for (const [name, token] of Object.entries(typo.fontFamily)) {
  if (name.startsWith('$')) continue;
  const value = Array.isArray(token.$value)
    ? token.$value.map((f) => (f.includes(' ') ? `'${f}'` : f)).join(', ')
    : token.$value;
  standaloneLines.push(`  --font-family-${name}: ${value};`);
}
for (const [name, token] of Object.entries(typo.fontWeight)) {
  if (name.startsWith('$')) continue;
  standaloneLines.push(`  --font-weight-${name}: ${token.$value};`);
}

// Semantic colors (light defaults)
standaloneLines.push('');
standaloneLines.push('  /* Semantic Colors (Light Theme Defaults) */');
standaloneLines.push('  --color-background: var(--color-sqli-cream);');
standaloneLines.push('  --color-text: var(--color-sqli-midnight);');
standaloneLines.push('  --color-primary: var(--color-sqli-cobalt);');
standaloneLines.push('  --color-primary-hover: var(--color-sqli-cobalt-hover);');
standaloneLines.push('  --color-accent: var(--color-sqli-sky);');
standaloneLines.push('  --color-accent-hover: var(--color-sqli-sky-hover);');

// Surface & Panel
standaloneLines.push('');
standaloneLines.push('  /* Surface & Panel */');
const lightColors = flattenGroup(tokens.semantic.light.color);
standaloneLines.push(`  --color-surface: ${lightColors.surface};`);
standaloneLines.push(`  --color-panel-solid: ${lightColors['panel-solid']};`);
standaloneLines.push(`  --color-overlay: ${lightColors.overlay};`);

standaloneLines.push('}');

// Dark theme override
standaloneLines.push('');
standaloneLines.push("/* Dark Theme Override */");
standaloneLines.push("[data-theme='sqli-dark'],");
standaloneLines.push("[data-theme='dark'] {");
standaloneLines.push('  --color-background: var(--color-sqli-midnight);');
standaloneLines.push('  --color-text: var(--color-sqli-cream);');
standaloneLines.push('  --color-primary: var(--color-sqli-sky);');
standaloneLines.push('  --color-primary-hover: var(--color-sqli-sky-hover);');
standaloneLines.push('  --color-accent: var(--color-sqli-cobalt);');
standaloneLines.push('  --color-accent-hover: var(--color-sqli-cobalt-hover);');
standaloneLines.push('');
standaloneLines.push('  /* Surface & Panel */');
const darkColors = flattenGroup(tokens.semantic.dark.color);
standaloneLines.push(`  --color-surface: ${darkColors.surface};`);
standaloneLines.push(`  --color-panel-solid: ${darkColors['panel-solid']};`);
standaloneLines.push(`  --color-overlay: ${darkColors.overlay};`);
standaloneLines.push('}');

// System preference
standaloneLines.push('');
standaloneLines.push('/* System preference support */');
standaloneLines.push('@media (prefers-color-scheme: dark) {');
standaloneLines.push("  :root:not([data-theme='sqli-light'], [data-theme='light']) {");
standaloneLines.push('    --color-background: var(--color-sqli-midnight);');
standaloneLines.push('    --color-text: var(--color-sqli-cream);');
standaloneLines.push('    --color-primary: var(--color-sqli-sky);');
standaloneLines.push('    --color-primary-hover: var(--color-sqli-sky-hover);');
standaloneLines.push('    --color-accent: var(--color-sqli-cobalt);');
standaloneLines.push('    --color-accent-hover: var(--color-sqli-cobalt-hover);');
standaloneLines.push('  }');
standaloneLines.push('}');

const standaloneCSS = standaloneLines.join('\n') + '\n';

// ---------------------------------------------------------------------------
// 7. Write or check files
// ---------------------------------------------------------------------------

// Source files (committed, checked by --check)
const sourceOutputs = [
  { path: 'src/css/generated/_theme-light.css', content: themeLightCSS },
  { path: 'src/css/generated/_theme-dark.css', content: themeDarkCSS },
  { path: 'src/css/generated/_theme-auto-dark.css', content: themeAutoDarkCSS },
  { path: 'src/css/generated/_tokens-tw.css', content: tokensTwCSS },
  { path: 'src/tokens/generated/colors.js', content: colorsJS },
  { path: 'src/tokens/generated/colors.d.ts', content: colorsDTS },
  { path: 'src/charts/sqli-mermaid-theme.js', content: mermaidJS },
  { path: 'src/charts/sqli-mermaid-theme.d.ts', content: mermaidDTS },
];

// Dist files (regenerated every build, not checked by --check)
const distOutputs = [
  { path: 'dist/tokens.css', content: standaloneCSS },
  { path: 'dist/tokens.json', content: JSON.stringify(tokens, null, 2) + '\n' },
];

const outputs = isCheck ? sourceOutputs : [...sourceOutputs, ...distOutputs];

let hasErrors = false;

for (const { path: relPath, content } of outputs) {
  const absPath = resolve(ROOT, relPath);

  if (isCheck) {
    if (!existsSync(absPath)) {
      console.error(`MISSING: ${relPath}`);
      hasErrors = true;
      continue;
    }
    const existing = readFileSync(absPath, 'utf-8');
    if (existing !== content) {
      console.error(`OUT OF DATE: ${relPath}`);
      hasErrors = true;
    } else {
      console.log(`OK: ${relPath}`);
    }
  } else {
    mkdirSync(dirname(absPath), { recursive: true });
    writeFileSync(absPath, content, 'utf-8');
    console.log(`Generated: ${relPath}`);
  }
}

if (isCheck && hasErrors) {
  console.error('\nToken files are out of date. Run: npm run build:tokens');
  process.exit(1);
}

if (!isCheck) {
  console.log('\nAll token files generated successfully.');
}
