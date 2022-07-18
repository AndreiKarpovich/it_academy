const {Builder, By, Key} = require('selenium-webdriver');

describe('testsChromeWebDriver', function(){
    let driver;
    before(async() => {
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();        
    })

    after(async () => {
        await driver.quit();
    })
    it('getTitle', async() =>{
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(2000);
        await driver.getTitle().then(function(title) {
            if(title === 'ChromeDriver - WebDriver for Chrome'){
                console.log("Verification Successful");
                }
            else{
                console.log("Verification Failed");
            }
        });
         
    });

    it('ChromeExtensions', async() =>{
        const getChromeExtensions = await driver.findElement(By.xpath('//*[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//*[@href="/extensions"]'));
        await driver.actions().click(getChromeExtensions).perform();
        await driver.sleep(2000);
        await driver.getTitle().then(function(title) {
            if(title === 'ChromeDriver - WebDriver for Chrome - Chrome Extensions'){
                console.log("Verification Successful");
                }
            else{
                console.log("Verification Failed");
            }
        });        
        const pageName = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]//*[@class=" Rn3Z1b"]'));
        await driver.executeScript('arguments[0].style.backgroundColor="red"', pageName);
        await driver.sleep(2000);
            
    });
       
    it('SearchField', async() =>{
        const search = await driver.findElement(By.css('.U26fgb.mUbCce.fKz7Od.iWs3gf.Wdnjke.M9Bg4d'));
        await driver.actions().click(search).perform();
        await driver.sleep(2000);
        const searchField = await driver.findElement(By.xpath('//*[@class="whsOnd zHQkBf"]'));
        await searchField.sendKeys('driver');
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.sleep(2000);
        const firstLink = await driver.findElement(By.xpath('//*[@class="vH0yjd"]//a[contains(@href,"driver")]'));
        const linkText = await driver.findElement(By.xpath('//*[@class="vH0yjd"]//*[@class="yDWqEe"]//*[text()="driver"]'));
        let text = await new String();
        text = driver.executeScript(firstLink).toString();
        console.log(text.includes('driver'));
        text = driver.executeScript(linkText).toString();
        console.log(text.includes('driver'));
    });
        
})