(function() {
  'use strict';

  describe('VehiclesController', function() {

    var $controller, $q, $state, deferred, vehiclesService, ctrl, $rootScope;

    beforeEach(module('app.core'));
    beforeEach(module('app.vehicles'));

    beforeEach(module(function($provide) {
      $provide.service('vehiclesService', function() {
        this.getAll = getAll;
      });

      var getAll = function() {}
    }));

    beforeEach(module(function($provide) {
      $provide.service('authService', function() {
        this.logOut = function() {};
        this.isLoggedIn = function() {};
        this.verifyAccess = function() {};
      });
    }));

    beforeEach(inject(function(_$controller_, _$q_, _$state_, _vehiclesService_, _$rootScope_) {
      $controller = _$controller_;
      $q = _$q_;
      $state = _$state_;
      $rootScope = _$rootScope_;
      vehiclesService = _vehiclesService_;
      deferred = $q.defer();

      spyOn(vehiclesService, 'getAll').and.returnValue(deferred.promise);
      spyOn($state, 'go').and.callFake(function(id) {});

      ctrl = $controller('VehiclesController', {
        'vehiclesService': vehiclesService,
        '$state': $state
      });

    }));

    it('gets all vehicles', function() {
      var vehicles = [{ id: 1 }, {id: 2 }];
      deferred.resolve(vehicles);
      $rootScope.$apply();

      expect(vehiclesService.getAll).toHaveBeenCalled();
      expect(ctrl.vehicles).toEqual(vehicles);
    });

    describe('showVehicle', function() {
      it('goes to the show page of the selected vehicle', function() {
        ctrl.showVehicle(1);
        expect($state.go).toHaveBeenCalledWith('vehicle', { id: 1 });
      });
    })
  });

})();

