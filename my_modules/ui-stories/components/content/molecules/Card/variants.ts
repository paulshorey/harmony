export default {
  default: (props: any) => `
    background-color: var(--color-bg);
    background: white;
    padding: 3rem;
  `,
  hoverTilt: (props: any) => `
    &:hover {
      box-shadow: 0 0 50px rgb(17 17 17 / 50%);
      transform: rotate(-2deg) translateY(-5px) scale(1.025);
    }
  `,
  centered: (props: any) => `
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
  code: (props: any) => `
    font-family: var(--font-family-mono);
    padding: 1rem;
  `,
};
