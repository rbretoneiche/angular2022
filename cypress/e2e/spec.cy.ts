describe('Test pokemon app homepage', () => {
  it('Visits the initial project page', () => {
    cy.visit('/login')
    cy.get('[data-cy=login-email-input]').type('sacha1@pokemon-form.fr')
    cy.get('[data-cy=login-password-input]').type('123456789')
    cy.get('[data-cy=login-submit-btn]').click().then(() => {
      cy.wait(3000)
      cy.visit('/')
      cy.get('[data-cy=pokemon-list]')
        .should('exist')
        .find('app-card')
        .should('have.length', 21)
        .each((element) => {
          cy.wrap(element)
            .contains('Pokemon type')
          cy.wrap(element)
            .contains('Weight')
          cy.wrap(element)
            .contains('Height')
        })
      cy.get('[data-cy=logout-btn]')
        .should('exist')
        .click().then(() =>
        cy.url().should('include', '/login'))
    })
  })
})
