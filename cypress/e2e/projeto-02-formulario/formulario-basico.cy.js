describe('projeto 02 - testes básicos de formulário', () => {
  it('deve digitar um texto no campo de e-mail', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('felipe@email.com')
      .should('have.value', 'felipe@email.com')
  })

  it('deve digitar um texto no campo de foco', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-focus')
      .type('Felipe Souza')
      .should('have.value', 'Felipe Souza')
  })

  it('deve exibir o campo de e-mail na tela', () => {
  cy.visit('https://example.cypress.io/commands/actions')

  cy.get('.action-email').should('be.visible')
  })

  it('deve exibir o botão na tela', () => {
  cy.visit('https://example.cypress.io/commands/actions')

  cy.get('.action-btn').should('be.visible')
  })

  it('deve clicar no botão de ação', () => {
  cy.visit('https://example.cypress.io/commands/actions')

  cy.get('.action-btn').click()
  })
})
