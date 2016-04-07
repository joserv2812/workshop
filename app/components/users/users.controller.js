(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('UsersController', UsersController);

  /* @ngInject */
  function UsersController(usersService, $state) {

    var vm = this;
    vm.users = {};
    vm.showUser = showUser;
    vm.fetchUsers = fetchUsers;
    fetchUsers();

    function fetchUsers(){
      usersService.getAll()
        .then(function(users) {
          vm.users = users;
        });
    }

    function showUser(userId) {
      $state.go('user', { id: userId });
    }

  }

})();

