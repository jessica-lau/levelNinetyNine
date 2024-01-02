class Homepage {
  pillBtn = ".pill-link";
  levelHeading = "h1 > img";
  levelSubHeading = "h2";
  levelDetails = "h3";

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
}

export default Homepage;
