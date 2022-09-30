// tsFixMe: Typescript doesn't understand method referring to parent object as `this`?
// import { EmotionCssPropType, VariantProps } from '@ps/ui/types/component';

import { EmotionCssPropType } from 'types/component';

import { colorsOnDark, colorsOnLight } from './colors';
import fonts from './fonts';
import mq from './mq';
import variants from './variants';

/**
 * Theme can be extended/modified in the app which uses this library.
 * NOTE: whenever you see "default" property and more specific properties,
 * both the default and the more specific properties are merged together.
 */
const theme: themeType = {
  colorScheme: 'onLight',
  variants,
  colors: { colorsOnDark, colorsOnLight },
  fonts,
  mq,
  get color() {
    return this.colors[this.colorScheme] || {};
  },
  getColor: function (key = '', colorScheme?: string) {
    return this.colors[colorScheme || this.colorScheme]?.[key] || '';
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
