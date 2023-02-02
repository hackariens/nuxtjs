describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://nuxtjs.traefik.me');
    cy.screenshot('first-page');
  })
})