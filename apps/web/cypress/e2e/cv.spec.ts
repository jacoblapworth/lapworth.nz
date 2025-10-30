describe('CV', () => {
  before(() => {
    cy.visit('/')
  })

  it('should request cv', () => {
    cy.get('nav').findByText('CV').realClick()
    cy.findByLabelText('Email')
      .realClick()
      .realType('delivered@resend.dev')
      .realPress('{enter}')
    cy.get('main')
      .findByText(/Please check your email./)
      .should('be.visible')
  })
})
