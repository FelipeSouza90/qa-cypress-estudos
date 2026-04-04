describe('meu primeiro teste no Cypress', () => {
  it('deve adicionar uma nova tarefa', () => {
    cy.visit('https://example.cypress.io/todo')
    cy.get('[data-test=new-todo]').type('Estudar Cypress{enter}')
    cy.get('.todo-list li').should('have.length', 3)
  })
})
