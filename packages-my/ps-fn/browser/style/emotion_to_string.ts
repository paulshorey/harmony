import arr_not_empty from "@ps/fn/io/arr/arr_not_empty";
// import { tsFixMe } from "../../../ps-ui/types/typescript";
// import { EmotionCssPropType } from "../../../ps-ui/types/component";
/**
 * Style helper - accepts any EmotionJS format, but always outputs CSS string
 *     Name of this function is _ on purpose, so Emotion library doesn't put this variable name into className.
 */
export default function (
  /**
   * EmotionJS css prop type. Will be converted to string.
   */
  emotion: any, // EmotionCssPropType or plain string. Will be converted to string.
  /**
   * the theme. It will be passed to the EmotionJS function as the first argument (if it is a function. Otherwise ignored)
   */
  theme?: Record<string, any>,
  /**
   * all variants passed to component. It will be passed to the EmotionJS function as the first argument (if it is a function. Otherwise ignored)
   */
  variantsDict?: Record<string, boolean>
): string {
  if (!emotion) {
    return "";
  }
  let ssString = "";
  if (typeof emotion === "function") {
    // execute if function
    const style = variantsDict && arr_not_empty(variantsDict) ? emotion(theme, variantsDict) : emotion(theme);
    if (style?.styles) {
      ssString += style.styles;
    } else if (typeof style === "string") {
      ssString += style;
    }
  } else if (typeof emotion.styles === "string") {
    // use only styles prop
    ssString += emotion.styles;
  } else if (typeof emotion === "string") {
    // simple string, easy
    ssString += emotion;
  }
  // remove label to clean up className
  return ssString;
  // return (ssString ? ssString.replace(/\n/g, ";").replace(/label:(.*?);/g, "") || "" : "") + ";"; // extra trailing semicolon, just in case string was missing it
}
