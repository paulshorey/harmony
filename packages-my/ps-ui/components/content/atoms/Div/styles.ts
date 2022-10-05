export default (theme: theme) => `
`;
export const bgWhite = (theme: theme) => `
  color: ${theme.getColor('text')};
  background: white;
`;
export const bgGradient = (theme: theme) => `
  color: ${theme.getColor('text')};
  background: ${theme.getColor('bg')};
  background-image: linear-gradient(
    330deg,
    ${theme.getColor('bgLight')} 0%,
    ${theme.getColor('bgDark')} 100%
  );
`;

export const GLOBAL = `
    .bg-gradient .text-gradient {

    }
`;
