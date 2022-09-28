import { css, useTheme } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/emotion_to_string';

const withTheme = function (style) {
  const theme = useTheme();

  let mqString = '';

  if (style) {
    if (Array.isArray(style)) {
      mqString = style.map((item) => emotionToString(item, theme)).join('');
    } else {
      mqString += emotionToString(style, theme);
    }
  }

  return css(mqString);
};
export default withTheme;
