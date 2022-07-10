/* eslint-disable no-undef */
import '@emotion/react';

import { Theme as EmotionTheme } from './styles/theme';
// Add theme type to useTheme()
declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends EmotionTheme {}
}

// Support css prop on all HTML elements
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    css?: Interpolation<EmotionTheme>;
    customCSS?: Interpolation<EmotionTheme>;
  }
}
