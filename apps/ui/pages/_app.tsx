import ThemeProvider from '@ps/ui/components/utils/ThemeProvider';
import { AppProps } from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps): any => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
