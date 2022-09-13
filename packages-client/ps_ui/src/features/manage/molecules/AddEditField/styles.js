import { css } from '@emotion/react';
import theme from 'src/styles/theme';

export default {
  default: css`
    position: relative;
    display: block;
    text-align: left;
    max-width: 550px;
    margin: 0 auto 19px;
    display: flex;

    ${theme.mq.xsmall} {
      margin: 0 0 17px;
    }
    ${theme.mq.xxsmall} {
      margin: 0 0 15px;
    }
  `,
};
