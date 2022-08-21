
module.exports = class Page {
    
    async open (url) {
        return browser.url(url)
    };
    async clickElement(selector) {
        await $(selector).waitForClickable();
        await $(selector).click();
    };
    async getElementText(selector) {
        await $(selector).waitForDisplayed();
        return $(selector).getText();
    };
    async inputText(selector, text) {
        await $(selector).waitForClickable();
        await $(selector).setValue(text);
    };

}

