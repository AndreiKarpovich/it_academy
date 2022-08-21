/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open (url) {
        return browser.url(url)
    }
    async clickElement(selector) {
        await $(selector).waitForClickable();
        await $(selector).click();
    }
    async getElementText(selector) {
        await $(selector).waitForDisplayed();
        return $(selector).getText();
    }
    async inputText(selector, text) {
        await $(selector).waitForClickable();
        await $(selector).setValue(text);
    }

}

