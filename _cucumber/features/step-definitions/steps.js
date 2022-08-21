const { Given, When, Then } = require('@wdio/cucumber-framework');




Given('I navigate to {string} page', async function(url) {
    await browser.url(url)
    
});

When('I click on {string} element', async (selector) => {
    await $(selector).waitForClickable();
    await $(selector).click();
    
});

When('I input text {string} to {string} field', async (text, selector) => {
    await $(selector).waitForClickable();
    await $(selector).setValue(text);
    
});
When('I press Enter', async () => {
    await browser.keys("Enter");
   
});


Then('I expect that {string} component to equal {string}', async(selector, expectedText) => {
    await $(selector).waitForDisplayed();
    const text = await $(selector).getText()
    expect(text).toBe(expectedText)
})
Then('I expect that title to equal {string}', async(expectedText) => {
    
    const title = await browser.getTitle()
    expect(title).toBe(expectedText)
})
Then('I expect that {string} component contain {string}', async(selector, expectedText) => {
        
    const text = await $(selector).getText()
    await expect(text.toLowerCase()).toContain(expectedText.toLowerCase())
})