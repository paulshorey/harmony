// tsFixMe: Typescript doesn't understand method referring to parent object as `this`?
// import { EmotionCssPropType, VariantProps } from '@ps/ui/types/component';

import { EmotionCssPropType } from 'types/component';

import { colorsOnDark, colorsOnLight, colorsType } from './colors';
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
  colors: { onDark: colorsOnDark, onLight: colorsOnLight },
  fonts,
  mq,
  /**
   * Colors object for default colorScheme
   */
  get color() {
    return this.colors[this.colorScheme] || {};
  },
};

export default theme;

export type colorSchemeType = 'onLight' | 'onDark';
export type themeType = {
  colorScheme: colorSchemeType;
  variants: Record<string, EmotionCssPropType>;
  colors: Record<colorSchemeType, colorsType>;
  fonts: Record<string, string>;
  mq: Record<string, string>;
  color: Record<string, string>;
};
