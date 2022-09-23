/**
 * Style helper - accepts any Emotion format, but always outputs CSS string
 *     Name of this function is _ on purpose, so Emotion library doesn't put this variable name into className.
 */
export default function e2Str(
  /**
   * type any - that's the point of this function, to wrangle multiple formats, always output a string
   */
  emotion: any,
  /**
   * the app's theme object. This function is DEPRECATED. Use hook instead. That way you don't have to pass theme
   */
  theme?: Record<string, any>
): string {
  if (!emotion) {
    return "";
  }
  let cssString = "";
  if (typeof emotion === "function") {
    // execute if function
    const style = emotion(theme);
    if (style?.styles) {
      cssString += style.styles;
    } else if (typeof style === "string") {
      cssString += style;
    }
  } else if (typeof emotion.styles === "string") {
    // use only styles prop
    cssString += emotion.styles;
  } else if (typeof emotion === "string") {
    // simple string, easy
    cssString += emotion;
  }
  // remove label to clean up className
  return (cssString ? cssString.replace(/\n/g, ";").replace(/label:(.*?);/g, "") || "" : "") + ";"; // extra trailing semicolon, just in case string was missing it
}
