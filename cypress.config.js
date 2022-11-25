const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'http://qamid.tmweb.ru',
		specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
	},
	projectId: 'k3xayt',
});
