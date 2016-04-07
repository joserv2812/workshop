(function() {
  'use strict';

  describe('ShowVehicleController', function() {

    var $controller, $q, deferred, vehiclesService, ctrl, $rootScope;
    var VEHICLE_ID = 1;

    beforeEach(module('app.core'));
    beforeEach(module('app.vehicles'));

    beforeEach(module(function($provide) {
      $provide.service('vehiclesService', function() {
        this.findById = findById;
      });

      var findById = function(id) {}
    }));

    beforeEach(module(function($provide) {
      $provide.service('authService', function() {
        this.logOut = function() {};
        this.isLoggedIn = function() {};
        this.verifyAccess = function() {};
      });
    }));

    beforeEach(inject(function(_$controller_, _$q_, _vehiclesService_, _$rootScope_) {
      $controller = _$controller_;
      $q = _$q_;
      $rootScope = _$rootScope_;
      vehiclesService = _vehiclesService_;
      deferred = $q.defer();
      var stateParams = { id: VEHICLE_ID };

      spyOn(vehiclesService, 'findById').and.returnValue(deferred.promise);

      ctrl = $controller('ShowVehicleController', {
        'vehiclesService': vehiclesService,
        '$stateParams': stateParams
      });

    }));

    it('retrieves the desired vehicle', function() {
      var vehicle = { id: VEHICLE_ID };
      deferred.resolve(vehicle);
      $rootScope.$apply();

      expect(vehiclesService.findById).toHaveBeenCalledWith(VEHICLE_ID);
      expect(ctrl.vehicle).toEqual(vehicle);
    });
  });

})();

