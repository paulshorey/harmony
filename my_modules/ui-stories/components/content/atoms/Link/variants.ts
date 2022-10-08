export default {
  default: (theme: theme) => `
    `,
  textGradient: (theme: theme) => {
    return `
        color: ${theme.getColor("link")};
        @supports (--css: variables) {
          background-image: linear-gradient(
            to right,
            ${theme.getColor("subtle")},
            ${theme.getColor("bgLight")},
            ${theme.getColor("bgDark")}
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
