import { ThemeProvider } from '@emotion/react';
import React from 'react';
import theme from '@ps/ui/styles/theme';

const AppProvider = ({ children, page }) => {
  return (
    <ThemeProvider theme={{ ...theme, cause: page.cause }}>{children}</ThemeProvider>
  );
};

export default AppProvider;
