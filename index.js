    const { Builder, By, Key, until } = require('selenium-webdriver')
    require('selenium-webdriver/chrome')
    require('chromedriver')
    global.driver = {}
    const assert = require('assert')

    // setup
    


  var driver
  var vars



it('Test_1', async function() {
    driver = await new Builder().usingServer('http://localhost:4444/wd/hub').forBrowser('chrome').build()
    await driver.get("https://sciadev-scia.cs31.force.com/feedbackform")
    await driver.findElement(By.xpath("//div/input")).sendKeys("Selenium")
    await driver.findElement(By.xpath("//div[2]/form-group/div/div/div/input")).sendKeys("Test")
    await driver.findElement(By.xpath("//select")).click()
    {
      const dropdown = await driver.findElement(By.id("Preferred response method"))
      await dropdown.findElement(By.css("*[value='Phone']")).click()
    }
    await driver.findElement(By.xpath("//group-input/input")).sendKeys("1234566755")
    await driver.findElement(By.xpath("//div[5]/div/form-group/div/div/div/select")).click()
    {
      const dropdown = await driver.findElement(By.xpath("//div[5]/div/form-group/div/div/div/select"))
      await dropdown.findElement(By.css("*:nth-child(2)")).click()
    }
    await driver.findElement(By.xpath("//div[2]/form-group/div/div/div/select")).click()
    {
      const dropdown = await driver.findElement(By.id("What does the feedback relate to? *"))
      await dropdown.findElement(By.css("*[value='Accommodation']")).click()
    }
    await driver.findElement(By.xpath("//textarea")).click()
    await driver.findElement(By.xpath("//textarea")).sendKeys("Test")
    await driver.findElement(By.css(".donate-now")).click()
    await driver.sleep(undefined)
    {
      const elements = await driver.findElements(By.css(".toast-error"))
      assert(!elements.length)
    }
  })     
  






