describe('Add User Story', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.primary-button').click()
    cy.get('input[placeholder="Title"]').type('Dear Madam Herta')
    cy.get('textarea[placeholder="Description"]').type('Madam Herta is a peerless gem. Madam Herta is an unrivaled genius. Madam Herta is an inimitable beauty.')
    cy.get('input[placeholder="Title"]').should('have.value', 'Dear Madam Herta')
    cy.get('textarea[placeholder="Description"]').should('have.value', 'Madam Herta is a peerless gem. Madam Herta is an unrivaled genius. Madam Herta is an inimitable beauty.')
    cy.get('.primary-button').click()
    cy.wait(500)
    cy.get('.note').first().within(() => {
      cy.get('.note-header h3').should('have.text', 'Dear Madam Herta')
      cy.get('p').should('have.text', 'Madam Herta is a peerless gem. Madam Herta is an unrivaled genius. Madam Herta is an inimitable beauty.')
    })
  })
})