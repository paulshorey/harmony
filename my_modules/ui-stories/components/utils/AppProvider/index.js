import { ThemeProvider } from "styled-components";
import React from "react";
import theme from "../../../styles/theme";
import useGlobalStyles from "../../../styles/useGlobalStyles";

const AppProvider = ({ children }) => {
  const immutableTheme = { ...theme };
  const GlobalCSS = useGlobalStyles(immutableTheme);
  return (
    <ThemeProvider theme={immutableTheme}>
      <GlobalCSS />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
