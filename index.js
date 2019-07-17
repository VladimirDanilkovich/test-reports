var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
describe.only('#flattenArray()', function() {
   it('Test_1',  function() {
     driver.get("https://sciadev-scia.cs31.force.com/feedbackform");
     driver.findElement(webdriver.By.xpath("//div/input")).sendKeys("Selenium");
     driver.findElement(webdriver.By.xpath("//div[2]/form-group/div/div/div/input")).sendKeys("Test");
    driver.findElement(webdriver.By.xpath("//select")).click();
    {
      const dropdown = driver.findElement(webdriver.By.id("Preferred response method"));
       dropdown.findElement(webdriver.By.css("*[value='Phone']")).click();
    }
    driver.findElement(webdriver.By.xpath("//group-input/input")).sendKeys("1234566755");
    driver.findElement(webdriver.By.xpath("//div[5]/div/form-group/div/div/div/select")).click();
    {
      const dropdown = driver.findElement(webdriver.By.xpath("//div[5]/div/form-group/div/div/div/select"));
       dropdown.findElement(webdriver.By.css("*:nth-child(2)")).click();
    }
     driver.findElement(webdriver.By.xpath("//div[2]/form-group/div/div/div/select")).click();
    {
      const dropdown =  driver.findElement(webdriver.By.id("What does the feedback relate to? *"));
       dropdown.findElement(webdriver.By.css("*[value='Accommodation']")).click();
    }
    driver.findElement(webdriver.By.xpath("//textarea")).click();
    driver.findElement(webdriver.By.xpath("//textarea")).sendKeys("Test");
    driver.findElement(webdriver.By.css(".donate-now")).click();
    driver.sleep(undefined);
   
  });
})
