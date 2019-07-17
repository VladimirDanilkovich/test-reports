const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Test_1', function() {

let driverPromise = new Builder()
    .forBrowser('chrome')
    .build();
driverPromise.then(driver => driver.get('http://www.google.com/ncr'))
    .then(() => driver.findElement(By.name('q')))
    .then(element => element.sendKeys('webdriver', Key.RETURN))
    .then(() => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(() => driver.quit())
})
