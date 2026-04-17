/**
 * @component Charts
 * @description Recharts integration with SQLI theme
 * @see https://recharts.org/
 */
import { createRoot } from 'react-dom/client';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  sqliColors,
  sqliChartTheme,
  defaultAxisProps,
  defaultTooltipProps,
  defaultGridProps,
  defaultLegendProps,
} from '../../../src/charts/sqli-chart-theme';

// Sample data
const barData = [
  { name: 'Jan', value: 4000, secondary: 2400 },
  { name: 'Feb', value: 3000, secondary: 1398 },
  { name: 'Mar', value: 2000, secondary: 9800 },
  { name: 'Apr', value: 2780, secondary: 3908 },
  { name: 'May', value: 1890, secondary: 4800 },
  { name: 'Jun', value: 2390, secondary: 3800 },
];

const lineData = [
  { name: 'Week 1', users: 400, sessions: 240 },
  { name: 'Week 2', users: 300, sessions: 456 },
  { name: 'Week 3', users: 520, sessions: 678 },
  { name: 'Week 4', users: 480, sessions: 589 },
  { name: 'Week 5', users: 600, sessions: 780 },
  { name: 'Week 6', users: 750, sessions: 890 },
];

const pieData = [
  { name: 'Direct', value: 400 },
  { name: 'Organic', value: 300 },
  { name: 'Referral', value: 200 },
  { name: 'Social', value: 100 },
];

const areaData = [
  { name: 'Mon', desktop: 186, mobile: 80 },
  { name: 'Tue', desktop: 305, mobile: 200 },
  { name: 'Wed', desktop: 237, mobile: 120 },
  { name: 'Thu', desktop: 273, mobile: 190 },
  { name: 'Fri', desktop: 209, mobile: 130 },
  { name: 'Sat', desktop: 314, mobile: 280 },
  { name: 'Sun', desktop: 180, mobile: 150 },
];

const radarData = [
  { subject: 'Performance', A: 120, B: 110, fullMark: 150 },
  { subject: 'Reliability', A: 98, B: 130, fullMark: 150 },
  { subject: 'Usability', A: 86, B: 130, fullMark: 150 },
  { subject: 'Security', A: 99, B: 100, fullMark: 150 },
  { subject: 'Scalability', A: 85, B: 90, fullMark: 150 },
  { subject: 'Maintainability', A: 65, B: 85, fullMark: 150 },
];

// Helper to render React components in Storybook HTML
const renderReactChart = (ChartComponent) => {
  const container = document.createElement('div');
  container.id = `chart-${Math.random().toString(36).substr(2, 9)}`;

  // Use setTimeout to ensure the container is in the DOM
  setTimeout(() => {
    const mountPoint = document.getElementById(container.id);
    if (mountPoint) {
      const root = createRoot(mountPoint);
      root.render(ChartComponent);
    }
  }, 0);

  return container.outerHTML;
};

export default {
  title: 'Components/Data Display/Charts',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Recharts** integration with SQLI brand colors and themes.

## Installation

The design system provides a chart theme configuration for Recharts:

\`\`\`bash
npm install recharts
\`\`\`

## Usage

\`\`\`jsx
import { sqliColors, sqliChartTheme } from '@sqli/elevate-design-system/charts';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function MyChart({ data, isDarkMode }) {
  const theme = isDarkMode ? sqliChartTheme.dark : sqliChartTheme.light;

  return (
    <BarChart data={data}>
      <XAxis stroke={theme.axis} />
      <YAxis stroke={theme.axis} />
      <Tooltip contentStyle={{ backgroundColor: theme.tooltipBackground }} />
      <Bar dataKey="value" fill={theme.primary} />
    </BarChart>
  );
}
\`\`\`

## SQLI Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Cobalt | \`#1F24E9\` | Primary (light mode) |
| Sky | \`#6DA5FF\` | Primary (dark mode) |
| Midnight | \`#0F0E2B\` | Text, secondary |
| Cream | \`#FFFAF0\` | Background (light) |

## Theme Configuration

\`\`\`js
import { sqliChartTheme, defaultAxisProps, defaultTooltipProps } from '@sqli/elevate-design-system/charts';

// Access theme-specific configurations
const theme = sqliChartTheme.light; // or sqliChartTheme.dark

// Pre-configured props for common components
<XAxis {...defaultAxisProps.light} />
<Tooltip {...defaultTooltipProps.light} />
\`\`\`

## Color Palette

For charts with multiple series, use the built-in palette:

\`\`\`js
import { sqliColors } from '@sqli/elevate-design-system/charts';

// sqliColors.palette = ['#1F24E9', '#6DA5FF', '#0F0E2B', '#3B3A5C', '#8B8AA8', '#C4C3D8']
{data.map((entry, index) => (
  <Cell fill={sqliColors.palette[index % sqliColors.palette.length]} />
))}
\`\`\`

## Radar Chart

\`\`\`jsx
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

<RadarChart data={data}>
  <PolarGrid stroke={sqliChartTheme.light.grid} />
  <PolarAngleAxis dataKey="subject" tick={{ fill: sqliChartTheme.light.text }} />
  <PolarRadiusAxis />
  <Radar dataKey="value" stroke={sqliColors.cobalt} fill={sqliColors.cobalt} fillOpacity={0.5} />
</RadarChart>
\`\`\`
        `,
      },
    },
  },
};

// Bar Chart Story
export const BarChartExample = () => {
  return renderReactChart(
    <div className="card bg-base-100 p-6 shadow-sm" style={{ width: '100%', maxWidth: '600px' }}>
      <h3 className="text-lg font-medium mb-4">Monthly Revenue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <CartesianGrid {...defaultGridProps.light} />
          <XAxis dataKey="name" {...defaultAxisProps.light} />
          <YAxis {...defaultAxisProps.light} />
          <Tooltip {...defaultTooltipProps.light} />
          <Legend {...defaultLegendProps.light} />
          <Bar dataKey="value" name="Revenue" fill={sqliColors.cobalt} radius={[4, 4, 0, 0]} />
          <Bar dataKey="secondary" name="Expenses" fill={sqliColors.sky} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
BarChartExample.storyName = 'Bar Chart';

// Line Chart Story
export const LineChartExample = () => {
  return renderReactChart(
    <div className="card bg-base-100 p-6 shadow-sm" style={{ width: '100%', maxWidth: '600px' }}>
      <h3 className="text-lg font-medium mb-4">User Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData}>
          <CartesianGrid {...defaultGridProps.light} />
          <XAxis dataKey="name" {...defaultAxisProps.light} />
          <YAxis {...defaultAxisProps.light} />
          <Tooltip {...defaultTooltipProps.light} />
          <Legend {...defaultLegendProps.light} />
          <Line
            type="monotone"
            dataKey="users"
            name="Users"
            stroke={sqliColors.cobalt}
            strokeWidth={2}
            dot={{ fill: sqliColors.cobalt, strokeWidth: 2 }}
            activeDot={{ r: 6, fill: sqliColors.cobalt }}
          />
          <Line
            type="monotone"
            dataKey="sessions"
            name="Sessions"
            stroke={sqliColors.sky}
            strokeWidth={2}
            dot={{ fill: sqliColors.sky, strokeWidth: 2 }}
            activeDot={{ r: 6, fill: sqliColors.sky }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
LineChartExample.storyName = 'Line Chart';

// Area Chart Story
export const AreaChartExample = () => {
  return renderReactChart(
    <div className="card bg-base-100 p-6 shadow-sm" style={{ width: '100%', maxWidth: '600px' }}>
      <h3 className="text-lg font-medium mb-4">Traffic by Device</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={areaData}>
          <CartesianGrid {...defaultGridProps.light} />
          <XAxis dataKey="name" {...defaultAxisProps.light} />
          <YAxis {...defaultAxisProps.light} />
          <Tooltip {...defaultTooltipProps.light} />
          <Legend {...defaultLegendProps.light} />
          <Area
            type="monotone"
            dataKey="desktop"
            name="Desktop"
            stackId="1"
            stroke={sqliColors.cobalt}
            fill={sqliColors.cobalt}
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="mobile"
            name="Mobile"
            stackId="1"
            stroke={sqliColors.sky}
            fill={sqliColors.sky}
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
AreaChartExample.storyName = 'Area Chart';

// Pie Chart Story
export const PieChartExample = () => {
  return renderReactChart(
    <div className="card bg-base-100 p-6 shadow-sm" style={{ width: '100%', maxWidth: '500px' }}>
      <h3 className="text-lg font-medium mb-4">Traffic Sources</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={{ stroke: sqliChartTheme.light.text }}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={sqliColors.palette[index % sqliColors.palette.length]} />
            ))}
          </Pie>
          <Tooltip {...defaultTooltipProps.light} />
          <Legend {...defaultLegendProps.light} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
PieChartExample.storyName = 'Pie Chart';

// Radar Chart Story
export const RadarChartExample = () => {
  return renderReactChart(
    <div className="card bg-base-100 p-6 shadow-sm" style={{ width: '100%', maxWidth: '550px' }}>
      <h3 className="text-lg font-medium mb-4">Skills Comparison</h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid stroke={sqliChartTheme.light.grid} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: sqliChartTheme.light.text, fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 150]}
            tick={{ fill: sqliChartTheme.light.textMuted, fontSize: 10 }}
          />
          <Radar
            name="Team A"
            dataKey="A"
            stroke={sqliColors.cobalt}
            fill={sqliColors.cobalt}
            fillOpacity={0.5}
          />
          <Radar
            name="Team B"
            dataKey="B"
            stroke={sqliColors.sky}
            fill={sqliColors.sky}
            fillOpacity={0.5}
          />
          <Legend {...defaultLegendProps.light} />
          <Tooltip {...defaultTooltipProps.light} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
RadarChartExample.storyName = 'Radar Chart';

// Radar Chart Dark Mode
export const RadarChartDark = () => {
  return renderReactChart(
    <div data-theme="sqli-dark" className="bg-base-100 p-6 rounded-lg" style={{ width: '100%', maxWidth: '550px' }}>
      <h3 className="text-lg font-medium mb-4 text-base-content">Skills Comparison (Dark)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid stroke={sqliChartTheme.dark.grid} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: sqliChartTheme.dark.text, fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 150]}
            tick={{ fill: sqliChartTheme.dark.textMuted, fontSize: 10 }}
          />
          <Radar
            name="Team A"
            dataKey="A"
            stroke={sqliChartTheme.dark.primary}
            fill={sqliChartTheme.dark.primary}
            fillOpacity={0.5}
          />
          <Radar
            name="Team B"
            dataKey="B"
            stroke={sqliChartTheme.dark.colors[1]}
            fill={sqliChartTheme.dark.colors[1]}
            fillOpacity={0.5}
          />
          <Legend {...defaultLegendProps.dark} />
          <Tooltip {...defaultTooltipProps.dark} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
RadarChartDark.storyName = 'Radar Chart (Dark)';
RadarChartDark.parameters = {
  backgrounds: { default: 'dark' },
};

// Dark Mode Bar Chart
export const BarChartDark = () => {
  return renderReactChart(
    <div data-theme="sqli-dark" className="bg-base-100 p-6 rounded-lg" style={{ width: '100%', maxWidth: '600px' }}>
      <h3 className="text-lg font-medium mb-4 text-base-content">Monthly Revenue (Dark)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <CartesianGrid {...defaultGridProps.dark} />
          <XAxis dataKey="name" {...defaultAxisProps.dark} />
          <YAxis {...defaultAxisProps.dark} />
          <Tooltip {...defaultTooltipProps.dark} />
          <Legend {...defaultLegendProps.dark} />
          <Bar dataKey="value" name="Revenue" fill={sqliChartTheme.dark.primary} radius={[4, 4, 0, 0]} />
          <Bar dataKey="secondary" name="Expenses" fill={sqliChartTheme.dark.colors[1]} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
BarChartDark.storyName = 'Bar Chart (Dark)';
BarChartDark.parameters = {
  backgrounds: { default: 'dark' },
};

// Dark Mode Line Chart
export const LineChartDark = () => {
  return renderReactChart(
    <div data-theme="sqli-dark" className="bg-base-100 p-6 rounded-lg" style={{ width: '100%', maxWidth: '600px' }}>
      <h3 className="text-lg font-medium mb-4 text-base-content">User Activity (Dark)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData}>
          <CartesianGrid {...defaultGridProps.dark} />
          <XAxis dataKey="name" {...defaultAxisProps.dark} />
          <YAxis {...defaultAxisProps.dark} />
          <Tooltip {...defaultTooltipProps.dark} />
          <Legend {...defaultLegendProps.dark} />
          <Line
            type="monotone"
            dataKey="users"
            name="Users"
            stroke={sqliChartTheme.dark.primary}
            strokeWidth={2}
            dot={{ fill: sqliChartTheme.dark.primary, strokeWidth: 2 }}
            activeDot={{ r: 6, fill: sqliChartTheme.dark.primary }}
          />
          <Line
            type="monotone"
            dataKey="sessions"
            name="Sessions"
            stroke={sqliChartTheme.dark.colors[1]}
            strokeWidth={2}
            dot={{ fill: sqliChartTheme.dark.colors[1], strokeWidth: 2 }}
            activeDot={{ r: 6, fill: sqliChartTheme.dark.colors[1] }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
LineChartDark.storyName = 'Line Chart (Dark)';
LineChartDark.parameters = {
  backgrounds: { default: 'dark' },
};

// Overview - All Charts
export const Overview = () => {
  return renderReactChart(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: '1200px' }}>
      <div className="card bg-base-100 p-4 shadow-sm">
        <h4 className="font-medium mb-3">Bar Chart</h4>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={barData}>
            <CartesianGrid {...defaultGridProps.light} />
            <XAxis dataKey="name" {...defaultAxisProps.light} />
            <YAxis {...defaultAxisProps.light} />
            <Tooltip {...defaultTooltipProps.light} />
            <Bar dataKey="value" fill={sqliColors.cobalt} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="card bg-base-100 p-4 shadow-sm">
        <h4 className="font-medium mb-3">Line Chart</h4>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={lineData}>
            <CartesianGrid {...defaultGridProps.light} />
            <XAxis dataKey="name" {...defaultAxisProps.light} />
            <YAxis {...defaultAxisProps.light} />
            <Tooltip {...defaultTooltipProps.light} />
            <Line type="monotone" dataKey="users" stroke={sqliColors.cobalt} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="card bg-base-100 p-4 shadow-sm">
        <h4 className="font-medium mb-3">Area Chart</h4>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={areaData}>
            <CartesianGrid {...defaultGridProps.light} />
            <XAxis dataKey="name" {...defaultAxisProps.light} />
            <YAxis {...defaultAxisProps.light} />
            <Tooltip {...defaultTooltipProps.light} />
            <Area type="monotone" dataKey="desktop" fill={sqliColors.cobalt} fillOpacity={0.6} stroke={sqliColors.cobalt} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="card bg-base-100 p-4 shadow-sm">
        <h4 className="font-medium mb-3">Pie Chart</h4>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" innerRadius={35} outerRadius={60} dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={sqliColors.palette[index % sqliColors.palette.length]} />
              ))}
            </Pie>
            <Tooltip {...defaultTooltipProps.light} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="card bg-base-100 p-4 shadow-sm">
        <h4 className="font-medium mb-3">Radar Chart</h4>
        <ResponsiveContainer width="100%" height={180}>
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
            <PolarGrid stroke={sqliChartTheme.light.grid} />
            <PolarAngleAxis dataKey="subject" tick={{ fill: sqliChartTheme.light.text, fontSize: 9 }} />
            <Radar dataKey="A" stroke={sqliColors.cobalt} fill={sqliColors.cobalt} fillOpacity={0.5} />
            <Tooltip {...defaultTooltipProps.light} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
Overview.storyName = 'Overview';
Overview.parameters = {
  docs: {
    description: {
      story: 'Overview of all chart types available with SQLI theming: Bar, Line, Area, Pie, and Radar.',
    },
  },
};
