(function() {
  'use strict'

  angular
    .module('app.vehicles')
    .factory('vehiclesService', vehiclesService);

  /* @ngInject */
  function vehiclesService(FIREBASE_URL, $firebaseObject) {

    var service = {
      rootRef: new Firebase(FIREBASE_URL),
      getAll: getAll,
      findById: findById,
      create: create
    };

    return service;

    function getAll() {
      return $firebaseObject(service.rootRef.child('vehicles')).$loaded();
    }

    function findById(id) {
      return $firebaseObject(service.rootRef.child('vehicles').child(id)).$loaded();
    }

    function create(vehicle) {
      var newPath = service.rootRef.child('vehicles').child(vehicle.MVA);
      return newPath.set(vehicle);
    }

  }

})();

