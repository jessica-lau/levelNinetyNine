class Homepage {
  pillBtn = ".pill-link";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getPillBtn() {
    return cy.get(this.pillBtn);
  }
}

export default Homepage;
