(function() {
  'use strict';

describe('EditRevisionController', function() {

    var $controller, $q, $state, deferredRevision, deferredSaveRef,
        revisionsService, ctrl, $rootScope;
    var REVISION_ID = 12572466;

    beforeEach(module('app.core'));
    beforeEach(module('app.revisions'));

    beforeEach(module(function($provide) {
      $provide.service('revisionsService', function() {
        this.getRevision = getRevision;
        this.saveRevision = saveRevision;
      });

      var getRevision = function(id) {};
      var saveRevision = function(revision) {};
    }));

    beforeEach(module(function($provide) {
      $provide.constant('TIRE_BRANDS', 'tire brands');
      $provide.constant('REVISION_TYPE', 'revision type');
      $provide.constant('GAS_STATE', 'gas state');

      $provide.service('authService', function() {
        this.logOut = function() {};
        this.isLoggedIn = function() {};
        this.verifyAccess = function() {};
      });
    }));

    beforeEach(inject(
      function(_$controller_, _$q_, _$state_, _revisionsService_, _$rootScope_) {
        $q = _$q_;
        $state = _$state_;
        revisionsService = _revisionsService_;
        $rootScope = _$rootScope_;
        var stateParams = {id: REVISION_ID};

        deferredRevision = $q.defer();
        spyOn(revisionsService, 'getRevision').and.returnValue(deferredRevision.promise);

        $controller = _$controller_('EditRevisionController', {
          'revisionsService': revisionsService,
          '$state': $state,
          '$stateParams': stateParams
        });
      }
    ));

    it('gets the revision', function() {
      var revision = {id: REVISION_ID};

      deferredRevision.resolve(revision);
      $rootScope.$apply();

      expect(revisionsService.getRevision).toHaveBeenCalledWith(REVISION_ID);
      expect($controller.revision).toEqual(revision);
    });

    describe('.saveRevision', function() {
      it('updates revision and goes back to show page', function() {
        deferredSaveRef = $q.defer();

        spyOn(revisionsService, 'saveRevision').and.returnValue(deferredSaveRef.promise);
        spyOn($state, 'go').and.callFake(function(id) {});

        $controller.saveRevision();

        deferredSaveRef.resolve({});
        $rootScope.$apply();

        expect(revisionsService.saveRevision).toHaveBeenCalledWith($controller.revision);
        expect($state.go).toHaveBeenCalledWith('revision', {id: REVISION_ID});
      });
    });

  });

})();

