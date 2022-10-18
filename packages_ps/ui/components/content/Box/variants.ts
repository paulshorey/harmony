export default {
  default: (props: any) => `
    position: relative;
    /* Do not put display:block; or anything here, because this component is used for inline/generic elements */
  `,
  borderBottom: (props: any) => `
    text-decoration: none;
    padding: 0;
    display: inline-block;
    color: var(--color-cta-darker);
    border-bottom: solid 2px var(--color-cta-darker);
    margin: 0 2px 4px;
    &:hover {
      border-color: transparent;
    }
  `,
  center: (props: any) => `
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      display: inline-block;
    }
  `,
  textGradient: (props: any) => `
  box-decoration-break: clone;
    color: var(--color-cta-text);
    @supports (--css: variables) {
      background-image: linear-gradient(
        -333deg,
        var(--color-cta-lighter),
        var(--color-cta-darker)
      );
      color: transparent;
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
  `,
  textGradientReversed: (props: any) => `
  box-decoration-break: clone;
    color: var(--color-cta-text);
    @supports (--css: variables) {
      background-image: linear-gradient(
        333deg,
        var(--color-cta-lighter),
        var(--color-cta-darker)
      );
      color: transparent;
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
    }
  `,
  textGradientSubtle: (props: any) => `
  box-decoration-break: clone;
    color: var(--color-cta-text);
    @supports (--css: variables) {
      background-image: linear-gradient(
        333deg,
        var(--color-cta-lighter) -50%,
        var(--color-cta-darker) 150%
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
