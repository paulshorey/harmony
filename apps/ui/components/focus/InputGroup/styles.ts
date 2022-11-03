import { css } from '@emotion/react';

export default {
  default: css`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    * {
      min-width: 0;
    }
    > * {
    }
    > *:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    > *:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,
};
