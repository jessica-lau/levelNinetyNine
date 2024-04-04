class Footer {
  logo = ".block logo";
  social = ".socials > a";
  challengeHeading = "h2";
  headings = ".footer-items > .item";
  newsletterHeading = ".newsletter-form > .heading";
  inputEmail = "#mce-EMAIL";
  subscribeLabel = ".subscribe-label";
  subscribeBtn = "#mc-embedded-subscribe";
  emailRequiredError = ".mce_inline_error";
  copyright = ".copyright";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }

  getSocial() {
    return cy.get(this.social);
  }

  getChallengeHeading() {
    return cy.get(this.challengeHeading);
  }

  getHeadings() {
    return cy.get(this.headings);
  }

  getNewsletterHeading() {
    return cy.get(this.newsletterHeading);
  }

  getInputEmail() {
    return cy.get(this.inputEmail);
  }

  getSubscribeLabel() {
    return cy.get(this.subscribeLabel);
  }

  getSubscribeBtn() {
    return cy.get(this.subscribeBtn);
  }

  getEmailRequired() {
    return cy.get(this.emailRequiredError);
  }

  getCopyright() {
    return cy.get(this.copyright);
  }
}

export default Footer;
