(function() {
  'use strict';

  angular
    .module('app.revisions')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('revisions', {
        url: "/revisions",
        templateUrl: "app/components/revisions/revisions.html",
        controller: "RevisionsController as vm"
      })
      .state('revision', {
        url: "/revision/:id",
        templateUrl: "app/components/revisions/show/show.html",
        controller: "ShowRevisionController as vm"
      })
      .state('editRevision', {
        url: "/revision/:id/edit",
        templateUrl: "app/components/revisions/edit/edit.html",
        controller: "EditRevisionController as vm"
      });

  }

})();

