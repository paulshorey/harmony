import mq from './mq';

// install extension vscode-color-picker to see previews of colors in all files
const theme = {
  mq,
  instance: {
    variants: {},
  },
  sizes: {
    buttonsAndInputs: {
      height: {
        xs: 1.5,
        sm: 1.95,
        md: 2.33,
        lg: 2.55,
        xl: 3,
      },
      paddingX: {
        xs: 0.67,
        sm: 0.75,
        md: 1,
        lg: 1,
        xl: 1.5,
      },
      fontSize: {
        xs: 0.75,
        sm: 0.85,
        md: 1,
        lg: 1.125,
        xl: 1.5,
      },
    },
  },
};

export default theme;
