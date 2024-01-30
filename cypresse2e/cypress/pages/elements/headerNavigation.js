class Header {
  logo = ".logo-container > .logo";
  locationDropdown = "button > .select-button";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }

  locationDropdown() {
    return cy.get(this.locationDropdown);
  }
}

export default Header;
