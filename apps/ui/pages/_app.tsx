import ThemeProvider from '@ps/ui/components/ThemeProvider';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): any => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
