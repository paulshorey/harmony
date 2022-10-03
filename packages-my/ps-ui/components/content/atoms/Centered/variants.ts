export default {
  default: (theme: theme) => {
    return `
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > * {
        display: inline-block;
        margin-left: 0;
        margin-right: 0;
        > * {
          display: inline-block;
          margin-left: 0;
          margin-right: 0;
        }
      }
    `;
  },
};
