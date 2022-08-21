const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Header extends Page {
    /**
     * define selectors using getter methods
     */
    get headerAuthButton () {
        return $(".top-panel__userbar__auth");
    }
    get emailLink () {
        return $('#loginFormLoginEmailLink')
    }
    get userName () {
        return $('.top-panel__userbar__user__name')
    }
    get searchField () {
        return $('#top-s[name]')
    }
}

module.exports = new Header();