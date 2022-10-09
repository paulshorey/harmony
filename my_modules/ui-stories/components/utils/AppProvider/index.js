import { css, ThemeProvider, Global } from "@emotion/react";
import React from "react";
import theme from "../../../styles/theme";
import useGlobalStyles from "../../../styles/useGlobalStyles";

const AppProvider = ({ children }) => {
  const immutableTheme = { ...theme };
  const globalCSS = useGlobalStyles(immutableTheme);
  return (
    <ThemeProvider theme={immutableTheme}>
      <Global
        styles={css`
          ${globalCSS}
        `}
      />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
