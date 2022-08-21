const Page = require('./page');

class Personal extends Page {
    
    get purchases () {
        return $('.uc-purchase');
    };
    
}

module.exports = new Personal();
