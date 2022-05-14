describe('Accessibility', () => {
  before(() => {
    cy.visit('/')
  })

  it('should skip to main content', () => {
    cy.contains('Skip to main content').focus()
    cy.focused().should('be.visible').should('have.attr', 'href', '/#main')
    cy.focused().click()
    cy.get('#main').should('be.visible')
  })
})
