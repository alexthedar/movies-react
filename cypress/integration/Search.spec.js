describe("Search", () => {
  it("focuses input on load", () => {
    cy.visit("http://localhost:3000");
    cy.focused().should("have.id", "search-box");
  });
  it.only("accepts input", () => {
    const queryString = "Trekkies";
    cy.visit("http://localhost:3000");
    cy.get("#search-box").type;
  });
});
