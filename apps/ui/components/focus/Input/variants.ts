import { css } from '@emotion/react';

export default {
  default: (props) => css`
    overflow: hidden;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    box-shadow: inset 1px 2px 3px 0 hsl(0, 0%, 0%, 0.25);
    text-shadow: 1px 1px 5px var(--color-text);
    color: var(--color-bg);

    box-sizing: content-box;
    border: none;
    box-shadow: 1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
    outline: none;
    background: var(--color-text);

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
    font-size: ${props.theme.sizes.buttonsAndInputs.fontSize[
      props.size || 'md'
    ]}rem;
    border-radius: 7px;
    font-weight: 500;
    letter-spacing: 0.33px;

    ${props.round &&
    css`
      border-radius: ${props.theme.sizes.buttonsAndInputs.height[
        props.size || 'md'
      ] / 2}rem;
    `}

    input {
      padding: 0
        ${props.theme.sizes.buttonsAndInputs.paddingX[props.size || 'md']}rem;
      outline: none !important;
      border: none;
      background: transparent;
    }

    &,
    input,
    .ant-input-prefix,
    .ant-input-suffix {
      vertical-align: middle;
      height: ${props.theme.sizes.buttonsAndInputs.height[
        props.size || 'md'
      ]}rem;
      line-height: ${props.theme.sizes.buttonsAndInputs.height[
        props.size || 'md'
      ]}rem;
    }

    .ant-input-prefix,
    .ant-input-suffix {
      width: ${props.theme.sizes.buttonsAndInputs.height[props.size || 'md'] /
      2}rem;
      display: inline-flex;
      text-align: center;
      justify-content: center;
      > span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
      }
    }
    .ant-input-prefix {
      padding-left: ${props.theme.sizes.buttonsAndInputs.paddingX[
        props.size || 'md'
      ]}rem;
    }
    .ant-input-suffix {
      right: 0;
      padding-right: ${props.theme.sizes.buttonsAndInputs.paddingX[
        props.size || 'md'
      ]}rem;
    }
  `,
};
