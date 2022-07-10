const config = require('@spiral/config/jest-config');

module.exports = {
  ...config,
  moduleDirectories: ['node_modules', '<rootDir>'],
};
