describe('projeto 01 - testes básicos da aplicação todo', () => {
  it('deve adicionar uma nova tarefa', () => {
    cy.visit('https://example.cypress.io/todo')
    cy.get('[data-test=new-todo]').type('Estudar Cypress{enter}')
    cy.get('.todo-list li').should('have.length', 3)
  })

  it('deve filtrar apenas tarefas ativas', () => {
    cy.visit('https://example.cypress.io/todo')

    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    cy.contains('Active').click()

    cy.get('.todo-list li').should('have.length', 1)
    cy.contains('Pay electric bill').should('not.exist')
  })

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
