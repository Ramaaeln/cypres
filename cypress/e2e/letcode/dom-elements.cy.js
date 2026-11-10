describe('LetCode - DOM Elements', () => {
  it('memuat latihan elemen Shadow DOM', () => {
    cy.visit('https://letcode.in/shadow');
    cy.get('h1').should('be.visible');
    cy.get('body').should('be.visible');
  });
});
