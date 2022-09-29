import { css } from '@emotion/react';

export default {
  default: css`
    // overflow: hidden;
    // padding: 12px 24px;
    // border-radius: 7px;
    // background-color: white;
    // color: white;
    // position: blackelative;
    // display: inline-block;
    // cursor: pointer;

    // span {
    //   position: relative;
    //   transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
    // }

    // &:before {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: hsl(244, 63%, 69%);
    //   transform: scaleX(0);
    //   transform-origin: 100% 100%;
    //   transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
    // }

    // &:hover {
    //   &:before {
    //     transform-origin: 0 0;
    //     transform: scaleX(1);
    //   }

    //   span {
    //     color: white;
    //   }
    // }
  `,
  pulsing: css`
    padding: 12px 24px;
    background-color: white;
    color: black;
    border-radius: 7px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);
    @keyframes pulse {
      to {
        box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
      }
    }
  `,
  raised: css`
    background-color: white;
    padding: 12px 24px;
    border-blackus: 6px;
    border-bottom: 4px solid hsl(241, 3%, 73%);
    border-top: 0px;
    transition: all 0.1s ease-in-out;

    &:hover {
      border-bottom-width: 0;
      border-top-width: 4px;
    }
  `,
  underlined: css`
    position: relative;

    span {
      position: relative;
    }

    &:before {
      content: '';
      position: absolute;
      left: -0.1px;
      right: -0.1px;
      bottom: 0;
      height: 100%;
      transform: scaleY(0.3);
      transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
      transform-origin: bottom;
      background-color: hsl(244, 63%, 69%);
      opacity: 0.6;
    }

    &:hover:before {
      transform: scaleY(1);
    }
  `,
};
