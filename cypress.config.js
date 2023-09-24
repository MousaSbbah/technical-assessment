const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  supportFolder: './Cypress/support/e2e.js',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: '**/*.feature',
    baseUrl: 'https://www.propertyfinder.bh/',
    retries: 2,
  },

  
});
