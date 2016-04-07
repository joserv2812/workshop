(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('ShowUserController', ShowUserController);

  /* @ngInject */
  function ShowUserController($stateParams, usersService) {

    var vm = this;
    vm.fetchUser = fetchUser;
    fetchUser($stateParams.id);

    function fetchUser(userId){
    usersService.findById(userId)
      .then(function(user) {
        vm.user = user;
      });
    }

  }

})();

