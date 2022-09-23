const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NEXT_PUBLIC_BUILD_ENV: '"development"',
});
