describe('LetCode - WebTable', () => {
  it('menampilkan total harga shopping list yang benar', () => {
    cy.visit('https://letcode.in/table');
    cy.contains('h1', 'Table').should('be.visible');
    cy.contains('858').should('be.visible');
  });
});
