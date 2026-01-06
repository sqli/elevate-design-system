/**
 * @component Mermaid
 * @description Mermaid diagram renderer with SQLI brand theming.
 * Supports flowcharts, sequence diagrams, class diagrams, git graphs, timelines, and more.
 * @see https://mermaid.js.org/
 */

import mermaid from 'mermaid';

// =============================================================================
// SQLI Theme Configuration
// =============================================================================

/**
 * SQLI Light Theme for Mermaid
 * Uses Midnight as primary, Cobalt as secondary, Sky as tertiary
 * Background: Cream
 */
const sqliLightTheme = {
  theme: 'base',
  themeVariables: {
    // ==========================================================================
    // Base colors - Consistent across all diagrams
    // ==========================================================================
    background: '#FFFAF0',
    mainBkg: '#FFFAF0',
    textColor: '#0F0E2B',
    lineColor: '#0F0E2B',
    fontFamily: '"TWK Everett", system-ui, -apple-system, sans-serif',
    fontSize: '14px',

    // Primary - Cobalt filled (actors, decisions, main elements)
    primaryColor: '#1F24E9',
    primaryTextColor: '#FFFFFF',
    primaryBorderColor: '#1F24E9',

    // Secondary - Sky Blue filled (processes, secondary elements)
    secondaryColor: '#6DA5FF',
    secondaryTextColor: '#0F0E2B',
    secondaryBorderColor: '#1F24E9',

    // Tertiary - White with border (standard elements)
    tertiaryColor: '#FFFFFF',
    tertiaryTextColor: '#0F0E2B',
    tertiaryBorderColor: '#0F0E2B',

    // ==========================================================================
    // Flowchart - Colorful nodes by type
    // ==========================================================================
    nodeBkg: '#FFFFFF',
    nodeBorder: '#0F0E2B',
    nodeTextColor: '#0F0E2B',
    edgeLabelBackground: '#FFFAF0',
    clusterBkg: 'rgba(109, 165, 255, 0.15)',
    clusterBorder: '#1F24E9',
    defaultLinkColor: '#0F0E2B',

    // Flowchart node colors (fill0-7 for different node types)
    fill0: '#1F24E9', // Decision nodes - Cobalt
    fill1: '#6DA5FF', // Process nodes - Sky
    fill2: '#FFFFFF', // Standard nodes - White
    fill3: 'rgba(109, 165, 255, 0.3)', // Alt nodes - Sky light
    fill4: '#0F0E2B', // Terminal nodes - Midnight
    fill5: 'rgba(31, 36, 233, 0.2)', // Background nodes - Cobalt light
    fill6: '#FFFAF0', // Container nodes - Cream
    fill7: 'rgba(109, 165, 255, 0.5)', // Highlight nodes - Sky medium

    // ==========================================================================
    // Sequence Diagram - Actors filled for visibility
    // ==========================================================================
    actorBkg: '#1F24E9',
    actorBorder: '#1F24E9',
    actorTextColor: '#FFFFFF',
    actorLineColor: '#0F0E2B',
    signalColor: '#0F0E2B',
    signalTextColor: '#0F0E2B',
    labelBoxBkgColor: '#FFFFFF',
    labelBoxBorderColor: '#0F0E2B',
    labelTextColor: '#0F0E2B',
    loopTextColor: '#0F0E2B',
    activationBkgColor: '#6DA5FF',
    activationBorderColor: '#1F24E9',
    sequenceNumberColor: '#FFFFFF',
    noteBkgColor: 'rgba(109, 165, 255, 0.25)',
    noteTextColor: '#0F0E2B',
    noteBorderColor: '#1F24E9',

    // ==========================================================================
    // Class Diagram - Clear class boxes with SQLI styling
    // ==========================================================================
    classText: '#0F0E2B',
    titleColor: '#0F0E2B',
    // Class label (header) styling
    labelBackground: '#1F24E9',
    // Divider line
    dividerStroke: '#0F0E2B',
    // Member styling
    memberColor: '#0F0E2B',
    // Inheritance arrow
    relationshipColor: '#0F0E2B',
    relationshipLine: '#0F0E2B',
    // Border
    stroke: '#0F0E2B',

    // ==========================================================================
    // State Diagram - States with visual hierarchy
    // ==========================================================================
    labelColor: '#0F0E2B',
    altBackground: 'rgba(109, 165, 255, 0.1)',
    // State colors
    compositeBackground: 'rgba(109, 165, 255, 0.08)',
    compositeBorder: '#1F24E9',
    compositeTitleBackground: '#1F24E9',
    innerEndBackground: '#0F0E2B',
    specialStateColor: '#1F24E9',

    // ==========================================================================
    // ER Diagram - Entities with alternating rows
    // ==========================================================================
    entityBkg: '#FFFFFF',
    entityBorder: '#0F0E2B',
    attributeBackgroundColorOdd: 'rgba(109, 165, 255, 0.15)',
    attributeBackgroundColorEven: '#FFFFFF',
    // Relation line colors
    relationColor: '#0F0E2B',
    relationLabelColor: '#0F0E2B',
    relationLabelBackground: '#FFFAF0',

    // ==========================================================================
    // Git Graph - Colorful branches
    // ==========================================================================
    git0: '#1F24E9',
    git1: '#6DA5FF',
    git2: '#0F0E2B',
    git3: 'rgba(31, 36, 233, 0.7)',
    git4: 'rgba(109, 165, 255, 0.8)',
    git5: 'rgba(31, 36, 233, 0.5)',
    git6: 'rgba(109, 165, 255, 0.6)',
    git7: 'rgba(31, 36, 233, 0.35)',
    gitBranchLabel0: '#FFFFFF',
    gitBranchLabel1: '#0F0E2B',
    gitBranchLabel2: '#FFFFFF',
    gitBranchLabel3: '#FFFFFF',
    gitBranchLabel4: '#0F0E2B',
    gitInv0: '#FFFFFF',
    gitInv1: '#FFFFFF',
    gitInv2: '#FFFFFF',
    commitLabelColor: '#0F0E2B',
    commitLabelBackground: '#FFFFFF',
    commitLabelFontSize: '12px',
    tagLabelColor: '#FFFFFF',
    tagLabelBackground: '#1F24E9',
    tagLabelBorder: '#1F24E9',

    // ==========================================================================
    // Gantt Chart - Tasks with status colors
    // ==========================================================================
    sectionBkgColor: 'rgba(109, 165, 255, 0.08)',
    sectionBkgColor2: 'rgba(109, 165, 255, 0.15)',
    altSectionBkgColor: 'rgba(31, 36, 233, 0.05)',
    gridColor: 'rgba(0, 0, 0, 0.1)',
    todayLineColor: '#1F24E9',
    // Task styling
    taskBkgColor: '#1F24E9',
    taskTextColor: '#FFFFFF',
    taskTextDarkColor: '#0F0E2B',
    taskTextLightColor: '#FFFFFF',
    taskBorderColor: '#1F24E9',
    taskTextOutsideColor: '#0F0E2B',
    // Active tasks - Sky Blue
    activeTaskBkgColor: '#6DA5FF',
    activeTaskBorderColor: '#1F24E9',
    // Done tasks - Faded Cobalt
    doneTaskBkgColor: 'rgba(31, 36, 233, 0.4)',
    doneTaskBorderColor: '#1F24E9',
    // Critical tasks - Darker
    critBkgColor: '#0F0E2B',
    critBorderColor: '#0F0E2B',
    // Milestone
    milestoneColor: '#0F0E2B',

    // ==========================================================================
    // Pie Chart - Distinct sections
    // ==========================================================================
    pieStrokeColor: '#FFFAF0',
    pieStrokeWidth: '2px',
    pieOuterStrokeWidth: '0',
    pieOpacity: '1',
    pieLegendTextColor: '#0F0E2B',
    pieTitleTextColor: '#0F0E2B',
    pieSectionTextColor: '#FFFFFF',
    pieLegendTextSize: '14px',
    // Pie slices with good contrast
    pie1: '#1F24E9',
    pie2: '#6DA5FF',
    pie3: '#0F0E2B',
    pie4: 'rgba(31, 36, 233, 0.7)',
    pie5: 'rgba(109, 165, 255, 0.8)',
    pie6: 'rgba(31, 36, 233, 0.5)',
    pie7: 'rgba(109, 165, 255, 0.6)',
    pie8: 'rgba(31, 36, 233, 0.35)',

    // ==========================================================================
    // Timeline - Periods with visual distinction
    // ==========================================================================
    cScale0: '#1F24E9',
    cScaleLabel0: '#FFFFFF',
    cScale1: '#6DA5FF',
    cScaleLabel1: '#0F0E2B',
    cScale2: '#0F0E2B',
    cScaleLabel2: '#FFFFFF',
    cScale3: 'rgba(31, 36, 233, 0.7)',
    cScaleLabel3: '#FFFFFF',
    cScale4: 'rgba(109, 165, 255, 0.85)',
    cScaleLabel4: '#0F0E2B',
    cScale5: 'rgba(31, 36, 233, 0.5)',
    cScaleLabel5: '#FFFFFF',
    cScale6: 'rgba(109, 165, 255, 0.65)',
    cScaleLabel6: '#0F0E2B',
    cScale7: 'rgba(31, 36, 233, 0.35)',
    cScaleLabel7: '#FFFFFF',
    cScale8: 'rgba(109, 165, 255, 0.45)',
    cScaleLabel8: '#0F0E2B',
    cScale9: '#1F24E9',
    cScaleLabel9: '#FFFFFF',
    cScale10: '#6DA5FF',
    cScaleLabel10: '#0F0E2B',
    cScale11: '#0F0E2B',
    cScaleLabel11: '#FFFFFF',
  },
};

/**
 * SQLI Dark Theme for Mermaid
 * Uses Sky as primary, Cream as secondary, Cobalt as tertiary
 * Background: Midnight
 */
const sqliDarkTheme = {
  theme: 'base',
  themeVariables: {
    // ==========================================================================
    // Base colors - Consistent across all diagrams (Dark Mode)
    // ==========================================================================
    background: '#0F0E2B',
    mainBkg: '#0F0E2B',
    textColor: '#FFFAF0',
    lineColor: '#6DA5FF',
    fontFamily: '"TWK Everett", system-ui, -apple-system, sans-serif',
    fontSize: '14px',

    // Primary - Sky filled (actors, decisions, main elements)
    primaryColor: '#6DA5FF',
    primaryTextColor: '#0F0E2B',
    primaryBorderColor: '#6DA5FF',

    // Secondary - Cobalt accent (processes, secondary elements)
    secondaryColor: 'rgba(31, 36, 233, 0.5)',
    secondaryTextColor: '#FFFAF0',
    secondaryBorderColor: '#6DA5FF',

    // Tertiary - Transparent with border (standard elements)
    tertiaryColor: 'rgba(109, 165, 255, 0.15)',
    tertiaryTextColor: '#FFFAF0',
    tertiaryBorderColor: '#6DA5FF',

    // ==========================================================================
    // Flowchart - Colorful nodes by type (Dark Mode)
    // ==========================================================================
    nodeBkg: 'rgba(109, 165, 255, 0.2)',
    nodeBorder: '#6DA5FF',
    nodeTextColor: '#FFFAF0',
    edgeLabelBackground: '#0F0E2B',
    clusterBkg: 'rgba(109, 165, 255, 0.12)',
    clusterBorder: '#6DA5FF',
    defaultLinkColor: '#6DA5FF',

    // Flowchart node colors (fill0-7 for different node types)
    fill0: '#6DA5FF', // Decision nodes - Sky
    fill1: 'rgba(31, 36, 233, 0.6)', // Process nodes - Cobalt
    fill2: 'rgba(109, 165, 255, 0.2)', // Standard nodes - Sky light
    fill3: 'rgba(109, 165, 255, 0.35)', // Alt nodes - Sky medium
    fill4: '#FFFAF0', // Terminal nodes - Cream
    fill5: 'rgba(31, 36, 233, 0.3)', // Background nodes - Cobalt light
    fill6: 'rgba(109, 165, 255, 0.1)', // Container nodes
    fill7: 'rgba(109, 165, 255, 0.5)', // Highlight nodes - Sky

    // ==========================================================================
    // Sequence Diagram - Actors filled for visibility (Dark Mode)
    // ==========================================================================
    actorBkg: '#6DA5FF',
    actorBorder: '#6DA5FF',
    actorTextColor: '#0F0E2B',
    actorLineColor: '#6DA5FF',
    signalColor: '#6DA5FF',
    signalTextColor: '#FFFAF0',
    labelBoxBkgColor: 'rgba(109, 165, 255, 0.15)',
    labelBoxBorderColor: '#6DA5FF',
    labelTextColor: '#FFFAF0',
    loopTextColor: '#FFFAF0',
    activationBkgColor: 'rgba(109, 165, 255, 0.4)',
    activationBorderColor: '#6DA5FF',
    sequenceNumberColor: '#0F0E2B',
    noteBkgColor: 'rgba(109, 165, 255, 0.3)',
    noteTextColor: '#FFFAF0',
    noteBorderColor: '#6DA5FF',

    // ==========================================================================
    // Class Diagram - Clear class boxes with SQLI styling (Dark Mode)
    // ==========================================================================
    classText: '#FFFAF0',
    titleColor: '#FFFAF0',
    // Class label (header) styling
    labelBackground: '#6DA5FF',
    // Divider line
    dividerStroke: '#6DA5FF',
    // Member styling
    memberColor: '#FFFAF0',
    // Inheritance arrow
    relationshipColor: '#6DA5FF',
    relationshipLine: '#6DA5FF',
    // Border
    stroke: '#6DA5FF',

    // ==========================================================================
    // State Diagram - States with visual hierarchy (Dark Mode)
    // ==========================================================================
    labelColor: '#FFFAF0',
    altBackground: 'rgba(109, 165, 255, 0.1)',
    // State colors
    compositeBackground: 'rgba(109, 165, 255, 0.08)',
    compositeBorder: '#6DA5FF',
    compositeTitleBackground: '#6DA5FF',
    innerEndBackground: '#FFFAF0',
    specialStateColor: '#6DA5FF',

    // ==========================================================================
    // ER Diagram - Entities with alternating rows (Dark Mode)
    // ==========================================================================
    entityBkg: 'rgba(109, 165, 255, 0.15)',
    entityBorder: '#6DA5FF',
    attributeBackgroundColorOdd: 'rgba(109, 165, 255, 0.18)',
    attributeBackgroundColorEven: 'rgba(109, 165, 255, 0.08)',
    // Relation line colors
    relationColor: '#6DA5FF',
    relationLabelColor: '#FFFAF0',
    relationLabelBackground: '#0F0E2B',

    // ==========================================================================
    // Git Graph - Colorful branches (Dark Mode)
    // ==========================================================================
    git0: '#6DA5FF',
    git1: '#FFFAF0',
    git2: 'rgba(109, 165, 255, 0.7)',
    git3: 'rgba(31, 36, 233, 0.8)',
    git4: 'rgba(109, 165, 255, 0.5)',
    git5: 'rgba(31, 36, 233, 0.6)',
    git6: 'rgba(109, 165, 255, 0.35)',
    git7: 'rgba(31, 36, 233, 0.4)',
    gitBranchLabel0: '#0F0E2B',
    gitBranchLabel1: '#0F0E2B',
    gitBranchLabel2: '#0F0E2B',
    gitBranchLabel3: '#FFFAF0',
    gitBranchLabel4: '#0F0E2B',
    gitInv0: '#0F0E2B',
    gitInv1: '#0F0E2B',
    gitInv2: '#0F0E2B',
    commitLabelColor: '#FFFAF0',
    commitLabelBackground: 'rgba(109, 165, 255, 0.2)',
    commitLabelFontSize: '12px',
    tagLabelColor: '#0F0E2B',
    tagLabelBackground: '#6DA5FF',
    tagLabelBorder: '#6DA5FF',

    // ==========================================================================
    // Gantt Chart - Tasks with status colors (Dark Mode)
    // ==========================================================================
    sectionBkgColor: 'rgba(109, 165, 255, 0.08)',
    sectionBkgColor2: 'rgba(109, 165, 255, 0.15)',
    altSectionBkgColor: 'rgba(109, 165, 255, 0.05)',
    gridColor: 'rgba(255, 250, 240, 0.1)',
    todayLineColor: '#6DA5FF',
    // Task styling
    taskBkgColor: '#6DA5FF',
    taskTextColor: '#0F0E2B',
    taskTextDarkColor: '#FFFAF0',
    taskTextLightColor: '#0F0E2B',
    taskBorderColor: '#6DA5FF',
    taskTextOutsideColor: '#FFFAF0',
    // Active tasks
    activeTaskBkgColor: 'rgba(109, 165, 255, 0.6)',
    activeTaskBorderColor: '#6DA5FF',
    // Done tasks
    doneTaskBkgColor: 'rgba(109, 165, 255, 0.35)',
    doneTaskBorderColor: '#6DA5FF',
    // Critical tasks
    critBkgColor: '#FFFAF0',
    critBorderColor: '#FFFAF0',
    // Milestone
    milestoneColor: '#6DA5FF',

    // ==========================================================================
    // Pie Chart - Distinct sections (Dark Mode)
    // ==========================================================================
    pieStrokeColor: '#0F0E2B',
    pieStrokeWidth: '2px',
    pieOuterStrokeWidth: '0',
    pieOpacity: '1',
    pieLegendTextColor: '#FFFAF0',
    pieTitleTextColor: '#FFFAF0',
    pieSectionTextColor: '#0F0E2B',
    pieLegendTextSize: '14px',
    // Pie slices with good contrast on dark
    pie1: '#6DA5FF',
    pie2: '#FFFAF0',
    pie3: 'rgba(109, 165, 255, 0.7)',
    pie4: 'rgba(31, 36, 233, 0.8)',
    pie5: 'rgba(109, 165, 255, 0.5)',
    pie6: 'rgba(31, 36, 233, 0.6)',
    pie7: 'rgba(109, 165, 255, 0.35)',
    pie8: 'rgba(31, 36, 233, 0.4)',

    // ==========================================================================
    // Timeline - Periods with visual distinction (Dark Mode)
    // ==========================================================================
    cScale0: '#6DA5FF',
    cScaleLabel0: '#0F0E2B',
    cScale1: '#FFFAF0',
    cScaleLabel1: '#0F0E2B',
    cScale2: 'rgba(109, 165, 255, 0.75)',
    cScaleLabel2: '#0F0E2B',
    cScale3: 'rgba(31, 36, 233, 0.8)',
    cScaleLabel3: '#FFFFFF',
    cScale4: 'rgba(109, 165, 255, 0.55)',
    cScaleLabel4: '#0F0E2B',
    cScale5: 'rgba(31, 36, 233, 0.6)',
    cScaleLabel5: '#FFFFFF',
    cScale6: 'rgba(109, 165, 255, 0.4)',
    cScaleLabel6: '#0F0E2B',
    cScale7: 'rgba(31, 36, 233, 0.45)',
    cScaleLabel7: '#FFFFFF',
    cScale8: 'rgba(109, 165, 255, 0.3)',
    cScaleLabel8: '#0F0E2B',
    cScale9: '#6DA5FF',
    cScaleLabel9: '#0F0E2B',
    cScale10: 'rgba(109, 165, 255, 0.65)',
    cScaleLabel10: '#0F0E2B',
    cScale11: '#1F24E9',
    cScaleLabel11: '#FFFFFF',
  },
};

// =============================================================================
// Helper function to render Mermaid diagrams
// =============================================================================

let diagramCounter = 0;

/**
 * Generate a unique ID for each diagram
 */
const generateId = () =>
  `mermaid-${Math.random().toString(36).substring(2, 9)}-${++diagramCounter}`;

/**
 * Render a Mermaid diagram directly into a div element
 * This approach avoids conflicts by rendering into a specific target
 * @param {string} definition - The Mermaid diagram definition
 * @param {string} targetId - The target div ID to render into
 * @param {string} theme - 'light' or 'dark'
 */
const renderDiagram = async (definition, targetId, theme = 'light') => {
  const config = theme === 'dark' ? sqliDarkTheme : sqliLightTheme;

  // Reset and initialize Mermaid with fresh config
  mermaid.initialize({
    startOnLoad: false,
    suppressErrorRendering: true,
    securityLevel: 'loose',
    ...config,
    // Diagram-specific configurations to prevent text truncation
    er: {
      useMaxWidth: false,
      entityPadding: 15,
      minEntityWidth: 200,
      minEntityHeight: 75,
      fontSize: 14,
    },
    class: {
      useMaxWidth: false,
      defaultRenderer: 'dagre-wrapper',
    },
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
      padding: 15,
      nodeSpacing: 50,
      rankSpacing: 50,
    },
    sequence: {
      useMaxWidth: false,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      actorMargin: 50,
      width: 150,
      height: 65,
    },
    state: {
      useMaxWidth: false,
      padding: 8,
    },
    gantt: {
      useMaxWidth: false,
      barHeight: 30,
      barGap: 4,
      topPadding: 50,
      leftPadding: 120,
      gridLineStartPadding: 35,
      fontSize: 12,
      sectionFontSize: 14,
    },
  });

  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  // Skip if already rendered
  if (targetElement.querySelector('svg')) return;

  const uniqueId = generateId();

  try {
    const { svg } = await mermaid.render(uniqueId, definition.trim());
    targetElement.innerHTML = svg;
  } catch (error) {
    console.error('Mermaid rendering error:', error);
    targetElement.innerHTML = `<div class="text-error p-4">Error: ${error.message}</div>`;
  }
};

/**
 * Create HTML for a diagram story with a render target
 * @param {string} title - The diagram title
 * @param {string} definition - The Mermaid diagram definition
 * @param {string} theme - 'light' or 'dark'
 */
const createDiagramHtml = (title, definition, theme = 'light') => {
  const targetId = `diagram-${generateId()}`;
  const bgClass = theme === 'dark' ? 'bg-[#0F0E2B]' : 'bg-base-100';
  const textClass = theme === 'dark' ? 'text-[#FFFAF0]' : 'text-base-content';
  const dataTheme = theme === 'dark' ? 'data-theme="sqli-dark"' : '';

  // Schedule render after DOM is ready
  setTimeout(() => renderDiagram(definition, targetId, theme), 100);

  return `
  <div ${dataTheme} class="p-6 ${bgClass} rounded-lg">
    <h3 class="text-lg font-medium mb-4 ${textClass}">${title}</h3>
    <div id="${targetId}" class="mermaid-container"></div>
  </div>
`;
};

// =============================================================================
// Story Configuration
// =============================================================================

export default {
  title: 'SpecificComponents/Mermaid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Mermaid** diagram component with SQLI brand theming.

Mermaid is a JavaScript-based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

## Usage

\`\`\`html
<pre class="mermaid">
graph TD
    A[Start] --> B[Process]
    B --> C[End]
</pre>
\`\`\`

## Supported Diagram Types
- **Flowchart** - Process flows and decision trees
- **Sequence** - Interaction between systems/actors
- **Class** - UML class diagrams
- **State** - State machine diagrams
- **ER** - Entity relationship diagrams
- **GitGraph** - Git branch visualization
- **Timeline** - Chronological events
- **Gantt** - Project schedules

## SQLI Theme Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Midnight | \`#0F0E2B\` | Primary nodes, text |
| Cobalt | \`#1F24E9\` | Secondary nodes, interactions |
| Sky | \`#6DA5FF\` | Tertiary, highlights |
| Cream | \`#FFFAF0\` | Background |

## Integration
The Mermaid component uses the SQLI brand colors and TWK Everett font for consistent styling.
        `,
      },
    },
  },
};

// =============================================================================
// Diagram Definitions
// =============================================================================

const DIAGRAMS = {
  flowchart: `graph TD
    A[Client] -->|HTTP Request| B[API Gateway]
    B --> C{Authenticated?}
    C -->|Yes| D[Backend Service]
    C -->|No| E[401 Unauthorized]
    D --> F[(Database)]
    F --> G[Response]
    G --> B
    B -->|HTTP Response| A`,

  sequence: `sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as API
    participant D as Database

    U->>+F: Click Submit
    F->>+A: POST /api/data
    A->>+D: INSERT query
    D-->>-A: Success
    A-->>-F: 201 Created
    F-->>-U: Show success message

    Note over A,D: Data is validated before storage`,

  classDiagram: `%%{init: {"class": {"useMaxWidth": false}}}%%
classDiagram
    class Component {
        +String id
        +String className
        +render() HTML
        +destroy() void
    }

    class Button {
        +String variant
        +String size
        +bool disabled
        +onClick() void
    }

    class Card {
        +String title
        +String image
        +renderBody() HTML
    }

    class Modal {
        +bool isOpen
        +open() void
        +close() void
    }

    Component <|-- Button
    Component <|-- Card
    Component <|-- Modal
    Card "1" *-- "n" Button : has`,

  stateDiagram: `stateDiagram-v2
    [*] --> Draft
    Draft --> Pending: Submit
    Pending --> Approved: Approve
    Pending --> Rejected: Reject
    Approved --> InProgress: Start Work
    InProgress --> Review: Complete
    Review --> Approved: Revisions Needed
    Review --> Completed: Accept
    Rejected --> Draft: Revise
    Completed --> [*]`,

  erDiagram: `%%{init: {"er": {"layoutDirection": "TB", "minEntityWidth": 100, "entityPadding": 10}}}%%
erDiagram
    USER ||--o{ ORDER : places
    USER {
        int id PK
        string email
        string name
        date created
    }
    ORDER ||--|{ ITEM : contains
    ORDER {
        int id PK
        int userId FK
        string status
        float total
        date created
    }
    ITEM }|--|| PRODUCT : refs
    ITEM {
        int id PK
        int orderId FK
        int prodId FK
        int qty
        float price
    }
    PRODUCT {
        int id PK
        string name
        text desc
        float price
        int stock
    }`,

  gitGraph: `gitGraph
    commit id: "Initial"
    branch develop
    checkout develop
    commit id: "Setup"
    branch feature/auth
    checkout feature/auth
    commit id: "Add login"
    commit id: "Add register"
    checkout develop
    merge feature/auth tag: "v0.1.0"
    branch feature/dashboard
    checkout feature/dashboard
    commit id: "Add charts"
    commit id: "Add stats"
    checkout develop
    merge feature/dashboard
    checkout main
    merge develop tag: "v1.0.0"`,

  timeline: `timeline
    title SQLI Design System Evolution
    section 2024
        Q1 : Initial Setup
           : Tailwind CSS Integration
        Q2 : Component Library
           : Token System
        Q3 : DaisyUI Migration
           : Theme Configuration
        Q4 : v1.0 Release
           : Documentation
    section 2025
        Q1 : Specific Components
           : Mermaid Integration`,

  gantt: `%%{init: {"gantt": {"leftPadding": 150, "barHeight": 25, "fontSize": 12}}}%%
gantt
    title Sprint 1 - Design System
    dateFormat YYYY-MM-DD
    section Design
        Tokens           :a1, 2025-01-01, 5d
        Specs            :a2, after a1, 5d
    section Dev
        Core             :b1, after a2, 10d
        Forms            :b2, after b1, 7d
        Layout           :b3, after b1, 5d
    section Test
        Unit             :c1, after b2, 5d
        E2E              :c2, after c1, 3d
    section Release
        Docs             :d1, after c2, 3d
        Deploy           :d2, after d1, 1d`,

  pie: `%%{init: {"pie": {"textPosition": 0.75}}}%%
pie showData
    title Sales
    "Serie 1" : 31
    "Serie 2" : 12
    "Serie 3" : 5
    "Serie 4" : 8
    "Serie 5" : 13
    "Serie 6" : 11
    "Serie 7" : 15
    "Serie 8" : 5`,
};

// =============================================================================
// Stories
// =============================================================================

/**
 * Helper to create source code parameters for stories
 * Shows both the Mermaid definition and the HTML wrapper with DS classes
 */
const createSourceParams = (definition, title) => ({
  docs: {
    source: {
      code: `<!-- Usage with SQLI Design System classes -->
<div class="p-6 bg-base-100 rounded-lg">
  <h3 class="text-lg font-medium mb-4 text-base-content">${title}</h3>
  <div class="mermaid-container">
    <pre class="mermaid">
${definition}
    </pre>
  </div>
</div>`,
      language: 'html',
    },
  },
});

/**
 * Basic flowchart demonstrating the SQLI theme colors
 */
export const Flowchart = () =>
  createDiagramHtml('Flowchart - Architecture Example', DIAGRAMS.flowchart);
Flowchart.storyName = 'Flowchart';
Flowchart.parameters = createSourceParams(DIAGRAMS.flowchart, 'Flowchart - Architecture Example');

/**
 * Sequence diagram showing actor interactions
 */
export const SequenceDiagram = () =>
  createDiagramHtml('Sequence Diagram - API Flow', DIAGRAMS.sequence);
SequenceDiagram.storyName = 'Sequence Diagram';
SequenceDiagram.parameters = createSourceParams(DIAGRAMS.sequence, 'Sequence Diagram - API Flow');

/**
 * Class diagram for UML documentation
 */
export const ClassDiagram = () =>
  createDiagramHtml('Class Diagram - Component Architecture', DIAGRAMS.classDiagram);
ClassDiagram.storyName = 'Class Diagram';
ClassDiagram.parameters = createSourceParams(
  DIAGRAMS.classDiagram,
  'Class Diagram - Component Architecture'
);

/**
 * State diagram for workflow visualization
 */
export const StateDiagram = () =>
  createDiagramHtml('State Diagram - Order Workflow', DIAGRAMS.stateDiagram);
StateDiagram.storyName = 'State Diagram';
StateDiagram.parameters = createSourceParams(
  DIAGRAMS.stateDiagram,
  'State Diagram - Order Workflow'
);

/**
 * Entity Relationship diagram for database design
 */
export const ERDiagram = () =>
  createDiagramHtml('ER Diagram - Database Schema', DIAGRAMS.erDiagram);
ERDiagram.storyName = 'ER Diagram';
ERDiagram.parameters = createSourceParams(DIAGRAMS.erDiagram, 'ER Diagram - Database Schema');

/**
 * Git graph for version control visualization
 */
export const GitGraph = () => createDiagramHtml('Git Graph - Branch Strategy', DIAGRAMS.gitGraph);
GitGraph.storyName = 'Git Graph';
GitGraph.parameters = createSourceParams(DIAGRAMS.gitGraph, 'Git Graph - Branch Strategy');

/**
 * Timeline for chronological visualization
 */
export const Timeline = () => createDiagramHtml('Timeline - Project Milestones', DIAGRAMS.timeline);
Timeline.storyName = 'Timeline';
Timeline.parameters = createSourceParams(DIAGRAMS.timeline, 'Timeline - Project Milestones');

/**
 * Gantt chart for project planning
 */
export const GanttChart = () => createDiagramHtml('Gantt Chart - Sprint Planning', DIAGRAMS.gantt);
GanttChart.storyName = 'Gantt Chart';
GanttChart.parameters = createSourceParams(DIAGRAMS.gantt, 'Gantt Chart - Sprint Planning');

/**
 * Pie chart for data visualization
 */
export const PieChart = () => createDiagramHtml('Pie Chart - Sales Distribution', DIAGRAMS.pie);
PieChart.storyName = 'Pie Chart';
PieChart.parameters = createSourceParams(DIAGRAMS.pie, 'Pie Chart - Sales Distribution');

/**
 * All diagram types in dark mode
 */
export const DarkMode = () => {
  const flowId = `dark-flow-${generateId()}`;
  const seqId = `dark-seq-${generateId()}`;
  const gitId = `dark-git-${generateId()}`;

  setTimeout(() => {
    renderDiagram(
      'graph LR\n    A[Start] --> B{Decision}\n    B -->|Yes| C[Action 1]\n    B -->|No| D[Action 2]\n    C --> E[End]\n    D --> E',
      flowId,
      'dark'
    );
    renderDiagram(
      'sequenceDiagram\n    Alice->>Bob: Hello!\n    Bob-->>Alice: Hi there!\n    Alice->>Bob: How are you?\n    Bob-->>Alice: Great, thanks!',
      seqId,
      'dark'
    );
    renderDiagram(
      'gitGraph\n    commit\n    branch feature\n    commit\n    commit\n    checkout main\n    merge feature\n    commit',
      gitId,
      'dark'
    );
  }, 100);

  return `
  <div data-theme="sqli-dark" class="bg-[#0F0E2B] p-6 rounded-lg space-y-8">
    <h3 class="text-lg font-medium text-[#FFFAF0]">Dark Mode - All Diagram Types</h3>

    <div class="space-y-6">
      <div>
        <h4 class="text-sm font-medium text-[#FFFAF0]/70 mb-2">Flowchart</h4>
        <div id="${flowId}" class="mermaid-container"></div>
      </div>

      <div>
        <h4 class="text-sm font-medium text-[#FFFAF0]/70 mb-2">Sequence</h4>
        <div id="${seqId}" class="mermaid-container"></div>
      </div>

      <div>
        <h4 class="text-sm font-medium text-[#FFFAF0]/70 mb-2">Git Graph</h4>
        <div id="${gitId}" class="mermaid-container"></div>
      </div>
    </div>
  </div>
`;
};
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

/**
 * All supported diagram types in a gallery view
 */
export const AllDiagramTypes = () => {
  const ids = {
    flow: `gallery-flow-${generateId()}`,
    seq: `gallery-seq-${generateId()}`,
    cls: `gallery-cls-${generateId()}`,
    state: `gallery-state-${generateId()}`,
    er: `gallery-er-${generateId()}`,
    pie: `gallery-pie-${generateId()}`,
  };

  setTimeout(() => {
    renderDiagram('graph TD\n    A --> B --> C', ids.flow, 'light');
    renderDiagram('sequenceDiagram\n    A->>B: Message\n    B-->>A: Reply', ids.seq, 'light');
    renderDiagram('classDiagram\n    Animal <|-- Cat\n    Animal : +age int', ids.cls, 'light');
    renderDiagram('stateDiagram-v2\n    [*] --> Active\n    Active --> [*]', ids.state, 'light');
    renderDiagram('erDiagram\n    USER ||--o{ POST : writes', ids.er, 'light');
    renderDiagram('pie\n    "A" : 40\n    "B" : 30\n    "C" : 30', ids.pie, 'light');
  }, 100);

  return `
  <div class="p-6 bg-base-100 rounded-lg">
    <h3 class="text-lg font-medium mb-6 text-base-content">Diagram Types Gallery</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="card-title text-sm">Flowchart</h4>
          <div id="${ids.flow}" class="mermaid-container"></div>
        </div>
      </div>

      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="card-title text-sm">Sequence</h4>
          <div id="${ids.seq}" class="mermaid-container"></div>
        </div>
      </div>

      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="card-title text-sm">Class</h4>
          <div id="${ids.cls}" class="mermaid-container"></div>
        </div>
      </div>

      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="card-title text-sm">State</h4>
          <div id="${ids.state}" class="mermaid-container"></div>
        </div>
      </div>

      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="card-title text-sm">ER Diagram</h4>
          <div id="${ids.er}" class="mermaid-container"></div>
        </div>
      </div>

      <div class="card bg-base-200">
        <div class="card-body">
          <h4 class="card-title text-sm">Pie Chart</h4>
          <div id="${ids.pie}" class="mermaid-container"></div>
        </div>
      </div>
    </div>
  </div>
`;
};
AllDiagramTypes.storyName = 'All Diagram Types';
