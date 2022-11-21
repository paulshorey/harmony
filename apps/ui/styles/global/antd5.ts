import { css } from '@emotion/react';

/*
 * Ant Design v5 uses css-in-js, no longer requires a global css file. So, these are just a few overrides.
 */
const antd = (theme) => css`
  .ant-select-dropdown {
    width: auto !important;
    max-width: 20rem;
    .rc-virtual-list-holder {
      max-height: 49.5vh !important;
    }
  }
`;
export default antd;
