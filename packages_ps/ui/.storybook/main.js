// const path = require('path');
module.exports = {
  stories: [
    '../.storybook/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next',
    'storybook-css-modules',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        loadSassAfterPostCSS: true,
        sassLoaderOptions: {
          implementation: require('sass'),
        },
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    },
  ],
  // presets: [path.resolve('./.storybook/addons/scss-preset.js')],
  framework: '@storybook/react',
  staticDir: ['../public'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async function supportCssModules(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    //   // console.log('1=================================')
    //   // console.log('>>>config', config.module.rules)
    //   // console.log('1=================================')

    //   config.module.rules.find(
    //     (rule) => rule.test.toString() === '/\\.css$/'
    //   ).exclude = /\.module\.css$/;

    return config;
  },
};
