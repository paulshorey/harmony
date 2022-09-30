import arr_not_empty from "@ps/fn/io/arr/arr_not_empty";
import obj_has_key from "@ps/fn/io/obj/obj_has_key";
import { SerializedStyles } from "@emotion/react";

/**
 * Accepts any EmotionJS CSS Prop format, string, or array of strings.
 * Always returns CSS string
 * Name of this function is _ only so Emotion library doesn't add this variable name (sometimes multiple times) into the generated className.
 */
export default function style_to_string(
  /**
   * EmotionJS css prop type. Will be converted to string.
   */
  style:
    | SerializedStyles
    | Array<SerializedStyles | ((...args: any) => any)>
    | ((...args: any) => any)
    | string
    | Array<string>, // EmotionCssPropType or plain string. Will be converted to string.
  /**
   * the theme. It will be passed to the EmotionJS function as the first argument (if it is a function. Otherwise ignored)
   */
  theme?: Record<string, any>,
  /**
   * all variants passed to component. It will be passed to the EmotionJS function as the first argument (if it is a function. Otherwise ignored)
   */
  variantsDict?: Record<string, boolean>
): string {
  let output = "";
  if (!style) {
    return output;
  }
  // if simple string
  if (typeof style === "string") {
    output += style;
  }
  // if array
  else if (Array.isArray(style)) {
    style.forEach((item) => {
      output += style_to_string(item, theme, variantsDict);
    });
  }
  // if function
  else if (typeof style === "function") {
    output += style_to_string(variantsDict ? style(theme, variantsDict) : style(theme));
  }
  // if emotion is SerializedStyles type
  else if (obj_has_key(style, "styles") && typeof style.styles === "string") {
    // extract just the style string from EmotionJS object
    // @ts-ignore // tsFixMe // Already checked if var is function or object. How to type Typescript var with more than one type?
    output += style.styles;
  }

  return ";" + output + ";";
  // Maybe remove labels included by EmotionJS so when converting to EmotionJS it will not make a long combined className
  // return (output ? output.replace(/\n/g, ";").replace(/label:(.*?);/g, "") || "" : "") + ";"; // extra trailing semicolon, just in case string was missing it
}
