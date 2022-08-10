const {BasePage} = require ('../base.page.js');

class Navbar extends BasePage{
    constructor(){
        super();
        this.toggleButton = '.toggle_S7eR.toggle_TdHA';
        this.searchField = '.searchBox_qEbK';
        this.searchInput = '.DocSearch-Input';
        this.searchResult = '.theme-doc-markdown.markdown';
        this.searchList = '#docsearch-item-0';

    };
    async switchMode(){
        await $(this.toggleButton).waitForClickable();
        await $(this.toggleButton).click();         
    };
    
    async search(searchText){
        await $(this.searchField).waitForClickable();
        await $(this.searchField).click();
        await $(this.searchInput).waitForDisplayed();
        await $(this.searchInput).addValue(searchText);
        await browser.pause(3000)
        await $(this.searchInput).waitForDisplayed();
        await browser.keys("Enter");       
    };
    async findSerchListElement(){
        await $(this.searchField).waitForClickable();
        await $(this.searchField).click();
        await browser.pause(1000);
        await $(this.searchList).waitForDisplayed();
        await browser.pause(1000);
        
    }    
}

module.exports = {Navbar}