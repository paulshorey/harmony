import { css } from '@emotion/react';
import { themeType } from '@ps/ui/styles/theme';

export default {
  default: { light: css``, dark: css`` },
  gradientText: (theme: themeType) => css`
    background-image: linear-gradient(
      170deg,
      ${theme.colors.gradientStart},
      ${theme.colors.gradientEnd}
    );
    color: ${theme.colors.primary};
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${theme.colors.primary};
    -moz-background-clip: text;
    -moz-text-fill-color: ${theme.colors.primary};
    background-clip: text;
    text-fill-color: ${theme.colors.primary};
    text-shadow: none;
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
