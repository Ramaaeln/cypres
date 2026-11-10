describe('LetCode - AUI Sort', () => {
  it('menampilkan item yang dapat disortir', () => {
    cy.visit('https://letcode.in/sortable');
    cy.contains('h1', 'Sort').should('be.visible');
    cy.contains('Get to work').should('be.visible');
    cy.contains('Brush teeth').should('be.visible');
  });
});
