import { css } from '@emotion/react';
import { themeType as t, instanceType as o } from '@ps/ui/styles/theme';

export default {
  default: (theme: t) => css`
    overflow: hidden;
    padding: 12px 24px;
    border-radius: 7px;
    background-color: white;
    color: black;
    position: relative;
    display: inline-block;
    cursor: pointer;

    white-space: pre;
  `,
};
