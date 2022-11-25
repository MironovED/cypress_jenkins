import selectors from "../fixtures/selectors.json";

Cypress.Commands.add("login", (login, password) => {
	cy.get(selectors.fieldLogin).type(login);
	cy.get(selectors.fieldPassword).type(password);
	cy.contains(`${selectors.loginButton}`).click();
});

Cypress.Commands.add("clickLoginButton", () => {
	cy.contains(`${selectors.loginButton}`).click();
});

Cypress.Commands.add("enterPassword", (password) => {
	cy.get(selectors.fieldPassword).type(password);
	cy.contains(`${selectors.loginButton}`).click();
});

Cypress.Commands.add("enterLogin", (login) => {
	cy.get(selectors.fieldLogin).type(login);
	cy.contains(`${selectors.loginButton}`).click();
});
