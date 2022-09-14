/**
 * Emotion CSS utility
 * @param emotion {any}` - that is the point of this function - to wrangle multiple formats, always output a string
 * @param theme {any} - the theme object. Wrap your css in `withTheme`. That will automatically pass theme to this function.
 * @returns string
 */
export default function emotionToString(emotion, theme) {
  if (!emotion) {
    return '';
  }
  let cssString = '';
  if (typeof emotion === 'function') {
    // execute if function
    const style = emotion(theme);
    if (style?.styles) {
      cssString += style.styles;
    } else if (typeof style === 'string') {
      cssString += style;
    }
  } else if (typeof emotion.styles === 'string') {
    // use only styles prop
    cssString += emotion.styles;
  } else if (typeof emotion === 'string') {
    // simple string, easy
    cssString += emotion;
  }
  // remove label to clean up className
  return (cssString ? cssString.replace(/\n/g, ';').replace(/label:(.*?);/g, '') || '' : '') + ';'; // extra trailing semicolon, just in case string was missing it
}
