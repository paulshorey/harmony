import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
// Optional - use Next.js router. To use a different router in your codebase, change this to a different component. Or to use no router, just plain HTML anchor element (default), do not set theme.LinkComponent.
// import Link from 'next/link';
// Ant design
import 'antd/dist/antd.css';
// CSS properties used by components in this library:
import '@ps/ui/styles/theme.css';
// Optional global styles:
import theme from '@ps/ui/styles/theme';
// import antd from '@ps/ui/styles/global/antd';
import fonts from '@ps/ui/styles/global/fonts';
import html from '@ps/ui/styles/global/html';
import layout from '@ps/ui/styles/global/layout';

// MaterialUI Theme
import {
  // CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material';

// Customize Emotion Theme
// theme.LinkComponent = Link; // tsFix - the entire theme object needs Typescript

/*
 * Customize Ant Design theme
 */
// ConfigProvider.config({
//   theme: {
//     primaryColor: '#25b864',
//   },
// });

/*
 * Customize Material UI theme
 */
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

const GlobalCSS = createGlobalStyle`
  ${fonts(theme)};
  ${html(theme)};
  ${layout(theme)};
`;

const ThemeProvider = ({ children }) => {
  return (
    // <ConfigProvider>
    <MuiThemeProvider theme={darkTheme}>
      <EmotionThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalCSS />
          {children}
        </StyledThemeProvider>
      </EmotionThemeProvider>
    </MuiThemeProvider>
    // </ConfigProvider>
  );
};

export default ThemeProvider;
