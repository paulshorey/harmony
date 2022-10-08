// const path = require('path');

module.exports = ({ config }) => {
  // Add Babel rules
  // ========================================================
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  // config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
    // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
    // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
    require.resolve('@emotion/babel-preset-css-prop'),
  ];

  // config.module.rules[0].use[0].options.plugins = [
  //   // use @babel/plugin-proposal-class-properties for class arrow functions
  //   require.resolve('@babel/plugin-proposal-class-properties'),
  //   // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
  //   // require.resolve('babel-plugin-remove-graphql-queries'),
  // ];

  // Add Webpack rules for TypeScript
  // ========================================================
  config.module.rules.push({
    test: /\.(js|tsx|ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        ['react-app', { flow: false, typescript: true }],
        // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
        // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
        require.resolve('@emotion/babel-preset-css-prop'),
      ],
      plugins: [
        // require.resolve('@babel/plugin-proposal-class-properties'),
        // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
        // require.resolve('babel-plugin-remove-graphql-queries'),
      ],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
