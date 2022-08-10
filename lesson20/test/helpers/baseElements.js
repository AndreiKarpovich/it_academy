class BaseElement{
    async getTitle(){
        return browser.getTitle();
    };
    async getAttribute(selector, attributeName){
        return $(selector).getAttribute(attributeName)
    };
    async getText(selector){
        return $(selector).getText();
    };
    async changeHeaderTextColor(newColor){
        browser.execute((newColor) => {
            document.querySelector('header > h1').style.color = newColor;   //почему-то работает только когда передаю селектор просто строкой  
        }, newColor);
        return newColor        
    };          
    async pressEsc(){
        return browser.keys("\uE00C");
    }
}

module.exports = {BaseElement};