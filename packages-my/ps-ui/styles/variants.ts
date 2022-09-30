import { css } from '@emotion/react';
import { themeType } from '@ps/ui/styles/theme';

export default {
  padding: css`
    padding: 1.1rem 1rem 1.2rem;
  `,
  onLight: (theme: themeType) => css`
    // color: ${theme.getColor('primary', 'onLight')};
  `,
  onDark: (theme: themeType) => css`
    // color: ${theme.getColor('primary', 'onDark')};
  `,
  gradientBg: (theme: themeType) => css`
    display: block;
    position: relative;
    background: ${theme.color.gradientA};
    background-image: linear-gradient(
      330deg,
      ${theme.color.gradientA} 0%,
      ${theme.color.gradientB} 100%
    );
  `,
  gradientText: (theme: themeType, variants: any) => {
    const colorScheme = variants.onDark ? 'onDark' : 'default';
    return css`
      background-image: linear-gradient(
        170deg,
        ${theme.getColor('gradientA', colorScheme)},
        ${theme.getColor('gradientB', colorScheme)}
      );
      color: ${theme.getColor('gradientSolid', colorScheme)};
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: ${theme.getColor('gradientSolid', colorScheme)};
      -moz-background-clip: text;
      -moz-text-fill-color: ${theme.getColor('gradientSolid', colorScheme)};
      background-clip: text;
      text-fill-color: ${theme.getColor('gradientSolid', colorScheme)};
      text-shadow: none;
    `;
  },
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
