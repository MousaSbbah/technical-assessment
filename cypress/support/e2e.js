
beforeEach(()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: false,
});

Cypress.on('uncaught:exception', () =>  false);

import './commands'