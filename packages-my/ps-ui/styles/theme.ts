// tsFixMe: Typescript doesn't understand method referring to parent object as `this`?
// import { EmotionCssPropType, VariantProps } from '@ps/ui/types/component';

import { EmotionCssPropType } from 'types/component';

import colors from './colors';
import fonts from './fonts';
import mq from './mq';
import variants from './variants';

/**
 * Theme can be extended/modified in the app which uses this library.
 * NOTE: whenever you see "default" property and more specific properties,
 * both the default and the more specific properties are merged together.
 */
let colorCalled = 0;
const theme: themeType = {
  colorScheme: 'onLight',
  variants,
  colors,
  fonts,
  mq,
  get color() {
    colorCalled++;
    console.log('theme.color called ' + colorCalled + ' times');
    return {
      ...(this.colors.default || {}),
      ...(this.colors[this.colorScheme] || {}),
    };
  },
  getColor: function getColor(key = '', colorScheme?: string) {
    return (
      this.colors[colorScheme || this.colorScheme]?.[key] ||
      this.colors.default?.[key] ||
      ''
    );
  },
};

export default theme;

export type colorSchemeType = 'onLight' | 'onDark';
export type themeType = {
  colorScheme: colorSchemeType;
  variants: Record<string, EmotionCssPropType>;
  colors: Record<string, Record<string, string>>;
  fonts: Record<string, string>;
  mq: Record<string, string>;
  color: Record<string, string>;
  getColor: (color: string, colorScheme?: colorSchemeType) => string;
};
