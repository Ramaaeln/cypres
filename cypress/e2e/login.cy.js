describe('Sauce Demo Login Tests', () => {
  // Test case for valid login
  it('Login dengan kredensial valid', () => {
    // Kunjungi halaman login Sauce Demo
    cy.visit('https://www.saucedemo.com/');

    // Masukkan username yang valid
    cy.get('#user-name').type('standard_user');

    // Masukkan password yang valid
    cy.get('#password').type('secret_sauce');

    // Klik tombol login
    cy.get('#login-button').click();

    // Pastikan URL berisi '/inventory.html' setelah login berhasil
    cy.url().should('include', '/inventory.html');

    // Verifikasi bahwa halaman inventaris muncul
    cy.get('.inventory_list').should('be.visible');
  });

  // Test case for invalid login - incorrect password
  it('Login dengan password salah', () => {
    cy.visit('https://www.saucedemo.com/');

    // Masukkan username yang valid
    cy.get('[data-test="username"]').type('standard_user');

    // Masukkan password yang salah
    cy.get('[data-test="password"]').type('wrong_password');

    // Klik tombol login
    cy.get('[data-test="login-button"]').click();

    // Verifikasi bahwa pesan error muncul dan berisi teks yang sesuai
    cy.get('[data-test="error"]').should(
      'contain',
      'Epic sadface: Username and password do not match'
    );
  });

  // Test warna tombol Login
  it('Menguji warna tombol login', () => {
    // Kunjungi halaman Sauce Demo
    cy.visit('https://www.saucedemo.com/');

    // Ambil elemen tombol login dan verifikasi warna latar belakang (background-color)
    cy.get('#login-button')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(61, 220, 145)'); // Nilai RGB untuk #3ddc91
  });
});
