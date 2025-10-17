describe('Work', () => {
  before(() => {
    cy.visit('/')
  })

  it('should show work', () => {
    cy.get('nav').findByText('Work').click()
    cy.url().should('include', '/work')
    cy.findByText('Advanced tables for Xero').click()
    cy.get('#editing').click()
  })
})
