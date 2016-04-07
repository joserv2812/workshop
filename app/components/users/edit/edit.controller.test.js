(function() {
  'use strict';

  describe('EditUserController', function() {

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

      USER_ID = 'admin';
      var stateParamsMock = { id: USER_ID };
      $rootScope = _$rootScope_;
      $q = _$q_;
      $state = _$state_;
      var usersServiceMock = {
        findById: function(){return $q.when({id: USER_ID})}
      }

      controller = $controller('EditUserController', {
        '$state': _$state_,
        '$stateParams': stateParamsMock,
        'usersService': usersServiceMock
      });

    }));

    it('retrieves the desired user', function() {
      controller.user = {};
      controller.fetchUser();
      $rootScope.$apply();
      expect(controller.user).toEqual({id: USER_ID});
    });


    it('saves changes and goes to the show page of the user', function() {
      var user = {
        $id: USER_ID,
        $save: function() {return $q.when()}
      }

      spyOn($state, 'go');
      controller.persistData(user);
      $rootScope.$apply();
      expect($state.go).toHaveBeenCalledWith('user', { id: USER_ID });
    });

  });

})();

