const colors: any = {
  default: {
    default: {
      gradientA: '',
      gradientB: '',
      gradientC: '',
      error: '#e30000',
      warning: '#e38935',
      success: '#27b30d',
    },
    onLight: {
      bg: 'white',
      text: '#454545',
      subtle: '#999',
      shadow: 'rgb(155 155 155 / 0.35)',
    },
    onDark: {
      bg: '#333',
      text: '#fff',
      subtle: '#999',
      shadow: 'rgb(155 155 155 / 0.35)',
    },
  },
  cta1: {
    default: {
      bg: 'hsl(239 70% 70%)',
      text: 'hsl(239 70% 70%)',
      shadow: 'hsla(229, 79%, 69%, 1)',
      gradientA: 'hsl(272 51% 64%)',
      gradientB: 'hsl(226 70% 65%)',
      gradientC: '',
      gradientText: 'white',
    },
    onLight: {},
    onDark: {},
  },
  cta2: {
    default: {
      bg: 'hsla(199, 79%, 89%, 1)',
      text: '#4dabff',
      shadow: '#4dabff',
      gradientA: '#62ddff',
      gradientB: '#4dabff',
      gradientC: '#4dabff',
      gradientText: 'white',
    },
    onLight: {},
    onDark: {},
  },
};

// Interpolate
for (let hue in colors) {
  for (let shade in colors[hue]) {
    colors[hue][shade] = {
      ...colors.default.default,
      ...colors.default[shade],
      ...colors[hue].default,
      ...colors[hue][shade],
    };
  }
  colors[hue] = {
    ...colors.default,
    ...colors[hue],
  };
}

const keys = {
  bg: true,
  text: true,
  subtle: true,
  shadow: true,
  gradientA: true,
  gradientB: true,
  gradientC: true,
  gradientText: true,
  error: true,
  warning: true,
  success: true,
};
export type colorHueType = keyof typeof colors;
export type colorShadeType = keyof typeof colors.default;
export type colorKeyType = keyof typeof keys;
export type colorsType = Record<
  colorHueType,
  Record<colorShadeType, Record<colorKeyType, string>>
>;
export default colors as typeof colors;
