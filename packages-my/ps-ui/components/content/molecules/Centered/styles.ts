import { css } from '@emotion/react';
import { themeType as t, optionsType as o } from '@ps/ui/styles/theme';

export default {
  default: (theme: t) => css`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > * {
      display: inline-block;
      > * {
        display: inline-block;
      }
    }
  `,
};
