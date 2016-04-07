(function() {
  'use strict'

  angular
    .module('app.vehicles')
    .controller('ShowVehicleController', ShowVehicleController);

  /* @ngInject */
  function ShowVehicleController($stateParams, vehiclesService) {
    var vm = this;

    vehiclesService.findById($stateParams.id)
      .then(function(vehicle) {
        vm.vehicle = vehicle;
      });
  }

})();

