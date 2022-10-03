import colors from './colors';
import fonts from './fonts';
import mq from './mq';
import variants from './variants';

/**
 * Theme can be extended/modified in the app which uses this library.
 * NOTE: whenever you see "default" object and uniquely named objects,
 * that means the uniquely named object will **extend** the default object properties.
 */
const theme: theme = {
  variants,
  colors,
  fonts,
  mq,
  getColor: function (key, color = '', shade = '') {
    const colorGroup = color || this.instance.color;
    const colorShade = shade || this.instance.shade;
    if (key === 'bg') {
      console.log('bg', color, shade, [colorGroup, colorShade]);
    }
    // group / scheme
    if (colorGroup && colorShade) {
      const color = this.colors[colorGroup]?.[colorShade]?.[key];
      if (color) {
        return color;
      }
    }
    // group / default
    if (colorGroup) {
      const color = this.colors[colorGroup]?.onLight?.[key];
      if (color) {
        return color;
      }
    }
    // default / shade
    if (colorShade) {
      const color = this.colors.neutral?.[colorShade]?.[key];
      if (color) {
        return color;
      }
    }
    // default / default
    return this.colors['neutral']?.['onLight']?.[key] || '';
  },
  instance: {
    color: 'neutral',
    shade: 'onLight',
    size: 'default',
    variants: {},
  },
};

export default theme;
