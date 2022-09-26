import React from 'react';
import GlobalStyles from '../styles';
import Gradient from '@ps/ui/components/layout/molecules/Gradient';
import { css } from '@emotion/react';

export const parameters = {
  layout: 'fullscreen', // to remove padding in canvas
  viewMode: 'docs',
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
