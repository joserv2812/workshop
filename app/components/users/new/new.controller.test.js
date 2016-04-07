(function() {
  'use strict';

  describe('NewUserController', function() {

    var controller, $rootScope, $q, $state, USER_ID;

    beforeEach(module('app.core'));
    beforeEach(module('app.users'));

    beforeEach(module(function($provide) {
      $provide.service('authService', function() {
        this.logOut = function() {};
        this.isLoggedIn = function() {};
        this.verifyAccess = function() {};
      });
    }));

    beforeEach(inject(function($controller, _$state_ ,_$q_, _$rootScope_) {

      USER_ID = 'admin'
      var stateParamsMock = { id: USER_ID };
      $rootScope = _$rootScope_;
      $q = _$q_;
      $state = _$state_;
      var usersServiceMock = {
        create: function(){return $q.when()}
      }

      controller = $controller('NewUserController', {
        '$state': _$state_,
        '$stateParams': stateParamsMock,
        'usersService': usersServiceMock
      });

    }));

    it('creates a new user and goes to the show page of the user', function() {
      var user = {
        username: USER_ID
      }

      spyOn($state, 'go');
      controller.persistData(user);
      $rootScope.$apply();
      expect($state.go).toHaveBeenCalledWith('user', { id: USER_ID });
    });

  });

})();

