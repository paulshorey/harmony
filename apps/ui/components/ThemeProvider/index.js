import {
  ThemeProvider as StyledThemeProvider,
  Global,
  css,
} from '@emotion/react';
import '@ps/ui/styles/theme.css';
import theme from '@ps/ui/styles/theme';

// Optional - global styles:
import fonts from '@ps/ui/styles/global/fonts';
import html from '@ps/ui/styles/global/html';
import classes from '../../styles/global/classes';

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

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <StyledThemeProvider theme={theme}>
        <Global
          styles={css`
            ${fonts(theme)};
            ${html(theme)};
            ${classes(theme)};
          `}
        />
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
