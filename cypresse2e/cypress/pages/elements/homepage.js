class Homepage {
  pillBtn = ".pill-link";
  levelHeading = "h1 > img";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getPillBtn() {
    return cy.get(this.pillBtn);
  }

  getLevelHeading() {
    return cy.get(this.levelHeading);
  }
}

export default Homepage;
