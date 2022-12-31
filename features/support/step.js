const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");

class Greeter {
  sayHello() {
    return "hello";
  }
}

module.exports = {
  Greeter,
};

When("the greeter says hello", function () {
  this.whatIHeard = new Greeter().sayHello();
});

Then("I should have heard {string}", function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse);
});
