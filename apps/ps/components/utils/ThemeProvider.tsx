import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
// Required global styles:
import '@ps/ui/styles/theme.css';
import theme from 'styles/theme';
// Optional - global styles:
import fonts from '@ps/ui/styles/global/fonts';
import html from '@ps/ui/styles/global/html';
import classes from '@ps/ui/styles/global/classes';

const GlobalCSS = createGlobalStyle`
  ${fonts(theme)};
  ${html(theme)};
  ${classes(theme)};
`;

const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalCSS />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
