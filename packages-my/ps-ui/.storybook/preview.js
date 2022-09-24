import React from 'react';
import GlobalStyles from '../styles';
import Gradient from '@ps/ui/components/layout/molecules/Gradient';
import { css } from '@emotion/react';
// import AppProvider from 'src/components/organisms/AppProvider';

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
  viewMode: 'docs',
  viewport: {
    viewports: SUPPORTED_VIEWPORTS,
  },
  controls: {
    expanded: true,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <Gradient
      css={css`
        position: relative;
        width: 100%;
        height: 100%;
      `}
      cssLg={`
      padding: 50px 50px 60px 50px;
    `}
      cssSm={`
      padding: 20px 20px 30px 20px;;
    `}
    >
      <GlobalStyles />
      <Story />
    </Gradient>
  ),
];
