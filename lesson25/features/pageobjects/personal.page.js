const Page = require('../pageobjects/page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Personal extends Page {
    
    get purchases () {
        return $('.uc-purchase');
    }
    
}

module.exports = new Personal();
