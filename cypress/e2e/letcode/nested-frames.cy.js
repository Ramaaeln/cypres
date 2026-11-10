describe('LetCode - Nested Frames', () => {
  it('memuat latihan frame dan iframe', () => {
    cy.visit('https://letcode.in/frame');
    cy.contains('h1', 'Frame').should('be.visible');
    cy.get('iframe').its('length').should('be.greaterThan', 0);
  });
});
