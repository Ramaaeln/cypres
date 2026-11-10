describe('LetCode - Drop-Down', () => {
  it('memilih Apple dari dropdown pertama', () => {
    cy.visit('https://letcode.in/dropdowns');

    cy.get('select')
      .first()
      .select('Apple')
      .find('option:selected')
      .should('have.text', 'Apple');
  });
});
