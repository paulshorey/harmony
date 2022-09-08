import breaks, { breaksType } from './breaks';
import colors from './colors';
import mq, { mqType } from './mq';

export type themeType = {
  breakpoints: string[] & {
    lg?: string;
    md?: string;
    sm?: string;
    xl?: string;
  };
  breaks: breaksType;
  colors: Record<string, string>;
  fonts: Record<string, string>;
  mq: mqType;
  zIndex: Record<string, number>;
};

const theme: themeType = {
  mq,
  zIndex: {
    dropdown: 100,
    loader: 1500,
    modal: 10000,
    nav: 1000,
    subNav: 999,
  },
  breaks,
  breakpoints: [],
  colors,
  fonts: {
    graycliff: 'graycliff,Helvetica,sans-serif',
    helvetica:
      'Helvetica Neue, HelveticaNeue, Helvetica, Arial, Lucida Grande, sans-serif',
    helveticaLight:
      'HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
    sfproRounded: 'sfprorounded, Lucida Grande, sans-serif',
  },
};

/*
 * To be compatible with Chakra/Styled-System (https://styled-system.com/responsive-styles)
 * The most important part is the array, but should not have too many items (4 is a good amount).
 * Chakra/Styled-System components will sometimes refer to this by index, other times by property key.
 * Two ways to use breakpoints:
 * <Box width={[1, 1 / 2, 1 / 4]} /> // what about less than smallest or greater than largest?
 * <Box width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }} /> // `_` == default, but is this default for less than smallest or greater than largest?
 */
theme.breakpoints = [
  theme.breaks.small + 'px', // mobile < 738
  theme.breaks.medium + 'px', // tablet < 1024
  theme.breaks.large + 'px', // desktop small < 1440
  theme.breaks.xlarge + 'px', // desktop large
];
theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];
theme.breakpoints.xl = theme.breakpoints[3];

export type Theme = themeType;
export default theme;
