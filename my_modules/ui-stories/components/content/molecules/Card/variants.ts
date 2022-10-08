export default {
  default: (theme: theme) => `
    background-color: ${theme.getColor("bg", "default")};
    background: white;
    padding: 3rem;
  `,
  "hover-tilt": (theme: theme) => `
    &:hover {
      box-shadow: 0 0 50px rgb(17 17 17 / 50%);
      transform: rotate(-2deg) translateY(-5px) scale(1.025);
    }
  `,
  centered: (theme: theme) => `
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > * {
      display: inline-Box;
      > * {
        display: inline-Box;
      }
    }
    `,
  code: (theme: theme) => `
    font-family: ${theme.fonts.code};
    padding: 1rem;
  `,
};
