import { css } from '@emotion/react';

export default {
  default: { light: css``, dark: css`` },
  yellow: css`
    color: yellow;
  `,
  pinkGradient: css`
    display: block;
    position: relative;
    position: relative;
    background-image: linear-gradient(
      90deg,
      hsl(334deg 100% 50%),
      hsl(265deg 83% 57%),
      hsl(217deg 100% 61%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    max-width: 1000px;
  `,
};
