export default {
  default: (props: any) => `
    position: relative;
    /* Do not put display:block; or anything here, because this component is used for inline/generic elements */
  `,
  borderBottom: (props: any) => `
    text-decoration: none;
    padding: 0;
    display: inline-Box;
    color: var(--color-cta-to);
    border-bottom: solid 2px var(--color-cta-to);
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
  bgLight: (props: any) => `
  color: var(--color-text);
  background: var(--color-bg);
  `,
  bgDark: (props: any) => `
  color: var(--color-text);
  background: var(--color-bg);
  `,
  textGradient: (props: any) => `
    color: var(--color-cta-text);
    @supports (--css: variables) {
      background-image: linear-gradient(
        to right,
        var(--color-cta),
        var(--color-cta-from),
        var(--color-cta-to)
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
