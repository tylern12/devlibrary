/// <reference types="cypress" />

describe("Product page", () => {
  const url = `${Cypress.env('host')}/products/angular`;

  it("displays page components", () => {
    cy.visit(url);
    cy.get(".layout-header").should("exist");
  });

  it("displays a list of clickable product cards", () => {
    cy.visit(url);
    cy.get('[data-test="card"]').should("have.length", 12);
    cy.get('[data-test="load-more"]').click();
    cy.get('[data-test="card"]').should("have.length", 24);
  });

  it("navigates to a product detail page", () => {
    cy.visit(`${url}?type=type-open-source`);
    cy.get('[data-test="card-link"]', {timeout: 15000}).first().click();
    cy.url().should('include', '/products/angular/repos/')
  });
});
