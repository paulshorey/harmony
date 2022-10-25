export default {
  default: (props: any) => `
    `,
  gradient: (props: any) => {
    return `
        color: var(--color-cta);
        @supports (--css: variables) {
          background-image: linear-gradient(
            to right,
            var(--color-subtle),
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
      `;
  },
};
