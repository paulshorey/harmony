// import { addons } from '@storybook/addons';
import React from 'react';
import storybookTheme from './storybook-theme';
import AppProvider from '../components/utils/AppProvider';
import { useEffect } from 'react';
import './preview.css';
// import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12

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
  // nextRouter: {
  //   Provider: RouterContext.Provider,
  // },
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

import '../styles/global/tailwind.css';

export const decorators = [
  (Story, context) => {
    // const [colorScheme, set_colorScheme] = React.useState('default');
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

    /**
     * Inject a CSS string as a <style> tag into the DOM of the window.top frame
     */
    const injectCSS = `
  .search-field { 
    top: -1px;
    left: -2px;
  }
  .sidebar-header * {
    display:none !important;
  }
  .sidebar-header:before {
    content: 'Styling Systems';
    color: white;
    font-size: 1.01rem;
    font-weight: bold;
    white-space: nowrap;
    opacity: 0.5;
  }
  `;
    useEffect(() => {
      const style = document.createElement('style');
      style.innerHTML = injectCSS;
      window.top?.document.body.appendChild(style);
    }, []);

    // console.log('story preview');
    return (
      <AppProvider>
        <Story {...context} />
      </AppProvider>
    );
  },
];
