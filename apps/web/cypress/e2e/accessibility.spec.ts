describe('Accessibility', () => {
  it('should skip to main content', () => {
    cy.visit('/')
    cy.press(Cypress.Keyboard.Keys.TAB)
    cy.contains('Skip to main content')
      .should('be.visible')
      .should('have.focus')
    console.log('element with focus:', cy.focused())
    cy.press(Cypress.Keyboard.Keys.ENTER)
    cy.findByRole('main').should('be.visible').should('be.focused')
  })
})
