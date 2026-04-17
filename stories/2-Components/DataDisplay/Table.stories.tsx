import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Table** component for displaying tabular data.

## Usage
\`\`\`html
<table class="table">
  <thead>
    <tr><th>Name</th></tr>
  </thead>
  <tbody>
    <tr><td>Value</td></tr>
  </tbody>
</table>
\`\`\`

## Variants
- \`table-zebra\` - Zebra striping
- \`table-pin-rows\` - Pinned header/footer
- \`table-pin-cols\` - Pinned columns

## Sizes
- \`table-xs\`, \`table-sm\`, \`table-md\`, \`table-lg\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const Zebra = () => (
  <div className="overflow-x-auto">
    <table className="table table-zebra">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
        <tr>
          <th>4</th>
          <td>Marjy Ferencz</td>
          <td>Office Assistant I</td>
          <td>Crimson</td>
        </tr>
      </tbody>
    </table>
  </div>
);
Zebra.storyName = 'Zebra Striping';

export const WithCheckboxes = () => (
  <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12 bg-primary flex items-center justify-center text-primary-content font-bold">
                  CG
                </div>
              </div>
              <div>
                <div className="font-bold">Cy Ganderton</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            Quality Control Specialist
            <br />
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td>Blue</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12 bg-secondary flex items-center justify-center text-secondary-content font-bold">
                  HH
                </div>
              </div>
              <div>
                <div className="font-bold">Hart Hagerty</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            Desktop Support Technician
            <br />
            <span className="badge badge-ghost badge-sm">Web Designer</span>
          </td>
          <td>Purple</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
);
WithCheckboxes.storyName = 'With Checkboxes';

export const Sizes = () => (
  <div className="flex flex-col gap-8">
    <div>
      <p className="text-sm mb-2 opacity-70">Extra Small (xs)</p>
      <table className="table table-xs">
        <thead>
          <tr><th>#</th><th>Name</th><th>Job</th></tr>
        </thead>
        <tbody>
          <tr><th>1</th><td>Cy Ganderton</td><td>Quality Control</td></tr>
          <tr><th>2</th><td>Hart Hagerty</td><td>Desktop Support</td></tr>
        </tbody>
      </table>
    </div>
    <div>
      <p className="text-sm mb-2 opacity-70">Small (sm)</p>
      <table className="table table-sm">
        <thead>
          <tr><th>#</th><th>Name</th><th>Job</th></tr>
        </thead>
        <tbody>
          <tr><th>1</th><td>Cy Ganderton</td><td>Quality Control</td></tr>
          <tr><th>2</th><td>Hart Hagerty</td><td>Desktop Support</td></tr>
        </tbody>
      </table>
    </div>
    <div>
      <p className="text-sm mb-2 opacity-70">Medium (md - default)</p>
      <table className="table table-md">
        <thead>
          <tr><th>#</th><th>Name</th><th>Job</th></tr>
        </thead>
        <tbody>
          <tr><th>1</th><td>Cy Ganderton</td><td>Quality Control</td></tr>
          <tr><th>2</th><td>Hart Hagerty</td><td>Desktop Support</td></tr>
        </tbody>
      </table>
    </div>
    <div>
      <p className="text-sm mb-2 opacity-70">Large (lg)</p>
      <table className="table table-lg">
        <thead>
          <tr><th>#</th><th>Name</th><th>Job</th></tr>
        </thead>
        <tbody>
          <tr><th>1</th><td>Cy Ganderton</td><td>Quality Control</td></tr>
          <tr><th>2</th><td>Hart Hagerty</td><td>Desktop Support</td></tr>
        </tbody>
      </table>
    </div>
  </div>
);
Sizes.storyName = 'All Sizes';

export const ActiveRow = () => (
  <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control</td>
        </tr>
        <tr className="bg-base-200">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
        </tr>
      </tbody>
    </table>
  </div>
);
ActiveRow.storyName = 'Active Row';

export const HoverRows = () => (
  <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover">
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control</td>
        </tr>
        <tr className="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support</td>
        </tr>
        <tr className="hover">
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
        </tr>
      </tbody>
    </table>
  </div>
);
HoverRows.storyName = 'Hover Rows';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
