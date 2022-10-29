import { css } from '@emotion/react';
import { Button } from './index';

export default {
  default: (props) => css`
    font-size: 1.1rem;
    overflow: hidden;
    border-radius: 7px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.33px;
    vertical-align: middle;

    box-shadow: inset 1px 2px 3px 0 hsl(0, 0%, 0%, 0.25);
    text-shadow: 1px 1px 5px var(--color-text);
    color: var(--color-bg);

    display: relative;
    box-sizing: content-box;
    border: none;
    box-shadow: 1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
    outline: none;
    background: var(--color-text-gradient);

    &:focus {
      outline: solid 2px rgb(30 167 253);
    }

    &:hover,
    &:focus:not(:hover) {
      background-size: 200% auto;
      transition: background-position 300ms linear 0s,
        background-size 300ms linear 0s;
      background-position: right center;
    }

    &:focus:hover {
      outline: none !important;
    }
    > * {
      position: relative;
    }
    &:hover {
      > * {
        top: -1px;
        left: -1px;
      }
    }
    &:focus {
      > * {
        top: -1px;
        left: -1px;
      }
    }
    &:focus:not(:hover) {
      > * {
        top: -1px;
        left: -1px;
      }
    }
    &:focus:hover {
      > * {
        top: 0px;
        left: 0px;
      }
    }

    .Button--spacer {
      display: inline-block;
      width: 0.5rem;
    }
    .Button--icon:last-child {
      margin-right: 0;
      display: inline-block;
      position: relative;
      transform: scale(1.25);
      transform-origin: center;
    }
    .Button--loading {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      display: flex !important;
      align-items: center;
      justify-content: center;
    }

    // size, round, & other props
    height: 2.8rem;
    line-height: calc(2.8rem - 5px);
    padding: 0 1.3rem 0 1.3rem;

    ${props.theme?.instance?.variants?.link &&
    css`
      padding: 0 0.67rem;
    `}

    ${props.icon &&
    !props.children &&
    css`
      padding: 0;
      width: 2.8rem;
    `}

    ${props.round &&
    css`
      border-radius: 1.4rem;
    `}
  `,
  outline: (props) => css`
    color: var(--color-text);
    text-shadow: none !important;
    &::before {
      content: '';
      position: absolute;
      padding: 0;
      border-radius: 5px;
      top: 2px;
      left: 2px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      background: var(--color-bg);
    }
    &:hover::before,
    &:focus:not(:hover)::before {
      transition: background-position 300ms linear 0s;
      background-position: center;
    }
  `,
  link: (props) => css`
    background: none;
    text-shadow: none !important;
    box-shadow: none;
    color: var(--color-text);
  `,
  size_small: (props) => css`
    font-size: 1rem;
    height: 2rem;
    line-height: calc(2rem - 5px);
    padding: 0 1.1rem 0 1.1rem;

    ${props.theme?.instance?.variants?.link &&
    css`
      padding: 0 0.55rem;
    `}

    ${props.icon &&
    !props.children &&
    css`
      padding: 0;
      width: 2rem;
    `}

    ${props.round &&
    css`
      border-radius: 1rem;
    `}
  `,
  size_large: (props) => css`
    font-size: 1.2rem;
    height: 3.4rem;
    line-height: calc(3.4rem - 5px);
    padding: 0 1.8rem 0 1.8rem;

    ${props.theme?.instance?.variants?.link &&
    css`
      padding: 0 0.9rem;
    `}

    ${props.icon &&
    !props.children &&
    css`
      padding: 0;
      width: 3.54rem;
    `}

    ${props.round &&
    css`
      border-radius: 1.7rem;
    `}
  `,
  spinning: `
  > * {
    @keyframes basic-spin {
      0% {
        }
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    animation: basic-spin 1.2s linear infinite;
  }
  `,
  pulsing: `
    padding: 12px 24px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
    animation: pulse 4s infinite cubic-bezier(0.66, 0, 0, 1);
    @keyframes pulse {
      to {
        box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
      }
    }
  `,
};
