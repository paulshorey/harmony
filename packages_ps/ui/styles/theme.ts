// import colors from './colors';
import fonts from './fonts';
import mq from './mq';
import variants from './variants';
import html from './global/html';
import classes1 from './global/classes1';
import classes2 from './global/classes2';
// import fonts from './global/fonts';

/**
 * Theme can be extended/modified in the app which uses this library.
 * NOTE: whenever you see "default" object and uniquely named objects,
 * that means the uniquely named object will **extend** the default object properties.
 */
const theme: theme = {
  variants,
  fonts,
  mq,
  instance: {
    color: '',
    size: '',
    variants: {},
  },
  globalStyles: { html, classes1, classes2 },
};

export default theme;
