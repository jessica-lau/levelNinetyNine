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

    it("Tickets button is clickable", () => {
      cy.get('a[href="https://ticketing.level99.com"]').click();
    });
  });
});
