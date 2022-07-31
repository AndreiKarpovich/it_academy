const { MainPage } = require('../pageobjects/main.page');
const { Navbar } = require('../pageobjects/pagecomponents/navbar.component');
const { BasePage } = require('../pageobjects/base.page');
const { Footer } = require('../pageobjects/pagecomponents/footer.component');
const { BaseElement } = require('../helpers/baseElements')

const basePage = new BasePage();
const mainPage = new MainPage();
const navbar = new Navbar();
const footer = new Footer();
const actions = new BaseElement();

describe('Functionality check on https://webdriver.io/', () => {
    it('Navigate and go to GettingStartedPage, page title should be equivalent to Getting Started | WebdriverIO', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.clickGettingStartedLink();
        const gettingStartedTitle = await actions.getTitle();
        expect(gettingStartedTitle).toEqual('Getting Started | WebdriverIO');    
    });
    it('Switch to dark mode, check that  dark mode is enabled ', async () => {
        await navbar.switchMode();
        const theme = await actions.getAttribute(mainPage.docs, 'data-theme');
        expect(theme).toEqual('dark'); 
    });
    it('Сheck search for word "mocha", check search results for contain', async () =>{
        await navbar.search('Mocha');
        await browser.pause(3000)
        const searchText = await actions.getText(navbar.searchResult);
        expect(searchText).toContain('mocha');  
    });
    it('Check recent search', async () =>{
        let headerText = await actions.getText(basePage.pageHeader);
        await navbar.findSerchListElement();
        let serchListElementText = await actions.getText(navbar.searchList);
        await actions.pressEsc();
        await browser.pause(3000)
        expect(headerText).toEqual(serchListElementText);  
    });
    it('Change header text color on the "Help" link', async () =>{
        await footer.clickHelpLink();
        await browser.pause(2000);
        let color = await actions.changeHeaderTextColor('red');
        await browser.pause(2000);
        expect(color).toEqual('red'); 
    });

});