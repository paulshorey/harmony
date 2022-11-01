import { css } from '@emotion/react';

export default {
  default: (props) => css`
    z-index: 1000;
  `,
  dropdown: (props) => css``,
  modal: (props) => css``,
  tooltip: (props) => css`
    padding: 0.5rem 0.875rem;
    font-size: 0.85rem;
    line-height: 1.25;
    border-radius: 0.25rem;
    width: 200px;
  `,
};
