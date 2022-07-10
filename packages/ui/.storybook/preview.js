import React from 'react';
import mockdate from 'mockdate';
import '../styles/reset.css';
import ThemeProvider from '../ThemeProvider';

const withMockdate = (story, { parameters }) => {
  mockdate.reset();

  if (parameters.mockdate) {
    mockdate.set(parameters.mockdate);
  }

  return story();
};

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
  withMockdate,
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
