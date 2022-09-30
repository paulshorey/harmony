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
    color: ${theme.colors[theme.colorScheme]?.primary};
    background-color: ${theme.colors[theme.colorScheme]?.bg};
  `,
  gradientBg: (theme: themeType) => css`
    display: block;
    position: relative;
    color: white;
    background: ${theme.color.cta_gradientA};
    background-image: linear-gradient(
      330deg,
      ${theme.color.cta_gradientA} 0%,
      ${theme.color.cta_gradientB} 100%
    );
  `,
  gradientText: (theme: themeType) => {
    return css`
      background-image: linear-gradient(
        170deg,
        ${theme.colors[theme.colorScheme]?.cta_gradientA},
        ${theme.colors[theme.colorScheme]?.cta_gradientB}
      );
      color: ${theme.colors[theme.colorScheme]?.cta};
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: ${theme.colors[theme.colorScheme]?.cta};
      -moz-background-clip: text;
      -moz-text-fill-color: ${theme.colors[theme.colorScheme]?.cta};
      background-clip: text;
      text-fill-color: ${theme.colors[theme.colorScheme]?.cta};
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
