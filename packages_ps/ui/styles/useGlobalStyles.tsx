import style_to_string from '@ps/ui/styles/sstring';

const useGlobalStyles = (theme: theme) => {
  // get updated theme (in case 3rd party app changed it) before unpacking below
  const themeGlobalStyles =
    theme && theme?.getGlobalStyles
      ? Object.values(theme?.globalStyles || {})
      : '';
  // unpack each style from the current theme
  let globalStyleString = '';
  for (const html of themeGlobalStyles) {
    globalStyleString += style_to_string(html, theme) + '\n';
  }
  // use the global styles from theme
  return globalStyleString;
};

export default useGlobalStyles;
