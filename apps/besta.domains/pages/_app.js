import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { nameHeadings } from 'src/functions/dom';
import GlobalStyle from 'src/styles';
// import { getAttributionParams, waitForGlobal } from 'src/functions/window';

let currentUrl = '';
function MyApp({ Component, pageProps }) {
  /*
   * on route change
   */
  const handleRouteChange = (newUrl) => {
    // console.log('route changed [newUrl, currentUrl] === ', [newUrl, currentUrl]);
    if (newUrl === currentUrl) {
      return;
    }
    currentUrl = newUrl;
    nameHeadings();
  };
  const router = useRouter();
  useEffect(() => {
    // initial page load
    handleRouteChange(router.pathname);
    // subsequent pages
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  /*
   * on window ready (client-side only)
   */
  useEffect(() => {
    // // fix mobile safari scrolling
    // window.document.body.addEventListener('wheel', function (e) {
    //   e.preventDefault();
    // });
    // window.document.body.addEventListener('touchmove', function (e) {
    //   e.preventDefault();
    // });
    // // facebook pixel is ready
    // waitForGlobal(
    //   'fbq',
    //   function () {
    //     // let qs = getAttributionParams();
    //     // if (qs.pid === 'facebookyh') {
    //       window.fbq('init', FACEBOOK_PIXEL_ID);
    //       window.fbq('track', 'PageView');
    //       console.warn('using facebook pixel');
    //     // }
    //   },
    //   'function'
    // );
  }, [typeof window === 'object' && typeof window.document === 'object']);

  return (
    <>
      <Head>
        <GlobalStyle />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
