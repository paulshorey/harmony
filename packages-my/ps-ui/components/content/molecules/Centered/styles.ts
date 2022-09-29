import { css } from '@emotion/react';

export default {
  default: css`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > * {
      display: inline-block;
      > * {
        display: inline-block;
      }
    }
  `,
};
