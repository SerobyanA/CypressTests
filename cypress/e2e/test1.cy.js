describe('login', () => {
  it('verify login with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standart_user');
    cy.get('#password').type('standard_souce');
    cy.get('#login-button').click()
  })
  it.only('passes', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('header > a > img').should('be.exist')
  })
})