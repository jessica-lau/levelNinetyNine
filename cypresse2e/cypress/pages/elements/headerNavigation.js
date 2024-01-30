class Header {
  logo = ".logo-container > .logo";
  locationDropdown = "button .select-button";
  locationOptions = "#select-dropdown > li";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }

  getLocationDropdown() {
    return cy.get(this.locationDropdown);
  }

  getLocationOption() {
    return cy.get(this.locationOptions);
  }
}

export default Header;
