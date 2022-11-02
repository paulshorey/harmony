import { css } from '@emotion/react';

export default {
  default: (props) => css`
    overflow: hidden;
    position: relative;
    display: inline-flex;
    justify-content: space-between;
    cursor: pointer;
    vertical-align: middle;
    text-shadow: 1px 1px 5px var(--color-text);
    color: var(--color-bg);
    box-sizing: content-box;
    border: none;
    outline: none;
    background: var(--color-text-gradient);
    box-shadow: 1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
    letter-spacing: 0;
    text-transform: unset;
    white-space: nowrap;
    min-width: 0;

    &:hover,
    &:focus {
      outline: solid 2px var(--color-cta);
    }
    &:hover,
    &:focus:not(:hover) {
      background-size: 200% auto;
      transition: background-position 300ms linear 0s,
        background-size 300ms linear 0s;
      background-position: right center;
    }

    &:hover:not(:focus) {
      outline: none !important;
    }
    &:hover {
      box-shadow: 0 0 0 2px var(--color-cta) !important;
    }
    > *:not(.MuiTouchRipple-root) {
      position: relative;
    }
    /* 
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
    } */

    .Button--spacer {
      display: inline-block;
      width: 0.5rem;
    }
    .Button--icon:first-child:last-child {
      margin-right: 0;
      display: inline-block;
      position: relative;
      transform: scale(1.25);
      transform-origin: center;
    }
    .Button--icon.Button--loading {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      display: flex !important;
      align-items: center;
      justify-content: center;
      transform: scale(1.5);
    }

    // size, round, & other props
    height: ${props.theme.sizes.buttonsAndInputs.height[props.size || 'md']}rem;
    line-height: ${props.theme.sizes.buttonsAndInputs.height[
      props.size || 'md'
    ]}rem;
    padding: 0
      ${props.theme.sizes.buttonsAndInputs.paddingX[props.size || 'md']}rem;
    font-size: ${props.theme.sizes.buttonsAndInputs.fontSize[
      props.size || 'md'
    ]}rem;
    border-radius: 7px;
    font-weight: 500;
    letter-spacing: 0.33px;

    ${props.theme?.instance?.variants?.link &&
    css`
      padding: 0
        ${props.theme.sizes.buttonsAndInputs.paddingX[props.size || 'md'] /
        2}rem;
    `}

    ${props.icon &&
    !props.children &&
    css`
      justify-content: center;
      padding: 0;
      width: ${props.theme.sizes.buttonsAndInputs.height[props.size || 'md'] +
      0.1}rem;
    `}

    ${props.round &&
    css`
      border-radius: ${props.theme.sizes.buttonsAndInputs.height[
        props.size || 'md'
      ] / 2}rem;
    `}
  `,
  outlined: (props) => css`
    color: var(--color-text);
    text-shadow: none !important;
    &::before {
      content: '';
      position: absolute;
      padding: 0;
      border-radius: 6px;
      top: 1px;
      left: 1px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      background: var(--color-bg);
    }
    &:hover::before,
    &:focus:not(:hover)::before {
      transition: background-position 300ms linear 0s;
      background-position: center;
    }

    ${props.round &&
    css`
      &::before {
        border-radius: calc(
          ${props.theme.sizes.buttonsAndInputs.height[props.size || 'md'] /
            2}rem - 1px
        );
      }
    `}
  `,
  text: (props) => css`
    background: none;
    text-shadow: none !important;
    box-shadow: none;
    color: var(--color-text);
    /* text-decoration: underline;
    text-underline-offset: 2.5px;
    text-decoration-thickness: 1.25px; */
  `,
  spinning: css`
    svg {
      animation: spin-linear 2s infinite linear;
      transform-origin: center;
    }
    @keyframes spin-linear {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,
  pulsing: css`
    animation: pulse 4s infinite cubic-bezier(0.66, 0, 0, 1);
    @keyframes pulse {
      from {
        box-shadow: 0 0 0 0 var(--color-glow);
      }
      to {
        box-shadow: 0 0 0 30px transparent;
      }
    }
  `,
};
