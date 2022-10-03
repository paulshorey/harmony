import { css } from '@emotion/react';
import { themeType as t, optionsType as o } from '@ps/ui/styles/theme';

export default {
  default: (theme: t) => css``,
  hoverTilt: (theme: t) => css`
    &:hover {
      box-shadow: 0 0 50px rgb(17 17 17 / 50%);
      transform: rotate(-2deg) translateY(-5px) scale(1.025);
    }
  `,
};
