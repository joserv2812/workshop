(function() {

  angular
    .module('app.revisions')
    .controller('SendEmailModalController', SendEmailModalController);

  /* @ngInject */
  function SendEmailModalController($uibModalInstance, revisionsEmailService, revision, addAlert) {

    var vm = this;
    vm.revision = revision;
    vm.addAlert = addAlert;
    vm.sendRevision = sendRevision;
    vm.cancel = cancel;

    function sendRevision(revision, email) {
      vm.addAlert({ type: 'info', msg: 'Se está procesando el correo' });
      $uibModalInstance.close(revisionsEmailService.sendEmail(revision, email));
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

  }

})();

