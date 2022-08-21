const Page = require('../page');


class Header extends Page {
    
    get headerAuthButton () {
        return $(".top-panel__userbar__auth");
    };
    get emailLink () {
        return $('#loginFormLoginEmailLink')
    };
    get userName () {
        return $('.top-panel__userbar__user__name')
    };
    get searchField () {
        return $('#top-s[name]')
    };
}

module.exports = new Header();