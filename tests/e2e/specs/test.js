// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Suade Labs Challenge')
    cy.wait(3000)
    cy.visit('/bonus')
  })
})
