(function() {
  'use strict';

  describe('ShowRevisionController', function() {

    var $controller, $q, $state, deferredRevision, deferredDamages,
        revisionsService, $controller, $rootScope;
    var REVISION_ID = 2435624;
    var DAMAGES_REF = 256432;

    beforeEach(module('app.core'));
    beforeEach(module('app.revisions'));

    beforeEach(module(function($provide) {
      $provide.service('revisionsService', function() {
        this.getRevision = getRevision;
        this.getDamages = getDamages;

      });

      var getRevision = function(id) {};
      var getDamages = function(ref) {};
    }));

    beforeEach(module(function($provide) {
      $provide.service('authService', function() {
        this.logOut = function() {};
        this.isLoggedIn = function() {};
        this.verifyAccess = function() {};
      });
    }));

    beforeEach(inject(
      function(_$controller_, _$q_, _$state_, _revisionsService_, _$rootScope_, _$timeout_, _$uibModal_) {
        $q = _$q_;
        $state = _$state_;
        $rootScope = _$rootScope_;
        revisionsService = _revisionsService_;
        deferredRevision = $q.defer();
        deferredDamages = $q.defer();
        var stateParams = {id: REVISION_ID};

        spyOn(revisionsService, 'getRevision').and.returnValue(deferredRevision.promise);
        spyOn(revisionsService, 'getDamages').and.returnValue(deferredDamages.promise);
        spyOn($state, 'go').and.callFake(function(id) {});

        $controller = _$controller_('ShowRevisionController', {
          'revisionsService': revisionsService,
          '$state': $state,
          '$stateParams': stateParams,
          '$uibModal': _$uibModal_,
          '$timeout': _$timeout_
        });
      }
    ));

    it('gets selected revision and damages', function() {
      var revision = {id: REVISION_ID, damages_ref: DAMAGES_REF};
      deferredRevision.resolve(revision);
      var damages = [{}, {}];
      deferredDamages.resolve(damages);
      $rootScope.$apply();

      expect(revisionsService.getRevision).toHaveBeenCalledWith(REVISION_ID);
      expect($controller.revision).toEqual(revision);
      expect(revisionsService.getDamages).toHaveBeenCalledWith(DAMAGES_REF);
      expect($controller.damages).toEqual(damages);
    });

    describe('.editRevision', function() {

      it('goes to the edit page of the selected revision', function() {
        $controller.editRevision(REVISION_ID);
        expect($state.go).toHaveBeenCalledWith('editRevision', {id: REVISION_ID});
      });

    });

  });

})();
