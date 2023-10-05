class Footer {
  logo = ".block logo";
  facebookSocial = ".social > .icon fb";
  instagramSocial = ".social > .icon ig";
  twitterSocial = ".social > .icon tw";
  headings = "h3";
  subHeadings = "h4";
  inputEmail = "#mce-EMAIL";
  subscribeLabel = ".subscribe-label";
  subcribeBtn = "#mc-embedded-subscribe";

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

export default Footer;
