import { css } from '@emotion/react';
import { themeType } from '@ps/ui/styles/theme';

export default {
  cta: (theme: themeType) => {
    return css`
      color: ${theme.colors[theme.colorScheme].cta_gradientText};
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.125);
      background-size: 200% auto;
      transition: all 300ms linear 0s;
      &:hover {
        background-position: right center;
        color: #fff;
      }
      &,
      &:focus,
      &:hover {
        background-image: linear-gradient(
          160deg,
          ${theme.colors[theme.colorScheme].cta_gradientA} -10%,
          ${theme.colors[theme.colorScheme].cta_gradientB} 50%,
          ${theme.colors[theme.colorScheme].cta_gradientC} 120%
        ) !important;
      }
    `;
  },
  default: (theme: themeType) => {
    return css`
      border: none;
      box-shadow: inset rgb(155 155 155 / 50%) 0px 0px 0px 1px,
        1px 2px 3px 0 hsl(0, 0%, 0%, 0.2);
      font-size: 1rem;
      overflow: hidden;
      padding: 12px 24px;
      border-radius: 7px;
      position: relative;
      display: inline-block;
      cursor: pointer;
      background: #efefef;
      background-image: linear-gradient(
        160deg,
        #fff -33%,
        #efefef 50%,
        #efefef 133%
      );
      outline: none !important;
      &:focus,
      &:hover {
        outline: none !important;
        background-image: linear-gradient(
          160deg,
          hsl(0deg, 0%, 95%) -33%,
          hsl(0deg, 0%, 85%) 50%,
          hsl(0deg, 0%, 95%) 133%
        );
      }
      &:focus {
        box-shadow: inset ${theme.colors[theme.colorScheme].cta_shadow} 0px 0px
          0px 1px;
      }
    `;
  },
  pulsing: (theme: themeType) => {
    const pulseColor = theme.colorScheme === 'onDark' ? 255 : 0;
    return css`
      padding: 12px 24px;
      border-radius: 7px;
      box-shadow: 0 0 0 0 rgba(${pulseColor}, ${pulseColor}, ${pulseColor}, 0.1);
      animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);
      @keyframes pulse {
        to {
          box-shadow: 0 0 0 30px
            rgba(${pulseColor}, ${pulseColor}, ${pulseColor}, 0);
        }
      }
    `;
  },
  raised: (theme: themeType) => css`
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
  underlined: (theme: themeType) => css`
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
      background-color: ${theme.colors[theme.colorScheme].primary} 0.6;
    }
    &:hover:before {
      transform: scaleY(1);
    }
  `,
  loading: (theme: themeType) => css`
    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${theme.colors[theme.colorScheme].primary} flashing 1.4s
        infinite linear;
      margin: 0 4px;
      display: inline-block;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }

    @keyframes flashing {
      0% {
        opacity: 0.2;
      }
      20% {
        opacity: 1;
      }
      100% {
        opacity: 0.2;
      }
    }
  `,
  onDark: (theme: themeType) => css`
    &:focus {
      box-shadow: inset ${theme.colors[theme.colorScheme].accent} 0 0 0 1px;
    }
  `,
};
