//Page Object + добавленіе команд
describe(`exapmle 4, field 4 test`, () => {
    before(() => {
        
        cy.visit('http://localhost:3000/example-4');
    });

    it(`Trigger first item`, () => {
        cy.mouseOverTheItemAndCheckText(0, 'Option One')  
    });
    it(`Trigger second item`, () => {
        cy.mouseOverTheItemAndCheckText(1, 'Option Two')  
    });
    it(`Trigger third item`, () => {
        cy.mouseOverTheItemAndCheckText(2, 'Option Three')  
    });
})