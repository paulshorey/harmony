// import obj_has_key from "@ps/fn/io/obj/obj_has_key";
// import { SerializedStyles } from "@emotion/react";
import { ssPropType } from "@ps/ui/types/component";

/**
 * Accepts any EmotionCssProp format, string, or array of strings. Always returns SCSS string.
 * COMING SOON: Might be nice to have this transcribe JS style objects too.
 */
export default function style_to_string(
  /**
   * CSS string or function that retuns a css string. Or an array of either.
   */
  style: ssPropType,
  /**
   * the theme. It will be passed to the EmotionJS function as the 1st argument (if it is a function. Otherwise ignored)
   */
  theme?: Record<string, any>,
  /**
   * options object to pass to the style function as 2nd argument (if it is a function. Otherwise ignored)
   */
  options?: Record<string, boolean>
): string {
  let output = "";
  if (!style) {
    return output;
  }
  // if simple string
  if (typeof style === "string") {
    output += style;
  }
  // if function
  else if (typeof style === "function") {
    output += style_to_string(style(theme, options));
  }
  // if array
  else if (Array.isArray(style)) {
    style.forEach((item) => {
      output += style_to_string(item, theme, options);
    });
  }

  return ";" + output + ";";
  // Maybe remove labels included by EmotionJS so when converting to EmotionJS it will not make a long combined className
  // Nah. Move it out to the end when all instances of this function are finished, just do it once.
  // return (output ? output.replace(/\n/g, ";").replace(/label:(.*?);/g, "") || "" : "") + ";"; // extra trailing semicolon, just in case string was missing it
}
