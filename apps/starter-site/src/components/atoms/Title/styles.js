import { css } from '@emotion/react';
import vars from 'src/styles/vars';
/*
 * THIS IS EXPERIMENTAL. FEEL FREE TO IGNORE THIS, AND STYLE YOUR COMPONENT WITH NORMAL CSS.
 */

export default {
  default: css`
    font-weight: 400;

    * {
      display: inline-block;
    }
  `,
  causesHeading: css`
    font-family: ${vars.fonts.greycliff};
    font-weight: 800;
    font-size: 50px;
    line-height: 60px;
    margin: 15px 0;
    letter-spacing: 0.67px;

    ${vars.mq.sm} {
      font-size: 28px;
      line-height: 34px;
    }
  `,
  causesSubheading: css`
    font-size: 27.5px;
    line-height: 1.33;
    margin: 10px 0;
    font-weight: 500;
    letter-spacing: 0.75px;

    ${vars.mq.sm} {
      font-size: 22px;
      line-height: 30px;
      font-weight: 400;
    }
  `,
  1: css`
    font-size: 45px;
    line-height: 1.33;
    margin: 33px 0 45px 0;

    ${vars.mq.sm} {
      font-size: 38px;
      line-height: 45px;
    }
  `,
  2: css`
    font-size: 32px;
    line-height: 44px;
    letter-spacing: 0.6px;

    ${vars.mq.sm} {
      font-size: 28px;
      line-height: 40px;
    }
  `,
  3: css`
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 0.6px;
    margin-bottom: 10px;

    ${vars.mq.sm} {
      font-size: 24px;
      line-height: 32px;
    }
  `,
  4: css`
    letter-spacing: 0.6px;
    font-size: 22px;
    line-height: 28px;

    ${vars.mq.sm} {
      font-size: 20px;
      line-height: 25px;
    }
  `,
  center: css`
    text-align: center;
  `,
  centerV: css`
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  pink: css`
    color: ${vars.colors.pink};
  `,
  light: css`
    font-weight: 200;

    ${vars.mq.sm} {
      font-weight: 300;
    }
  `,
  thin: css`
    font-weight: 300;

    // ${vars.mq.sm} {
    //   font-weight: 400;
    // }
  `,
  normal: css`
    font-weight: 400;

    ${vars.mq.sm} {
      font-weight: 500;
    }
  `,
  medium: css`
    font-weight: 500;
  `,
  thick: css`
    font-weight: 600;

    ${vars.mq.sm} {
      font-weight: 500;
    }
  `,
  lightM: css`
    ${vars.mq.sm} {
      font-weight: 200;
    }
  `,
  thinM: css`
    ${vars.mq.sm} {
      font-weight: 300;
    }
  `,
  normalM: css`
    ${vars.mq.sm} {
      font-weight: 400;
    }
  `,
  mediumM: css`
    ${vars.mq.sm} {
      font-weight: 500;
    }
  `,
  thickM: css`
    ${vars.mq.sm} {
      font-weight: 600;
    }
  `,
  m2838: css`
    ${vars.mq.sm} {
      font-size: 28px;
      line-height: 38px;
    }
  `,
  narrow: css`
    width: 80%;
    min-width: 300px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  `,
};
