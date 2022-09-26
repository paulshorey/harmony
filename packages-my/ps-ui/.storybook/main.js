const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// const replaceBabelWithSwc = (config) => {
//   // Replace default webpack babel-loader with swc-loader
//   config.module.rules.forEach((rule) => {
//     if (rule.use) {
//       rule.use = rule.use.map((loaderConfig) => {
//         if (
//           loaderConfig.loader &&
//           loaderConfig.loader.includes('babel-loader')
//         ) {
//           return {
//             loader: require.resolve('swc-loader'),
//           };
//         }
//         return loaderConfig;
//       });
//     }
//   });
//   return config;
// };

module.exports = {
  stories: [
    './__stories__/**/*.@(js|jsx|ts|tsx|mdx)',
    '../components/**/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    // '@storybook/addon-viewport',
    // '@degjs/storybook-addon-taffy/register',
    // '@storybook/addon-links',
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     rule: {
    //       test: [/-story\.tsx/, /welcome-story\.js/],
    //       include: [path.resolve(__dirname, '__stories__'), __dirname],
    //     },
    //     loaderOptions: {
    //       prettierConfig: { printWidth: 80, singleQuote: false },
    //     },
    //   },
    // },
    // './theme-selector-addon/register',
    // './platform-selector-addon/register',
    // './dark-mode-addon/register',
    // '@storybook/addons',
    // './font-size-addon/register',
    // '@storybook/addon-controls',
    // '@storybook/addon-docs',
    // {
    //   name: '@storybook/addon-docs',
    //   options: {
    //     configureJSX: true,
    //     babelOptions: {},
    //     sourceLoaderOptions: null,
    //     transcludeMarkdown: true,
    //   },
    // },
  ],
  // typescript: {
  //   check: true,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     propFilter: (prop) =>
  //       prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  //     shouldExtractLiteralValuesFromEnum: true,
  //   },
  // },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];

    // return replaceBabelWithSwc(config);
    return config;
  },
  // managerWebpack: async (config) => {
  //   return replaceBabelWithSwc(config);
  // },
  // typescript: {
  //   // workaround for https://github.com/storybookjs/storybook/issues/15067
  //   reactDocgen: 'none',
  // },
};
