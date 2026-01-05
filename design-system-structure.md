# Elevate Design System — Information Architecture (Storybook)

> Scope: Tailwind-based Design System documented in Storybook.
> Principles:
>
> - Single vocabulary (no "atoms/molecules" in headings)
> - Recipes are **doc-only examples** (non-exported, best-effort, non-contractual)
> - Clear separation between **Primitives**, **Compositions (UI vs Domain)**, and **Recipes**

---

## 0. Governance

### Welcome

- Describe founding principles

- SQLI DS Objectives:
  - Ensure UI consistency
  - Standardize project production (by employees and external contractors)
  - Promote reflection on standardizing structures to adapt to client/project DS in the future
  - Enable sustainable management over several years (minor adjustments; look'n feel change: easier rebranding)
  - Propose standard responsive behaviors
  - Increase quality (accessibility / frontend performance)
  - Facilitate technical onboarding and DX within projects that will rely on this DS

### Contribution Guide

- Where to place a new component (Foundation vs Primitive vs Composition vs Recipe)
- API rules & naming conventions
- Required states (hover/focus/disabled/loading/error)
- Accessibility checklist
- Responsive expectations
- Documentation requirements (Docs/MDX, examples, do/don't)
- Review process (owners, approvals, design sign-off)

### Stability & Versioning

- Maturity tags (experimental / beta / stable / deprecated)
- Semantic versioning rules
- Backward compatibility rules (what counts as breaking)

### QA & Testing

- Visual regression strategy (Storybook + snapshots)
- Coverage expectations (Primitives + Compositions)
- Accessibility testing (ruleset + tooling)
- Cross-browser checks (baseline)
- Release checklist

### Changelog

- Changelog policy (Keep a Changelog, structure, tags)
- Releases
  - Unreleased
  - vX.Y.Z
  - vX.Y.Z
  - ...

---

## 1. Foundations

- Colors
  - Palette (Brand / Neutral / Semantic)
  - Contrast & Accessibility
  - Usage guidelines (tokens → components mapping)
- Typography
  - Font families
  - Type scale
  - Text styles (headings, body, captions)
  - Content typography (prose rules)
- Grid & Spacing
  - Breakpoints
  - Containers
  - Spacing scale
  - Layout rules (rhythm, gutters)
- Icons
  - Icon set
  - Sizing rules
  - Usage & do/don't
- Motion
  - Easing & duration tokens
  - Transitions guidelines
  - Micro-interactions patterns
- Theming
  - Token model (semantic vs raw)
  - Theme switching strategy
  - Dark mode
  - Migration strategy (future re-theme)

---

## 2. Primitives

## Typography Primitives

- Headings
- Text

### Actions

- Button
- IconButton
- Link
- LinkButton
- SplitButton
- ButtonGroup

### Forms

- Label
- HelperText
- ErrorMessage
- Input
- Textarea
- Select
- Combobox
- Checkbox
- Radio
- Switch / Toggle
- Slider
- DatePicker
- FileUpload
- SearchInput

### Navigation & Wayfinding

- Breadcrumb
- Tabs
- Pagination
- Stepper
- NavigationMenu (top nav primitives)
- SidebarNav primitives (items, groups)
- AnchorLink (in-page navigation)

### Data Display

- Avatar
- Badge
- Tag / Chip
- Tooltip
- Popover
- Card
- Divider
- Table
- Stat
- Icon

### Feedback

- Alert
- Toast
- Progress
- Spinner / Loader

### Layout Primitives

- Container
- Stack
- Inline
- Grid
- Columns
- AspectRatio
- Spacer
- VisuallyHidden
- Surface (elevation/background)
- ScrollArea

---

## 3. Compositions

> Compositions are built from primitives. They are grouped as:
>
> - **UI Compositions**: domain-agnostic assemblies reusable across products.
> - **Domain Compositions**: business/editorial assemblies admitted only if shared across multiple apps/sites.

### 3.1 UI Compositions

#### Forms

- FormField (Label + Control + Hint/Error)
- FieldsetGroup (legend + grouped controls)
- InputGroup (input + addon + action)
- SearchBar (search + clear + submit)
- FilterBar (chips/selects + reset)
- InlineValidation pattern (error summary + field focus)

#### Navigation & Shell

- HeaderShell (logo + nav + actions)
- SidebarShell (nav + footer zone)
- PageHeader (title + subtitle + actions)
- BreadcrumbBar (breadcrumb + actions)
- TabsHeader (tabs + count + actions)
- PaginationBar (pager + page size)

#### Data Display

- DataTableToolbar (search + filters + export)
- TableRowActions (kebab + actions)
- SummaryRow (label + value + delta)
- ListItem (title + meta + right action)
- StatsRow (multiple stats)
- EmptyStateSection (empty + guidance + CTA)

#### Feedback & Status

- ToastStack (stacking and placements)
- AlertSection (alert + actions + doc link)
- LoadingOverlay (blocking/non-blocking)
- SkeletonLayout (page-level skeletons)
- InlineNotice (context notice)

#### Overlays

- ConfirmDialog (title + body + actions)
- DrawerPanel (header + body + footer)
- PopoverMenu (trigger + menu + keyboard nav)
- ContextMenu pattern (right-click / kebab)

#### Content & Editorial

- RichTextBlock (prose, lists, quotes, links)
- MediaBlock (image/video + caption)
- QuoteBlock (quote + author)
- CalloutBlock (note/tip/warning)
- References / Footnotes (optional)

#### Code & Technical Content

- InlineCode (inline in prose)
- CodeBlock (single-language snippet)
- CodeTabs (multi-language switch: PHP/JS/Java/Bash/CSS…)
- CodeToolbar (copy, wrap, line numbers)
- DiffBlock (before/after)
- TerminalBlock (prompt + output)
- FileTree (files + selection)

#### Blog & Article

- ContentMeta (author, date, reading time, tags)
- TagList (with overflow)
- CategoryPills (category navigation)
- ShareBar (copy link + share)
- ReadingProgress (top progress bar)
- TableOfContents (anchors + active section)
- RelatedContent (list/grid)
- AuthorBio (photo + bio + links)
- NewsletterCta (subscribe block)

#### Cards & Grids

- FeatureCard (icon + title + description)
- InfoCard (title + value + meta)
- MediaCard (image + content)
- CardGrid (responsive grid variants)
- MasonryGrid (optional)

---

### 3.2 Domain Compositions

#### Corporate Content

- HeroCorporate (headline + CTA + media)
- ServiceTeaserGrid (offer tiles)
- CaseStudyTeaser (client + outcome + CTA)
- KeyFiguresStrip (numbers row)
- LogoWall / SocialProofStrip
- ContactCtaSection (contact entry)

#### Offers / Products (Presentation)

- OfferCard (offer teaser)
- OfferGrid / OfferList
- OfferHero (offer page header)
- OfferComparisonTable (plans comparison)
- OfferFAQSection (accordion)

#### Portfolio (Cases / Projects)

- PortfolioGrid / PortfolioList
- PortfolioFeaturedHero (featured case)
- PortfolioFilters (industry, service, tech)
- CaseStudyResults (KPIs, outcomes)
- CaseStudyTechStack (stack tags + notes)
- CaseStudyTimeline (milestones)

#### Experts & Thought Leadership

- ExpertHeader (name, role, expertise, links)
- ContactExpertCta

#### Editorial / Blog Domain

- PostBodyLayout (content column + aside)

#### Careers / Jobs

- JobList (with sorting)
- JobDescriptionLayout (content + apply aside)
- ApplyCtaSection (apply + referral + contact)

#### HR Internal Apps (Performance, Time, Training, Skills)

> Domain compositions intended for internal HR platforms, admitted only if shared across multiple internal apps/teams.

- Performance Reviews
  - CompetencyEvaluationSection (ratings + comments)
- Training (Calendar & Registration)
  - TrainingCalendarView (month/week list view)
- Skills Management (Hard & Soft)
  - SkillProfileHeader (role + target levels)
  - SkillGapSummary (current vs target)
  - CompetencyRadar (optional visualization)

---
