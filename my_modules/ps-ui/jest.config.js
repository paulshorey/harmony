const config = require('../../packages-universal/ps_constants/jest-config');

module.exports = {
  ...config,
  moduleDirectories: ['node_modules', '<rootDir>'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
};
