describe('Edit User Story', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.note').first().within(() => {
      cy.get('.note-header .utils img[src="/src/assets/icons/delete.png"]').click()
    })
    cy.get('.primary-button').click()
    cy.get('.note').should('not.exist')
  })
})