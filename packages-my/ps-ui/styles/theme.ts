import { EmotionCssPropType } from 'types/component';

import colors from './colors';
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
  getColor: function (key, color = '') {
    const colorGroup = color || this.instance.color || 'default';
    return (
      this.colors[colorGroup]?.[key] || this.colors['default']?.[key] || ''
    );
  },
  instance: {
    color: 'default',
    size: 'default',
    variants: {},
  },
};

export default theme;

export type themeType = {
  variants: Record<string, EmotionCssPropType>;
  colors: Record<string, Record<string, string>>;
  fonts: Record<string, string>;
  mq: Record<string, string>;
  getColor: (key: string, color?: string) => {};
  /**
   * Mutable. Temporary. Gets overwritten by each component render, in withStyles().
   * Persists just long enough to be read by the component when it is being styled.
   * It is never destroyed - only overwritten by the next component to be rendered.
   */
  instance: {
    /**
     * See what other variants are used by the component. Adjust styles accordingly.
     */
    variants?: Record<string, boolean> | {};
    /**
     * See colors.ts. Key of the color group to use.
     */
    color?: string;
    /**
     * Check from your ss/css style function by using `theme.instance.size`.
     * Adjust padding/margin/font-size according to this variable.
     */
    size?: string;
  };
};
