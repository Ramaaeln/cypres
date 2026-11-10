describe('LetCode - AUI Slider', () => {
  it('menampilkan slider dengan rentang nilai', () => {
    cy.visit('https://letcode.in/slider');
    cy.contains('h1', 'Slider').should('be.visible');
    cy.get('input[type="range"]').should('be.visible');
  });
});
