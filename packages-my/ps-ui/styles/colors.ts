const sameForBoth = {
  error: '#e30000',
  warning: '#e38935',
  success: '#27b30d',

  // dark: 'hsl(239 70% 60%)',
  // dark_shadow: 'hsla(229, 79%, 69%, 1)',
  // dark_gradientA: 'hsl(272 51% 54%)',
  // dark_gradientB: 'hsl(226 70% 55%)',
  // dark_gradientC: 'hsl(272 51% 54%)',
  // dark_gradientText: 'white',

  // light: 'hsla(199, 79%, 89%, 1)',
  // light_shadow: 'hsla(199, 79%, 99%, 1)',
  // light_gradientA: '#4dabff',
  // light_gradientB: '#62ddff',
  // light_gradientC: '#4dabff',
  // light_gradientText: 'white',

  accent: 'hsla(199, 79%, 89%, 1)',
  accent_shadow: 'hsla(199, 79%, 99%, 1)',
  accent_gradientA: '#4dabff',
  accent_gradientB: '#62ddff',
  accent_gradientC: '#4dabff',
  accent_gradientText: 'white',
};
export const colorsOnLight = {
  ...sameForBoth,
  bg: 'white',
  primary: '#333',
  secondary: '#999',

  cta: 'hsl(239 70% 70%)',
  cta_shadow: 'hsla(229, 79%, 69%, 1)',
  cta_gradientA: 'hsl(272 51% 64%)',
  cta_gradientB: 'hsl(226 70% 65%)',
  cta_gradientC: 'hsl(272 51% 64%)',
  cta_gradientText: 'white',
};
export const colorsOnDark = {
  ...sameForBoth,
  bg: '#333',
  primary: '#fff',
  secondary: '#999',

  // cta: 'hsl(239 70% 70%)',
  // cta_shadow: 'hsla(229, 79%, 69%, 1)',
  // cta_gradientA: 'hsl(272 51% 64%)',
  // cta_gradientB: 'hsl(226 70% 65%)',
  // cta_gradientC: 'hsl(272 51% 64%)',
  // cta_gradientText: 'white',

  cta: 'hsla(199, 79%, 89%, 1)',
  cta_shadow: 'hsla(199, 79%, 99%, 1)',
  cta_gradientA: '#4dabff',
  cta_gradientB: '#62ddff',
  cta_gradientC: '#4dabff',
  cta_gradientText: 'yellow',
};

export type colorsType = typeof colorsOnLight;
