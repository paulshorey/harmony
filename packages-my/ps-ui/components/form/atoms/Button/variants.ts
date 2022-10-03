import { css } from '@emotion/react';
import { themeType as t } from '@ps/ui/styles/theme';

export default {
  default: (theme: t) => {
    return css`
      font-size: 1rem;
      overflow: hidden;
      border-radius: 7px;
      position: relative;
      display: inline-block;
      cursor: pointer;
      border: solid 1px;
      border-color: ${theme.getColor('bgDark')};
      box-shadow: 1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
      padding: 12px 24px;
      color: ${theme.getColor('bgDark')};
      background-image: linear-gradient(
        160deg,
        hsl(0, 0%, 89%, 0.95),
        hsl(0, 0%, 92%, 0.95),
        hsl(0, 0%, 89%, 0.95)
      ) !important;
      &:not(:hover):not(:focus) {
        border-top-color: transparent;
        border-left-color: transparent;
        > * {
          top: 0;
          left: 0;
        }
      }
      &:hover {
        ${theme.instance.onDark
          ? `
          box-shadow: 2px 3px 0 0 hsl(0, 0%, 33%, 0.67),
            1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
          `
          : `
          box-shadow: 1px 2px 0 0 hsl(0, 0%, 33%, 0.33),
            1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
          `};
      }
      &:focus {
        border-bottom-color: transparent;
        border-right-color: transparent;
        > * {
          top: 1px;
          left: 1px;
        }
        box-shadow: inset 1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
        > * {
          top: 1px;
          left: 1px;
        }
      }
    `;
  },
  gradient: (theme: t) => css`
    color: ${theme.getColor('gradientText')};
    text-shadow: 1px 1px 1px ${theme.getColor('bgDark')};
    background-size: 200% auto;
    & {
      background-image: linear-gradient(
        150deg,
        ${theme.getColor('bgLight')} -10%,
        ${theme.getColor('bgDark')} 60%,
        ${theme.getColor('bgLight')} 100%
      ) !important;
    }
    &:hover,
    &:focus:not(:hover) {
      transition: background-position 300ms linear 0s;
      background-position: right center;
      border-color: ${theme.getColor('bgLight')};
    }
    &:focus {
    }
  `,
  disabled: (theme: t) => {
    const shadowColor =
      theme.instance.shade === 'onDark'
        ? 'hsla(0, 0%, 80%)'
        : 'hsla(0, 0%, 90%)';
    return css`
      cursor: not-allowed;
      text-shadow: none;
      &,
      &:hover,
      &:focus {
        border: none !important;
        box-shadow: none !important;
        background: ${shadowColor};
        color: ${theme.getColor('subtle', {
          shade: 'onLight',
          hue: 'default',
        })};
      }
    `;
  },
  link: (theme: t) => {
    return css`
      border: none !important;
      box-shadow: none !important;
      background: none !important;
      color: ${theme.getColor('link')};
      &:hover:not(:focus) {
        color: ${theme.getColor('border')};
        ${theme.instance.onDark
          ? `
            box-shadow: 1px 2px 1px 1px hsl(0, 0%, 33%, 0.33),
              2px 2px 3px 0 hsl(0, 0%, 0%, 0.2) !important;
            `
          : `
            box-shadow: 1px 2px 1px 1px hsl(0, 0%, 33%, 0.33),
              2px 2px 3px 0 hsl(0, 0%, 0%, 0.15) !important;
            `};
      }
      &:focus {
        box-shadow: inset 1px 2px 3px 0 hsl(0, 0%, 0%, 0.15) !important;
      }
    `;
  },
  pulsing: (theme: t) => {
    const shadowColor = theme.instance.onDark ? 255 : 0;
    return css`
      padding: 12px 24px;
      border-radius: 7px;
      box-shadow: 0 0 0 0
        rgba(${shadowColor}, ${shadowColor}, ${shadowColor}, 0.1);
      animation: pulse 4s infinite cubic-bezier(0.66, 0, 0, 1);
      @keyframes pulse {
        to {
          box-shadow: 0 0 0 30px
            rgba(${shadowColor}, ${shadowColor}, ${shadowColor}, 0);
        }
      }
    `;
  },
  // raised: (theme: t) => css`
  //   padding: 12px 24px;
  //   border-blackus: 6px;
  //   border-bottom: 4px solid hsl(241, 3%, 73%);
  //   border-top: 0px;
  //   transition: all 0.1s ease-in-out;

  //   &:hover {
  //     border-bottom-width: 0;
  //     border-top-width: 4px;
  //   }
  // `,
  // underlineGrow: (theme: t) => css`
  //   position: relative;

  //   span {
  //     position: relative;
  //   }

  //   &:before {
  //     content: '';
  //     position: absolute;
  //     left: -0.1px;
  //     right: -0.1px;
  //     bottom: 0;
  //     height: 100%;
  //     transform: scaleY(0.3);
  //     transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
  //     transform-origin: bottom;
  //     background-color: ${theme.getColor('solid')} 0.6;
  //   }
  //   &:hover:before {
  //     transform: scaleY(1);
  //   }
  // `,
  // loading: (theme: t) => css`
  //   span {
  //     width: 8px;
  //     height: 8px;
  //     border-radius: 50%;
  //     background-color: ${theme.getColor('solid')} flashing 1.4s infinite linear;
  //     margin: 0 4px;
  //     display: inline-block;

  //     &:nth-child(2) {
  //       animation-delay: 0.2s;
  //     }

  //     &:nth-child(3) {
  //       animation-delay: 0.4s;
  //     }
  //   }

  //   @keyframes flashing {
  //     0% {
  //       opacity: 0.2;
  //     }
  //     20% {
  //       opacity: 1;
  //     }
  //     100% {
  //       opacity: 0.2;
  //     }
  //   }
  // `,
  // underlineSlide: (theme: t) => css`
  //   display: inline-block;
  //   position: relative;
  //   color: white;

  //   &:after {
  //     content: '';
  //     position: absolute;
  //     width: 100%;
  //     transform: scaleX(0);
  //     height: 2px;
  //     bottom: 0;
  //     left: 0;
  //     background-color: white;
  //     transform-origin: bottom right;
  //     transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  //   }

  //   &:hover::after {
  //     transform: scaleX(1);
  //     transform-origin: bottom left;
  //   }
  // `,
};
