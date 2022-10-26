export default {
  default: (props: any) => `
    position:relative;
    padding: 0.125rem 0.25rem;
    vertical-align:middle;
    white-space: pre;
    font-family: var(--font-family-code);
    font-size: 0.9rem;
    font-style: normal;
    text-decoration: none;
    border-radius: 4px;
    display:inline-block;
    overflow: hidden;
    color: var(--color-text);
    background:none !important;
    &::before {
      content: " ";
      position:absolute;  
      opacity: 0.25;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index: 0;
      background: var(--color-bg);
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
      opacity: 0.125;
    }
  `,
  noBg: (props: any) => `
    &::before {
      opacity: 0;
      background-color: transparent;
    }
  `,
  text: (props: any) => `
    &::before {
      display:none;
    }
    background-color: transparent;
    border: none;
    padding: 0;
    
    &:last-of-type {
      padding: 0;
      &::after {
        content: '';
      }
    }
  `,
  redacted: (props: any) => `
    &::before {
      opacity: 1;
      z-index: 10;
    }
  `,
};
