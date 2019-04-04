/// <reference types"Cypress"></reference>

before(() => {
  cy.visit("https://www.irontec.com/");
});

describe("Test Irontec", () => {
  context("Home", () => {
    it("Contenido del título correcto", () => {
      cy.get("h1").should(
        "contain",
        "Soluciones tecnológicas avanzadas para tu empresa"
      );
    });

    it('Visibilidad de la imagen del banner y contenga un "png"', () => {
      cy.get(".logo-libre > img")
        .should("be.visible")
        .and("have.attr", "src")
        .and("contain", ".png");
    });

    it("Existencia del menú", () => {
      cy.get("#nav-menu").should("exist");
    });

    it("Length de los servicios del banner", () => {
      cy.get(".presenta-servicios > ul > li")
        .its("length")
        .should("eq", 5);
    });

    it("Clase del body cambia al desplazarnos hacia abajo", () => {
      cy.get("body").should("have.class", "onpane1");
      cy.get(".iron-one-page-navigation.right > :nth-child(2) > a").click();
      cy.get("body").should("have.class", "onpane2");
    });
  });
});
