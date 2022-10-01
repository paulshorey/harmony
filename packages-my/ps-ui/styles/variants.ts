import { css } from '@emotion/react';
import { themeType } from '@ps/ui/styles/theme';

export default {
  default: css`
    // This will never be called. Because each UI component gets only one style applied for each variant.
    // Each component's locally-defined variant style will be used if exists. If a local style is not defined for a variant, one of these general styles will be used. But, each component stylesheet is required to contain a default variant. So, this generic default will never be used.
  `,
  padding: css`
    padding: 1.1rem 1rem 1.2rem;
  `,
  onLight: (theme: themeType) => css``,
  onDark: (theme: themeType) => css``,
  bg: (theme: themeType) => css`
    color: ${theme.getColors().text};
    background-color: ${theme.getColors().bg};
  `,
  gradient: (theme: themeType, options: any) => {
    console.log(
      theme.colorsKey,
      options.colorsKey,
      theme.getColors(options.colorsKey),
      theme.getColors(options.colorsKey).gradientA
    );
    return css`
      display: block;
      position: relative;
      color: white;
      background: ${theme.getColors(options.colorsKey).solid};
      background-image: linear-gradient(
        330deg,
        ${theme.getColors(options.colorsKey).gradientA} 0%,
        ${theme.getColors(options.colorsKey).gradientB} 100%
      );
    `;
  },
  gradientText: (theme: themeType) => {
    return css`
      background-image: linear-gradient(
        170deg,
        ${theme.getColors().gradientA},
        ${theme.getColors().gradientB}
      );
      color: ${theme.getColors().solid};
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: ${theme.getColors().solid};
      -moz-background-clip: text;
      -moz-text-fill-color: ${theme.getColors().solid};
      background-clip: text;
      text-fill-color: ${theme.getColors().solid};
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
