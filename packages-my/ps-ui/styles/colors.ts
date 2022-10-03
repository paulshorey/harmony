const colors: any = {
  default: {
    bg: 'white',
    link: 'hsla(199, 79%, 89%, 1)',
    text: '#666',
    subtle: 'hsla(0, 0%, 0%, 0.3)',
    border: '#777',
    accent: 'gold',
    bgDark: '#777',
    bgLight: '#efefef',
    error: '#e30000',
    warning: '#e38935',
    success: '#27b30d',
  },
  onDark: {
    bg: '#333',
    link: '#333',
    text: '#efefef',
    subtle: '#999',
    border: '#777',
    accent: 'gold',
  },
  cta1: {
    bg: 'hsl(239 70% 70%)',
    bgDark: 'hsl(226 73% 63%)',
    bgLight: 'hsl(272 57% 67%)',
    link: 'hsl(229 75% 70%)',
    subtle: 'hsl(239 80% 75%)',
    border: 'hsla(229, 79%, 69%, 1)',
    textGradient: 'white',
    // link: 'hsl(229 70% 70%)',
    // subtle: 'hsl(239 80% 80%)',
  },
  cta2: {
    bg: 'hsl(198deg 100% 70%)',
    bgDark: 'hsl(208deg 100% 65%)',
    bgLight: 'hsl(188deg 100% 70%)',
    link: 'hsla(199, 79%, 89%, 1)',
    subtle: 'hsl(180deg 70% 50%)',
    border: 'hsl(188deg 100% 73%)',
    textGradient: 'white',
    // link: 'hsl(188deg 75% 65%)',
    // subtle: 'hsl(188deg 85% 80%)',
  },
};

export const colorKeys = Object.keys(colors.default);
export const colorGroups = Object.keys(colors);

export default colors as typeof colors;
