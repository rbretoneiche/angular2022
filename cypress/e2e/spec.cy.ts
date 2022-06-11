describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('[data-cy=pokemon-list]')
      .should('exist')
      .find('app-card')
      .should('have.length', 18)
      .each((element) => {
        cy.wrap(element)
          .contains('Pokemon type')
        cy.wrap(element)
          .contains('Weight')
        cy.wrap(element)
          .contains('Height')
      })
  })
})
