const preset = require('@ps/constants/config/eslint-preset')(__dirname);

preset.rules['react/display-name'] = 'warn';
preset.rules['import/newline-after-import'] = 'warn';

module.exports = preset;
