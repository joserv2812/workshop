(function () {
  'use strict';

  var loginHelper = require('../helpers/login-helper.js'),
      browserHelper = require('../helpers/browser-helper.js'),
      navBarHelper = require('../helpers/navbar-helper.js');

  function LoginAndOut() {

    function loginAndOut(errorHandler) {
      if (typeof(errorHandler) !== 'function' || errorHandler === this.ErrorHandler) {
        throw new Error('You must construct an ErrorHandler and pass it to loginAndOut()');
      }
      beforeAll(function (done) {
        browserHelper.setup()
          .then(function () {
            loginHelper.login('success')
              .then(done, errorHandler);
          });
      });

      afterAll(function (done) {
        navBarHelper.openUserDropDown()
          .then(navBarHelper.logoutUser)
          .then(done, errorHandler);
      });
    }

    return {
      loginAndOut: loginAndOut
    };

  }

  module.exports = new LoginAndOut();
})();

