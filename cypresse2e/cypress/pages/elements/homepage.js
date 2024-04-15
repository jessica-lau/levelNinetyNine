class Homepage {
  pillBtn = ".pill-link";
  levelHeading = "h1 > img";
  levelSubHeading = "h2";
  levelDetails = "h3";
  levelSubDetails = "p";
  restaurantGallery =
    ".section restaurant-gallery > .images-container > .image-container";
  roomsTitle = ".element-grid > .title";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getPillBtn() {
    return cy.get(this.pillBtn);
  }

  getLevelHeading() {
    return cy.get(this.levelHeading);
  }

  getLevelSubHeading() {
    return cy.get(this.levelSubHeading);
  }

  getLevelDetails() {
    return cy.get(this.levelDetails);
  }

  getLevelSubDetails() {
    return cy.get(this.levelSubDetails);
  }

  getRestaurantGallery() {
    return cy.get(this.restaurantGallery);
  }

  getRoomsTitle() {
    return cy.get(this.roomsTitle);
  }
}

export default Homepage;
