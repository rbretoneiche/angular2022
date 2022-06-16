export function login() {
  return cy.visit('/login')
    .get('[data-cy=login-email-input]')
    .should('exist')
    .type('sacha1@pokemon-form.fr')
    .get('[data-cy=login-password-input]').type('123456789')
    .get('[data-cy=login-submit-btn]').click()
}
