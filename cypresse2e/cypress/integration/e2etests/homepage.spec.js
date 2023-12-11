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
  });
});
