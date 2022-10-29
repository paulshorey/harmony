import { css } from '@emotion/react';

export default {
  default: (props) => css`
    overflow: hidden;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    box-shadow: inset 1px 2px 3px 0 hsl(0, 0%, 0%, 0.25);
    text-shadow: 1px 1px 5px var(--color-text);
    color: var(--color-bg);

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
    // size, round, & other props
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

    &,
    input {
      height: ${props.theme.sizes.buttonsAndInputs.height[
        props.size || 'md'
      ]}rem;
      line-height: calc(
        ${props.theme.sizes.buttonsAndInputs.height[props.size || 'md']}rem -
          5px
      );
    }

    input {
      outline: none !important;
      border: none;
      background: transparent;
    }

    .ant-input-prefix,
    .ant-input-suffix {
      width: ${props.theme.sizes.buttonsAndInputs.height[props.size || 'md'] +
      0.1}rem;
      height: ${props.theme.sizes.buttonsAndInputs.height[props.size || 'md'] +
      0.1}rem;
    }
    .ant-input-suffix {
      right: 0;
    }
  `,
};
