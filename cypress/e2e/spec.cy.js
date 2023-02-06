describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://nuxtjs.traefik.me', {failOnStatusCode: false});
    cy.screenshot('first-page');
  })
})