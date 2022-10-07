import { Global, useTheme } from '@emotion/react';
import style_to_string from '@ps/fn/browser/style/style_to_string';

const styles = () => {
  // get updated theme (in case 3rd party app changed it) before unpacking below
  const theme = useTheme();
  const themeGlobalStyles = theme.getGlobalStyles();
  // unpack each style from the current theme
  let globalStyleString = '';
  for (const html of themeGlobalStyles) {
    globalStyleString += style_to_string(html, theme) + '\n';
  }
  // use the global styles from theme
  return <Global styles={globalStyleString} />;
};
export default styles;
