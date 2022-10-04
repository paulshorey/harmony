export default {
  'bg-color': (theme: theme) => `
    background-color: ${theme.getColor('bg')};
  `,
  'text-color': (theme: theme) => `
    color: ${theme.getColor('text')};
  `,
};
