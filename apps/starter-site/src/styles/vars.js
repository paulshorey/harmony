import blueTheme from './theme';

const vars = {
  // BRAND COLORS AND VARIABLES THAT WILL NOT CHANGE FOR THE ENTIRE SITE:
  colors: {
    error: '#e30000',
    warning: '#e38935',
    success: '#27b30d',
    transparent: 'transparent',
    errorText: '#75868b',
    disabled: '#e3e9ea',
    pink: '#d92e76',
    pinkDarker: '#C80054',
    error: '#e30000',
    gray: '#a0b2b8',
    lightblack: '#414d54',
    teal: '#0697B0',
    blue: '#487BF3',
    darkGray: '#333',
    lightGray: '#E3E9EA',
    hrGray: '#E3E9EA',
  },
  fonts: {
    helvetica: 'HelveticaNeue,Helvetica,sans-serif',
    greycliff: 'greycliff,HelveticaNeue,Helvetica,sans-serif',
  },
  // BLUE (GENERAL CAUSE) THEME:
  blueTheme: blueTheme,
  // NEW IMPROVED STYLE SYSTEM:
  mq: {
    // choose by device type:
    tinyPhone: `@media (max-width: 360px)`, // Unsupported! Do not need to manually style for this. But this is used in html.js to automatically adjust rem size, shrink everything.
    smallPhone: `@media (max-width: 400px)`, // iPhone 8,X,SE,Mini = 375px, but 11,12,13 Pro = 390px
    phone: `@media (max-width: 500px)`, // most iPhones = 390-428px wide
    notPhone: `@media (min-width: 501px)`, // anything bigger than phone
    tablet: `@media (min-width: 501px) and (max-width: 1024px)`,
    largeTablet: `@media (min-width: 931px) and (max-width: 1024px)`,
    desktop: `@media (min-width: 1025px)`,
    largeDesktop: `@media (min-width: 1440px) and (max-height: 720px)`,
    veryLargeDesktop: `@media (min-width: 1920px) and (min-height: 900px)`,
    mobile: `@media (max-width: 1024px)`, // IMPORTANT: this is very generous width, ENCOMPASSES ALL mobile devices, up to the portrait mode in iPad 12
    // or binary:
    sm: `@media (max-width: 930px)`,
    lg: `@media (min-width: 931px)`,
    // override other media queries without resorting to "!important":
    any: `@media (min-width: 0px), (min-height: 0px)`,
  },
  //
  //
  //
  //
  //
  // BELOW IS OLD, DEPRECATED STYLE SYSTEM. USE ABOVE MQ STYLE SYSTEM INSTEAD.
  //
  break: {
    xxxsmall: { num: 400 }, // small phone width
    xxsmall: { num: 500 }, // large phone width
    xsmall: { num: 736 }, // height of iPhone 6/7/8 Plus, less than height of standard desktop browser
    small: { num: 930 }, // size at which our desktop content no longer fits. Less than this = use mobile layout
    medium: { num: 1024 }, // width of iPad Pro, or height of standard desktop window
    large: { num: 1200 },
    xlarge: { num: 1440 }, // width of standard 2015 Macbook Pro 15in
    xxlarge: { num: 1920 },
  },
};
//
// BELOW IS DEPRECATED. USE THE NEW ${vars.mq.tablet} or ${vars.mq.sm} syntax (above).
// To use media queries for screen height (very rare case), write them manually.
for (let size of [
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
]) {
  let obj = vars.break[size];
  obj.str = obj.num + 'px';
  obj.max = `@media (max-width: ${obj.num}px)`;
  obj.min = `@media (min-width: ${obj.num + 1}px)`;
  obj.maxHeight = `@media (max-height: ${obj.num}px)`;
  obj.minHeight = `@media (min-height: ${obj.num + 1}px)`;
  vars.break[size] = obj;
}

export default vars;
