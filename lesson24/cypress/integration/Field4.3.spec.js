//добавления команд в сайпресс.

describe(`exapmle 4, field 3 test`, () => {
    before(() => {
        // alert(Cypress.env('MY_ENV_VARIABLE'));
        cy.visit('http://localhost:3000/example-4');
    });

    it(`Get second item`, () => {
        cy.getItemByValue('Option Two')
            .should('equal', 'Option Two');
    });
    it(`Get first item`, () => {
        cy.getItemByValue('Option One')
            .should('equal', 'Option One');
    });
})