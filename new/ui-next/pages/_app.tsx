import "../styles/globals.css";
import "../styles/globals.scss";
import AppProvider from "@/components/AppProvider";
import { AppProps } from "next/app";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps): any => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
