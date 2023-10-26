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

    it("'A World of Challenges' heading should be visible", () => {
      footer.getChallengeHeading().should("contain", "A World of ");
    });

    it("'Hours' heading is visible", () => {
      footer.getHeadings().eq(0).should("contain", "Hours");
    });

    it("'Pricing' heading is visible", () => {
      footer.getHeadings().eq(1).should("contain", "Pricing");
    });

    it("'Location' heading is visible", () => {
      footer.getHeadings().eq(2).should("contain", "Location");
    });

    it("'Contact' heading is visible", () => {
      footer.getHeadings().eq(3).should("contain", "Contact");
    });

    it("'Stay Connected' heading is visible", () => {
      footer.getHeadings().eq(4).should("contain", "Stay Connected");
    });

    it("'Natick Mall' subheading is visible", () => {
      footer.getSubHeadings().eq(0).should("contain", "Natick Mall");
    });

    it("'General Inquries' subheading is visible", () => {
      footer.getSubHeadings().eq(1).should("contain", "General Inquiries");
    });

    it("'Large Events' subheading is visible", () => {
      footer.getSubHeadings().eq(2).should("contain", "Large Events");
    });

    it("'Email' subheading is visible", () => {
      footer.getSubHeadings().eq(3).should("contain", "Email");
    });

    it("'Keep up to date.' label should be visible", () => {
      footer.getSubscribeLabel().should("contain", "Keep up to date.");
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

    it("Error message appears when user submits invalid email", () => {
      footer
        .getInputEmail()
        .click()
        .type(emailAndPassword.invalidEmail)
        .focus()
        .blur();
      footer.getSubscribeBtn().should("be.visible").click();
      footer.getEmailRequired().should("contain", "This field is required.");
    });
  });

  function section(index, text) {
    footer.getHeadings().eq(index).should("contain", text);
  }
});
