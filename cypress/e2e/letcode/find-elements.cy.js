describe('LetCode - Find Elements', () => {
  it('menerima username GitHub untuk pencarian', () => {
    cy.visit('https://letcode.in/elements');

    cy.get('input[placeholder*="git user"]')
      .should('be.visible')
      .type('octocat')
      .should('have.value', 'octocat');
  });
});
