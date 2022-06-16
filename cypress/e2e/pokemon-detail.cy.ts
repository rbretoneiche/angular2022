import {login} from "../helpers/tools.helper";

describe('Test pokemon detail app page', () => {
  it('Visits the initial project page', () => {
    login()
      .then(() => {
        cy.wait(3000)
        cy.visit('/')
        cy.get('[data-cy=pokemon-list]')
          .should('exist')
          .find('app-card')
          .should('have.length', 21)
          .each((element) => {
            // loop each card to check detail content
          })
        cy.get('[data-cy=logout-btn]')
          .should('exist')
          .click().then(() =>
          cy.url().should('include', '/login'))
      })
  })
})
