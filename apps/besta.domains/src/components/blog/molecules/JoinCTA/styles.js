import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  wrapper: (hidePrimaryButton) => css`
    display: inline-block;
    margin: 15px 0 0 0;
    //text-align: center;

    ${!!hidePrimaryButton &&
    `
      ${vars.mq.sm} {
        margin-top: -20px;
      }
    `}
    .appBadges {
      max-width: 336px;
      width: 100%;
      margin: 0 0 33px;
      display: flex;
      text-align: center;
      font-size: 13px;
      justify-content: space-between;

      ${vars.mq.sm} {
        flex-direction: column;
        align-items: center;
        margin-bottom: 23px;
        margin-left: auto;
        margin-right: auto;
      }

      a {
        display: block;
      }

      > div {
        padding: 0;

        &:first-of-type {
          ${vars.mq.sm} {
            margin-bottom: 13px;
          }
        }
      }

      .comingsoon {
        margin-bottom: 2px;
        text-align: left;
      }
    }

    ${vars.break.xsmall.max} {
      text-align: center;
    }

    button {
      min-width: 336px;

      ${vars.break.xsmall.max} {
        width: 80%;
      }
    }

    .CTA_primaryButton {
      display: block;
      margin: 10px 0 48px;

      ${vars.mq.sm} {
        margin-bottom: 24px;
        margin-left: auto;
        margin-right: auto;
      }

      button {
        width: 100%;
        font-weight: 400;
      }
    }

    .disclaimer {
      margin: 0;
      font-size: 14px;
      font-weight: 300;
    }

    .fdicInsured {
      font-weight: 300;
      font-size: 18px;
      line-height: 28px;

      ${vars.break.medium.max} {
        font-size: 16px;
        line-height: 25px;
      }
    }
  `,
};
