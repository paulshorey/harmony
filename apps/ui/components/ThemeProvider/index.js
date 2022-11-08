import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
// Required global styles:
import '@ps/ui/styles/theme.css';
import theme from '@ps/ui/styles/theme';
// Optional - global styles:
import fonts from '@ps/ui/styles/global/fonts';
import html from '@ps/ui/styles/global/html';
import layout from '@ps/ui/styles/global/layout';
// Optional - MaterialUI Theme
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
// Optional - Customize Material UI theme
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
    <MuiThemeProvider theme={darkTheme}>
      <StyledThemeProvider theme={theme}>
        <GlobalCSS />
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
