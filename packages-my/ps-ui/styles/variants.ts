import { css } from '@emotion/react';
import { themeType as t } from '@ps/ui/styles/theme';

export default {
  padding: (theme: t) => css`
    padding: 1.1rem 1rem 1.2rem;
  `,
  bgColor: (theme: t) => css`
    background-color: ${theme.getColor('bg')};
  `,
  textColor: (theme: t) => css`
    color: ${theme.getColor('text')};
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
  bgGradient: (theme: t) => {
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
  textGradient: (theme: t) => {
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
};
