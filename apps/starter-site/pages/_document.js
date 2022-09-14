import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;
const GA3_ID = process.env.NEXT_PUBLIC_GA3_ID;
const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const MIXPANEL_ID =
  process.env.NEXT_PUBLIC_MIXPANEL_ENV === 'production'
    ? process.env.NEXT_PUBLIC_MIXPANEL_PRODUCTION
    : process.env.NEXT_PUBLIC_MIXPANEL_STAGING;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" height="100%">
        <Head>
          <link as="image" href="/images/icons-white/spiral-logo.png" rel="preload" />
          <meta name="facebook-domain-verification" content="q7j8lyq5rs5awwmpwmgpta2grj59vz" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'HelveticaNeue';
                src: url('https://www.spiral.us/fonts/HelveticaNeue300.ttf') format('truetype');
                font-display: swap;
                font-weight: 300;
              }
              @font-face {
                font-family: 'HelveticaNeue';
                src: url('https://www.spiral.us/fonts/HelveticaNeue400.ttf') format('truetype');
                font-display: swap;
                font-weight: 400;
              }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <link rel="stylesheet" href="/icomoon/style.css" />

          {/*
           * Mixpanel
           */}
          {!!MIXPANEL_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
            for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
            MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
            mixpanel.init("${MIXPANEL_ID}");`,
              }}
            />
          )}

          {/*
           * Google analytics
           * From: https://developers.google.com/analytics/devguides/collection/analyticsjs#the_google_analytics_tag
           */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', '${GA3_ID}', 'auto');
ga('send', 'pageview');
`,
            }}
          />
          {/*
           * For "mediabrainers" initiative
           * Mor says to leave existing GA tag in place, for YellowHead.
           */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTAG_ID}', { 'send_page_view': false });
              `,
            }}
          />

          {/*
           * AppsFlyer SmartBanner
           */}
          {/*<script*/}
          {/*  dangerouslySetInnerHTML={{*/}
          {/*    __html: `*/}
          {/*        !function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){(t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],o.async=1,o.src="https://websdk.appsflyer.com?"+(c.length>0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),p.parentNode.insertBefore(o,p)}(window,document,"script",0,"AF","banners",{banners: {key: "743a92f1-db4c-44c9-96e3-ed1d565a00df"}})*/}
          {/*        AF('banners', 'showBanner')*/}
          {/*        `*/}
          {/*  }} />*/}

          {/*
           * Facebook Analytics (initialize it in _app.js, after reading url QueryString):
           */}
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              
              fbq('init', '${FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt="fbq"
              src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>

          {/*
           * Ticktock analytics
           */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

  ttq.load('C7BF7NSC9SIAKQ68DT2G');
  ttq.page();
}(window, document, 'ttq');`,
            }}
          />

          {/*
           * LinkedIn analytics
           */}
          <script
            dangerouslySetInnerHTML={{
              __html: `_linkedin_partner_id = "3624578"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk);`,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt="LinkedIn ads pixel"
              src="https://px.ads.linkedin.com/collect/?pid=3624578&fmt=gif"
            />{' '}
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
