// просто тесты

describe(`exapmle 4, field 1 test`, () => {
    before(() => {
        // alert(Cypress.env('MY_ENV_VARIABLE'));
        cy.visit('http://localhost:3000/example-4');
    });

    it(`check highlight options one `, () => {
        cy.get('.box-1-list-item:nth-child(1)')
            .click()
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')
    });
    it(`check dblclick() on options two`, () => {
        cy.get('.box-1-list-item:nth-child(2)')
            .dblclick()
            .invoke('text')
            .should('equal', 'Option Two') 
            
    })
    it(`check highlight after dblclick `, () => {
        cy.get('.box-1-list-item:nth-child(2)')
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')
    });
    it(`check options tree highlighting after dblclick on options two`, () => {
        cy.get('.box-1-list-item:nth-child(3)')
            .should('not.have.css', 'background-color', 'rgb(221, 221, 221)')
    })
})