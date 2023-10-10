import Footer from "../../pages/elements/footer";

describe("Level99 footer section", () => {
  const footer = new Footer();

  context("User view content in footer", () => {
    beforeEach(() => {
      footer.visit();
    });

    it("Level99 logo is visible", () => {
      footer.getLogo().should("be.visible");
    });

    it("Facebook social media icon is visible and clickable", () => {
      footer.getFbSocial().should("be.visible").click();
    });
  });
});
