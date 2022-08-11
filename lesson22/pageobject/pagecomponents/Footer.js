const {BasePage} = require('../BasePage')

class Footer extends BasePage {
    constructor(page){
        super(page);
        this.gitHubLink = '.footer__link-item[href="https://github.com/microsoft/playwright"]';

    };
    async clickFooterLink(selector){
        await this.page.click(selector);
             
    };
    
}

module.exports = {Footer};