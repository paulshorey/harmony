import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
  theme: any;
};

const ThemeProvider: React.FC<Props> = ({ children, theme }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
