import { css } from '@emotion/react';
import { themeType as t, optionsAny as o } from '@ps/ui/styles/theme';

export default {
  default: (theme: t, opt: o) => {
    return css`
      border: none;
      font-size: 1rem;
      overflow: hidden;
      border-radius: 7px;
      position: relative;
      display: inline-block;
      cursor: pointer;
      outline: none !important;
      box-shadow: inset ${theme.getColor('shadow')} 0px 0px 0px 1px,
        1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
      padding: 12px 24px;
      color: ${theme.getColor('text', { shade: opt.hue ? '' : 'onLight' })};
      background: linear-gradient(
        160deg,
        hsl(0, 0%, 89%, 0.95),
        hsl(0, 0%, 92%, 0.95),
        hsl(0, 0%, 89%, 0.95)
      ) !important;
      &:hover,
      &:focus {
        outline: none !important;
      }
      &:focus,
      &:hover {
        background: hsl(0deg, 0%, 88%);
        box-shadow: inset ${theme.getColor('shadow')} 0 0 0 1px;
      }
      &:focus {
        box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 0 1px;
      }
    `;
  },
  onDark: (theme: t, opt: o) => css`
    &:focus,
    &:hover {
      background: hsl(0deg, 0%, 81%);
      box-shadow: inset rgba(0, 0, 0, 0.33) 0 0 0 1px;
    }
    &:focus {
      color: white;
      box-shadow: inset white 0 0 0 1px;
    }
  `,
  gradient: (theme: t, opt: o) => css`
    color: ${theme.getColor('gradientText')};
    box-shadow: inset ${theme.getColor('gradientB')} 0px 0px 0px 1px,
      1px 2px 3px 0 hsl(0, 0%, 0%, 0.3);
    text-shadow: 1px 1px 1px ${theme.getColor('gradientB')};
    background-size: 200% auto;
    transition: background-image 500ms linear 0s;
    &:hover {
      background-position: right center;
    }
    &,
    &:focus,
    &:hover {
      background-image: linear-gradient(
        160deg,
        ${theme.getColor('gradientA')},
        ${theme.getColor('gradientB')}
          ${theme.getColor('gradientC')
            ? ', ' + theme.getColor('gradientC')
            : ''}
      ) !important;
    }
  `,
  disabled: (theme: t, opt: o) => {
    const shadowColor =
      opt.shade === 'onDark' ? 'hsla(0, 0%, 80%)' : 'hsla(0, 0%, 90%)';
    return css`
      cursor: not-allowed;
      text-shadow: none;
      box-shadow: none !important;
      background: ${shadowColor};
      color: ${theme.getColor('subtle', opt)};
      &:hover,
      &:focus {
        background: auto !important;
        box-shadow: auto !important;
      }
    `;
  },
  link: (theme: t, opt: o) => {
    return css`
      box-shadow: none !important;
      background: none !important;
      color: ${theme.getColor('text')};
    `;
  },
  pulsing: (theme: t, opt: o) => {
    const shadowColor = opt?.variants?.onDark ? 255 : 0;
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
  // raised: (theme: t, opt: o) => css`
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
  // underlineGrow: (theme: t, opt: o) => css`
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
  // loading: (theme: t, opt: o) => css`
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
  // underlineSlide: (theme: t, opt: o) => css`
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
