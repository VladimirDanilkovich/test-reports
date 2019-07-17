var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
describe.only('#flattenArray()', function() {
   it('Test_1',  function() {
     driver.get("https://sciadev-scia.cs31.force.com/feedbackform");
     driver.setRect(1440, 802);  
  });
})
