const { chromium } = require("playwright");
const chai = require('chai')
const expect = chai.expect
const { MainPage } = require('../pageobject/MainPage');
const { BaseElements } = require('../helpers/baseElements');
const { Navbar } = require('../pageobject/pagecomponents/Navbar')
const { Footer } = require('../pageobject/pagecomponents/Footer');



describe("Automation tests with playwright", () => {
  let browser, page, main, context, base, navbar, footer;

  before(async () => {
    browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    context = await browser.newContext();
    page = await context.newPage('https://playwright.dev');
    main = new MainPage(page);
    base = new BaseElements(page);
    navbar = new Navbar(page);
    footer = new Footer(page);
  });

  after(async () => {
    await page.close();
    await browser.close();
  });

 

  it("Checks the title of the page", async () => {
    await main.navigate('https://playwright.dev/');
    const title = await base.getTitle();
    console.log(title); 
    expect(title).to.equal('Fast and reliable end-to-end testing for modern web apps | Playwright')
  });
  it('Switch to dark mode, check that  dark mode is enabled ', async () => {
    await navbar.switchMode();
    const theme = await base.getAttribute(main.document, 'data-theme');
    console.log(theme);
    expect(theme).to.equal('dark')
  });
  it('Сheck color of highlighting Playwright', async () =>{
    const locator = await base.findLocator(main.highlightPlayright);
    const color = await locator.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue("color")
    })
    console.log(color)
    expect(color).to.equal('rgb(69, 186, 75)');  
  });
  it('Сheck search for text "Playwright", check search results for contain', async () =>{
    await navbar.search('Playwright');
    const searchText = await base.getText(navbar.searchResult);
    console.log(searchText);
    expect(searchText).to.include('Playwright');  
  });
  it('Сheck HitHub link', async function() {
      
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click(footer.gitHubLink) // Opens a new tab     
    ])
    await newPage.waitForLoadState();
    const url = await newPage.url();
    console.log(url);
    expect(url).to.equal('https://github.com/microsoft/playwright')
    
  });    
});
  


