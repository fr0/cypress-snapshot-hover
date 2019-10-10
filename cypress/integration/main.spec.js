describe('the page', function() {
  it('can show an error popup', function() {
    cy.visit('/');
    cy.get('button').click();
    cy.get('app-error-popup').should('exist');
    cy.get('#input1').type('foo');
    cy.get('#input2').type('bar');
    cy.get('pre').should('have.text', JSON.stringify({input1: 'foo', input2: 'bar'}, null, 2));
    cy.get('#input1').clear().type('baz');
    cy.get('#input2').clear().type('qux');
    cy.get('pre').should('have.text', JSON.stringify({input1: 'baz', input2: 'qux'}, null, 2));
  });
});
