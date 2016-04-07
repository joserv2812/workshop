(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('EditUserController', EditUserController);

  /* @ngInject */
  function EditUserController($state, $stateParams, usersService) {
    var vm = this;
    vm.user = {};
    vm.persistData = persistData;
    vm.fetchUser = fetchUser;
    fetchUser($stateParams.id);

    function fetchUser(userId) {
      usersService.findById(userId).then(function(user) {
        vm.user = user;
      });

    }

    function persistData(user) {
      user.$save()
        .then(function() {
          $state.go('user', { id: user.$id });
        });
    }

  }

})();

