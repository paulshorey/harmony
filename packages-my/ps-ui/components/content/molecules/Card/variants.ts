import { css } from '@emotion/react';
import { themeType as t } from '@ps/ui/styles/theme';

export default {
  default: (theme: t) => css`
    background-color: ${theme.getColor('bg', 'onLight')};
    background: white;
    padding: 3rem;
  `,
  hoverTilt: (theme: t) => css`
    &:hover {
      box-shadow: 0 0 50px rgb(17 17 17 / 50%);
      transform: rotate(-2deg) translateY(-5px) scale(1.025);
    }
  `,
  centered: (theme: t) => css`
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
