import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  wrapper: css`
    position: relative;
    display: flex;
    text-align: left;
    margin: 0 0 14px;

    ${vars.mq.phone} {
      margin: 0 0 12px;
    }

    ${vars.mq.phone} {
      margin: 0 0 10px;
    }
  `,
  input: css`
    margin-right: 15px;
    display: inline-block;
    vertical-align: middle;

    ${vars.mq.lg} {
      margin-left: 10px;
    }
  `,
  label: css`
    align-self: center;
    vertical-align: middle;
    display: block;
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    margin: 0;
    font-weight: 300;

    ${vars.mq.lg} {
      margin-top: 6px;
    }
  `,
};
