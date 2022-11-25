import users from "../fixtures/users.json";
import selectors from "../fixtures/selectors.json";

beforeEach(() => {
	cy.visit("/admin");
});

it("Should successfully login", () => {
	cy.login(users.validLogin, users.validPass);
	cy.contains("Управление залами").should("be.visible");
});

it("Should not login with login unregistered user", () => {
	cy.login(users.invalidLogin, users.invalidPass);
	cy.contains("Ошибка авторизации!").should("be.visible");
});

it("Should not login with all fields empty", () => {
	cy.clickLoginButton().click();
	cy.get(selectors.fieldLogin)
		.then(($el) => $el[0].checkValidity())
		.should("be.false");
});

it("Should not login with empty login", () => {
	cy.enterPassword(users.validPass);
	cy.get(selectors.fieldLogin)
		.then(($el) => $el[0].checkValidity())
		.should("be.false");
});

it("Should not login with empty password", () => {
	cy.enterLogin("qamid@qamid.ru");
	cy.get(selectors.fieldPassword)
		.then(($el) => $el[0].checkValidity())
		.should("be.false");
});

it("Should not login with login have value 0", () => {
	cy.login("0", "qamit");
	cy.get(selectors.fieldLogin)
		.then(($el) => $el[0].checkValidity())
		.should("be.false");
});
