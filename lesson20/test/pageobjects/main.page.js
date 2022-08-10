const {BasePage} = require('../pageobjects/base.page');

class MainPage extends BasePage{
    constructor() {
        super()
        this.gettingStartedLink = '.button[href = "/docs/gettingstarted"]';
        this.docs = '.docs-version-current';
    };
    async clickGettingStartedLink(){
        await $(this.gettingStartedLink).waitForClickable();
        await $(this.gettingStartedLink).click();
    };
    
}

module.exports = {MainPage}; 