describe('Accessibility', () => {
  before(() => {
    cy.visit('/')
  })

  it('should skip to main content', () => {
    cy.contains('Skip to main content').focus()
    cy.focused().should('be.visible').click()
    cy.focused().should('have.id', 'main')
    cy.findByTestId('main').should('be.visible')
  })
})
