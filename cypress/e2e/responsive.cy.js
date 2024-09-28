describe('Teste de Responsividade - Cypress', () => {
  it('Verifica layout responsivo', () => {
    // Tamanho de tela para desktop
    cy.viewport(1920, 1080); 
    cy.visit('/');
    cy.get('#menu').should('be.visible');
    cy.get('#hamburger-icon').should('not.be.visible');

    // Tamanho de tela para mobile
    cy.viewport('iphone-x');  
    cy.get('#menu').should('not.be.visible');
    cy.get('#hamburger-icon').should('be.visible').click();
    cy.get('#menu').should('be.visible');
    
    cy.log('Teste passou: Layout responsivo verificado com sucesso.');
  });
});
