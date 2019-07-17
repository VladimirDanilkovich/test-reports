var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
describe.only('#flattenArray()', function() {
   it('Test_1', acync function() {
     driver.get("https://sciadev-scia.cs31.force.com/feedbackform");
     driver.findElement(webdriver.By.xpath("//div/input")).sendKeys("Selenium");
     driver.findElement(webdriver.By.css(".donate-now")).click();
     {
      const elements = driver.findElements(webdriver.By.css(".toast-error"))
      assert(!elements.length);
    }
  });
})
