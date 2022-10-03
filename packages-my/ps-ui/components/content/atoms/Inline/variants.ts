import { css } from '@emotion/react';
import { themeType as t } from '@ps/ui/styles/theme';

export default {
  default: (theme: t) => css``,
  borderBottom: (theme: t) => css`
    text-decoration: none;
    padding: 0;
    display: inline-block;
    border-bottom: solid 2px currentColor;
    margin: 0 2px 4px;
    &:hover {
      border-color: transparent;
    }
  `,
};
