import AppProvider from 'components/utils/AppProvider';
import { AppProps } from 'next/app';
import 'typeface-quicksand';
import 'styles/global/html.css';
import 'styles/global/fontAwesomeMinimal.css';
import 'horizontal_carousel/css/default.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
const MyApp = ({ Component, pageProps }: AppProps): any => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
