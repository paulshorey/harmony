import arr_not_empty from "@ps/fn/io/arr/arr_not_empty";
/**
 * Style helper - accepts any EmotionJS format, but always outputs CSS string
 *     Name of this function is _ on purpose, so Emotion library doesn't put this variable name into className.
 */
export default function (
  /**
   * type any - that's the point of this function, to wrangle multiple formats, always output a string
   */
  emotion: any,
  /**
   * the app's theme object. This function is DEPRECATED. Use hook instead. That way you don't have to pass theme
   */
  theme?: Record<string, any>,
  /**
   * object of arguments to pass to the Emotion function (if it is a function, otherwise ignored)
   */
  options?: Record<string, any>
): string {
  if (!emotion) {
    return "";
  }
  let mqString = "";
  if (typeof emotion === "function") {
    // execute if function
    const style = options && arr_not_empty(options) ? emotion(theme, options) : emotion(theme);
    if (style?.styles) {
      mqString += style.styles;
    } else if (typeof style === "string") {
      mqString += style;
    }
  } else if (typeof emotion.styles === "string") {
    // use only styles prop
    mqString += emotion.styles;
  } else if (typeof emotion === "string") {
    // simple string, easy
    mqString += emotion;
  }
  // remove label to clean up className
  return mqString;
  // return (mqString ? mqString.replace(/\n/g, ";").replace(/label:(.*?);/g, "") || "" : "") + ";"; // extra trailing semicolon, just in case string was missing it
}
