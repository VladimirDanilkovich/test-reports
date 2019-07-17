var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
describe('#promiseMd5()', function() {

  context('with string argument', function() {
    it('should compute MD5 hash', async function() {
    
      await driver.get("https://sciadev-scia.cs31.force.com/feedbackform")
    })
    
  })  
})
