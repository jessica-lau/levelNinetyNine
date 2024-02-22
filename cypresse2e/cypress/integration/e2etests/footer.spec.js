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
      footer.getSocial().eq(0).should("be.visible").click();
    });

    it("Instagram social media icon is visible and clickable", () => {
      footer.getSocial().eq(1).should("be.visible").click();
    });

    it("X social media icon is visible and clickable", () => {
      footer.getSocial().eq(2).should("be.visible").click();
    });

    it("TikTok social media icon is visible and clickable", () => {
      footer.getSocial().eq(3).should("be.visible").click();
    });

    it("'A World of Challenges' heading should be visible", () => {
      footer.getChallengeHeading().should("contain", "A World of ");
    });

    it("'Hours' heading is visible", () => {
      section(0, "Hours");
    });

    it("'Location' heading is visible", () => {
      section(1, "Location");
    });

    it("'Support' heading is visible", () => {
      section(2, "Support");
    });

    it("'Pricing' heading is visible", () => {
      section(3, "Pricing");
    });

    it("'Purchasing' heading is visible", () => {
      section(4, "Purchasing");
    });

    it("'Careers' heading is visible", () => {
      section(5, "Careers");
    });

    it("Stay Connected' heading is visible", () => {
      footer.getNewsletterHeading().should("contain", "Stay Connected");
    });

    it("Pricing link is clickable and redirects to pricing page", () => {
      cy.get('a[href="/about/info#prices"]').click();
      cy.url().should("include", "/about/info#prices");
    });

    it("'Contact' heading is visible", () => {
      section(3, "Contact");
    });

    it("'Stay Connected' heading is visible", () => {
      section(4, "Stay Connected");
    });

    it("Keep up to date label should be visible", () => {
      footer
        .getSubscribeLabel()
        .should(
          "contain",
          "Get the latest updates about Level99's new features and updates."
        );
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

    it("Level99 Hours link is clickable and redirects to hours page", () => {
      cy.get('a[href="https://level99.com/visit#location-grid"]').eq(0).click();
      cy.url().should("include", "location-grid");
    });

    it("Level99 Location link is clickable and redirects to location page", () => {
      cy.get('a[href="https://level99.com/visit#location-grid"]').eq(1).click();
      cy.url().should("include", "location-grid");
    });

    it("Location description is visible", () => {
      footer
        .getDescription()
        .contains(
          "On the second floor of the Natick Mall, next to the food court. Parking Deck C."
        )
        .should("be.visible");
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

    it("Copryright footnote is visible", () => {
      footer
        .getFootnotes()
        .should("contain", "2023")
        .and("contain", "Level99. All rights reserved.");
    });

    it("Careers link is clickable and redirects to careers page", () => {
      lowerLinks('a[href="/careers"]', "/careers");
    });

    it("Terms & Conditions link is clickable and redirects to terms page", () => {
      lowerLinks('a[href="/about/terms"]', "/about/terms");
    });

    it("About link is clickable and redirects to about page", () => {
      lowerLinks('a[href="/about/info"]', "/about/info");
    });

    it("Privacy Policy link is clickable and redirects to privacy page", () => {
      lowerLinks('a[href="/about/privacy"]', "/about/privacy");
    });

    it("FAQ link is clickable and redirects to FAQ page", () => {
      lowerLinks('a[href="/about/faq"]', "/about/faq");
    });

    it("House Policy link is clickable and redirects to house policy page", () => {
      lowerLinks('a[href="/about/house-policy"]', "/about/house-policy");
    });

    it("Gift Cards link is clickable and redirects to gift cards page", () => {
      lowerLinks(
        'a[href="https://www.toasttab.com/level-99/giftcards"]',
        "/giftcards"
      );
    });
  });

  function section(index, text) {
    footer.getHeadings().eq(index).should("contain", text);
  }

  function subSection(index, text) {
    footer.getSubHeadings().eq(index).should("contain", text);
  }

  function lowerLinks(link, linkText) {
    cy.get(link).click();
    cy.url().should("include", linkText);
  }
});
