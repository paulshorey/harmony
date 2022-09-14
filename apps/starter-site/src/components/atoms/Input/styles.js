import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  input: (width) => css`
    padding: 16px;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid black;
    border-radius: 9px;
    font-family: HelveticaNeue, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #000;
    background: #fff;
    width: 100%;

    :focus {
      outline: none;
      border-color: ${vars.colors.pink};
    }

    ::placeholder {
      color: ${vars.colors.gray};
    }
  `,
};
