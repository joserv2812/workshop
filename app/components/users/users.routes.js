(function() {
  'use strict';

  angular
    .module('app.users')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'app/components/users/users.html',
        controller: 'UsersController as vm'
      })
      .state('user', {
        url: '/user/:id',
        templateUrl: 'app/components/users/show/show.html',
        controller: 'ShowUserController as vm'
      })
      .state('userEdit', {
        url: '/user/:id/edit',
        templateUrl: 'app/components/users/edit/edit.html',
        controller: 'EditUserController as vm'
      })
      .state('userNew',{
        url:'/users/new',
        templateUrl:'app/components/users/new/new.html',
        controller: 'NewUserController as vm'
      });

  }

})();

