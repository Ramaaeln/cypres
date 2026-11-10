describe('LetCode - Timeouts', () => {
  it('memunculkan alert setelah tombol ditekan', () => {
    cy.visit('https://letcode.in/waits');
    cy.on('window:alert', cy.stub().as('waitAlert'));

    cy.contains('button', 'Simple Alert').click();
    cy.get('@waitAlert').should('have.been.calledOnce');
  });
});
