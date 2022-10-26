import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  default: css`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    ${vars.mq.sm} {
      flex-direction: column;
      text-align: center;
    }
  `,
  reversed: css`
    flex-direction: column-reverse;
  `,
  mobileReversed: css`
    ${vars.mq.sm} {
      flex-direction: column-reverse;
    }
  `,
};
