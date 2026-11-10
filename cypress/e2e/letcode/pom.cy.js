describe('LetCode - Page Object Model', () => {
  it('membuka sandbox toko Page Object Model', () => {
    cy.visit('https://letcode.in/test');
    cy.contains('Page Object Model').click();
    cy.location('pathname').should('not.match', /\/test\/?$/);
    cy.get('h1').should('be.visible');
  });
});
