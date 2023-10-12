import Footer from "../../pages/elements/footer";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

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

    it("Instagram social media icon is visible and clickable", () => {
      footer.getIgSocial().should("be.visible").click();
    });

    it("Twitter social media icon is visible and clickable", () => {
      footer.getTwitterSocial().should("be.visible").click();
    });

    it("User can input email in subscribe field and click the subscribe button", () => {
      footer
        .getInputEmail()
        .click()
        .type(emailAndPassword.validEmail)
        .focus()
        .blur();
      footer.getSubscribeBtn().should("be.visible").click();
    });
  });
});
