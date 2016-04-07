(function() {
  'use strict';

  /* @ngInject */
  function initAuth(authService, $rootScope) {
    $rootScope.logOut = authService.logOut;
    $rootScope.isLoggedIn = authService.isLoggedIn;
    authService.verifyAccess();
  }

  angular
    .module('app.core', [
      'firebase',
      'ui.bootstrap',
      'ui.router'
    ])
    .run(initAuth);

})();

