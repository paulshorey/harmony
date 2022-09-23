import { css } from '@emotion/react';

const textGradientEffect = (gradient: string, color: string): string => `
  ${gradient};
  color: ${color};
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${color};
  -moz-background-clip: text;
  -moz-text-fill-color: ${color};
  background-clip: text;
  text-fill-color: ${color};
  text-shadow: none;
`;

const theme = {
  bgColor: '#2AA5D5',
  bgColorDarker: '#3B97D3',
  navColor: '#2AA5D5',
  ctaColor: '#d92e76', // dd468a
  textColor: '#2AA5D5', // hsl(197deg 67% 50%)
  gradientButtonWhite: css`
    background: white;
    * {
      ${textGradientEffect(
        'background: linear-gradient(140deg, #30bac6 5%, #507bcd 115%);',
        '#48b3ea'
      )};
    }
  `,
  gradientButton: css`
    background: linear-gradient(115deg, #1acdd1, #546dd5); // teal, ultramarine
  `,
  gradientBackwards: css`
    background: linear-gradient(100deg, #546dd5, #1acdd1);
  `,
  gradient: css`
    background: linear-gradient(300deg, #1acdd1, #546dd5 100%);
  `,
  gradientText: '',
  gradientTextLighter: '',
};

theme.gradientText = textGradientEffect(
  'background: linear-gradient(145deg, #30bac6, #507bcd);',
  '#48b3ea'
);

theme.gradientTextLighter = textGradientEffect(
  'background: linear-gradient(165deg, #507bcd -25%, #30bac6 25%, #30bac6 50%, #507bcd 125%);',
  '#48b3ea'
);

export default theme;
