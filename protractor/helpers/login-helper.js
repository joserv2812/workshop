(function () {
  'use strict';

  var q = require('q'),
      loginPage = require('../pages/login-page.js');

  function LoginHelper() {

    function getUser() {
      return {
        userName: 'admportal3',
        password: '8aK3WkEnLB',
        userNameFail: 'User3', //failed attempts counter doesn't reset for 15 minutes. Since we are not mocking the backend, this will fail if run two times within 15 minutes.
        passwordFail: 'password'
      };
    }

    function clearInputs() {
      return loginPage.sendUsernameFieldKeys()
      .then(function () {
        return loginPage.sendPasswordFieldKeys();
      });
    }

    function login(outcome) {
      var user = getUser();

      clearInputs();

      if (outcome === 'success') {
        return q.all([
          loginPage.sendUsernameFieldKeys(user.userName),
          loginPage.sendPasswordFieldKeys(user.password)
        ])
        .then(loginPage.clickLoginButton);
      }
      else if (outcome === 'failure') {
        return q.all([
          loginPage.sendUsernameFieldKeys(user.userNameFail),
          loginPage.sendPasswordFieldKeys(user.passwordFail)
        ])
        .then(loginPage.clickLoginButton);
      }
    }

    return {
      login: login
    };

  }

  module.exports = new LoginHelper();
})();

