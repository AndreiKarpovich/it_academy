class BasePage{
    constructor(){ 
        this.pageHeader = 'header > h1';     
    };
    async navigate(url) {
        await browser.url(url);
    };
    
}

module.exports = {BasePage}; 

