export default {
  default: (props: any) => `
    background-color: var(--color-bg);
    background: white;
    padding: 3rem 2rem 2.25rem 2.5rem;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    box-shadow: 1px 2px 3px 2px rgba(0,0,0,0.1);
  `,
  hoverTilt: (props: any) => `
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 0 50px rgb(17 17 17 / 20%);
      transform: rotate(-1deg) translateY(-2px) scale(1.015);
      ${props.theme.mq.sm} {
        transform: rotate(-1.5deg) translateY(-2px) scale(1.025);
      }
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
