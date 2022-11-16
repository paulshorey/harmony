import {
  ThemeProvider as StyledThemeProvider,
  Global,
  css,
} from '@emotion/react';
import theme from 'styles/theme';
// Optional - global styles:
import fonts from '@ps/ui/styles/global/fonts';
import html from '@ps/ui/styles/global/html';
import classes from '@ps/ui/styles/global/classes';

const ThemeProvider = ({ children }) => {
  return (
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
  );
};

export default ThemeProvider;
