describe('LetCode - Toggle States', () => {
  it('menampilkan kontrol radio dan checkbox', () => {
    cy.visit('https://letcode.in/radio');
    cy.get('input[type="radio"], input[type="checkbox"]')
      .its('length')
      .should('be.greaterThan', 0);
  });
});
