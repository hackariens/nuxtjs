describe('template spec', () => {
  it('passes', () => {
    cy.request('https://nuxtjs.traefik.me', {failOnStatusCode: false});
    cy.screenshot('first-page');
  })
})