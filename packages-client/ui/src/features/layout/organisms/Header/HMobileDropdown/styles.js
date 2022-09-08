import { css } from '@emotion/react';
import vars from 'src/styles/vars';
const cause = vars.blueTheme;

export default {
  wrapper: (opened) => css`
    position: sticky;
    overflow: auto;
    top: 62px;
    z-index: 100;
    max-height: ${opened ? '800px' : '0'};
    transition: max-height 0.3s;
    background: #ededef;

    ${vars.mq.lg} {
      display: none !important;
    }

    img {
      position: absolute;
      top: 0;
      left: 26px;
    }

    > section {
      padding: 12px 31px 11px;

      > a {
        display: block;
        font-family: vars.fonts.greycliff;
        letter-spacing: 0.25px;
        margin: 28px 0;
        color: inherit;
        font-size: 22px;
        font-weight: 400;

        letter-spacing: 0.5px;
        font-size: 18px;
        font-weight: 500;
        &:first-of-type {
          margin-left: 0;
        }

        &.is-active {
          &::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: white;
            display: inline-block;
            vertical-align: center;
            margin: 6px 10px 4px 0;
          }
        }

        font-weight: 400;
        letter-spacing: 0.25px;
        font-family: ${vars.fonts.greycliff};
      }
    }

    position: fixed;
    top: 0;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    background: blue;
    background: hsla(0, 0%, 0%, 0.45);
    ${cause?.gradientBackwards};
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 50%);

    > section {
      padding-top: 57px;

      a {
        color: white;
        text-shadow: none !important;
        font-weight: 500;
        letter-spacing: 0.3px;
      }
    }
  `,
  overlay: css`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
  `,
  buttonsBottom: (theme) => css`
    padding: 5px 0 30px;
    display: flex;
    flex-direction: column;

    .buttonsSpacer {
      width: 15px;
    }

    label {
      color: white;
      margin: 0 0 10px;
      letter-spacing: 0.5px;
      font-size: 18px;
      font-weight: 300;
    }

    .Button {
      width: 250px;
    }

    hr {
      display: block;
      height: 30px;
      padding: 0;
      margin: 0;
      background: none;
      border: none;
    }
  `,
};
