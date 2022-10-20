export default {
  default: (props: any) => `
    overflow: hidden;
    position: relative;
    display: block;
    cursor: pointer;
    white-space: pre;
    border-radius: 0.5rem;
    margin:1.5rem 0;
    padding:0;
    overflow:auto;
    font-size: 0.9rem;
    pre {
      margin:0;
      padding: 0.75rem 0.25rem 0.75rem 0.25rem;
    }
    box-shadow: 1px 2px 3px 2px rgba(0,0,0,0.1);
  `,
};
