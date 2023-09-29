class Header {
  logo = ".logo-container > .logo";

  constructor() {}

  visit() {
    cy.visit("");
  }
}

export default Header;
