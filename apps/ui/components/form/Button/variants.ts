export default {
  default: `
  // size
  height: 2.8rem;
  line-height: calc(2.8rem - 5px);
  padding: 0 1.2rem 0 1.3rem;

  // etc
  font-size: 1.1rem;
  overflow: hidden;
  border-radius: 7px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  vertical-align: middle;

  &:focus:hover {
    outline: none !important;
  }
  > * {
    position:relative;
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

  .Button--icon {
    margin-right: 0.33rem;
  }
  .Button--icon:last-child {
    margin-right: 0;
    font-size: 1.25em;
  }
  `,
  size_small: `
  font-size: 1rem;
  height: 2rem;
  line-height: calc(2rem - 5px);
  padding: 0 1rem 0 1.1rem;
`,
  size_large: `
  font-size: 1.2rem;
  height: 3.3rem;
  line-height: calc(3.3rem - 5px);
  padding: 0 1.7rem 0 1.8rem;
`,
  spinning: `
  {
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
};
