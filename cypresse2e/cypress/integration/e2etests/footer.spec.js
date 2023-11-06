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
      section(0, "Hours");
    });

    it("'Pricing' heading is visible", () => {
      section(1, "Pricing");
    });

    it("Pricing link is clickable and redirects to pricing page", () => {
      cy.get('a[href="/about/info#prices"]').click();
      cy.url().should("include", "/about/info#prices");
    });

    it("'Location' heading is visible", () => {
      section(2, "Location");
    });

    it("'Contact' heading is visible", () => {
      section(3, "Contact");
    });

    it("'Stay Connected' heading is visible", () => {
      section(4, "Stay Connected");
    });

    it("'Natick Mall' subheading is visible", () => {
      subSection(0, "Natick Mall");
    });

    it("Location link is clickable and redirects to Level99 Google Maps", () => {
      cy.get(
        'a[href="https://www.google.com/maps?ll=42.301328,-71.381843&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=9936949303358048955"]'
      ).click();
      cy.url().should("include", "google.com");
    });

    it("'General Inquries' subheading is visible", () => {
      subSection(1, "General Inquiries");
    });

    it("'Large Events' subheading is visible", () => {
      subSection(2, "Large Events");
    });

    it("Events link is clickable and redirects to events page", () => {
      cy.get('a[href="/events"]').click();
      cy.url().should("include", "/events");
    });

    it("'Email' subheading is visible", () => {
      subSection(3, "Email");
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

  function subSection(index, text) {
    footer.getSubHeadings().eq(index).should("contain", text);
  }
});
