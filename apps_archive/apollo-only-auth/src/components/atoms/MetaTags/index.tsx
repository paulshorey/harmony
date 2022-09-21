// import { DefaultSeo } from 'next-seo';
import React from 'react';

type Props = { pathname?: string };

const MetaTags: React.FC<Props> = ({ pathname }) => {
  // const PAGE_URL = `https://app.spiral.us${pathname}`;
  return (
    <>
      <meta charSet="utf-8" />
      {/* stylesheets moved to src/styles so they can be imported by Jest/Storybook tests */}
      <link href="/css/fonts.css" rel="stylesheet" />
      <link href="/css/reset.css" rel="stylesheet" />
      <link href="/css/global.css" rel="stylesheet" />
    </>
  );
};

export default MetaTags;
