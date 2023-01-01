const { expect } = require("@playwright/test");
const { When, Then } = require("@cucumber/cucumber");

When("the greeter says hello", async function () {
  await this.openUrl("https://myapp-front-flax.vercel.app/");
});

Then("I should have heard {string}", async function (expectedResponse) {
  await expect(this.page).toHaveTitle(/React App/);
});
