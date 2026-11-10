describe('LetCode - Click Actions', () => {
  it('memastikan tombol Disabled tidak bisa diklik', () => {
    cy.visit('https://letcode.in/button');
    cy.contains('button', 'Disabled').should('be.disabled');
  });
});
