import { css } from '@emotion/react';
import { themeType as t, instanceType as o } from '@ps/ui/styles/theme';

export default {
  default: (theme: t) => {
    return css`
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > * {
        display: inline-block;
        margin-left: 0;
        margin-right: 0;
        > * {
          display: inline-block;
          margin-left: 0;
          margin-right: 0;
        }
      }
    `;
  },
};
