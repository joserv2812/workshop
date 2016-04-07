exports.config = {
  directConnect: true,
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['protractor/specs/**/*.js'],

  multiCapabilities: [
    {
      name: 'Chrome',
      browserName: 'chrome',
    }
  ],

  rootElement: '[ng-app]',
  baseUrl: 'http://www.crhoy.com/',
  allScriptsTimeout: 5000,

  onPrepare: function () {
    var width = 1920;
    var height = 1080;

    browser.driver.manage().window().setSize(width, height);
  }
};
