import AppProvider from "@/components/utils/AppProvider";
import { AppProps } from "next/app";
import React from "react";
import "@/styles/global/variables.css";

const MyApp = ({ Component, pageProps }: AppProps): any => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
