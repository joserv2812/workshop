(function() {
  'use strict';

  describe('ShowUserController', function() {

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

    beforeEach(inject(function($controller,_$q_, _$rootScope_) {

      USER_ID = 'admin';
      var stateParamsMock = { id: USER_ID };
      $rootScope = _$rootScope_;
      $q = _$q_;
      var usersServiceMock = {
        findById: function(){return $q.when({id: USER_ID})}
      }

      controller = $controller('ShowUserController', {
        '$stateParams': stateParamsMock,
        'usersService': usersServiceMock
      });

    }));

    it('show the desired user', function() {
      spyOn(controller, 'fetchUser');
      controller.fetchUser(USER_ID);
      $rootScope.$apply();
      expect(controller.fetchUser).toHaveBeenCalledWith(USER_ID);
      expect(controller.user).toEqual({id: USER_ID});
    });

  });

})();

