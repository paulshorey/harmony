/* eslint-disable no-undef */
import '@emotion/react';
// import { ThemeType } from './styles/theme';
type DefaultThemeType = any;

// Add theme type to useTheme()
declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends DefaultThemeType {}
}

// Support css prop on all HTML elements
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    css?: any;
  }
}
