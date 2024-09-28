describe('Login functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // Certifique-se de que a aplicação está rodando
  });

  it('displays error with incorrect credentials', () => {
    cy.get('input[name=email]').type('wrong@example.com');
    cy.get('input[name=password]').type('wrongpassword');
    cy.get('button[type=submit]').click();

    // Verifica o alerta de erro
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Invalid email or password');
    });
  });

  it('logs in successfully with correct credentials', () => {
    cy.get('input[name=email]').type('admin@example.com');
    cy.get('input[name=password]').type('password123');
    cy.get('button[type=submit]').click();

    // Verifica o alerta de sucesso
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Login successful!');
    });
  });
});
