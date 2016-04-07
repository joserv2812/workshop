(function() {
  'use strict';

  angular
    .module('app.revisions')
    .factory('revisionsService', revisionsService);

  /* @ngInject */
  function revisionsService(FIREBASE_URL, $firebaseArray, $firebaseObject) {

    var service = {
      getAll: getAll,
      getDamages: getDamages,
      getRevision: getRevision,
      rootRef: new Firebase(FIREBASE_URL),
      saveRevision: saveRevision
    };

    return service;

    function getRevision(id) {
      var revisionRef = service.rootRef.child('revisions').child(id);
      return $firebaseObject(revisionRef).$loaded();
    }

    function getAll() {
      var revisionsRef = service.rootRef.child('revisions');
      return $firebaseArray(revisionsRef).$loaded();
    }

    function getDamages(ref) {
      var damagesRef = service.rootRef.child('damages').child(ref);
      return $firebaseObject(damagesRef).$loaded();
    }

    function saveRevision(revision) {
      return revision.$save();
    }

  }

})();

