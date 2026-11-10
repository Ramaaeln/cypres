describe('LetCode - Dialog Box', () => {
  it('memunculkan Simple Alert', () => {
    cy.visit('https://letcode.in/alert');
    cy.on('window:alert', cy.stub().as('simpleAlert'));

    cy.contains('button', 'Simple Alert').click();
    cy.get('@simpleAlert').should('have.been.calledOnce');
  });
});
