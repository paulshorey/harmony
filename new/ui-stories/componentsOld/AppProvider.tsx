import GlobalCSS from "../stylesOld/globals";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import React from "react";

const AppProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalCSS />
    {children}
  </ThemeProvider>
);

export default AppProvider;
