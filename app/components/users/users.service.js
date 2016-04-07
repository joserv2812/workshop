(function() {
  'use strict';

  angular
    .module('app.users')
    .factory('usersService', usersService);

  /* @ngInject */
  function usersService(FIREBASE_URL, $firebaseObject) {

    var service = {
      rootRef: new Firebase(FIREBASE_URL),
      getAll: getAll,
      findById: findById,
      create: create
    };

    return service;

    function getAll() {
      return $firebaseObject(service.rootRef.child('users')).$loaded();
    }

    function findById(id) {
      return $firebaseObject(service.rootRef.child('users').child(id)).$loaded();
    }

    function create(user) {
      var newPath = service.rootRef.child('users').child(user.username);
      return newPath.set(user);
    }

  }

})();

