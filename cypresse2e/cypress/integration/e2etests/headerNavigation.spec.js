import Header from "../../pages/elements/headerNavigation";

describe("Level99 header section", () => {
  const header = new Header();
  context("User views content in header navigation", () => {
    beforeEach(() => {
      header.visit();
    });
  });
});
