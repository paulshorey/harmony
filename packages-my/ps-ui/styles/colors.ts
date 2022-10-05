const colors: colors = {
  neutral: {
    onLight: {
      bg: 'white',
      link: 'hsla(199, 79%, 89%, 1)',
      text: '#666',
      subtle: 'hsla(0, 0%, 0%, 0.3)',
      border: '#777',
      bgDark: '#777',
      bgLight: '#efefef',
      error: '#e30000',
      warning: '#e38935',
      success: '#27b30d',
      buttonText: '#666',
    },
    onDark: {
      bg: '#333',
      link: '#333',
      text: '#efefef',
      subtle: '#999',
      border: '#777',
    },
  },
  accent: {
    onLight: {
      text: 'orange',
    },
    onDark: {
      text: 'gold',
    },
  },
  cta1: {
    onLight: {
      bg: 'hsl(239 75% 70%)',
      bgDark: 'hsl(226 75% 63%)',
      bgLight: 'hsl(272 60% 67%)',
      link: 'hsl(229 75% 70%)',
      subtle: 'hsl(239 80% 75%)',
      border: 'hsla(229, 80%, 69%, 1)',
      buttonText: 'white',
    },
    onDark: {
      link: 'hsl(229 70% 70%)',
      subtle: 'hsl(239 80% 80%)',
    },
  },
  cta2: {
    onLight: {
      bg: 'hsl(198deg 100% 70%)',
      bgDark: 'hsl(208deg 100% 65%)',
      bgLight: 'hsl(188deg 100% 70%)',
      link: 'hsla(199, 79%, 89%, 1)',
      subtle: 'hsl(180deg 70% 50%)',
      border: 'hsl(188deg 100% 73%)',
      buttonText: 'white',
    },
    onDark: {
      link: 'hsl(188deg 75% 65%)',
      subtle: 'hsl(188deg 75% 95%)',
      border: 'hsl(185deg 90% 51%)',
      bg: 'hsl(185deg 95% 45%)',
      bgDark: 'hsl(210deg 90% 55%)',
      bgLight: 'hsl(185deg 90% 50%)',
    },
  },
};

export const colorGroups = Object.keys(colors);
export type colorGroupsType = typeof colorGroups[number];

export const colorShades = ['onLight', 'onDark'] as const;
export type colorShadesType = typeof colorShades[number];

export const colorKeys = Object.keys(colors.neutral.onLight);
export type colorKeysType = typeof colorKeys[number];

// const iconNames = ['plus', 'arrow', 'trash'] as const;
// type IconNamesType = typeof iconNames[number];

export default colors;
