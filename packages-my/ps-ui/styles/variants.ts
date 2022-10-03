import { css } from '@emotion/react';
import { themeType as t, optionsType as o } from '@ps/ui/styles/theme';

export default {
  default: (theme: t) => css`
    // This will never be called. Because each UI component gets only one style applied for each variant.
    // Each component's locally-defined variant style will be used if exists. If a local style is not defined for a variant, one of these general styles will be used. But, each component stylesheet is required to contain a default variant. So, this generic default will never be used.
  `,
  padding: (theme: t) => css`
    padding: 1.1rem 1rem 1.2rem;
  `,
  onLight: (theme: t) => css``,
  onDark: (theme: t) => css``,
  bg: (theme: t) => css`
    color: ${theme.getColor('text')};
    background-color: ${theme.getColor('bg')};
  `,
  Button: (theme: t) => {
    return css`
      &:focus:hover,
      &:focus-visible:hover {
        outline: none !important;
      }
      &:focus:not(:hover),
      &:focus-visible:not(:hover) {
        outline-style: double !important;
        outline-width: 1px !important;
        outline-color: ${theme.getColor('bgDark')} !important;
      }
    `;
  },
  gradient: (theme: t) => {
    return css`
      display: block;
      position: relative;
      color: white;
      background: ${theme.getColor('bg')};
      background-image: linear-gradient(
        330deg,
        ${theme.getColor('bgLight')} 0%,
        ${theme.getColor('bgDark')} 100%
      );
    `;
  },
  gradientText: (theme: t) => {
    return css`
      color: ${theme.getColor('link')};
      @supports (--css: variables) {
        background-image: linear-gradient(
          to right,
          ${theme.getColor('subtle')},
          ${theme.getColor('bgLight')},
          ${theme.getColor('bgDark')}
        );
        color: transparent;
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
      }
    `;
  },
  pinkGradient: (theme: t) => css`
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
    display: block;
    max-width: 1000px;
  `,
};
