import HomePage from "../../pages/elements/homepage";

describe("Level99 homepage", () => {
  const homepage = new HomePage();

  context("User views content in homepage", () => {
    beforeEach(() => {
      homepage.visit();
    });

    it("Level99 heading is visible", () => {
      homepage.getLevelHeading().should("have.attr", "alt", "Level99");
    });

    it("Level99 subheading is visible", () => {
      homepage.getLevelSubHeading().should("contain", "A world of");
    });

    it("'What is Level99' button is visible and clickable", () => {
      homepage.getPillBtn().contains("what is level99?").click();
      cy.url().should("include", "/explore/entertainment");
    });

    it("'Learn More' button is visible and clickable", () => {
      homepage.getPillBtn().contains("Learn More").click();
      cy.url().should("include", "/explore/entertainment");
    });
  });
});
