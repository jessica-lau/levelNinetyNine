class Footer {
  logo = ".block logo";
  social = ".socials > a";
  challengeHeading = "h2";
  headings = "h3";
  subHeadings = "h4";
  description = "p";
  inputEmail = "#mce-EMAIL";
  subscribeLabel = ".subscribe-label";
  subscribeBtn = "#mc-embedded-subscribe";
  emailRequiredError = ".mce_inline_error";
  footnotes = ".footnotes";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }

  getChallengeHeading() {
    return cy.get(this.challengeHeading);
  }

  getHeadings() {
    return cy.get(this.headings);
  }

  getSubHeadings() {
    return cy.get(this.subHeadings);
  }

  getDescription() {
    return cy.get(this.description);
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

  getFootnotes() {
    return cy.get(this.footnotes);
  }
}

export default Footer;
