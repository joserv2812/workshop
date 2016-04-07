(function() {
  'use strict'

  angular
    .module('app.vehicles')
    .controller('VehiclesController', VehiclesController);

  /* @ngInject */
  function VehiclesController(vehiclesService, $state) {

    var vm = this;
    vm.vehicles = {};
    vm.filterVehicles = filterVehicles;
    vm.showVehicle = showVehicle;

    vehiclesService.getAll()
      .then(function(vehicles) {
        vm.vehicles = vehicles;
      });

    function showVehicle(vehicleId) {
      $state.go('vehicle', { id: vehicleId });
    }

    function filterVehicles(item) {
      if(!vm.query ||
         (item.MVA.toLowerCase().indexOf(vm.query) != -1) ||
         (item.brand.toLowerCase().indexOf(vm.query) != -1)) {
        return true;
      }
      return false;
    }

  }

})();

