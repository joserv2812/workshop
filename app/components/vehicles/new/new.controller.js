(function() {
  'use strict'

  angular
    .module('app.vehicles')
    .controller('NewVehicleController', EditVehicleController);

  /* @ngInject */
  function EditVehicleController($state, vehiclesService) {
    var vm = this;
    vm.vehicle = {};
    vm.vehiclesService = vehiclesService;
    vm.persistData = persistData;

    function persistData(vehicle) {
      vm.vehiclesService.create(vehicle)
        .then(function() {
          $state.go('vehicle', { id: vehicle.MVA });
        });
    }
  }

})();
