const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3001',
        specPattern: 'cypress/tests/**/*.test.js',
        supportFile: 'cypress/support/index.js'
    },
    'defaultCommandTimeout': 15000,
    'viewportWidth': 1920,
    'viewportHeight': 1080
})
