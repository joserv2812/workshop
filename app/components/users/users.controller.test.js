(function() {
  'use strict';

  describe('UsersController', function() {

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
      $rootScope = _$rootScope_;
      $q = _$q_;
      $state = _$state_;
      var usersServiceMock = {
        getAll: function(){return $q.when([{id: 'admin'},{id: 'jcalvarez'}])}
      }

      controller = $controller('UsersController', {
        '$state': _$state_,
        'usersService': usersServiceMock
      });

    }));

    it('retrieves all users', function() {
      controller.users = {};
      controller.fetchUsers();
      $rootScope.$apply();
      expect(controller.users).toEqual([{id: 'admin'},{id: 'jcalvarez'}]);
    });

    it('goes to the show page of the user', function() {        
      spyOn($state, 'go');
      controller.showUser(USER_ID);        
      $rootScope.$apply();
      expect($state.go).toHaveBeenCalledWith('user', { id: USER_ID });
    });

  });

})();
