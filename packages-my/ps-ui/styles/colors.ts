const colors: any = {
  default: {
    default: {
      bgDark: '#777',
      bgLight: '#efefef',
      error: '#e30000',
      warning: '#e38935',
      success: '#27b30d',
    },
    onLight: {
      bg: 'white',
      link: 'hsla(199, 79%, 89%, 1)',
      text: '#666',
      subtle: 'hsla(0, 0%, 0%, 0.3)',
      border: '#777',
    },
    onDark: {
      bg: '#333',
      link: '#333',
      text: '#efefef',
      subtle: '#999',
      border: '#777',
    },
  },
  cta1: {
    default: {
      bg: 'hsl(239 70% 70%)',
      bgDark: 'hsl(226 73% 63%)',
      bgLight: 'hsl(272 57% 67%)',
      link: 'hsl(229 75% 70%)',
      subtle: 'hsl(239 80% 75%)',
      border: 'hsla(229, 79%, 69%, 1)',
      gradientText: 'white',
    },
    onLight: {},
    onDark: {
      link: 'hsl(229 70% 70%)',
      subtle: 'hsl(239 80% 80%)',
    },
  },
  cta2: {
    default: {
      bg: 'hsl(198deg 100% 70%)',
      bgDark: 'hsl(208deg 100% 65%)',
      bgLight: 'hsl(188deg 100% 70%)',
      link: 'hsla(199, 79%, 89%, 1)',
      subtle: 'hsl(180deg 70% 50%)',
      border: 'hsl(188deg 100% 73%)',
      gradientText: 'white',
    },
    onLight: {},
    onDark: {
      link: 'hsl(188deg 75% 65%)',
      subtle: 'hsl(188deg 85% 80%)',
    },
  },
};

// Interpolate
for (let hue in colors) {
  for (let shade in colors[hue]) {
    colors[hue][shade] = {
      ...colors.default?.default,
      ...colors.default?.[shade],
      ...colors[hue]?.default,
      ...colors[hue]?.[shade],
    };
  }
  colors[hue] = {
    ...colors.default,
    ...colors[hue],
  };
}

const keys = {
  bg: true,
  link: true,
  text: true,
  subtle: true,
  border: true,
  bgLight: true,
  bgDark: true,
  bgMedium: true,
  gradientText: true,
  error: true,
  warning: true,
  success: true,
};
export type colorHueType = string;
export type colorShadeType = string;
export type colorKeyType = keyof typeof keys;
export type colorsType = Record<
  colorHueType,
  Record<colorShadeType, Record<colorKeyType, string>>
>;

export default colors as typeof colors;
