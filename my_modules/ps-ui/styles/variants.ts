export default {
  'bg-white': (theme: theme) => `
    background-color: white;
  `,
  'bg-color': (theme: theme) => `
    background-color: ${theme.getColor('bg')};
  `,
  'text-color': (theme: theme) => `
    color: ${theme.getColor('text')};
  `,
};
