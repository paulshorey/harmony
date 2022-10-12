const withTM = require('next-transpile-modules')([
  '@ps/constants',
  '@ps/fn',
  '@ps/ui',
  '@ps/cconsole',
]);
const withPlugins = require('next-compose-plugins');
const nextBuildId = require('next-build-id');
const dotenvLoad = require('dotenv-load');
const ContentSecurityPolicy = ''; //require('@ps/constants/auth/contentSecurityPolicy/index');

dotenvLoad();

const nextConfig = withTM({
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
  },
  trailingSlash: false,
  webpack5: true,
  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
  async headers() {
    return [
      {
        headers: [
          // security policy applies to all routes
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=3600; includeSubDomains; preload',
          },
        ],
        source: '/:path*',
      },
    ];
  },
  // async rewrites() {
  //   return [];
  // },
  // async redirects() {
  //   return [];
  // },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.html|\.css$/i,
  //     loader: 'html-loader',
  //     options: {
  //       // Disables attributes processing
  //       sources: false,
  //     },
  //   });
  //   config.module.rules.push({
  //     test: [/\.jsx?$/, /\.js?$/],
  //     use: ['babel-loader'],
  //     exclude: /node_modules/,
  //   });
  //   return config;
  // },
});

module.exports = withPlugins([], nextConfig);
