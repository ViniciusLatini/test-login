const { test, expect } = require('@playwright/test');

test.describe('Login functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Visita a página de login
    await page.goto('http://localhost:3000'); // Certifique-se de que a aplicação está rodando
  });

  test('displays error with incorrect credentials', async ({ page }) => {
    // Preenche o formulário com credenciais incorretas
    await page.fill('input[name="email"]', 'wrong@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Verifica o alerta de erro
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toContain('Invalid email or password');
      await dialog.dismiss(); // Fecha o alerta
    });
  });

  test('logs in successfully with correct credentials', async ({ page }) => {
    // Preenche o formulário com credenciais corretas
    await page.fill('input[name="email"]', 'admin@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    // Verifica o alerta de sucesso
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toContain('Login successful!');
      await dialog.dismiss(); // Fecha o alerta
    });
  });
});
