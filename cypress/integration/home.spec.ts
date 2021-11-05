describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  it('should contain introduction', () => {
    cy.contains('Jacob tōku ingoa')
    cy.contains('-36.862600º, 174.741270º')
  })
})
