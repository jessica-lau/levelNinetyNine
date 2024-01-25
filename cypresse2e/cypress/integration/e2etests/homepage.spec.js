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

    it("'Award Winning' description is visible", () => {
      homepage.getLevelDetails().contains("Award-winning").should("be.visible");
    });

    it("'Award Winning' sub description is visible", () => {
      homepage
        .getLevelSubDetails()
        .contains("Test yourselves with our unique challenges.")
        .should("be.visible");
    });

    it("'Live Action' description is visible", () => {
      homepage.getLevelDetails().contains("Cutting Edge").should("be.visible");
    });

    it("'Live Action' sub description is visible", () => {
      homepage
        .getLevelSubDetails()
        .contains("A sprawling real-life game world,")
        .should("be.visible");
    });

    it("'Learn More' button is visible and clickable", () => {
      homepage.getPillBtn().contains("Learn More").click();
      cy.url().should("include", "/explore/entertainment");
    });

    it("'Locally-Crafted' description is visible", () => {
      homepage
        .getLevelDetails()
        .contains("Locally-Crafted ")
        .should("be.visible");
    });

    it("'Locally-Crafted' sub description is visible", () => {
      homepage
        .getLevelSubDetails()
        .contains("A 20 Boston Craft Beers on Tap, real-life game world,")
        .should("be.visible");
    });

    it("'Explore Food & Drinks' button is visible and clickable", () => {
      homepage
        .getPillBtn()
        .should("have.attr", "href", "http://nightshiftnatick.com")
        .invoke("removeAttr", "target")
        .click();
      cy.url().should("include", "http://nightshiftnatick");
    });

    it("Restaurant gallery first image is visible", () => {
      homepage.getRestaurantGallery().eq(0).should("be.visible");
    });

    it("Restaurant gallery first image is visible", () => {
      image(0);
    });

    it("Restaurant gallery second image is visible", () => {
      image(1);
    });

    it("Restaurant gallery third image is visible", () => {
      image(2);
    });
  });

  function image(index) {
    homepage.getRestaurantGallery().eq(index).should("be.visible");
  }
});
