import { css } from '@emotion/react';
// import theme from 'src/styles/theme';

export default {
  default: css`
    cursor: pointer;
  `,
  black: css`
    color: #000;
  `,
  underline: css`
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  `,
};
