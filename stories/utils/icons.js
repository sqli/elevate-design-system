/**
 * Elevate Design System - Centralized Icon Module
 *
 * This module provides reusable SVG icons for use across Storybook stories.
 * All icons are inline SVG for maximum flexibility and styling capability.
 *
 * Usage:
 * import { ChevronDownIcon, SearchIcon } from '../utils/icons.js';
 *
 * Then use in your story:
 * `<button>${ChevronDownIcon} Button with Icon</button>`
 */

/**
 * Creates an SVG icon with specified viewBox and path data
 * @param {string} path - SVG path data
 * @param {string} viewBox - SVG viewBox (default: "0 0 24 24")
 * @returns {string} SVG markup
 */
const createIcon = (path, viewBox = '0 0 24 24') => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
};

// Navigation Icons
export const ChevronDownIcon = createIcon('<polyline points="6 9 12 15 18 9"></polyline>');
export const ChevronUpIcon = createIcon('<polyline points="18 15 12 9 6 15"></polyline>');
export const ChevronLeftIcon = createIcon('<polyline points="15 18 9 12 15 6"></polyline>');
export const ChevronRightIcon = createIcon('<polyline points="9 18 15 12 9 6"></polyline>');
export const ArrowLeftIcon = createIcon(
  '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>'
);
export const ArrowRightIcon = createIcon(
  '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>'
);
export const MenuIcon = createIcon(
  '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>'
);
export const XIcon = createIcon(
  '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
);

// Action Icons
export const PlusIcon = createIcon(
  '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'
);
export const MinusIcon = createIcon('<line x1="5" y1="12" x2="19" y2="12"></line>');
export const EditIcon = createIcon(
  '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>'
);
export const TrashIcon = createIcon(
  '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>'
);
export const CopyIcon = createIcon(
  '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>'
);
export const DownloadIcon = createIcon(
  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>'
);
export const UploadIcon = createIcon(
  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>'
);

// UI Icons
export const SearchIcon = createIcon(
  '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>'
);
export const FilterIcon = createIcon(
  '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>'
);
export const SettingsIcon = createIcon(
  '<circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m5.2-14.8 3.2 1.8-3 5.2m-2.4 4.2-3 5.2-3.2-1.8M1 12h6m6 0h6"></path>'
);
export const InfoIcon = createIcon(
  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>'
);
export const AlertCircleIcon = createIcon(
  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
);
export const CheckIcon = createIcon('<polyline points="20 6 9 17 4 12"></polyline>');
export const CheckCircleIcon = createIcon(
  '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
);

// File Icons
export const FileIcon = createIcon(
  '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>'
);
export const FileTextIcon = createIcon(
  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>'
);
export const FolderIcon = createIcon(
  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>'
);
export const ImageIcon = createIcon(
  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>'
);

// Social Icons
export const MailIcon = createIcon(
  '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>'
);
export const LinkIcon = createIcon(
  '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>'
);
export const ExternalLinkIcon = createIcon(
  '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>'
);
export const ShareIcon = createIcon(
  '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>'
);

// User Icons
export const UserIcon = createIcon(
  '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
);
export const UsersIcon = createIcon(
  '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>'
);
export const HeartIcon = createIcon(
  '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>'
);

// Feedback Icons
export const BellIcon = createIcon(
  '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>'
);
export const StarIcon = createIcon(
  '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>'
);
export const EyeIcon = createIcon(
  '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'
);
export const EyeOffIcon = createIcon(
  '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>'
);

// Status Icons
export const LoaderIcon = createIcon(
  '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>'
);
export const RefreshIcon = createIcon(
  '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>'
);
export const AlertTriangleIcon = createIcon(
  '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>'
);

// Calendar & Time
export const CalendarIcon = createIcon(
  '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>'
);
export const ClockIcon = createIcon(
  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>'
);

// Layout Icons
export const GridIcon = createIcon(
  '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>'
);
export const ColumnsIcon = createIcon(
  '<rect x="3" y="3" width="7" height="18"></rect><rect x="14" y="3" width="7" height="18"></rect>'
);
export const LayoutIcon = createIcon(
  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>'
);

// Media Controls
export const PlayIcon = createIcon('<polygon points="5 3 19 12 5 21 5 3"></polygon>');
export const PauseIcon = createIcon(
  '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>'
);
export const StopIcon = createIcon(
  '<rect x="5" y="5" width="14" height="14" rx="2" ry="2"></rect>'
);

// Code Icons
export const CodeIcon = createIcon(
  '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>'
);
export const TerminalIcon = createIcon(
  '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>'
);

// Commerce Icons
export const ShoppingCartIcon = createIcon(
  '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>'
);
export const CreditCardIcon = createIcon(
  '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>'
);

/**
 * Helper function to create an icon with custom size
 * @param {string} icon - Icon SVG string
 * @param {number} size - Size in pixels
 * @returns {string} Modified SVG with custom size
 */
export const withSize = (icon, size) => {
  return icon.replace(/width="\d+"/, `width="${size}"`).replace(/height="\d+"/, `height="${size}"`);
};

/**
 * Helper function to create an icon with custom class
 * @param {string} icon - Icon SVG string
 * @param {string} className - CSS class name
 * @returns {string} Modified SVG with custom class
 */
export const withClass = (icon, className) => {
  return icon.replace('<svg ', `<svg class="${className}" `);
};

/**
 * List of all available icons for documentation
 */
export const allIcons = {
  // Navigation
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MenuIcon,
  XIcon,
  // Actions
  PlusIcon,
  MinusIcon,
  EditIcon,
  TrashIcon,
  CopyIcon,
  DownloadIcon,
  UploadIcon,
  // UI
  SearchIcon,
  FilterIcon,
  SettingsIcon,
  InfoIcon,
  AlertCircleIcon,
  CheckIcon,
  CheckCircleIcon,
  // Files
  FileIcon,
  FileTextIcon,
  FolderIcon,
  ImageIcon,
  // Social
  MailIcon,
  LinkIcon,
  ExternalLinkIcon,
  ShareIcon,
  // User
  UserIcon,
  UsersIcon,
  HeartIcon,
  // Feedback
  BellIcon,
  StarIcon,
  EyeIcon,
  EyeOffIcon,
  // Status
  LoaderIcon,
  RefreshIcon,
  AlertTriangleIcon,
  // Calendar & Time
  CalendarIcon,
  ClockIcon,
  // Layout
  GridIcon,
  ColumnsIcon,
  LayoutIcon,
  // Media
  PlayIcon,
  PauseIcon,
  StopIcon,
  // Code
  CodeIcon,
  TerminalIcon,
  // Commerce
  ShoppingCartIcon,
  CreditCardIcon,
};
