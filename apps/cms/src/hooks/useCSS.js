import { css, useTheme } from '@emotion/react';
import emotionToString from 'src/helpers/emotionToString';

// The name of this default export must be "_" (underscore).
// This is a hack for EmotionCSS to generate clean classNames.
const _ = function (style) {
  const theme = useTheme();

  let cssString = '';

  if (Array.isArray(style)) {
    cssString = style.map((item) => emotionToString(item, theme)).join('');
  } else {
    cssString += emotionToString(style, theme);
  }

  return css(cssString);
};
export default _;
