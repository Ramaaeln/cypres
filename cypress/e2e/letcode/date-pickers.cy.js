describe('LetCode - Date Pickers', () => {
  it('menampilkan kontrol untuk memilih tanggal lahir', () => {
    cy.visit('https://letcode.in/calendar');
    cy.contains('h1', 'Date Picker').should('be.visible');
    cy.contains('Select your Birthday').should('be.visible');
  });
});
