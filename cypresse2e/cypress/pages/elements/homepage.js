class Homepage {
  pillBtn = ".pill-link";
  levelHeading = "h1 > img";
  levelSubHeading = "h2";

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

  getLevelSubHeading() {
    return cy.get(this.levelSubHeading);
  }
}

export default Homepage;
