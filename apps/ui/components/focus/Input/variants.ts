import { css } from '@emotion/react';

export default {
  default: (props) => css`
    overflow: hidden;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-shadow: none;
    color: #999;

    box-sizing: content-box;
    border: none;
    background: white;

    border-radius: 7px;
    font-weight: 500;
    letter-spacing: 0.33px;

    &:focus,
    &:focus-within {
      box-shadow: 0 0 0 2px var(--color-cta);
    }

    /*
     * Just the input by itself, without prefix/suffix before/after
     */
    &.ant-input {
      outline: none;
      padding: 0
        ${props.theme.sizes.buttonsAndInputs.paddingX[props.size || 'md']}rem;
    }

    /*
     * With prefix/suffix before/after, input is rendered as child
     */
    input {
      outline: none !important;
      border: none;
      background: transparent;
      margin: 1px 0 0;
      padding: 0
        ${props.theme.sizes.buttonsAndInputs.paddingX[props.size || 'md'] *
        0.5}rem;
    }

    &,
    input {
      font-size: ${props.theme.sizes.buttonsAndInputs.fontSize[
        props.size || 'md'
      ]}rem;
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
      display: inline-flex;
      text-align: center;
      justify-content: center;
      > span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
      }
      svg {
        margin: 0 -${props.theme.sizes.buttonsAndInputs.paddingX[props.size || 'md'] / 6}rem;
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

    /*
     * Hover/Focus
     */
    &:hover,
    &:focus:not(:hover) {
      background-size: 200% auto;
      transition: background-position 300ms linear 0s,
        background-size 300ms linear 0s;
      background-position: right center;
    }

    /*
     * Props
     */
    ${props.round &&
    css`
      border-radius: ${props.theme.sizes.buttonsAndInputs.height[
        props.size || 'md'
      ] / 2}rem;
    `}
  `,
};
