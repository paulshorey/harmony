import { css } from '@emotion/react';
import theme from 'src/styles/theme';

export default {
  wrapper: css`
    position: relative;
    top: -3px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 0 0 3px;
    display: block;
  `,
  labelError: css`
    margin-left: 15px;
    font-weight: 400;

    span {
      color: ${theme.colors.error};
      font-size: 16px;
      line-height: 16px;
    }
  `,
};
