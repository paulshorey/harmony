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
    './addons/expand-all/register.js',
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
};
