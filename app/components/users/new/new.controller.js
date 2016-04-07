(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('NewUserController', NewUserController);

  /* @ngInject */
  function NewUserController($state, usersService) {
    var vm = this;
    vm.user = {};
    vm.usersService = usersService;
    vm.persistData = persistData;

    function persistData(user) {
      vm.usersService.create(user)
        .then(function() {
          $state.go('user', { id: user.username });
        });
    }
  }

})();

