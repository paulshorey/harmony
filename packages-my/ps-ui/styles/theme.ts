// tsFixMe: Typescript doesn't understand method referring to parent object as `this`?
// import { EmotionCssPropType, VariantProps } from '@ps/ui/types/component';

import { EmotionCssPropType } from 'types/component';

import colors, { colorsType, colorsKeyType } from './colors';
import fonts from './fonts';
import mq from './mq';
import variants from './variants';

/**
 * Theme can be extended/modified in the app which uses this library.
 * NOTE: whenever you see "default" property and more specific properties,
 * both the default and the more specific properties are merged together.
 */
const theme: themeType = {
  colorsKey: 'onLight',
  variants,
  colors,
  fonts,
  mq,
  getColors: function (colorsKey) {
    // @ts-ignore // totally ok if colorsKey is undefined, will just use default
    return this.colors?.[colorsKey || this.colorsKey] || {};
  },
};

export default theme;

export type themeType = {
  colorsKey: colorsKeyType;
  variants: Record<string, EmotionCssPropType>;
  colors: Record<colorsKeyType, colorsType>;
  fonts: Record<string, string>;
  mq: Record<string, string>;
  getColors: (key?: string, colorsKey?: colorsType) => colorsType;
};
