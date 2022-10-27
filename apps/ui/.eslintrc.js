const preset = require('@ps/constants/config/eslint-preset')(__dirname);

preset.rules['react/display-name'] = 'off';
preset.rules['import/newline-after-import'] = 'warn';

module.exports = preset;
