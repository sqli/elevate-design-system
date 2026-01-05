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
    // Primary colors (main nodes)
    primaryColor: '#0F0E2B',
    primaryTextColor: '#FFFAF0',
    primaryBorderColor: '#0F0E2B',

    // Secondary colors (secondary nodes)
    secondaryColor: '#1F24E9',
    secondaryTextColor: '#FFFAF0',
    secondaryBorderColor: '#1F24E9',

    // Tertiary colors (highlights, accents)
    tertiaryColor: '#6DA5FF',
    tertiaryTextColor: '#0F0E2B',
    tertiaryBorderColor: '#6DA5FF',

    // Background and general text
    background: '#FFFAF0',
    mainBkg: '#FFFAF0',
    textColor: '#0F0E2B',
    lineColor: '#0F0E2B',

    // Typography
    fontFamily: '"TWK Everett", system-ui, -apple-system, sans-serif',
    fontSize: '14px',

    // Node styling
    nodeBorder: '#0F0E2B',
    nodeTextColor: '#0F0E2B',

    // Edge/Arrow styling
    edgeLabelBackground: '#FFFAF0',

    // Sequence diagram
    actorBkg: '#FFFAF0',
    actorBorder: '#0F0E2B',
    actorTextColor: '#0F0E2B',
    signalColor: '#0F0E2B',
    signalTextColor: '#0F0E2B',
    activationBkgColor: '#6DA5FF',
    activationBorderColor: '#1F24E9',

    // Notes
    noteBkgColor: '#6DA5FF',
    noteTextColor: '#0F0E2B',
    noteBorderColor: '#1F24E9',

    // Class diagram - with filled backgrounds
    classText: '#0F0E2B',
    classTitleBkg: '#FFFAF0',
    classLabelBkg: '#FFFAF0',

    // State diagram
    labelColor: '#0F0E2B',

    // Git graph
    git0: '#0F0E2B',
    git1: '#1F24E9',
    git2: '#6DA5FF',
    git3: '#0F0E2B',
    gitBranchLabel0: '#FFFAF0',
    gitBranchLabel1: '#FFFAF0',
    gitBranchLabel2: '#0F0E2B',

    // Gantt
    sectionBkgColor: '#FFFAF0',
    altSectionBkgColor: '#F0EBE1',
    gridColor: '#0F0E2B',
    todayLineColor: '#1F24E9',

    // ER diagram
    attributeBackgroundColorOdd: '#FFFAF0',
    attributeBackgroundColorEven: '#F0EBE1',

    // Pie Chart styling - no border
    pieStrokeColor: 'transparent',
    pieStrokeWidth: '0',
    pieOuterStrokeWidth: '0',
    pieOpacity: '1',
    pieLegendTextColor: '#0F0E2B',
    pieSectionTextColor: '#FFFAF0',

    // Timeline - Cobalt accent on Cream background (matching SQLI brand)
    // Pie Chart - Blue gradient
    cScale0: '#1F24E9',
    cScaleLabel0: '#FFFAF0',
    cScale1: '#1F24E9',
    cScaleLabel1: '#FFFAF0',
    cScale2: '#1F24E9',
    cScaleLabel2: '#FFFAF0',
    cScale3: '#1F24E9',
    cScaleLabel3: '#FFFAF0',
    cScale4: '#6DA5FF',
    cScaleLabel4: '#0F0E2B',
    cScale5: '#6DA5FF',
    cScaleLabel5: '#0F0E2B',
    cScale6: '#0F0E2B',
    cScaleLabel6: '#FFFAF0',
    cScale7: '#0F0E2B',
    cScaleLabel7: '#FFFAF0',
    cScale8: '#A8CBFF',
    cScaleLabel8: '#0F0E2B',
    cScale9: '#A8CBFF',
    cScaleLabel9: '#0F0E2B',
    cScale10: '#3A4FD9',
    cScaleLabel10: '#FFFAF0',
    cScale11: '#5B8AE8',
    cScaleLabel11: '#FFFAF0',
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
    // Primary colors (main nodes)
    primaryColor: '#6DA5FF',
    primaryTextColor: '#0F0E2B',
    primaryBorderColor: '#6DA5FF',

    // Secondary colors
    secondaryColor: '#FFFAF0',
    secondaryTextColor: '#0F0E2B',
    secondaryBorderColor: '#FFFAF0',

    // Tertiary colors
    tertiaryColor: '#1F24E9',
    tertiaryTextColor: '#FFFAF0',
    tertiaryBorderColor: '#1F24E9',

    // Background and general text
    background: '#0F0E2B',
    mainBkg: '#0F0E2B',
    textColor: '#FFFAF0',
    lineColor: '#FFFAF0',

    // Typography
    fontFamily: '"TWK Everett", system-ui, -apple-system, sans-serif',
    fontSize: '14px',

    // Node styling
    nodeBorder: '#6DA5FF',
    nodeTextColor: '#FFFAF0',

    // Edge/Arrow styling
    edgeLabelBackground: '#0F0E2B',

    // Sequence diagram
    actorBkg: '#0F0E2B',
    actorBorder: '#6DA5FF',
    actorTextColor: '#FFFAF0',
    signalColor: '#FFFAF0',
    signalTextColor: '#FFFAF0',
    activationBkgColor: '#1F24E9',
    activationBorderColor: '#6DA5FF',

    // Notes
    noteBkgColor: '#1F24E9',
    noteTextColor: '#FFFAF0',
    noteBorderColor: '#6DA5FF',

    // Class diagram
    classText: '#FFFAF0',

    // State diagram
    labelColor: '#FFFAF0',

    // Git graph
    git0: '#6DA5FF',
    git1: '#FFFAF0',
    git2: '#1F24E9',
    git3: '#6DA5FF',
    gitBranchLabel0: '#0F0E2B',
    gitBranchLabel1: '#0F0E2B',
    gitBranchLabel2: '#FFFAF0',

    // Gantt
    sectionBkgColor: '#0F0E2B',
    altSectionBkgColor: '#1a1940',
    gridColor: '#FFFAF0',
    todayLineColor: '#6DA5FF',

    // ER diagram
    attributeBackgroundColorOdd: '#0F0E2B',
    attributeBackgroundColorEven: '#1a1940',

    // Pie Chart styling
    pieStrokeColor: '#0F0E2B',
    pieStrokeWidth: '3px',
    pieOuterStrokeWidth: '3px',
    pieOpacity: '1',
    pieLegendTextColor: '#FFFAF0',
    pieSectionTextColor: '#0F0E2B',

    // Timeline & Pie - cScale for background, cScaleLabel for text
    // Blue gradient from Sky to lighter tones
    cScale0: '#6DA5FF',
    cScaleLabel0: '#0F0E2B',
    cScale1: '#A8CBFF',
    cScaleLabel1: '#0F0E2B',
    cScale2: '#FFFAF0',
    cScaleLabel2: '#0F0E2B',
    cScale3: '#5B8AE8',
    cScaleLabel3: '#FFFAF0',
    cScale4: '#8AB4F5',
    cScaleLabel4: '#0F0E2B',
    cScale5: '#B8D4FF',
    cScaleLabel5: '#0F0E2B',
    cScale6: '#4A6FE0',
    cScaleLabel6: '#FFFAF0',
    cScale7: '#7AA0F0',
    cScaleLabel7: '#0F0E2B',
    cScale8: '#C8DEFF',
    cScaleLabel8: '#0F0E2B',
    cScale9: '#3A4FD9',
    cScaleLabel9: '#FFFAF0',
    cScale10: '#9BBEF8',
    cScaleLabel10: '#0F0E2B',
    cScale11: '#D8E8FF',
    cScaleLabel11: '#0F0E2B',
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

  classDiagram: `classDiagram
    class Component {
        +String id
        +String className
        +render() HTMLElement
        +destroy() void
    }

    class Button {
        +String variant
        +String size
        +Boolean disabled
        +onClick() void
    }

    class Card {
        +String title
        +String image
        +renderBody() HTMLElement
    }

    class Modal {
        +Boolean isOpen
        +open() void
        +close() void
    }

    Component <|-- Button
    Component <|-- Card
    Component <|-- Modal
    Card "1" *-- "0..*" Button : contains`,

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

  erDiagram: `erDiagram
    USER ||--o{ ORDER : places
    USER {
        int id PK
        string email
        string name
        datetime created_at
    }
    ORDER ||--|{ ORDER_ITEM : contains
    ORDER {
        int id PK
        int user_id FK
        string status
        decimal total
        datetime created_at
    }
    ORDER_ITEM }|--|| PRODUCT : references
    ORDER_ITEM {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        decimal price
    }
    PRODUCT {
        int id PK
        string name
        string description
        decimal price
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

  gantt: `gantt
    title Sprint 1 - Design System
    dateFormat YYYY-MM-DD
    section Design
        Token Definition     :a1, 2025-01-01, 5d
        Component Specs      :a2, after a1, 5d
    section Development
        Core Components      :b1, after a2, 10d
        Form Components      :b2, after b1, 7d
        Layout Components    :b3, after b1, 5d
    section Testing
        Unit Tests           :c1, after b2, 5d
        Integration Tests    :c2, after c1, 3d
    section Release
        Documentation        :d1, after c2, 3d
        Deployment           :d2, after d1, 1d`,

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
      code: `<!-- Mermaid Diagram Definition -->
<pre class="mermaid">
${definition}
</pre>

<!-- Usage with SQLI Design System classes -->
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
