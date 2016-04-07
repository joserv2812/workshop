(function() {
  'use strict'

  angular
    .module('app.vehicles')
    .controller('EditVehicleController', EditVehicleController);

  /* @ngInject */
  function EditVehicleController($state, $stateParams, vehiclesService) {
    var vm = this;
    vm.vehicle = {};
    vm.persistData = persistData;

    vehiclesService.findById($stateParams.id)
      .then(function(vehicle) {
        vm.vehicle = vehicle;
      });

    function persistData(vehicle) {
      vehicle.$save()
        .then(function() {
          $state.go('vehicle', { id: vehicle.$id });
        });
    }
  }

})();

