describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  it('should contain introduction', () => {
    cy.contains('Jacob tōku ingoa')
    cy.contains('-36.862600º, 174.741270º')
  })
})

describe('Darkmode', () => {
  before(() => {
    cy.visit('/')
  })

  it('should toggle dark mode', () => {
    cy.get('html').should('have.class', 'light')
    cy.get('body').should('have.css', 'background-color', 'rgb(246, 246, 247)')
    cy.findByTestId('theme-toggle').click()
    cy.get('html').should('have.class', 'dark')
    cy.get('body').should('have.css', 'background-color', 'rgb(11, 12, 13)')
  })
})
