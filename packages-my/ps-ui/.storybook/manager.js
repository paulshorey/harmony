import { addons } from '@storybook/addons';
// import { create } from '@storybook/theming/create';
import DEFAULT_THEME from './theme';

addons.setConfig({
  isFullscreen: true,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  enableShortcuts: true,
  showToolbar: true,
  theme: DEFAULT_THEME,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: false },
  },
});
