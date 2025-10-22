describe('CV', () => {
  before(() => {
    cy.visit('/')
  })

  it('should request cv', () => {
    cy.get('nav').findByText('CV').click()
    cy.findByLabelText('Email').click().type('delivered@resend.dev')
    cy.realPress('Enter')
    cy.get('main').findByText('Please check your email.').should('be.visible')
  })
})
