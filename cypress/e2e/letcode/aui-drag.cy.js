describe('LetCode - AUI Drag', () => {
  it('menampilkan target latihan drag dalam container', () => {
    cy.visit('https://letcode.in/draggable');
    cy.contains('h1', 'Drag').should('be.visible');
    cy.contains('drag me around').should('be.visible');
    cy.contains('I can only be dragged within the dotted container').should('be.visible');
  });
});
