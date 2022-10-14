import { component$ } from "@builder.io/qwik";
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
// import { QwikPartytown } from "@leifermendez/partytown-qwik/adapter";
import "./global.css";
// import Box from "@ps/ui/components/content/atoms/Box";
// import AppProvider from "./components/utils/AppProvider";
import Layout from "./components/Layout";

export default component$(() => {
  // const googleScript = `window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());
  // gtag('config', 'G-XXXXXXXX'); `;
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        {/* <QwikPartytown forward={["dataLayer.push"]} />
        <script async type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX" />
      <script type="text/partytown">{googleScript}</script> */}
      </head>
      <body lang="en">
        <Layout>
          <RouterOutlet />
          <ServiceWorkerRegister />
          {/* <Box as="h1">Test box</Box> */}
        </Layout>
      </body>
    </QwikCity>
  );
});
