class ExampleFour {
    constructor() {
               
        this.numberOfcheckedCheckboxes = () => cy.get(`[data-cy="box-2-selected-count"]`);
        this.returnCheckboxByNumber = (number) => cy.get(`[data-cy="box-2-checkboxes"] input`).eq(number);
        this.mouseOverItemByNumber = (number) => cy.get('[data-cy="box-4-items-list"] li').eq(number); 
        this.forthBlockSelectedItem = () => cy.get('[data-cy="box-4-selected-name"]');
    };

   
    checkCheckboxByNumberAndCheck(number) {
        this.returnCheckboxByNumber(number)
            .check();
            
    };
    uncheckCheckboxByNumberAndCheck(number) {
        this.returnCheckboxByNumber(number)
            .uncheck();      
    };
    mouseOverTheItem(number, text) {
        this.mouseOverItemByNumber(number)
            .trigger('mouseover');

        this.forthBlockSelectedItem()
            .invoke('text')
            .should('equal', text)
    }
    
}

module.exports = {ExampleFour};