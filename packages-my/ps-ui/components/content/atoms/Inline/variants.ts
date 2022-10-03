export default {
  default: (theme: theme) => ``,
  borderBottom: (theme: theme) => `
    text-decoration: none;
    padding: 0;
    display: inline-block;
    color: ${theme.getColor('text')};
    border-bottom: solid 2px ${theme.getColor('text')};
    margin: 0 2px 4px;
    &:hover {
      border-color: transparent;
    }
  `,
  code: (theme: theme) => `
    padding: 0.25rem;
    white-space: pre;
    font-family: ${theme.fonts.code};
    font-size: 0.9rem;
    font-style: normal;
    text-decoration: none;
    background: ${theme.getColor('subtle')};
    border: solid 1px #333;
    color: #111;
    border-radius: 4px;
  `,
};
