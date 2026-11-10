describe('LetCode Practice Workspace', () => {
  beforeEach(() => {
    cy.visit('https://letcode.in/test');
  });

  it('menampilkan semua 21 lab latihan', () => {
    cy.contains('h1', 'Practice Workspace').should('be.visible');

    [
      'Page Object Model',
      'Edit Fields',
      'Click Actions',
      'Drop-Down',
      'Dialog Box',
      'Nested Frames',
      'Toggle States',
      'Tabs Handler',
      'Find Elements',
      'AUI - Drag',
      'AUI - Drop',
      'AUI - Sort',
      'AUI - Selectable',
      'AUI - Slider',
      'Timeouts',
      'WebTable',
      'Advanced Table',
      'Date Pickers',
      'Form Inputs',
      'File Operations',
      'DOM Elements',
    ].forEach((lab) => cy.contains(lab).should('be.visible'));
  });

  it('memfilter lab menggunakan kolom pencarian', () => {
    cy.get('input[placeholder*="Search practice labs"]')
      .should('be.visible')
      .type('Click Actions');

    cy.contains('Click Actions').should('be.visible');
    cy.contains('Edit Fields').should('not.exist');
  });
});
