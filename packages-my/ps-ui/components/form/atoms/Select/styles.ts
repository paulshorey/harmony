import { css } from '@emotion/react';
import { themeType as t, optionsType as o } from '@ps/ui/styles/theme';

export default {
  default: (theme: t, opt: o) => css`
    overflow: hidden;
    padding: 12px 24px;
    border-radius: 7px;
    background-color: white;
    color: black;
    position: relative;
    display: inline-block;
    cursor: pointer;

    span {
      position: relative;
      transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: hsl(244, 63%, 69%);
      transform: scaleX(0);
      transform-origin: 100% 100%;
      transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
    }

    &:hover {
      &:before {
        transform-origin: 0 0;
        transform: scaleX(1);
      }

      span {
        color: white;
      }
    }
  `,
  pulsing: (theme: t, opt: o) => css`
    padding: 12px 24px;
    background-color: black;
    color: white;
    border-radius: 7px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);
    @keyframes pulse {
      to {
        box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
      }
    }
  `,
  glowing: (theme: t, opt: o) => css`
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
  raised: (theme: t, opt: o) => css`
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
