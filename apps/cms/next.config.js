/* eslint-disable */
const withTM = require('next-transpile-modules')([
  '@spiral/ui',
  '@spiral/utils',
]);
const dotenvLoad = require('dotenv-load');
const nextBuildId = require('next-build-id');

// const ContentSecurityPolicy = require('@spiral/config/auth/contentSecurityPolicy/index');

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
          // {
          //   key: 'Content-Security-Policy',
          //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          // },
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
  env: {},
});
