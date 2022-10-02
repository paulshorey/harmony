// tsFix: Typescript doesn't understand method referring to parent object as `this`?

import { EmotionCssPropType } from 'types/component';

import colors, {
  colorsType,
  colorHueType,
  colorShadeType,
  colorKeyType,
} from './colors';
import fonts from './fonts';
import mq from './mq';
import variants from './variants';

/**
 * Theme can be extended/modified in the app which uses this library.
 * NOTE: whenever you see "default" object and uniquely named objects,
 * that means the uniquely named object will **extend** the default object properties.
 */
const theme: themeType = {
  variants,
  colors,
  fonts,
  mq,
  getColor: function (
    color: colorKeyType = 'bg',
    options?: optionsType
  ): string {
    return (
      this.colors?.[this.instance.hue || options?.hue || 'default']?.[
        this.instance.shade || options?.shade || 'default'
      ]?.[color] || ''
    );
  },
  instance: {},
};

export default theme;

export type themeType = {
  variants: Record<string, EmotionCssPropType>;
  colors: colorsType;
  fonts: Record<string, string>;
  mq: Record<string, string>;
  getColor: (color: colorKeyType, options?: optionsType) => string;
  /**
   * Mutable. Temporary object. Gets overwritten when applying withStyles() to each component.
   * Lives just long enough to be read by the component when styles are being applied.
   */
  instance: optionsType;
};

export type optionsType = {
  variants?: Record<string, boolean>;
  shade?: colorShadeType | '';
  hue?: colorHueType | '';
};
