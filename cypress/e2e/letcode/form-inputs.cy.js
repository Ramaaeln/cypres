describe('LetCode - Form Inputs', () => {
  it('menampilkan field dasar dan opsi gender', () => {
    cy.visit('https://letcode.in/forms');
    cy.contains('h1', 'Form').should('be.visible');
    cy.contains('First Name').should('be.visible');
    cy.contains('Last Name').should('be.visible');
    cy.contains('Email').should('be.visible');
    cy.contains('I agree to the terms and conditions').should('be.visible');
  });
});
