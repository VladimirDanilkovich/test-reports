// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
  
  it('Test_1', async function() {
       
       var driverPromise = new Builder()
     .forBrowser('chrome')
     .build();
    driverPromise.then(driver => driver.get('http://www.google.com/ncr'))
    .then(() => driver.findElement(By.name('q')))
    .then(element => element.sendKeys('webdriver', Key.RETURN))
    .then(() => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(() => driver.quit())
       
  })
