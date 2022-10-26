import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  default: (theme) => css`
    display: grid;
    justify-content: center;
    width: 100%;
    grid-template-rows: auto;
    grid-template-columns: ${new Array(theme.Grid.childrenLength).fill('1fr').join(' ')};

    ${theme.Grid.childrenLength > 2 &&
    `
    ${vars.mq.lg} {
      ${vars.mq.mobile} {
        grid-template-columns: 1fr 1fr;
      }
    }
    `}
    ${vars.mq.sm} {
      display: block;
      text-align: center;
    }

    > * {
      justify-content: center;
      align-self: center;
    }
  `,
  mobileReversed: css`
    ${vars.mq.sm} {
      display: flex;
      flex-direction: column-reverse;
    }
  `,
  twoLeftOneRight: css`
    grid-template-columns: 5fr 4fr;
    grid-template-rows: auto;
    grid-template-areas:
      'leftTop right'
      'leftBottom right'
      '. .';

    ${vars.mq.sm} {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas:
        'leftTop'
        'right'
        'leftBottom';
    }

    gap: 0;
    align-items: center;
    align-content: center;

    ${vars.mq.sm} {
      text-align: center;
    }

    .leftTop {
      grid-area: leftTop;
      align-self: end;
    }

    .leftBottom {
      grid-area: leftBottom;
      align-self: start;
      padding: 0 80px 0 0;

      ${vars.mq.sm} {
        padding: 20px 20px 0 20px;
      }
    }

    .right {
      grid-area: right;
      text-align: center;
      padding: 10px 0 0 0;
    }
  `,
};
