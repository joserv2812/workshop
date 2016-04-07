(function() {
  'use strict';

  describe('NewVehicleController', function() {

    var $controller, $q, $state, deferred, vehiclesService, ctrl, $rootScope;

    beforeEach(module('app.core'));
    beforeEach(module('app.vehicles'));

    beforeEach(module(function($provide) {
      $provide.service('vehiclesService', function() {
        this.create= create;
      });

      var create = function(vehicle) {}
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

      spyOn(vehiclesService, 'create').and.returnValue(deferred.promise);
      spyOn($state, 'go').and.callFake(function(id) {});

      ctrl = $controller('NewVehicleController', {
        'vehiclesService': vehiclesService,
        '$state': $state
      });

    }));

    describe('persistData', function() {
      it('creates and goes to the show page of the created vehicle', function() {
        var vehicle = { MVA: 123 }

        ctrl.persistData(vehicle);
        deferred.resolve();
        $rootScope.$apply();

        expect(vehiclesService.create).toHaveBeenCalledWith(vehicle);
        expect($state.go).toHaveBeenCalledWith('vehicle', { id: 123 });
      });
    })
  });

})();

