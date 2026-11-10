describe('LetCode - Tabs Handler', () => {
  it('menampilkan kontrol untuk membuka beberapa window', () => {
    cy.visit('https://letcode.in/window');
    cy.contains('button', 'Multiple windows').should('be.visible').and('be.enabled');
  });
});
