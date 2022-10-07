const withPlugins = require('next-compose-plugins');
const nextBuildId = require('next-build-id');

const nextConfig = {
  trailingSlash: false,
  webpack5: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html|\.css$/i,
      loader: 'html-loader',
      options: {
        // Disables attributes processing
        sources: false,
      },
    });
    config.module.rules.push({
      test: [/\.jsx?$/, /\.js?$/],
      use: ['babel-loader'],
      exclude: /node_modules/,
    });
    return config;
  },
  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
  // async rewrites() {
  //   return [];
  // },
  async redirects() {
    return [
      /*
      THIS REDIRECT MUST REMAIN ON AMPLIFY. MANAGE IT THERE! It will not work here.
        /r/<*>	/web-sociallyresponsible?referralCode=<*>	301 (Redirect - Permanent)	-
      IF ATTEMPTED TO DO IT HERE LIKE `destination: '/web-sociallyresponsible:code',` 
        then it will cause that url to load a blank page.
      The below '/r/:code' redirect here is for safety, in case the Amplify one is missing or broken.
      On Amplify, cloudfront.net rewrite must be the very last item. Or it will break all redirects.
      */
      {
        source: '/r/:code',
        destination: '/web-sociallyresponsible',
        permanent: true,
      },
      /*
      BELOW REDIRECTS ARE MANAGED HERE, STANDARD NEXTJS, NOT DUPLICATED IN AMPLIFY
      */
      {
        source: '/sociallyresponsible-banking-directbonus',
        destination: '/sociallyresponsible',
        permanent: true,
      },
      {
        source: '/web-sociallyresponsible-banking-directbonus',
        destination: '/web-sociallyresponsible',
        permanent: true,
      },
      {
        source: '/banking-directbonus',
        destination: '/',
        permanent: true,
      },
      {
        source: '/disclosures/bonuses-mobile',
        destination: '/disclosures/apy-mobile',
        permanent: true,
      },
      {
        source: '/disclosures/bonuses',
        destination: '/disclosures',
        permanent: true,
      },
      {
        source: '/banking',
        destination: '/',
        permanent: true,
      },
      {
        source: '/r',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/partners',
        destination: '/nonprofits',
        permanent: true,
      },
      {
        source: '/PrivacyNotice',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/termsofuse',
        destination: '/terms-of-use',
        permanent: true,
      },
      {
        source:
          '/blog/5-reasons-why-you-may-not-have-received-your-stimulus-check',
        destination:
          '/blog/4-reasons-why-you-may-not-have-received-your-stimulus-check',
        permanent: true,
      },
      {
        source:
          '/blog/what-to-do-with-your-stimulus-check-if-you-dont-need-it-5-great-organizations-you-can-donate-your-money-to-help-families-hurting-from-covid-19',
        destination:
          '/blog/what-to-do-with-your-stimulus-check-if-you-dont-need-it',
        permanent: true,
      },
      {
        source: '/blog/donate-to-st-jude-childrens-research-hospital',
        destination: '/blog',
        permanent: true,
      },
      {
        source:
          '/blog/this-is-how-much-the-average-american-gives-annually-how-much-should-you-give',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/join',
        destination: '/web-sociallyresponsible/?pid=social&c=instagram_profile',
        permanent: true,
      },
      {
        source: '/welcome',
        destination: '/web-sociallyresponsible/?pid=social&c=facebook_profile',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/web-sociallyresponsible/?pid=social&c=twitter_profile',
        permanent: true,
      },
      {
        source: '/hello',
        destination: '/web-sociallyresponsible/?pid=social&c=linkedin_profile',
        permanent: true,
      },
      {
        source: '/foryou',
        destination: '/web-sociallyresponsible/?pid=social&c=tiktok_profile',
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([], nextConfig);
