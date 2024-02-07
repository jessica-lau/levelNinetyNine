import Header from "../../pages/elements/headerNavigation";

describe("Level99 header section", () => {
  const header = new Header();

  context("User views content in header navigation", () => {
    beforeEach(() => {
      header.visit();
    });

    it("Level99 logo should be visible and clickable", () => {
      header.getLogo().should("be.visible").click();
    });

    it("Select 'Choose Location' in level99 location dropdown", () => {
      header.getLocationDropdown().click();
      header
        .getLocationOption()
        .eq(0)
        .should("contain", "Select Location")
        .click();
    });

    it("Select Natick in level99 location dropdown", () => {
      header.getLocationDropdown().click();
      header.getLocationOption().eq(1).should("contain", "Natick, MA").click();
    });

    it("Select Providence in level99 location dropdown", () => {
      header.getLocationDropdown().click();
      header
        .getLocationOption()
        .eq(2)
        .should("contain", "Providence, RI")
        .click();
    });

    it("About navigation is clickable", () => {
      cy.get('a[href="/about"').should("be.visible").click();
    });

    it("User can select options under Visit dropdown", () => {
      cy.get('a[href="/visit"').trigger("mouseover");
      cy.get('a[href="/visit#pricing"]').should("be.visible").click();
      cy.get('a[href="/visit"').trigger("mouseover");
      cy.get('a[href="/visit#hours"]').should("be.visible").click();
      cy.get('a[href="/visit"').trigger("mouseover");
      cy.get('a[href="/visit#events"]').should("be.visible").click();
    });

    it("About dropdown is clickable", () => {
      cy.get('a[href="/about/faq/what-is"').should("be.visible").click();
    });

    it("FAQ dropdown is clickable", () => {
      cy.get('a[href="/about/faq"').should("be.visible").click();
    });

    it("Tickets button is clickable", () => {
      cy.get('a[href="https://ticketing.level99.com"]')
        .should("be.visible")
        .click();
    });
  });
});
