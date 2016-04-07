(function() {
  'use strict';

  angular
    .module('app.login')
    .factory('authService', authService);

  /* @ngInject */
  function authService($state, $rootScope, $location, $firebaseAuth,
                       FIREBASE_URL, sessionService) {

    var service = {
      isLoggedIn: isLoggedIn,
      logIn: logIn,
      logOut: logOut,
      verifyAccess: verifyAccess
    }

    return service;

    function isLoggedIn() {
      var authData = sessionService.getAuthData();
      var sessionDefined = typeof authData !== 'undefined';
      var authDataDefined = authData !== null;

      return sessionDefined && authDataDefined;
    };

    function logIn(username, password) {
      var ref = new Firebase(FIREBASE_URL);
      var auth = $firebaseAuth(ref);
      var credentials = {
        email: username + '@budget.com',
        password: password
      };

      return auth.$authWithPassword(credentials)
        .then(function(authData) {
          sessionService.setAuthData(authData);
          redirect();
        }).catch(function(error) {
          return error;
        });
    }

    function logOut() {
      sessionService.destroy();
      $state.go('login');
    }

    function verifyAccess() {
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {

        if(!service.isLoggedIn() && toState.name !== 'login') {
          service.redirectInfo = {};
          service.redirectInfo.toStateName = toState.name;
          service.redirectInfo.toParams = toParams;
          $location.path('login');
        }

      });
    }

    function redirect() {
      if(service.redirectInfo) {
        $state.go(service.redirectInfo.toStateName, service.redirectInfo.toParams);
      } else {
        $state.go('revisions');
      }
    }

  };

})();

