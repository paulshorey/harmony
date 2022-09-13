import { css } from '@emotion/react';
import theme from 'src/styles/theme';

export default {
  wrapper: css``,

  /*
   * Layout
   */
  head: css``,
  body: css`
    clear: both;
    margin: 14px 0 10px 0;
  `,

  /*
   * Title and controls
   */
  heading: css`
    font-size: 28px;
    margin: 11px 0 44px 0;
    text-align: left;
    float: left;
  `,
  buttons: css`
    margin: 0 0 0 -5px;
    text-align: right;
    float: right;
    display: flex;

    ${theme.mq.xsmall} {
      margin: 0 0 0 -5px;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    button {
      width: 220px;
      ${theme.mq.min('xsmall')} {
        margin-left: 10px;
      }
      ${theme.mq.xsmall} {
        width: auto;
      }
    }
  `,
  messages: css``,
  errorMessage: css`
    color: crimson;
    font-size: 15px;
  `,

  /*
   * Form
   */
  field: css``,

  successState: css`
    margin: 25px 0 0;
  `,

  topSubtitle: css`
    margin: 0;
    font-size: 18px;
    line-height: 26px;

    ${theme.mq.small} {
    }
  `,

  topTitle: css`
    margin: 0 0 16px;
    font-size: 34px;
    line-height: 41px;

    ${theme.mq.small} {
      font-size: 28px;
      line-height: 34px;
    }
  `,
};
