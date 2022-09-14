import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  wrapper: css`
    margin: 30px 0;
  `,
  features: css`
    display: flex;
  `,
  feature: css`
    width: 1px;
    flex-grow: 1;
    margin: 0 10px;
  `,
};
