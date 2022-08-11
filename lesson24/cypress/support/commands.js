// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (url) => {
//     cy.visit(url)
// })
const { ExampleFour } = require('../pageObjects/example4page')
const exampleFour = new ExampleFour()



Cypress.Commands.add('getItemByValue', (value) => {
    cy.get('[data-cy="box-3-dropdown"]  option')
    cy.get('select').select(value)
    cy.get('[data-cy="box-3-selected-name"]')
            .invoke('text')    
     
})

Cypress.Commands.add('mouseOverTheItemAndCheckText', (number, text) => {
    exampleFour.mouseOverItemByNumber(number)
        .trigger('mouseover');

    exampleFour.forthBlockSelectedItem()
        .invoke('text')
        .should('equal', text)    
     
})