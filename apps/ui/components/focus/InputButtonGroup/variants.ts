import { css } from '@emotion/react';

export default {
  default: css`
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
