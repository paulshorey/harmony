import colors from "./colors";
import fonts from "./fonts";
import mq from "./mq";
import variants from "./variants";
import html from "./global/html";
import layout from "./global/layout";
import classes from "./global/classes";
// import fonts from './global/fonts';

/**
 * Theme can be extended/modified in the app which uses this library.
 * NOTE: whenever you see "default" object and uniquely named objects,
 * that means the uniquely named object will **extend** the default object properties.
 */
const theme: theme = {
  colorGroupDefault: "",
  colorShadeDefault: "",
  variants,
  colors,
  fonts,
  mq,
  getColor: function (key, color, shade) {
    const colorGroup = color || this.instance.color || "";
    const colorShade = shade || this.instance.shade || "";
    // group / scheme
    if (colorGroup && colorShade) {
      // @ts-ignore // tsFix - this.colorGroup must be dynamic, but how to type it?
      const color = this.colors[colorGroup]?.[colorShade]?.[key];
      if (color) {
        return color;
      }
    }
    // group / default
    if (colorGroup) {
      const color = this.colors[colorGroup]?.[this.colorShadeDefault]?.[key];
      if (color) {
        return color;
      }
    }
    // default / shade
    if (colorShade) {
      const color = this.colors[this.colorGroupDefault]?.[colorShade]?.[key];
      if (color) {
        return color;
      }
    }
    // default / default
    return this.colors[this.colorGroupDefault]?.[this.colorShadeDefault]?.[key] || "";
  },
  instance: {
    color: "",
    shade: "",
    size: "",
    variants: {},
  },
  globalStyles: { html, layout, classes },
  getGlobalStyles: function () {
    return Object.values(this.globalStyles);
  },
};

export default theme;
