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
        sm: 1.75,
        md: 2,
        lg: 2.25,
        xl: 2.5,
      },
      paddingX: {
        xs: 0.25,
        sm: 0.5,
        md: 0.75,
        lg: 1,
        xl: 1.25,
      },
      fontSize: {
        xs: 0.75,
        sm: 0.875,
        md: 1,
        lg: 1.125,
        xl: 1.25,
      },
    },
  },
};

export default theme;
