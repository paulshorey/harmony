import { css } from '@emotion/react';
import theme from 'src/styles/theme';

export default {
  buttons: css`
    margin: 40px 0 20px;
    text-align: center;

    button {
      width: 220px;
    }
  `,

  bottom: css`
    margin: 36px 0;

    p {
      font-size: 16px;
      line-height: 24px;
    }
  `,

  errorMessage: css`
    color: crimson;
    font-size: 15px;
  `,

  field: css``,

  fields: css`
    margin: 14px 0 10px 0;
  `,

  successState: css`
    margin: 25px 0 0;
  `,

  top: css`
    position: relative;
    margin: 22px 0 33px;
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

  wrapper: css`
    width: 100%;
    max-width: 578px;
    padding: 20px 30px 10px 35px;
    border: solid 1px #e5e5e5;
    border-radius: 15px;
    margin: 0 auto;
    font-size: 18px;

    ${theme.mq.small} {
      font-size: 16px;
    }
  `,
};
