const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
	supportFolder: './Cypress/support/e2e.js',
	e2e: {
		// eslint-disable-next-line no-unused-vars
		setupNodeEvents (on, config) {
			on('file:preprocessor', cucumber());
		},
		specPattern: '**/*.feature',
		baseUrl: 'https://www.propertyfinder.bh/',
		retries: 2,
		chromeWebSecurity: false,
		userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
	},


});
