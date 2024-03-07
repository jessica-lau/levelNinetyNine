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

    it("Level99 Hours link is clickable and redirects to hours page", () => {
      cy.get('a[href="https://level99.com/visit#location-grid"]').eq(0).click();
      cy.url().should("include", "location-grid");
    });

    it("'Location' heading is visible", () => {
      section(1, "Location");
    });

    it("Level99 Location link is clickable and redirects to location page", () => {
      cy.get('a[href="https://level99.com/visit#location-grid"]').eq(1).click();
      cy.url().should("include", "location-grid");
    });

    it("'Support' heading is visible", () => {
      section(2, "Support");
    });

    it("Support link is clickable and redirects to support page", () => {
      cy.get(
        'a[href="https://level99.zendesk.com/hc/en-us/requests/new"]'
      ).click();
      cy.url().should("include", "/requests/new");
    });

    it("'Pricing' heading is visible", () => {
      section(3, "Pricing");
    });

    it("Pricing link is clickable and redirects to pricing page", () => {
      cy.get('a[href="/visit#pricing"]').click();
      cy.url().should("include", "/visit#pricing");
    });

    it("'Purchasing' heading is visible", () => {
      section(4, "Purchasing");
    });

    it("Tickets link is clickable and redirects to tickets page", () => {
      cy.get('a[href="https://ticketing.level99.com/visit""]').click();
      cy.url().should("include", "/visit");
    });

    it("Gifts Cards link is clickable and redirects to gift cards page", () => {
      cy.get('a[href="https://www.toasttab.com/level-99/giftcards"]').click();
      cy.url().should("include", "/giftcards");
    });

    it("'Careers' heading is visible", () => {
      section(5, "Careers");
    });

    it("Career Opportunites link is clickable and redirects to careers page", () => {
      cy.get('a[href="/careers"]').click();
      cy.url().should("include", "/careers");
    });

    it("Stay Connected' heading is visible", () => {
      footer.getNewsletterHeading().should("contain", "Stay Connected");
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

    it("Copryright text is visible", () => {
      footer
        .getCopyright()
        .should("contain", "2024")
        .and("contain", "Level99. All rights reserved.");
    });

    it("Terms & Conditions link is clickable and redirects to terms page", () => {
      lowerLinks('a[href="/terms-and-conditions"]', "/terms-and-conditions");
    });

    it("Privacy Policy link is clickable and redirects to privacy page", () => {
      lowerLinks('a[href="/privacy-policy"]', "/privacy-policy");
    });

    it("House Policy link is clickable and redirects to house policy page", () => {
      lowerLinks('a[href="/house-policy"]', "/house-policy");
    });

    it("Website Accessibilty link is clickable and redirects to accessibilty page", () => {
      lowerLinks('a[href="/#"]', "/#");
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
