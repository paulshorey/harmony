import { css } from '@emotion/react';
import vars from '@ps/ui/styles/vars';

export default {
  default: css`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      display: inline-block;
    }
  `,
};
