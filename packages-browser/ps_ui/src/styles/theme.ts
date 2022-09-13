import colors from '../constants/colors';
// https://styled-system.com/theme-specification/

const titleHeadings = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
};

const textHeadings = { p: 'p', span: 'span' };

type BreakpointsProp = string[] & {
  lg?: string;
  md?: string;
  sm?: string;
};

const breakpoints: BreakpointsProp = ['768px', '960px', '1280px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];

const theme = {
  breakpoints,
  colors,
  fontSize: {
    errorMessage: '15px',

    subTitle: '17px',

    title: '20px',
    // @TODO - REMOVE EXISTING USES AND REPLACE W FONTSIZE
    titleLarge: '26px',
  },
  fontSizes: [12, 14, 16, 18, 20, 22, 26, 30, 32],
  fontWeights: {
    black: 900,
    bold: 700,
    extrabold: 800,
    extralight: 200,
    light: 300,
    medium: 500,
    normal: 400,
    semibold: 600,
    thin: 100,
  },
  fonts: {
    helvetica: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;',
    helveticaLight:
      'HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
    sfproRounded: 'sfprorounded',
  },
  space: [0, 4, 8, 12, 16, 20, 24, 32, 36, 40, 44, 48, 52, 56, 60, 64],
  textHeadings,
  titleHeadings,
  zIndex: {
    dropdown: 100,
    loader: 1500,
    modal: 10000,
    nav: 1000,
    subNav: 999,
  },
};

export type Theme = typeof theme;

export default theme;
