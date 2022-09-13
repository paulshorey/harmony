const config = require('../../packages-universal/ps_config/jest-config');

module.exports = {
  ...config,
  moduleDirectories: ['node_modules', '<rootDir>'],
};
