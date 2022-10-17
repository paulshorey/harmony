export default {
  bgSolid: (props: any) => `
    color: var(--color-text);
    background: var(--color-bg);
  `,
  bgGradient: (props: any) => `
    box-decoration-break: clone;
    color: var(--color-bg-text);
    background: var(--color-bg);
    background-image: linear-gradient(
      333deg,
      var(--color-bg-to) 0%,
      var(--color-bg-from) 75%
    );
  `,
};
