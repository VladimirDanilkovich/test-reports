var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
describe.only('#flattenArray()', function() {
    
   it('Test_1', async function() {
    await driver.get("https://sciadev-scia.cs31.force.com/feedbackform");
     await driver.findElement(webdriver.By.xpath("//div/input")).sendKeys("Selenium");
     await driver.findElement(webdriver.By.xpath("//div[2]/form-group/div/div/div/input")).sendKeys("Test");
    await driver.findElement(webdriver.By.xpath("//select")).click();
    {
      const dropdown = await driver.findElement(webdriver.By.id("Preferred response method"));
       dropdown.findElement(webdriver.By.css("*[value='Phone']")).click();
    }
    await driver.findElement(webdriver.By.xpath("//group-input/input")).sendKeys("1234566755");
    await driver.findElement(webdriver.By.xpath("//div[5]/div/form-group/div/div/div/select")).click();
    {
      const dropdown = await driver.findElement(webdriver.By.xpath("//div[5]/div/form-group/div/div/div/select"));
       dropdown.findElement(webdriver.By.css("*:nth-child(2)")).click();
    }
     await driver.findElement(webdriver.By.xpath("//div[2]/form-group/div/div/div/select")).click();
    {
      const dropdown = await driver.findElement(webdriver.By.id("What does the feedback relate to? *"));
       dropdown.findElement(webdriver.By.css("*[value='Accommodation']")).click();
    }
    await driver.findElement(webdriver.By.xpath("//textarea")).click();
    await driver.findElement(webdriver.By.xpath("//textarea")).sendKeys("Test");
    await driver.findElement(webdriver.By.css(".donate-now")).click();
    await driver.sleep(undefined);
   
  });
     
})
