class Header {
  logo = ".logo-container > .logo";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }
}

export default Header;
