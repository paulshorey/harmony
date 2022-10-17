export default {
  default: (props: any) => `
    overflow: hidden;
    position: relative;
    display: block;
    cursor: pointer;
    white-space: pre;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    margin:0;
    padding:0;
    overflow:auto;
    pre {
      margin:0;
      padding: 1.5rem 0.75rem 1rem 1.25rem;
    }
  `,
  transparentDark: (props: any) => `
    box-shadow: 1px 2px 3px 2px rgba(0,0,0,0.1);
  `,
  transparentLight: (props: any) => `
    box-shadow: 1px 2px 3px 2px rgba(0,0,0,0.1);
  `,
};
