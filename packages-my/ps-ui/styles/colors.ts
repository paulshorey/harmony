const defaultColors = {
  solid: '',
  shadow: '',
  gradientA: '',
  gradientB: '',
  gradientC: '',
  gradientText: '',
  error: '#e30000',
  warning: '#e38935',
  success: '#27b30d',
};
const onLight = {
  ...defaultColors,
  bg: 'white',
  text: '#333',
  subtle: '#999',
};
const onDark = {
  ...defaultColors,
  bg: 'white',
  text: '#333',
  subtle: '#999',
};
const colors = {
  onLight,
  onDark,
  cta1: {
    ...onDark,
    solid: 'hsl(239 70% 70%)',
    shadow: 'hsla(229, 79%, 69%, 1)',
    gradientA: 'hsl(272 51% 64%)',
    gradientB: 'hsl(226 70% 65%)',
    gradientC: 'hsl(272 51% 64%)',
    gradientText: 'white',
  },
  cta2: {
    ...onDark,
    solid: 'hsla(199, 79%, 89%, 1)',
    shadow: 'hsla(199, 79%, 99%, 1)',
    gradientA: '#62ddff',
    gradientB: '#4dabff',
    gradientC: '#4dabff',
    gradientText: 'white',
  },
};

export default colors;
export type colorsType = typeof colors.onLight;
export type colorsKeyType = keyof typeof colors;
