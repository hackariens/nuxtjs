describe('template spec', () => {
  it('passes', () => {
    cy.request({
      url: 'https://nuxtjs.traefik.me',
      failOnStatusCode: false
    });
    cy.screenshot('first-page');
  })
})