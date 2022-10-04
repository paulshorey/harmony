// import { addons } from '@storybook/addons';
import React from 'react';
import GlobalStyles from '../styles/global';
import { css, ThemeProvider } from '@emotion/react';
import storybookTheme from './storybook-theme';
import theme from '../styles/theme';
import './preview.css';

const sortSidebarById = (a, b) => {
  // console.log('a', a, 'b', b);
  if (a && a[1]?.componentId.substring(0, 5) === 'intro') {
    return -2;
  }
  if (a && a[1]?.componentId.substring(0, 5) === 'about') {
    return -1;
  }
  return a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
};

export const parameters = {
  layout: 'fullscreen', // to remove padding in canvas
  viewMode: 'docs',
  controls: {
    expanded: true,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : sortSidebarById(a, b)),
    // storySort: {
    //   order: ['aboutlibrary', 'aboutcssprops'],
    // },
  },
  docs: {
    theme: storybookTheme,
  },
};

// const handleThemeSelected = (...inputs) => {
//   console.log('handleThemeSelected', ...inputs);
// };
// const handlePlatformSelected = (...inputs) => {
//   console.log('handlePlatformSelected', ...inputs);
// };
// const handleColorSchemeSelected = (...inputs) => {
//   console.log('handleColorSchemeSelected', ...inputs);
// };

export const decorators = [
  (Story, context) => {
    // const [colorScheme, set_colorScheme] = React.useState('onLight');
    // React.useEffect(() => {
    //   const channel = addons.getChannel();

    //   channel.on('theme-selected', handleThemeSelected);
    //   channel.on('platform-selected', handlePlatformSelected);
    //   channel.on('color-scheme-selected', handleColorSchemeSelected);
    //   channel.emit('story-mounted');

    //   return () => {
    //     channel.off('theme-selected', handleThemeSelected);
    //     channel.off('platform-selected', handlePlatformSelected);
    //     channel.off('color-scheme-selected', handleColorSchemeSelected);
    //   };
    // }, []);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story {...context} />
      </ThemeProvider>
    );
  },
];
