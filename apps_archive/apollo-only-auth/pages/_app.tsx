import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
/*
 * Unfortunately, I couldn't get any <script> content to execute in _document.js
 * Official instructions:
 * https://cloudinary.com/documentation/media_library_widget
 *
 * This is a modified version that needs to be executed, once window is ready.
 * Otherwise it works the same way as the original.
 */
import cloudinaryWindowInit from 'public/js/cloudinary-media-library-init';
import React, { useEffect } from 'react';
import MetaTags from 'src/components/atoms/MetaTags';
import AppProvider from 'src/components/organisms/AppProvider';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // on page load, call external global Cloudinary.com media-library script
  useEffect(() => {
    cloudinaryWindowInit();
  }, []);

  return (
    <CacheProvider
      value={createCache({
        key: 'spiral-fullpage',
      })}
    >
      <Head>
        <MetaTags pathname={router.pathname} />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </CacheProvider>
  );
};

export default App;
