/**
 * DaisyUI Component Tests
 *
 * Verifies that DaisyUI components are properly included
 * in the compiled CSS.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { loadCSS, extractClassSelectors } from '../setup.js';

describe('DaisyUI Components', () => {
  let classSelectors;
  let css;

  beforeAll(() => {
    css = loadCSS();
    classSelectors = extractClassSelectors(css);
  });

  describe('Action Components', () => {
    const actionClasses = ['btn', 'dropdown', 'modal', 'swap'];

    it.each(actionClasses)('should include .%s class', (cls) => {
      expect(classSelectors).toContain(cls);
    });

    it('should include button variants', () => {
      expect(css).toContain('.btn-primary');
      expect(css).toContain('.btn-secondary');
      expect(css).toContain('.btn-accent');
      expect(css).toContain('.btn-ghost');
    });

    it('should include button sizes', () => {
      expect(css).toContain('.btn-xs');
      expect(css).toContain('.btn-sm');
      expect(css).toContain('.btn-lg');
    });
  });

  describe('Data Display Components', () => {
    const dataDisplayClasses = [
      'avatar',
      'badge',
      'card',
      'carousel',
      'countdown',
      'kbd',
      'stat',
      'table',
      'tooltip',
    ];

    it.each(dataDisplayClasses)('should include .%s class', (cls) => {
      expect(classSelectors).toContain(cls);
    });
  });

  describe('Data Input Components', () => {
    const inputClasses = [
      'checkbox',
      'input',
      'radio',
      'range',
      'select',
      'textarea',
      'toggle',
      'file-input',
    ];

    it.each(inputClasses)('should include .%s class', (cls) => {
      expect(classSelectors).toContain(cls);
    });

    it('should include input variants', () => {
      expect(css).toContain('.input-primary');
      expect(css).toContain('.input-error');
    });
  });

  describe('Feedback Components', () => {
    const feedbackClasses = ['alert', 'loading', 'progress', 'skeleton', 'toast'];

    it.each(feedbackClasses)('should include .%s class', (cls) => {
      expect(classSelectors).toContain(cls);
    });

    it('should include alert variants', () => {
      expect(css).toContain('.alert-info');
      expect(css).toContain('.alert-success');
      expect(css).toContain('.alert-warning');
      expect(css).toContain('.alert-error');
    });
  });

  describe('Layout Components', () => {
    const layoutClasses = ['divider', 'drawer', 'footer', 'hero', 'stack'];

    it.each(layoutClasses)('should include .%s class', (cls) => {
      expect(classSelectors).toContain(cls);
    });
  });

  describe('Navigation Components', () => {
    // Note: DaisyUI 5.x uses .join instead of .pagination
    const navClasses = ['breadcrumbs', 'link', 'menu', 'navbar', 'join', 'steps', 'tabs'];

    it.each(navClasses)('should include .%s class', (cls) => {
      expect(classSelectors).toContain(cls);
    });

    it('should include tabs size variants', () => {
      expect(css).toContain('.tabs-sm');
      expect(css).toContain('.tabs-lg');
    });
  });

  describe('Custom SQLI Utilities', () => {
    it('should include sqli-sr-only utility', () => {
      expect(css).toContain('sqli-sr-only');
    });
  });

  describe('Theme-specific Classes', () => {
    it('should include data-theme selectors', () => {
      expect(css).toContain('[data-theme=');
    });

    it('should include sqli-light theme selector', () => {
      expect(css).toContain('sqli-light');
    });

    it('should include sqli-dark theme selector', () => {
      expect(css).toContain('sqli-dark');
    });
  });
});
