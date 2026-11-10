describe('LetCode - Edit Fields', () => {
  it('mengisi field nama', () => {
    cy.visit('https://letcode.in/edit');

    cy.get('input[placeholder="Enter first & last name"]')
      .type('Rama Cypress')
      .should('have.value', 'Rama Cypress');
  });
});
