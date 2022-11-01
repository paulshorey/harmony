import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
// Global CSS properties - used extensively by components in this library.
// Compose them from your Tailwind, Antd, or MaterialUI themes.
import '@ps/ui/styles/global/variables.css';
// Optional stylesheets:
import theme from '@ps/ui/styles/theme';
import fonts from '@ps/ui/styles/global/fonts';
import html from '@ps/ui/styles/global/html';
import antd from '@ps/ui/styles/global/antd'; // used by the SelectTags component
import layout from '@ps/ui/styles/global/layout';

import {
  // CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(255,255,255,1)',
    },
    secondary: {
      main: 'rgba(255,255,255,1)',
    },
    background: {
      default: 'rgba(0,0,0,1)',
      paper: 'hsla(22deg 3% 12% / 0.85)',
    },
  },
});

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <EmotionThemeProvider theme={theme}>
        <Global styles={[fonts, html, antd, layout]} />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
