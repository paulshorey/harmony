import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import { analytics_track_page } from 'src/functions/analytics';
import PageContext from 'src/context/Page';

let site = {
  canonicalUrl: 'https://www.spiral.us',
  logo: '/images/logo.png',
  twitterHandle: '@spiralgives',
};

/**
 * WARNING:
 *    Do not put src/components/atoms/Meta inside of src/components/atoms/ABTest. Don't know why, but doing so breaks Meta's page context.
 */
const Meta = () => {
  const pageContext = useContext(PageContext);
  let meta = {
    ...site,
    ...pageContext,
  };

  /*
   * on page load, setup event listeners
   */
  useEffect(() => {
    if (typeof window !== 'object' || !window.document || !window.document.body) return;
    window.addEventListener('scroll', scrollEvent);
    // unload
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  /*
   * track page view
   */
  useEffect(
    () => {
      let options = {
        name: meta.name,
        path: meta.path,
        postSlug: meta.postSlug,
        categorySlug: meta.categorySlug,
      };
      if (pageContext?.partnerPage?.partner) {
        options.ein = pageContext.partnerPage.partner.ein || '';
      }
      // track all experiments in page
      // if (pageContext.experiments) {
      //   let variantsTotal = 0;
      //   let variantsAccountedFor = 0;
      //   let selectedVariant = '';
      //   for (let name in pageContext.experiments) {
      //     variantsTotal++;
      //     selectedVariant = pageContext.experiments[name].variant;
      //     if (selectedVariant) {
      //       variantsAccountedFor++;
      //       // only track experiment if not disabled
      //       if (selectedVariant !== 'disabled') {
      //         options[`experiment ${name}`] = selectedVariant;
      //       }
      //     }
      //   }
      //   // do not track! Wait for each page.experiments[name].variant to be set
      //   if (variantsAccountedFor !== variantsTotal) return;
      // }
      // page view
      analytics_track_page(options);
      // page housekeeping
    },
    [
      // // defer tracking page view until
      // typeof window === 'object' &&
      //   // after mixpanel has loaded
      //   window.mixpanel &&
      //   // and after all the experiments have decided on variants (this does not work well for some reason)
      //   (!pageContext.experiments ||
      //     !Object.values(pageContext.experiments).find((exp) => exp.variant === undefined)) + pageContext.path,
    ]
  );

  /*
   * scroll event
   */
  const scrollEvent = () => {
    // scroll even a little bit
    if (window.scrollY > 0) {
      if (!document.body.classList.contains('scrolled')) {
        document.body.classList.add('scrolled');
      }
    } else {
      document.body.classList.remove('scrolled');
    }
    // scroll below the fold
    if (window.scrollY > window.innerHeight - 1) {
      if (!document.body.classList.contains('scrolledBelowTheFold')) {
        document.body.classList.add('scrolledBelowTheFold');
      }
    } else {
      document.body.classList.remove('scrolledBelowTheFold');
    }
    // scroll a percentage of the viewport height
    if (window.scrollY > window.innerHeight * 0.7) {
      if (!document.body.classList.contains('scrolledVH70')) {
        document.body.classList.add('scrolledVH70');
      }
    } else {
      document.body.classList.remove('scrolledVH70');
    }
  };

  let canonicalPath = (meta.canonicalUrl + meta.path).trim();
  return (
    <Head>
      <link rel="canonical" href={canonicalPath} />
      <meta property="og:url" content={canonicalPath} />

      <title>{meta.title}</title>
      <meta property="og:title" content={meta.socialTitle} />
      <meta name="twitter:title" content={meta.socialTitle} />

      <meta name="description" content={meta.description} />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:description" content={meta.description} />

      <meta property="og:image" content={meta.image} />
      <meta name="twitter:image" content={meta.image_thumb || meta.image} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={meta.twitterHandle} />

      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="apple-itunes-app" content="app-id=1526316317" />

      {/* .ico file generated at https://pngtoico.io */}
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon-192px-png24.png" />
      <link rel="shortcut" type="image/png" href="/favicon/favicon-128px-png24.png" />
      <link rel="mask-icon" href="/favicon/favicon-black.svg" color="#d92e76" />
      <meta name="msapplication-TileColor" content="#d92e76" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#d92e76" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
  );
};
export default Meta;
