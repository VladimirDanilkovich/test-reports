    const webdriver = require('selenium-webdriver')
    require('selenium-webdriver/chrome')
    require('chromedriver')
    global.driver = {}
    
    // setup
    beforeEach(async function () {
      this.timeout(60000)
      try {
        driver = await new webdriver.Builder().forBrowser('chrome').build()
        await driver.manage().window().setSize(1600, 900)
      } catch (ex) {
        console.log(ex.stack)
      }
    
    })
    
    afterEach(async function () {
      this.timeout(60000)
      await driver.quit()
    })
