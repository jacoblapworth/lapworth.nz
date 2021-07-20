describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  it('should contain introduction', () => {
    cy.contains('Jacob Lapworth')
    cy.contains('Design Systems')
  })
})
