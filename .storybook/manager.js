import { addons } from 'storybook/manager-api';
import sqliTheme from './sqli-theme';

addons.setConfig({
  theme: sqliTheme,
  sidebar: {
    showRoots: true,
  },
});
