describe('Edit User Story', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.note').first().within(() => {
      cy.get('.note-header .utils img[src="/src/assets/icons/edit.png"]').click()
    })
    cy.get('input[placeholder="Title"]').clear().type('Dear Madam Herta from SW')
    cy.get('textarea[placeholder="Description"]').clear().type('Stop being narcissistic and stop sending messages to yourself.')
    cy.get('input[placeholder="Title"]').should('have.value', 'Dear Madam Herta from SW')
    cy.get('textarea[placeholder="Description"]').should('have.value', 'Stop being narcissistic and stop sending messages to yourself.')
    cy.get('.primary-button').click()
    cy.wait(500)
    cy.get('.note').first().within(() => {
      cy.get('.note-header h3').should('have.text', 'Dear Madam Herta from SW')
      cy.get('p').should('have.text', 'Stop being narcissistic and stop sending messages to yourself.')
    })
  })
})