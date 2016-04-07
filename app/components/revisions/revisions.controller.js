(function() {
  'use strict';

  angular
    .module('app.revisions')
    .controller('RevisionsController', RevisionsController);

  /* @ngInject */
  function RevisionsController(revisionsService, $state) {
    var vm = this;

    vm.showRevision = showRevision;

    revisionsService.getAll()
      .then(function(revisions) {
        vm.revisions = revisions;
      });

    function showRevision(revisionId) {
      $state.go('revision', {id: revisionId});
    }

  }

})();

