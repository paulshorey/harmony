import React from 'react';
import GlobalStyles from 'src/styles';
import AppProvider from 'src/components/organisms/AppProvider';

const SUPPORTED_VIEWPORTS = {
  mobile: {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  tablet: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
};

export const parameters = {
  layout: 'fullscreen', // to remove padding in body
  viewport: {
    viewports: SUPPORTED_VIEWPORTS,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <AppProvider>
      <GlobalStyles />
      <Story />
    </AppProvider>
  ),
];
