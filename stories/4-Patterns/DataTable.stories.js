/**
 * @component DataTable
 * @description Data table pattern with toolbar, sortable headers, status badges, and pagination
 * @see https://daisyui.com/components/table/
 */
import { heroicon } from '../utils/heroicons.js';

export default {
  title: 'Patterns/Data Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A complete **Data Table** pattern combining Table, Search Input, Filter Select, Status Badges, and Pagination.

## Features
- Toolbar with search input and filter dropdown
- Table with sortable column headers (visual indicators)
- Zebra-striped rows for readability
- Color-coded status badges per row
- Pagination controls below the table

## Usage
Copy the HTML structure and replace sample data with your own records. Wire up sort handlers and pagination logic as needed.
        `,
      },
    },
  },
};

const tableHTML = (theme) => {
  const wrapper = theme
    ? `data-theme="${theme}" class="bg-base-100 p-6 rounded-lg"`
    : 'class="bg-base-100 p-6 rounded-lg"';
  const heading = theme
    ? `<h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>`
    : '';

  return `
  <div ${wrapper}>
    ${heading}
    <!-- Toolbar -->
    <div class="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center mb-4">
      <div class="flex gap-2 items-center">
        <div class="relative">
          <input type="text" placeholder="Search orders..." class="input input-bordered input-sm w-64 pl-9" />
          ${heroicon('magnifying-glass', { class: 'h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40' })}
        </div>
        <select class="select select-bordered select-sm">
          <option disabled selected>Filter by status</option>
          <option>All</option>
          <option>Completed</option>
          <option>In Progress</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
      </div>
      <div class="text-sm text-base-content/60">Showing 1-5 of 24 results</div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox checkbox-sm" />
              </label>
            </th>
            <th>
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Order ID
                ${heroicon('arrow-up', { class: 'h-3 w-3 opacity-50' })}
              </div>
            </th>
            <th>
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Customer
                ${heroicon('chevron-down', { class: 'h-3 w-3 opacity-50' })}
              </div>
            </th>
            <th>
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Date
                ${heroicon('chevron-down', { class: 'h-3 w-3 opacity-50' })}
              </div>
            </th>
            <th>Amount</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><label><input type="checkbox" class="checkbox checkbox-sm" /></label></th>
            <td class="font-mono text-sm">#ORD-7821</td>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-primary text-primary-content w-8 rounded-full">
                    <span class="text-xs">AM</span>
                  </div>
                </div>
                <div>
                  <div class="font-medium">Alice Martin</div>
                  <div class="text-xs opacity-50">alice.martin@email.com</div>
                </div>
              </div>
            </td>
            <td class="text-sm">2026-02-12</td>
            <td class="font-medium">$1,240.00</td>
            <td><span class="badge badge-success badge-sm">Completed</span></td>
            <th><button class="btn btn-ghost btn-xs">Details</button></th>
          </tr>
          <tr>
            <th><label><input type="checkbox" class="checkbox checkbox-sm" /></label></th>
            <td class="font-mono text-sm">#ORD-7820</td>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-secondary text-secondary-content w-8 rounded-full">
                    <span class="text-xs">BK</span>
                  </div>
                </div>
                <div>
                  <div class="font-medium">Bob Keller</div>
                  <div class="text-xs opacity-50">bob.keller@email.com</div>
                </div>
              </div>
            </td>
            <td class="text-sm">2026-02-11</td>
            <td class="font-medium">$890.50</td>
            <td><span class="badge badge-info badge-sm">In Progress</span></td>
            <th><button class="btn btn-ghost btn-xs">Details</button></th>
          </tr>
          <tr>
            <th><label><input type="checkbox" class="checkbox checkbox-sm" /></label></th>
            <td class="font-mono text-sm">#ORD-7819</td>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-accent text-accent-content w-8 rounded-full">
                    <span class="text-xs">CL</span>
                  </div>
                </div>
                <div>
                  <div class="font-medium">Clara Liu</div>
                  <div class="text-xs opacity-50">clara.liu@email.com</div>
                </div>
              </div>
            </td>
            <td class="text-sm">2026-02-10</td>
            <td class="font-medium">$2,100.00</td>
            <td><span class="badge badge-warning badge-sm">Pending</span></td>
            <th><button class="btn btn-ghost btn-xs">Details</button></th>
          </tr>
          <tr>
            <th><label><input type="checkbox" class="checkbox checkbox-sm" /></label></th>
            <td class="font-mono text-sm">#ORD-7818</td>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-neutral text-neutral-content w-8 rounded-full">
                    <span class="text-xs">DR</span>
                  </div>
                </div>
                <div>
                  <div class="font-medium">David Ruiz</div>
                  <div class="text-xs opacity-50">david.ruiz@email.com</div>
                </div>
              </div>
            </td>
            <td class="text-sm">2026-02-09</td>
            <td class="font-medium">$450.75</td>
            <td><span class="badge badge-error badge-sm">Cancelled</span></td>
            <th><button class="btn btn-ghost btn-xs">Details</button></th>
          </tr>
          <tr>
            <th><label><input type="checkbox" class="checkbox checkbox-sm" /></label></th>
            <td class="font-mono text-sm">#ORD-7817</td>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-primary text-primary-content w-8 rounded-full">
                    <span class="text-xs">EN</span>
                  </div>
                </div>
                <div>
                  <div class="font-medium">Elena Novak</div>
                  <div class="text-xs opacity-50">elena.novak@email.com</div>
                </div>
              </div>
            </td>
            <td class="text-sm">2026-02-08</td>
            <td class="font-medium">$3,200.00</td>
            <td><span class="badge badge-success badge-sm">Completed</span></td>
            <th><button class="btn btn-ghost btn-xs">Details</button></th>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
      <div class="text-sm text-base-content/60">
        Page 1 of 5
      </div>
      <div class="join">
        <button class="join-item btn btn-sm" disabled>Previous</button>
        <button class="join-item btn btn-sm btn-primary">1</button>
        <button class="join-item btn btn-sm">2</button>
        <button class="join-item btn btn-sm">3</button>
        <button class="join-item btn btn-sm">4</button>
        <button class="join-item btn btn-sm">5</button>
        <button class="join-item btn btn-sm">Next</button>
      </div>
    </div>
  </div>
  `;
};

export const Default = () => tableHTML(null);

export const DarkMode = () => tableHTML('sqli-dark');
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
