import { css } from '@emotion/react';
import { themeType } from '@ps/ui/styles/theme';

export default {
  default: (theme: themeType) => css`
    border: none;
    font-size: 1rem;
    overflow: hidden;
    border-radius: 7px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none !important;
    box-shadow: inset rgb(155 155 155 / 50%) 0px 0px 0px 1px,
      1px 2px 3px 0 hsl(0, 0%, 0%, 0.2);
    padding: 12px 24px;
    background: #efefef;
    &:hover,
    &:focus {
      outline: none !important;
    }
    &:focus,
    &:hover {
      background: hsl(0deg, 0%, 88%);
      box-shadow: inset rgba(0, 0, 0, 0.1) 0 0 0 1px;
    }
    &:focus {
      box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 0 1px;
    }
  `,
  onDark: (theme: themeType) => css`
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
  gradient: (theme: themeType, options: any) => css`
    color: ${theme.getColors(options.colorsKey).gradientText};
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
        ${theme.getColors(options.colorsKey).gradientA} 0%,
        ${theme.getColors(options.colorsKey).gradientB} 65%,
        ${theme.getColors(options.colorsKey).gradientC} 130%
      ) !important;
    }
  `,
  pulsing: (theme: themeType) => {
    const pulseColor = theme.colorsKey === 'onDark' ? 255 : 0;
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
  underlineGrow: (theme: themeType) => css`
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
      background-color: ${theme.getColors().solid} 0.6;
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
      background-color: ${theme.getColors().solid} flashing 1.4s infinite linear;
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
  underlineSlide: (theme: themeType) => css`
    display: inline-block;
    position: relative;
    color: white;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      transform-origin: bottom right;
      transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `,
};
