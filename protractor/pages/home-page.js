(function () {
  'use strict';

  var home = element(by.linkText('PORTADA')),
      url = '';

  function HomePage() {

    function waitForHome() {
      return browser.wait(protractor.ExpectedConditions.presenceOf(home), 5000);
    }

    function clickHome() {
      return home.click();
    }

    function visit() {
      return browser.get(url);
    }

    return {
      waitForHome: waitForHome,
      clickHome: clickHome,
      visit: visit
    };
  }

  module.exports = new HomePage();
})();
