import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  wrapper: css`
    position: relative;
    display: block;
    text-align: left;
    max-width: 440px;
    margin: 0 auto 19px;

    ${vars.mq.phone} {
      margin: 0 0 17px;
    }
    ${vars.mq.phone} {
      margin: 0 0 15px;
    }
  `,
  input: css``,
  label: css``,
};
