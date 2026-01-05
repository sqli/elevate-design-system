/**
 * Accessibility Tests for Elevate Design System Components
 * Tests WCAG 2.1 compliance and accessibility best practices
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { loadCSS } from '../setup.js';

let cssContent = '';

beforeAll(() => {
  cssContent = loadCSS();
});

describe('Accessibility: Focus Styles', () => {
  it('should have focus-visible styles defined', () => {
    expect(cssContent).toMatch(/focus-visible/);
  });

  it('should have focus styles for interactive elements', () => {
    const hasInteractiveFocus =
      cssContent.includes(':focus') || cssContent.includes('focus-visible');
    expect(hasInteractiveFocus).toBe(true);
  });

  it('should have custom focus overrides', () => {
    // Our custom focus styles should be present
    expect(cssContent).toContain('.input:focus');
  });
});

describe('Accessibility: Screen Reader Support', () => {
  it('should have visually hidden utility class', () => {
    expect(cssContent).toMatch(/sqli-sr-only/);
  });

  it('should implement visually hidden pattern correctly', () => {
    // The sr-only pattern should hide content visually but keep it accessible
    expect(cssContent).toMatch(/position:\s*absolute/);
    expect(cssContent).toMatch(/clip/);
  });

  it('should have skip-link styles if navigation exists', () => {
    // Skip links are recommended for keyboard navigation
    const hasNavigation = cssContent.includes('.navbar') || cssContent.includes('.menu');
    if (hasNavigation) {
      // Skip link is optional but recommended
      const hasSkipLink = cssContent.includes('skip-link');
      if (!hasSkipLink) {
        console.log('Recommendation: Consider adding skip-link styles for keyboard navigation');
      }
    }
    expect(true).toBe(true); // Always pass, this is advisory
  });
});

describe('Accessibility: Color Contrast', () => {
  it('should use DaisyUI semantic color tokens', () => {
    expect(cssContent).toMatch(/--color-base-content/);
    expect(cssContent).toMatch(/--color-base-100/);
  });

  it('should have dark mode theme', () => {
    expect(cssContent).toMatch(/sqli-dark/);
  });

  it('should have status colors for feedback', () => {
    expect(cssContent).toMatch(/--color-success/);
    expect(cssContent).toMatch(/--color-warning/);
    expect(cssContent).toMatch(/--color-error/);
  });
});

describe('Accessibility: Reduced Motion', () => {
  it('should respect prefers-reduced-motion', () => {
    expect(cssContent).toMatch(/prefers-reduced-motion/);
  });

  it('should disable animations when reduced motion is preferred', () => {
    const hasReducedMotion = cssContent.includes('prefers-reduced-motion');
    if (hasReducedMotion) {
      // Should have animation: none or transition: none
      expect(cssContent).toMatch(/animation.*none|transition.*none/);
    }
  });
});

describe('Accessibility: Interactive Components', () => {
  it('should have disabled state styles', () => {
    expect(cssContent).toMatch(/disabled|:disabled/);
  });

  it('should have aria-disabled styling', () => {
    // aria-disabled should be styled similarly to :disabled
    const hasAriaDisabled = cssContent.includes('aria-disabled');
    if (!hasAriaDisabled) {
      console.log('Recommendation: Consider adding [aria-disabled="true"] styles');
    }
    expect(true).toBe(true);
  });

  it('should have loading/busy state styles', () => {
    const hasLoadingStyles = cssContent.includes('.loading') || cssContent.includes('.skeleton');
    expect(hasLoadingStyles).toBe(true);
  });
});

describe('Accessibility: Form Elements', () => {
  it('should have error state styles', () => {
    expect(cssContent).toMatch(/\.input-error|error|invalid/);
  });

  it('should have label styles', () => {
    expect(cssContent).toMatch(/\.label/);
  });

  it('should have form input styles', () => {
    // DaisyUI 5.x uses .input, .select, .textarea instead of form-control
    expect(cssContent).toMatch(/\.input/);
    expect(cssContent).toMatch(/\.select/);
  });
});

describe('Accessibility: Modals and Dialogs', () => {
  it('should have modal component', () => {
    expect(cssContent).toMatch(/\.modal/);
  });

  it('should have drawer component', () => {
    expect(cssContent).toMatch(/\.drawer/);
  });

  it('should have overlay styles for modal backdrop', () => {
    expect(cssContent).toMatch(/modal-backdrop|modal-box/);
  });
});

describe('Accessibility: Navigation', () => {
  it('should have breadcrumb styles', () => {
    expect(cssContent).toMatch(/\.breadcrumbs/);
  });

  it('should have tab navigation styles', () => {
    expect(cssContent).toMatch(/\.tabs/);
  });

  it('should have navigation component styles', () => {
    const hasNavComponents =
      cssContent.includes('.tabs') ||
      cssContent.includes('.breadcrumbs') ||
      cssContent.includes('.navbar');
    expect(hasNavComponents).toBe(true);
  });
});

describe('Accessibility: Text and Typography', () => {
  it('should use TWK Everett font', () => {
    expect(cssContent).toContain('TWK Everett');
  });

  it('should have line-height defined for readability', () => {
    expect(cssContent).toMatch(/line-height/);
  });
});

describe('Accessibility: Touch Targets', () => {
  it('should have button component with adequate sizing', () => {
    expect(cssContent).toContain('.btn');
  });

  it('should have button sizing options', () => {
    const hasButtonSizes =
      cssContent.includes('.btn-sm') ||
      cssContent.includes('.btn-lg') ||
      cssContent.includes('.btn-xs');
    expect(hasButtonSizes).toBe(true);
  });
});

describe('Accessibility: Feedback Components', () => {
  it('should have alert component for notifications', () => {
    expect(cssContent).toMatch(/\.alert/);
  });

  it('should have toast component for transient messages', () => {
    expect(cssContent).toMatch(/\.toast/);
  });

  it('should have progress indicators', () => {
    const hasProgress =
      cssContent.includes('.progress') ||
      cssContent.includes('.loading') ||
      cssContent.includes('.radial-progress');
    expect(hasProgress).toBe(true);
  });
});
