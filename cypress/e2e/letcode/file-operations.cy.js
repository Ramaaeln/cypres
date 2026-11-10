describe('LetCode - File Operations', () => {
  it('menampilkan upload dan opsi download', () => {
    cy.visit('https://letcode.in/file');
    cy.contains('h1', 'Upload and Download').should('be.visible');
    cy.get('input[type="file"]').should('exist');
    cy.contains('Download Excel').should('be.visible');
    cy.contains('Download Pdf').should('be.visible');
    cy.contains('Download Text').should('be.visible');
  });
});
