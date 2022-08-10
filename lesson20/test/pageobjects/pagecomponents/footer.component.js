const {BasePage} = require ('../base.page.js');

class Footer extends BasePage{
    constructor(){
        super();
        this.helpLink = '.footer__link-item[href="/community/support"]'
    };
    async clickHelpLink(){
        await $(this.helpLink).scrollIntoView();
        await $(this.helpLink).waitForClickable();
        await $(this.helpLink).click();
    };
}

module.exports = {Footer}