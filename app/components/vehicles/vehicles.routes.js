(function() {
  'use strict'

  angular
    .module('app.vehicles')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('vehicles', {
        url: '/vehicles',
        templateUrl: 'app/components/vehicles/vehicles.html',
        controller: 'VehiclesController as vm'
      })
      .state('vehicle', {
        url: '/vehicle/:id',
        templateUrl: 'app/components/vehicles/show/show.html',
        controller: 'ShowVehicleController as vm'
      })
      .state('vehicleEdit', {
        url: '/vehicle/:id/edit',
        templateUrl: 'app/components/vehicles/edit/edit.html',
        controller: 'EditVehicleController as vm'
      })
      .state('vehicleNew', {
        url: '/vehicles/new',
        templateUrl: 'app/components/vehicles/new/new.html',
        controller: 'NewVehicleController as vm'
      });

  }

})();

