beforeEach(() => {
	cy.visit("/");
});

it("home page display", () => {
	cy.get(".page-header__title").should("be.visible");
	cy.get(".page-nav__day ").should("have.length", 7);
});
