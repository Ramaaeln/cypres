describe('LetCode - Advanced Table', () => {
  it('menampilkan data universitas dan jumlah entry', () => {
    cy.visit('https://letcode.in/advancedtable');
    cy.contains('University of Aberdeen').should('be.visible');
    cy.contains('Showing 1 to 5 of 47 entries').should('be.visible');
  });
});
