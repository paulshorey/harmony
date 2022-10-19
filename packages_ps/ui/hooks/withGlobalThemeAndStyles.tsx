import { css, ThemeProvider, Global } from '@emotion/react';
import style_to_string from '@ps/fn/browser/style/style_to_string';

export default (
  children: any,
  /**
   * import theme from '@ps/ui/styles/theme';
   * Then you can modify the theme before using it by passing it to here.
   */
  theme: Record<string, any>,
  /**
   * Filenames of stylesheets to import from @ps/ui/styles/global. Only predefined names. Check typescript allowed type. Include stylesheets you need in your app. Or write your own instead, and import your own instead of these.
   */
  globalStyles: Record<string, any>
) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};
