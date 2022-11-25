import users from "../fixtures/users.json";
import selectors from "../fixtures/selectors.json";
import seats from "../fixtures/seats.json";

it("movie booking", () => {
	//Выбираем день недели
	let dayWeek = 2;

	cy.visit("/admin");
	cy.login(users.validLogin, users.validPass);

	cy.get(selectors.getNameHall).invoke("attr", "value").as("hallName");
	cy.get("@hallName").then((hallName) => {
		cy.log(hallName);
		cy.visit("/");
		cy.get(`a.page-nav__day:nth-of-type(${dayWeek})`).click();
		//Забираем из админа навание зала
		cy.contains(hallName)
			.next()
			.then(($el) => {
				cy.get($el).children().click();
			});
	});
	seats.forEach((seat) => {
		//Выбираем места
		cy.get(
			`.buying-scheme__wrapper> :nth-child(${seat.row}) > :nth-child(${seat.seat})`
		).click();
	});
	cy.contains(`${selectors.bookingButton}`).click(); //Бронируем выбранные места

	cy.contains(`${selectors.getQrCode}`).should("be.visible"); //Assert
});
