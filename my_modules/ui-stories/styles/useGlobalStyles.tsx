import { createGlobalStyle, useTheme } from "styled-components";
import style_to_string from "@ps/fn/browser/style/style_to_string";

const useGlobalStyles = (theme: any) => {
  // get updated theme (in case 3rd party app changed it) before unpacking below
  const themeGlobalStyles = theme && theme?.getGlobalStyles ? theme?.getGlobalStyles() : "";
  // unpack each style from the current theme
  let globalStyleString = "";
  for (const html of themeGlobalStyles) {
    globalStyleString += style_to_string(html, theme) + "\n";
  }
  // use the global styles from theme
  return createGlobalStyle`
  ${globalStyleString}
  `;
};

export default useGlobalStyles;
