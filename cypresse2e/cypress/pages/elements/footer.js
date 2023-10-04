class Footer {
  logo = ".block logo";
  facebookSocial = ".social > .icon fb";
  instagramSocial = ".social > .icon ig";
  twitterSocial = ".social > .icon tw";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }

  getFbSocial() {
    return cy.get(this.facebookSocial);
  }

  getIgSocial() {
    return cy.get(this.instagramSocial);
  }

  getTwitterSocial() {
    return cy.get(this.twitterSocial);
  }
}
