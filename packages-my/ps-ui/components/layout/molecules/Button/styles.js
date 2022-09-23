import { css } from '@emotion/react';
import vars from '@ps/ui/styles/vars';

export default {
  default: css`
    background: ${vars.colors.pink};
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    line-height: 1;
    font-weight: 400;
    cursor: pointer;
    white-space: nowrap;
    font-family: ${vars.fonts.greycliff};
    letter-spacing: 0.3px;

    > span {
      display: block;
      padding: 15px 52px 17px;
      overflow: visible;
    }

    > span > span {
      display: block;
      overflow: visible;
    }
  `,
  outline: css`
    border: solid 1px black;
    background: white;
    color: black;

    > span {
      padding: 15px 36px 17px;
    }
  `,
  small: css`
    font-size: 16px;

    > span {
      padding: 7px 19px 9px;
    }
  `,
  widerThickerOutlines: css`
    border-width: 2px;
    > span {
      font-weight: 500;
      padding-left: 60px;
      padding-right: 60px;
    }
  `,
  xsmall: css`
    font-size: 14px;
    position: relative;
    top: 0;

    > span {
      padding: 5.5px 9px 7.5px;
    }

    ${vars.mq.sm} {
      font-size: 12.5px;

      > span {
        padding: 6.5px 7px 8px;
        @supports (-webkit-touch-callout: none) {
          padding: 8px 5px 10px 6px;
        }
      }
    }

    > span,
    > span > span {
      font-weight: 600;
    }
  `,
  square: css`
    border-radius: 5px;
  `,
  black: css`
    background: #000;
  `,
  disabled: css`
    background: ${vars.colors.lightGray};
  `,
  blueGradient: (theme) => css`
    ${vars.blueTheme?.gradientButton}
  `,
  whiteBlueText: (theme) => css`
    ${vars.blueTheme?.gradientButtonWhite}
  `,
  deepHardShadow: css`
    box-shadow: 7px 11px 0 rgba(0, 0, 0, 0.15);
  `,
};
