import { css, ThemeProvider, Global } from '@emotion/react';
import React from 'react';
import theme from '../../../styles/theme';
import GlobalStyles from '../../../styles/global';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
