import { css } from '@emotion/react';
import theme from 'src/styles/theme';

const styled_cause = css`
  font-weight: 400;
  letter-spacing: 0.25px;
  ${theme.cause?.styles?.gradientButton};
  font-family: ${theme.fonts.graycliff};
`;
const styled_causeWhite = css`
  ${styled_cause};
  ${theme.cause?.styles?.gradientButtonWhite};
`;

export default {
  black: css`
    background: #000;
  `,
  auth: css`
    font-weight: 400;
    font-family: ${theme.cause
      ? theme.fonts.graycliff
      : theme.fonts.sfproRouneded};
    letter-spacing: ${theme.cause ? '0.5px' : '0.25px'};
    ${!!theme.cause && styled_cause};
  `,
  causeCTA: css`
    ${!!theme?.cause?.styles?.ctaColor &&
    `
    background: ${theme?.cause?.styles?.ctaColor} !important;
    `}
  `,
  authWhite: css`
    font-weight: 400;
    font-family: ${theme.cause
      ? theme.fonts.graycliff
      : theme.fonts.sfproRouneded};
    letter-spacing: ${theme.cause ? '0.5px' : '0.25px'};
    ${!!theme.cause && styled_causeWhite};
  `,
  default: css`
    background: ${theme.colors.pink};
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    line-height: 1;
    font-weight: 300;
    cursor: pointer;
    white-space: nowrap;

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
  deepHardShadow: css`
    box-shadow: 7px 11px 0 rgba(0, 0, 0, 0.15);
  `,
  outline: css`
    border: solid 1px black;
    background: white;
    color: black;

    > span {
      padding: 15px 36px 17px;
    }
  `,
  disabled: css`
    background: ${theme.colors.lightGray};
  `,
  small: css`
    font-size: 16px;

    > span {
      padding: 7px 19px 9px;
    }
  `,
  square: css`
    border-radius: 5px;
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

    ${theme.mq.small} {
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
};
