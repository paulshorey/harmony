export default {
  padding: (theme: theme) => `
    padding: 1.1rem 1rem 1.2rem;
  `,
  bgColor: (theme: theme) => `
    background-color: ${theme.getColor('bg')};
  `,
  textColor: (theme: theme) => `
    color: ${theme.getColor('text')};
  `,
  bgGradient: (theme: theme) => {
    return `
      display: block;
      position: relative;
      color: white;
      background: ${theme.getColor('bg')};
      background-image: linear-gradient(
        330deg,
        ${theme.getColor('bgLight')} 0%,
        ${theme.getColor('bgDark')} 100%
      );
    `;
  },
  textGradient: (theme: theme) => {
    return `
      color: ${theme.getColor('link')};
      @supports (--css: variables) {
        background-image: linear-gradient(
          to right,
          ${theme.getColor('subtle')},
          ${theme.getColor('bgLight')},
          ${theme.getColor('bgDark')}
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
