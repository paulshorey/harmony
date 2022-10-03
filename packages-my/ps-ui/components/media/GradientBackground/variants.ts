import { css } from '@emotion/react';
import { themeType as t, instanceType as o } from '@ps/ui/styles/theme';

export default {
  default: (theme: t) => css`
    display: block;
    position: relative;
    background: hsl(272 51% 54%);
    background-image: linear-gradient(
      330deg,
      hsl(272 51% 54%) 0%,
      hsl(226 70% 55%) 100%
    );
  `,
};
