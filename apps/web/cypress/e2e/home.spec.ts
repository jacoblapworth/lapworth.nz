describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  it('should contain introduction', () => {
    cy.contains('Jacob tōku ingoa')
    cy.contains('51.548161º, -0.075587º')
  })
})

describe('Darkmode', () => {
  before(() => {
    cy.visit('/')
  })

  it('should toggle dark mode', () => {
    cy.get('html').should('have.class', 'light')
    cy.get('body').should('have.css', 'background-color', 'rgb(246, 246, 247)')
    cy.findByTestId('theme-toggle').wait(100).click()
    cy.get('html').should('have.class', 'dark')
    cy.get('body').should('have.css', 'background-color', 'rgb(11, 12, 13)')
  })
})
