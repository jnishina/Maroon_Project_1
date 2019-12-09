describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('autocomplete displays correctly', () => {
      cy.visit ('/');
      cy.get('[data-cy=autocomplete]');
    });

    it('page errors when no address is given', () => {
      cy.visit ('/');
      cy.get('[data-cy=submit]').click();
      cy.get('[data-cy=wrongpage]').should('contain' ,'Please enter valid address');
    });
  });