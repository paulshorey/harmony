const JsConfigPathsMapper = require('jsconfig-paths-jest-mapper');

const config = require('@spiral/config/jest-config');

module.exports = {
  ...config,
  moduleNameMapper: {
    ...new JsConfigPathsMapper({ configFileName: './tsconfig.json' }),
    ...config.moduleNameMapper,
  },
};
