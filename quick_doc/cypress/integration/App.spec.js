describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('autocomplete displays correctly', () => {
      cy.visit ('/');
      cy.get('[data-cy=autocomplete]');
    });
  });