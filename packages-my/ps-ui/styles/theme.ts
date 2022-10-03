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
  getColor: function (color: colorKeyType, options?: instanceType): string {
    const opts = options || this.instance || {};
    let output =
      this.colors[(opts.hue || 'default') as colorHueType]?.[
        opts.shade || 'default'
      ]?.[color];
    if (output === undefined) {
      output = this.colors['default']?.['onLight']?.[color];
    }
    return output || '';
  },
  instance: {
    hue: 'default',
    shade: 'default',
    variants: {},
  },
};

export default theme;

export type themeType = {
  variants: Record<string, EmotionCssPropType>;
  colors: colorsType;
  fonts: Record<string, string>;
  mq: Record<string, string>;
  getColor: any /* already defined above */;
  /**
   * Mutable. Temporary. Gets overwritten by each component render, in withStyles().
   * Persists just long enough to be read by the component when it is being styled.
   * It is never destroyed - only overwritten by the next component to be rendered.
   */
  instance: instanceType;
};

export type instanceType = Record<string, any>;
// {
//   variants?: Record<string, boolean> | {};
//   shade?: colorShadeType | '';
//   hue?: colorHueType | '';
// };
