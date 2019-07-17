var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var co = new chrome.Options();
co.setChromeBinaryPath("/Applications/UsrBin/Google\ Chrome.app/Contents/MacOS/Google\ Chrome");
var driver = new webdriver.Builder()
    .forBrowser("firefox")
    .setChromeOptions(co)
    .build();

console.log("hello");
driver.quit();
