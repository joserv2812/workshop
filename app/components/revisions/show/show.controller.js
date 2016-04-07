(function() {
  'use strict';

  angular
    .module('app.revisions')
    .controller('ShowRevisionController', ShowRevisionController);

  /* @ngInject */
  function ShowRevisionController($state, $stateParams, $uibModal, $timeout, revisionsService) {
    var vm = this;

    vm.currentRevisionId = $stateParams.id;
    vm.alerts = [];
    vm.editRevision = editRevision;
    vm.addAlert = addAlert;
    vm.closeAlert = closeAlert;
    vm.openEmailModal= openEmailModal;

    revisionsService.getRevision(vm.currentRevisionId)
      .then(function(revision) {
        vm.revision = revision;
        if(vm.revision.damages_ref) getDamages(vm.revision.damages_ref);
      });

    function getDamages(damagesRef){
      revisionsService.getDamages(damagesRef)
        .then(function(damages) {
          vm.revision.damages = damages;
          vm.damages = damages;
        });
    }

    function editRevision(revisionId) {
      $state.go('editRevision', {id: revisionId});
    }

    function addAlert(alert) {
      vm.alerts.push(alert);
    }

    function closeAlert(index) {
      vm.alerts.splice(index, 1);
    }

    function openEmailModal() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/components/revisions/show/send_email_modal.html',
        controller: 'SendEmailModalController',
        controllerAs: 'vm',
        size: 'sm',
        resolve: {
          revision: function () {
            return vm.revision;
          },
          addAlert: function() {
            return vm.addAlert;
          }
        }
      });

      modalInstance.result
        .then(function(success) {
          vm.addAlert({ type: 'success', msg: 'Se ha enviado el correo correctamente' });
        })
        .catch(function(error) {
          console.log(error)
          if(error != 'cancel' && error != 'backdrop click') {
            vm.addAlert({ type: 'danger', msg: 'No se ha podido enviar el correo, trate nuevamente' });
          }
        });
    }

  }

})();

