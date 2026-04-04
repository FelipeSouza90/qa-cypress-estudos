describe('meu primeiro teste no Cypress', () => {
  it('deve filtrar apenas tarefas concluídas', () => {
    cy.visit('https://example.cypress.io/todo')

    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    cy.contains('Completed').click()

    cy.get('.todo-list li').should('have.length', 1)
    cy.contains('Walk the dog').should('not.exist')
  })
})

