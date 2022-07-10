/* eslint-disable */
const withTM = require('next-transpile-modules')([
  '@spiral/ui',
  '@spiral/utils',
]);
const dotenvLoad = require('dotenv-load');
const nextBuildId = require('next-build-id');

const ContentSecurityPolicy = require('@spiral/config/auth/contentSecurityPolicy/index');

dotenvLoad();

module.exports = withTM({
  reactStrictMode: true,
  webpack5: true,
  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
  async headers() {
    return [
      {
        headers: [
          /**
           * Content Security Policy - apply to all routes.
           */
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
          /**
           * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
           */
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=3600; includeSubDomains; preload',
          },
        ],
        source: '/:path*',
      },
    ];
  },
  async redirects() {
    return [];
  },
  env: {
    API_BASE: process.env.API_BASE,
    UNIVERSAL_LINK_BASE: process.env.UNIVERSAL_LINK_BASE,
    SMARTLOOK_TOKEN: process.env.SMARTLOOK_TOKEN,
    MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN,
    APPLE_APP_SITE_ID: process.env.APPLE_APP_SITE_ID,
    SOCURE_SDK_PUBLIC_TOKEN: process.env.SOCURE_SDK_PUBLIC_TOKEN,
  },
});
