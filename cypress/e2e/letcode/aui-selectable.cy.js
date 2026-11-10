describe('LetCode - AUI Selectable', () => {
  it('menampilkan item Cypress di daftar selectable', () => {
    cy.visit('https://letcode.in/selectable');
    cy.contains('h1', 'Selectable').should('be.visible');
    cy.contains('Cypress').should('be.visible');
  });
});
