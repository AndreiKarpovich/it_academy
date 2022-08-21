//  Page Object

const { ExampleFour } = require('../pageObjects/example4page');
const exampleFour = new ExampleFour()

describe(`exapmle 4, field 2 test`, () => {
    before(() => {
        
        cy.visit('http://localhost:3000/example-4');
    });

    it(`check one checkboxe selected `, () => {
        
        exampleFour.checkCheckboxByNumberAndCheck(0)
        exampleFour.numberOfcheckedCheckboxes()
            .invoke('text')
            .should('equal', '1');
            
        
    });
    it(`check two checkboxes selected `, () => {
        
        exampleFour.checkCheckboxByNumberAndCheck(1)
        exampleFour.numberOfcheckedCheckboxes()
            .invoke('text')
            .should('equal', '2');
            
        
    });
    it(`check tree checkboxes selected `, () => {
        
        exampleFour.checkCheckboxByNumberAndCheck(2)
        exampleFour.numberOfcheckedCheckboxes()
            .invoke('text')
            .should('equal', '3');      
        
    })
    it(`uncheck one checkboxe selected `, () => {
        
        exampleFour.uncheckCheckboxByNumberAndCheck(2)
        exampleFour.numberOfcheckedCheckboxes()
            .invoke('text')
            .should('equal', '2');      
        
    })
    
})