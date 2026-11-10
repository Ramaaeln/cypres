describe('LetCode - AUI Drop', () => {
  it('menampilkan source dan target drop', () => {
    cy.visit('https://letcode.in/droppable');
    cy.contains('h1', 'Drop').should('be.visible');
    cy.contains('Drag me to my target').should('be.visible');
    cy.contains('Drop here').should('be.visible');
  });
});
