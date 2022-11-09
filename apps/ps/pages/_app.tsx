import AppProvider from 'components/utils/AppProvider';
import { AppProps } from 'next/app';
import 'typeface-quicksand';
import 'styles/global/html.css';
import 'styles/global/fontAwesomeMinimal.css';
// import '@fortawesome/fontawesome-svg-core/styles.css'; // too many styles, using custom

const MyApp = ({ Component, pageProps }: AppProps): any => {
  const pageContext = {
    title: 'Hi',
    subtitle: 'This is my homepage',
  };
  return (
    <AppProvider pageContext={pageContext}>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
