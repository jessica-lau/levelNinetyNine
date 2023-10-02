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

    it("Home dropdown is clickable", () => {
      cy.get('a[href="/"]').click();
    });

    it("Explore dropdown is clickable", () => {
      cy.get('a[href="/explore/entertainment"').click();
    });

    it("Event Planning dropdown is clickable", () => {
      cy.get('a[href="/events"').click();
    });

    it("About dropdown is clickable", () => {
      cy.get('a[href="/about/faq/what-is"').click();
    });

    it("FAQ dropdown is clickable", () => {
      cy.get('a[href="/about/faq"').click();
    });

    it("Tickets button is clickable", () => {
      cy.get('a[href="https://ticketing.level99.com"]').click();
    });
  });
});
