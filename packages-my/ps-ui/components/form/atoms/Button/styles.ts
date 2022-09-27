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
  glowing: css`
    position: relative;
    padding: 1px;
    borderradius: 8px;

    &:hover div {
      transitionduration: 0.25s;
      opacity: 1;
    }

    &:before {
      content: '';
      filter: blur(1px);
      borderradius: 8px;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      transition: opacity 1.5s ease;
      background: linear-gradient(
        91.83deg,
        rgb(208, 60, 74) 2.26%,
        rgb(172, 74, 218) 95.81%
      );
      animation: 10s ease-in-out 0s infinite normal both running pulse;
      opacity: 0.75;
    }

    span {
      padding: 12px 24px;
      backgroundcolor: white;
      position: relative;
      color: black;
      borderradius: 8px;
      cursor: pointer;
      transition: transform 250ms cubic-bezier(0.2, 0.8, 0.4, 1);
    }
  `,
  raised: css`
    background-color: white;
    padding: 12px 24px;
    color: black;
    border-radius: 6px;
    border-bottom: 4px solid hsl(241, 3%, 73%);
    border-top: 0px;
    transition: all 0.1s ease-in-out;

    &:hover {
      border-bottom-width: 0;
      border-top-width: 4px;
    }
  `,
};
