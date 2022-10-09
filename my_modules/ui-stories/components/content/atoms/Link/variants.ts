export default {
  default: (props: any) => `
    `,
  textGradient: (props: any) => {
    return `
        color: var(--color-cta);
        @supports (--css: variables) {
          background-image: linear-gradient(
            to right,
            var(--color-subtle),
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
      `;
  },
};
