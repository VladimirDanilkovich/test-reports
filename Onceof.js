// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Once of', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Once of', async function() {
    await driver.get("https://dev-beyondblue.cs58.force.com/donate")
    await driver.sleep(2000)
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[3]/div[1]/div[1]/div[3]/lightning-input[1]/div[1]/input[1]")).sendKeys("4")
    await driver.findElement(By.xpath("//button[@class=\'slds-button slds-button_neutral slds-float_right btn-process test\']")).click()
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/label[1]/div[1]/div[1]/div[1]/select[1]")).click()
    {
      const dropdown = await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/label[1]/div[1]/div[1]/div[1]/select[1]"))
      await dropdown.findElement(By.xpath("//option[. = 'Col']")).click()
    }
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[1]/div[2]/div[1]/lightning-input[1]/div[1]/input[1]")).sendKeys("Vova")
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[1]/div[3]/div[1]/lightning-input[1]/div[1]/input[1]")).sendKeys("Danilkovich")
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[1]/div[4]/div[1]/lightning-input[1]/lightning-datepicker[1]/div[1]/div[1]/input[1]")).sendKeys("02/08/2000")
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/lightning-input[1]/div[1]/input[1]")).sendKeys("1239")
    await driver.findElement(By.xpath("//span[contains(text(),\'1239 Nepean Highway, Cheltenham VIC, Australia\')]")).click()
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[1]/div[8]/div[1]/lightning-input[1]/div[1]/input[1]")).sendKeys("vladimir.danilkovichvladimir@gmail.com")
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[1]/div[9]/div[1]/lightning-input[1]/div[1]/input[1]")).sendKeys("431532513")
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[1]/div[11]/div[1]/lightning-input[1]/div[1]/span[1]/label[1]/span[1]")).click()
    await driver.sleep(50)
    await driver.findElement(By.xpath("//button[contains(text(),\'Next - Payment Details\')]")).click()
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/lightning-input[1]/div[1]/input[1]")).sendKeys("4444333322221111")
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[2]/div[3]/div[1]/div[2]/div[3]/div[1]/lightning-input[1]/div[1]/input[1]")).sendKeys("Vladimir Danilkovich")
    {
      const dropdown = await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[2]/div[3]/div[1]/div[2]/div[4]/div[1]/label[1]/div[1]/div[1]/div[1]/select[1]"))
      await dropdown.findElement(By.css("*:nth-child(3)")).click()
    }
    {
      const dropdown = await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[2]/div[3]/div[1]/div[2]/div[5]/div[1]/label[1]/div[1]/div[1]/div[1]/select[1]"))
      await dropdown.findElement(By.xpath("//option[. = '2020']")).click()
    }
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[2]/div[3]/div[1]/div[2]/div[6]/div[1]/lightning-input[1]/div[1]/input[1]")).sendKeys("852")
    await driver.findElement(By.xpath("//button[@class=\'slds-button slds-button_neutral slds-float_right btn-process test\']")).click()
  })
})
