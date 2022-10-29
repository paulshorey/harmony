import { css } from '@emotion/react';

export default {
  default: (props) => css`
    overflow: hidden;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    text-shadow: 1px 1px 5px var(--color-text);
    /* color: var(--color-text); */
    color: #999;

    box-sizing: content-box;
    border: none;
    outline: none;
    background: white;

    border-radius: 7px;
    font-weight: 500;
    letter-spacing: 0.33px;

    input {
      outline: none !important;
      border: none;
      background: transparent;
      margin: 1px 0 0;
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
      width: calc(
        ${props.theme.sizes.buttonsAndInputs.height[props.size || 'md']}rem -
          ${props.theme.sizes.buttonsAndInputs.paddingX[props.size || 'md']}rem
      );
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
    input {
      padding-left: ${props.theme.sizes.buttonsAndInputs.paddingX[
        props.size || 'md'
      ]}rem;
      padding-right: ${props.theme.sizes.buttonsAndInputs.paddingX[
        props.size || 'md'
      ]}rem;
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
