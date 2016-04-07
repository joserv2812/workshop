(function () {
  'use strict';

  var q = require('q');

  function BrowserHelper() {

    function setBrowserWindow() {
      return browser.driver.manage().window().maximize();
    }

    function getAP() {
      return browser.get('https://local.dev-charter.net:5678');
    }

    function setup() {
      return q.all([
        setBrowserWindow(),
        getAP()
      ]);
    }

    function getUrl() {
      return browser.getCurrentUrl();
    }

    return {
      setBrowserWindow: setBrowserWindow,
      getAP: getAP,
      setup: setup,
      getUrl: getUrl
    };
  }

  module.exports = new BrowserHelper();
})();

