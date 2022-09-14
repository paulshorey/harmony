import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  default: (src, size) => css`
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    mask: url(${src}) no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
    background: grey;
    &:hover {
      background: ${vars.colors.pink};
    }
  `,
  white: (src, size) => css`
    background: white;
    &:hover {
      background: ${vars.colors.pink};
    }
  `,
  dark: (src, size) => css`
    background: rgb(44, 44, 44);
    &:hover {
      background: ${vars.colors.pink};
    }
  `,
};
