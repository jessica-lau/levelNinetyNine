class Homepage {
  pillBtn = ".pill-link";
  levelHeading = "h1 > img";
  levelSubHeading = "h2";
  levelDetails = "h3";
  levelSubDetails = "p";

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

  getLevelDetails() {
    return cy.get(this.levelDetails);
  }

  getLevelSubDetails() {
    return cy.get(this.levelSubDetails);
  }
}

export default Homepage;
