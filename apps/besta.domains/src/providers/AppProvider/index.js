import { ThemeProvider } from '@emotion/react';
import React from 'react';
import PageContext from 'src/context/Page';
import theme from 'src/styles/theme';

const AppProvider = ({ children, page }) => {
  return (
    <PageContext.Provider value={page}>
      <ThemeProvider theme={{ ...theme, cause: page.cause }}>{children}</ThemeProvider>
    </PageContext.Provider>
  );
};

export default AppProvider;
