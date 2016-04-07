(function() {
  'use strict';

  angular
    .module('app.revisions')
    .controller('EditRevisionController', EditRevisionController);

  /* @ngInject */
  function EditRevisionController($state, $stateParams, revisionsService, TIRE_BRANDS, REVISION_TYPE, GAS_STATE) {
    var vm = this;
    vm.tireBrands = TIRE_BRANDS;
    vm.revisionType= REVISION_TYPE;
    vm.gasState= GAS_STATE;
    vm.currentRevisionId = $stateParams.id;
    vm.saveRevision = saveRevision;

    revisionsService.getRevision(vm.currentRevisionId)
      .then(function(revision) {
        vm.revision = revision;
      });

    function saveRevision(){
      revisionsService.saveRevision(vm.revision)
        .then(function () {
          $state.go('revision', {id: vm.currentRevisionId});
        });
    }

  }

})();

