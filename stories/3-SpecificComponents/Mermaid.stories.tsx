/**
 * @component Mermaid Diagrams
 * @description Mermaid diagram rendering with SQLI brand theming (DTCG tokens).
 *
 * The theme is generated from `src/tokens/tokens.json` and exported via
 * `@sqli/elevate-design-system/charts` for use in any project.
 *
 * @see https://mermaid.js.org/
 */

import React, { useEffect, useRef, useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import mermaid from 'mermaid';
import {
  mermaidBaseConfig,
  mermaidLightTheme,
  mermaidDarkTheme,
} from '../../src/charts/sqli-mermaid-theme.js';
import { DarkModeWrapper, darkModeParameters } from '../utils/story-helpers';

// =============================================================================
// MermaidDiagram component (Storybook-only, not exported from the library)
// =============================================================================

/** Track last theme to avoid redundant mermaid.initialize() calls */
let lastInitTheme: 'light' | 'dark' | null = null;

interface MermaidDiagramProps {
  chart: string;
  theme?: 'light' | 'dark';
}

const MermaidDiagram = ({ chart, theme = 'light' }: MermaidDiagramProps) => {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState<string | null>(null);
  const idRef = useRef<string>('');

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      if (lastInitTheme !== theme) {
        mermaid.initialize({
          ...mermaidBaseConfig,
          startOnLoad: false,
          suppressErrorRendering: true,
          securityLevel: 'loose',
          themeVariables: theme === 'dark' ? mermaidDarkTheme : mermaidLightTheme,
        });
        lastInitTheme = theme;
      }

      const id = `mermaid-${crypto.randomUUID().slice(0, 8)}`;
      idRef.current = id;

      try {
        const { svg: rendered } = await mermaid.render(id, chart.trim());
        if (!cancelled) {
          setSvg(rendered);
          if (error) setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Mermaid rendering error:', err);
          setError(err instanceof Error ? err.message : String(err));
        }
      }
    };

    render();
    return () => {
      cancelled = true;
      document.getElementById(idRef.current)?.remove();
    };
  }, [chart, theme]);

  if (error) {
    return (
      <div className="p-4 rounded-lg border border-error text-error">
        Mermaid error: {error}
      </div>
    );
  }

  return (
    <div
      className="mermaid-container overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

// =============================================================================
// Story wrapper
// =============================================================================

const DiagramStory = ({ title, chart }: { title: string; chart: string }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-medium text-base-content">{title}</h3>
    <MermaidDiagram chart={chart} />
    <details className="mt-4">
      <summary className="cursor-pointer text-sm font-medium text-primary">
        Show Mermaid syntax
      </summary>
      <pre className="mt-2 p-4 rounded-lg bg-base-200 text-sm overflow-x-auto">
        <code>{chart}</code>
      </pre>
    </details>
  </div>
);

// =============================================================================
// Meta
// =============================================================================

const meta: Meta = {
  title: 'SpecificComponents/Mermaid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Mermaid** diagram rendering with SQLI brand theming.

The theme is generated from the DTCG design tokens (\`src/tokens/tokens.json\`) and supports both light and dark modes automatically.

## Integration

\`\`\`tsx
import mermaid from 'mermaid';
import { mermaidBaseConfig, mermaidLightTheme, mermaidDarkTheme } from '@sqli/elevate-design-system/charts';

// Initialize with SQLI theme
mermaid.initialize({
  ...mermaidBaseConfig,
  themeVariables: mermaidLightTheme, // or mermaidDarkTheme
});
\`\`\`

## Supported Diagram Types

| Type | Description |
|------|-------------|
| Flowchart | Process flows and decision trees |
| Sequence | Actor interactions and message flows |
| Class | UML class diagrams |
| State | State machine diagrams |
| ER | Entity Relationship diagrams |
| User Journey | User experience journey maps |
| Gantt | Project schedules and timelines |
| Pie Chart | Proportional data display |
| Quadrant Chart | Two-axis categorization |
| Requirement | Requirements traceability |
| GitGraph | Git branch visualization |

## SQLI Theme Colors

| Mode | Primary | Background | Text |
|------|---------|------------|------|
| Light | Cobalt \`#1F24E9\` | Cream \`#FFFAF0\` | Midnight \`#0F0E2B\` |
| Dark | Sky \`#6DA5FF\` | Midnight \`#0F0E2B\` | Cream \`#FFFAF0\` |
        `,
      },
    },
  },
};

export default meta;

// =============================================================================
// Diagram definitions
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

    class Dialog {
        +bool isOpen
        +open() void
        +close() void
    }

    Component <|-- Button
    Component <|-- Card
    Component <|-- Dialog
    Card "1" *-- "n" Button : contains`,

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

  userJourney: `journey
    title Onboarding a New SQLI Client
    section Discovery
      Visit website: 5: Client
      Read case studies: 4: Client
      Request a demo: 3: Client
    section First Contact
      Schedule call: 4: Client, Sales
      Discovery meeting: 5: Client, Sales
      Receive proposal: 4: Client, Sales
    section Engagement
      Sign contract: 5: Client, Legal
      Kick-off meeting: 5: Client, PM
      Start delivery: 4: PM, Dev Team`,

  gantt: `gantt
    title Sprint 1 - Design System
    dateFormat YYYY-MM-DD
    section Design
        Token System       :a1, 2025-01-06, 5d
        Component Specs    :a2, after a1, 5d
    section Development
        Core Components    :b1, after a2, 10d
        Form Components    :b2, after b1, 7d
        Layout Components  :b3, after b1, 5d
    section Testing
        Unit Tests         :c1, after b2, 5d
        E2E Tests          :c2, after c1, 3d
    section Release
        Documentation      :d1, after c2, 3d
        Deployment         :d2, after d1, 1d`,

  pie: `pie showData
    title Technology Distribution
    "React" : 35
    "Angular" : 20
    "Vue" : 15
    "Next.js" : 12
    "Symfony" : 10
    "Other" : 8`,

  quadrantChart: `quadrantChart
    title Component Priority Matrix
    x-axis Low Effort --> High Effort
    y-axis Low Impact --> High Impact
    quadrant-1 Plan carefully
    quadrant-2 Do first
    quadrant-3 Delegate
    quadrant-4 Quick wins
    Button: [0.2, 0.9]
    Dialog: [0.7, 0.85]
    Card: [0.3, 0.75]
    Tooltip: [0.15, 0.4]
    Select: [0.8, 0.7]
    Badge: [0.1, 0.3]
    Tabs: [0.5, 0.6]
    Accordion: [0.45, 0.55]
    Toast: [0.6, 0.5]
    Slider: [0.65, 0.35]`,

  requirementDiagram: `requirementDiagram

    requirement accessibility {
        id: REQ-001
        text: All interactive components must be WCAG 2.1 AA compliant
        risk: high
        verifymethod: test
    }

    requirement theming {
        id: REQ-002
        text: Components must support light and dark themes via data-theme attribute
        risk: medium
        verifymethod: inspection
    }

    requirement tokens {
        id: REQ-003
        text: All colors must come from the DTCG token system
        risk: low
        verifymethod: analysis
    }

    element Button {
        type: component
    }

    element Dialog {
        type: component
    }

    element TokenSystem {
        type: module
    }

    Button - satisfies -> accessibility
    Button - satisfies -> theming
    Dialog - satisfies -> accessibility
    Dialog - satisfies -> theming
    TokenSystem - satisfies -> tokens
    theming - derives -> tokens`,

  gitGraph: `gitGraph
    commit id: "Initial commit"
    branch develop
    checkout develop
    commit id: "Setup tooling"
    branch feature/tokens
    checkout feature/tokens
    commit id: "Add DTCG tokens"
    commit id: "Generate CSS themes"
    checkout develop
    merge feature/tokens tag: "v0.10.0"
    branch feature/components
    checkout feature/components
    commit id: "Add Button"
    commit id: "Add Dialog"
    commit id: "Add Select"
    checkout develop
    merge feature/components
    checkout main
    merge develop tag: "v0.12.0-alpha"`,
} as const;

// =============================================================================
// Stories
// =============================================================================

export const Flowchart = () => (
  <DiagramStory title="Flowchart - API Gateway Architecture" chart={DIAGRAMS.flowchart} />
);
Flowchart.parameters = {
  docs: { description: { story: 'Process flows with decision nodes. Uses `graph TD` (top-down) or `graph LR` (left-right) direction.' } },
};

export const SequenceDiagram = () => (
  <DiagramStory title="Sequence Diagram - API Request Flow" chart={DIAGRAMS.sequence} />
);
SequenceDiagram.storyName = 'Sequence Diagram';
SequenceDiagram.parameters = {
  docs: { description: { story: 'Actor interactions with synchronous (`->>`) and asynchronous (`-->>`) messages. Supports activation boxes and notes.' } },
};

export const ClassDiagram = () => (
  <DiagramStory title="Class Diagram - Component Architecture" chart={DIAGRAMS.classDiagram} />
);
ClassDiagram.storyName = 'Class Diagram';
ClassDiagram.parameters = {
  docs: { description: { story: 'UML class diagrams with inheritance (`<|--`), composition (`*--`), and member visibility (`+` public, `-` private).' } },
};

export const StateDiagram = () => (
  <DiagramStory title="State Diagram - Order Workflow" chart={DIAGRAMS.stateDiagram} />
);
StateDiagram.storyName = 'State Diagram';
StateDiagram.parameters = {
  docs: { description: { story: 'State machine diagrams with transitions. Uses `stateDiagram-v2` syntax. `[*]` represents start/end states.' } },
};

export const ERDiagram = () => (
  <DiagramStory title="ER Diagram - E-commerce Schema" chart={DIAGRAMS.erDiagram} />
);
ERDiagram.storyName = 'Entity Relationship Diagram';
ERDiagram.parameters = {
  docs: { description: { story: 'Entity Relationship diagrams with cardinality (`||--o{` one-to-many, `}|--||` many-to-one). Attributes support PK/FK annotations.' } },
};

export const UserJourney = () => (
  <DiagramStory title="User Journey - Client Onboarding" chart={DIAGRAMS.userJourney} />
);
UserJourney.storyName = 'User Journey';
UserJourney.parameters = {
  docs: { description: { story: 'User experience journey maps with satisfaction scores (1-5) and actor assignments. Sections group related steps.' } },
};

export const GanttChart = () => (
  <DiagramStory title="Gantt Chart - Sprint Planning" chart={DIAGRAMS.gantt} />
);
GanttChart.storyName = 'Gantt Chart';
GanttChart.parameters = {
  docs: { description: { story: 'Project schedules with sections, task dependencies (`after`), and date formatting. Supports `active`, `done`, and `crit` task statuses.' } },
};

export const PieChart = () => (
  <DiagramStory title="Pie Chart - Technology Distribution" chart={DIAGRAMS.pie} />
);
PieChart.storyName = 'Pie Chart';
PieChart.parameters = {
  docs: { description: { story: 'Proportional data visualization. Add `showData` to display values next to labels.' } },
};

export const QuadrantChart = () => (
  <DiagramStory title="Quadrant Chart - Component Priority Matrix" chart={DIAGRAMS.quadrantChart} />
);
QuadrantChart.storyName = 'Quadrant Chart';
QuadrantChart.parameters = {
  docs: { description: { story: 'Two-axis categorization chart. Points are positioned with `[x, y]` coordinates (0-1 range). Useful for prioritization matrices.' } },
};

export const RequirementDiagram = () => (
  <DiagramStory title="Requirement Diagram - Design System Requirements" chart={DIAGRAMS.requirementDiagram} />
);
RequirementDiagram.storyName = 'Requirement Diagram';
RequirementDiagram.parameters = {
  docs: { description: { story: 'Requirements traceability with risk levels and verification methods. Elements satisfy, derive, or trace to requirements.' } },
};

export const GitGraph = () => (
  <DiagramStory title="GitGraph - Release Branch Strategy" chart={DIAGRAMS.gitGraph} />
);
GitGraph.storyName = 'GitGraph';
GitGraph.parameters = {
  docs: { description: { story: 'Git branch visualization with commits, branches, merges, and tags. Follows a realistic feature branch workflow.' } },
};

// =============================================================================
// Dark Mode - All diagram types
// =============================================================================

export const DarkMode = () => (
  <DarkModeWrapper>
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-base-content">
        Dark Mode - Diagram Samples
      </h3>

      <div>
        <h4 className="text-sm font-medium text-base-content opacity-70 mb-2">Flowchart</h4>
        <MermaidDiagram
          chart={`graph LR
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E`}
          theme="dark"
        />
      </div>

      <div>
        <h4 className="text-sm font-medium text-base-content opacity-70 mb-2">Sequence</h4>
        <MermaidDiagram
          chart={`sequenceDiagram
    Alice->>Bob: Hello!
    Bob-->>Alice: Hi there!
    Alice->>Bob: How are you?
    Bob-->>Alice: Great, thanks!`}
          theme="dark"
        />
      </div>

      <div>
        <h4 className="text-sm font-medium text-base-content opacity-70 mb-2">Pie Chart</h4>
        <MermaidDiagram
          chart={`pie showData
    "Frontend" : 45
    "Backend" : 35
    "DevOps" : 20`}
          theme="dark"
        />
      </div>

      <div>
        <h4 className="text-sm font-medium text-base-content opacity-70 mb-2">GitGraph</h4>
        <MermaidDiagram
          chart={`gitGraph
    commit
    branch feature
    commit
    commit
    checkout main
    merge feature tag: "v1.0"
    commit`}
          theme="dark"
        />
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  ...darkModeParameters,
  docs: {
    description: {
      story: 'All diagrams support dark mode via `mermaidDarkTheme`. The theme automatically uses Sky as the primary color on Midnight backgrounds.',
    },
  },
};
