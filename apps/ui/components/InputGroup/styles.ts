export default {
  default: `
    display: flex;
    width: 100%;
    box-sizing: border-box;
    * {
      min-width: 0;
    }
    > * {
    }
    > *:not(:first-child) {
      &,
      .ant-select-selector {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
    > *:not(:last-child) {
      &,
      .ant-select-selector {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  `,
};
