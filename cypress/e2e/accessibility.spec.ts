describe('Accessibility', () => {
  it('should skip to main content', () => {
    cy.visit('/')
    cy.realType('Tab')
    cy.contains('Skip to main content').focus()
    cy.realPress('Enter')
    cy.findByTestId('main').should('be.visible')
    cy.url().should('include', '#main')
  })
})
