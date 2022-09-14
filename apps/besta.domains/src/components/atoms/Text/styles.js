import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  default: css`
    font-size: 18px;
    letter-spacing: 0.5px;
    font-weight: 300;
    line-height: 28px;

    ${vars.mq.sm} {
      line-height: 26px;
      font-weight: 400;
    }
  `,
  causesBigger: css`
    margin: 10px 0 30px;
    font-size: 24px;
    line-height: 36px;
    font-weight: 300;

    ${vars.mq.sm} {
      font-size: 18px;
      line-height: 28px;
    }
  `,
  causesSmaller: css`
    margin: 10px 0 20px;
    font-size: 22px;
    line-height: 34px;
    font-weight: 300;

    ${vars.mq.sm} {
      font-size: 17px;
      line-height: 27px;
    }
  `,
  causesFineprint: css`
    ${vars.mq.any} {
      font-size: 11px;
      line-height: 15px;
      font-weight: 200;
      letter-spacing: 0.2px;
    }

    ${vars.mq.sm} {
      font-size: 11px;
      line-height: 13px;
    }
  `,
  disclaimer: css`
    ${vars.mq.any} {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 300;
    }
  `,
  center: css`
    text-align: center;
  `,
  thicker: css`
    font-weight: 400;

    ${vars.mq.sm} {
      font-weight: 500;
    }
  `,
  larger: css`
    letter-spacing: 0.67px;
    font-size: 22px;

    ${vars.mq.sm} {
      font-size: 20px;
    }
  `,
  large: css`
    letter-spacing: 0;
    font-size: 26px;
    line-height: 38px;

    ${vars.mq.sm} {
      font-size: 22px;
      line-height: 32px;
    }
  `,
};
