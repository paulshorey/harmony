import { css, useTheme } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/emotion_to_string';

const withTheme = function (style) {
  const theme = useTheme();

  let cssString = '';

  if (style) {
    if (Array.isArray(style)) {
      cssString = style.map((item) => emotionToString(item, theme)).join('');
    } else {
      cssString += emotionToString(style, theme);
    }
  }

  return css(cssString);
};
export default withTheme;
