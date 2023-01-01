const { setWorldConstructor, After } = require("@cucumber/cucumber");
const playwright = require("playwright");

class CustomWorld {
  async openUrl(url) {
    const browser = await playwright.chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    await this.page.goto(url);
  }
}

setWorldConstructor(CustomWorld);

After(async function () {
  await this.page.close();
});
