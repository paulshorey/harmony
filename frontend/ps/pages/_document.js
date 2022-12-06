import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Paul Shorey - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body data-bgcolor="dark" data-textcolor="light" data-bggradient>
        <Main />
        <NextScript />
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div
          class="elfsight-app-449dc901-7366-43df-b29a-84f77ee0f999"
          style={{ display: 'none' }}
        ></div>
      </body>
    </Html>
  );
}
