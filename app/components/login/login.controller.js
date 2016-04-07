(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController(authService) {

    var vm = this;

    vm.closeAlert = closeAlert;
    vm.logIn = logIn;

    function closeAlert() {
      vm.isIncorrectLogin = false;
    }

    function logIn(username, password) {
      authService.logIn(username, password)
        .then(function(response) {
          response instanceof Error ? vm.isIncorrectLogin = true : vm.isIncorrectLogin = false;
        });
    }

  }

})();

