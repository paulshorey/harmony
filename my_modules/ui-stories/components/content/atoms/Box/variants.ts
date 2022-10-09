export default {
  default: (props: any) => `
    position: relative;
  `,
  borderBottom: (props: any) => `
    text-decoration: none;
    padding: 0;
    display: inline-Box;
    color: var(--color-deep);
    border-bottom: solid 2px var(--color-deep);
    margin: 0 2px 4px;
    &:hover {
      border-color: transparent;
    }
  `,
  code: (props: any) => `
    padding: 0.25rem;
    white-space: pre;
    font-family: var(--font-family-mono);
    font-size: 0.9rem;
    font-style: normal;
    text-decoration: none;
    background: var(--color-subtle);
    border: solid 1px var(--color-subtle-text);
    color: var(--color-subtle-text);
    border-radius: 4px;
  `,
  bg: (props: any) => `
    color: var(--color-cta-text);
    background: var(--color-cta);
  `,
  bgGradient: (props: any) => `
    box-decoration-break: clone;
    color: var(--color-cta-text);
    background: var(--color-cta);
    background-image: linear-gradient(
      330deg,
      var(--color-cta-start) 0%,
      var(--color-cta-end) 100%
    );
  `,
  text: (props: any) => `
    color: var(--color-text);  
  `,
  textGradient: (props: any) => `
    color: var(--color-cta-text);
    @supports (--css: variables) {
      background-image: linear-gradient(
        to right,
        var(--color-cta),
        var(--color-cta-start),
        var(--color-cta-end)
      );
      color: transparent;
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
    }
  `,
};
