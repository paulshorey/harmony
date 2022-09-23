const vars = {
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // GENERIC WEB COLORS AND VARIABLES THAT WILL BE THE SAME FOR ALL SITES/APPS:
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // PUT ALL BRANDING (site-specific stuff) IN THE THEME IN YOUR APP.
  // Then get the theme using useTheme() or any of the styling hooks.
  colors: {
    error: '#e30000',
    warning: '#e38935',
    success: '#27b30d',
    transparent: 'transparent',
    errorText: '#75868b',
    disabled: '#e3e9ea',
    pink: '#d92e76',
    pinkDarker: '#C80054',
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
    roboto: 'Roboto,HelveticaNeue,Helvetica,sans-serif',
  },
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // NEW IMPROVED STYLE SYSTEM:
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  mq: {
    // choose by device type:
    tinyPhone: `@media (max-width: 360px)`, // Too small for almost all phones. HOWEVER, Samsung foldable phones front display is 320px wide. Also smart watches, and very old iPhone 4/5.
    smallPhone: `@media (max-width: 400px)`, // iPhone 8,X,SE,Mini = 375px, but 11,12,13 Pro = 390px
    phone: `@media (max-width: 500px)`, // most iPhones = 390-428px wide
    notPhone: `@media (min-width: 501px)`, // anything bigger than phone
    tablet: `@media (min-width: 501px) and (max-width: 1024px)`,
    largeTablet: `@media (min-width: 931px) and (max-width: 1024px)`,
    desktop: `@media (min-width: 1025px)`,
    largeDesktop: `@media (min-width: 1440px) and (max-height: 720px)`,
    veryLargeDesktop: `@media (min-width: 1920px) and (min-height: 900px)`,
    mobile: `@media (max-width: 1024px)`, // IMPORTANT: this is very generous width, ENCOMPASSES ALL mobile devices, up to the portrait mode in iPad 12in
    // or binary:
    sm: `@media (max-width: 930px)`,
    lg: `@media (min-width: 931px)`,
    // override other media queries without resorting to "!important":
    any: `@media (min-width: 0px), (min-height: 0px)`,
  },
};
//

export default vars;
