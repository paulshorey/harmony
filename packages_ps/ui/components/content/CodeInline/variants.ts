export default {
  default: (props: any) => `
    position:relative;
    padding: 0.25rem;
    white-space: pre;
    font-family: var(--font-family-code);
    font-size: 0.9rem;
    font-style: normal;
    text-decoration: none;
    color: var(--color-bg-text);
    border-radius: 4px;
    &::before {
      content: " ";
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index: 0;
      background: var(--color-bg-lighter);
      border: solid 1px var(--color-bg-darker);
    }
    > span {
      position: relative;
      z-index: 1;
      > * {
        opacity:0.5;
      }
    }
  `,
  transparentBg: (props: any) => `
    &::before {
      opacity: 0.5;
    }
  `,
  noBg: (props: any) => `
    &::before {
      display:none;
    }
  `,
  redacted: (props: any) => `
    &::before {
      z-index: 10;
    }
  `,
};
