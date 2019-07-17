var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
describe('test()', function() {
 it('work plis', async function() {
      await driver.get("https://sciadev-scia.cs31.force.com/feedbackform")
    }) 
})
