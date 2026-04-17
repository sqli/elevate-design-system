import React from 'react';
import { ElevateTheme } from '../../src/components/ElevateTheme';

export const DarkModeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ElevateTheme appearance="dark" className="p-6 rounded-lg">
    {children}
  </ElevateTheme>
);

export const darkModeParameters = { backgrounds: { default: 'dark' } };
