import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { FC } from 'react';

import theme from '../styles/theme';

const ThemeProvider: FC = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
