(function() {
  'use strict'

  describe('RevisionsController', function() {

    var $controller, $q, $state, deferred, revisionsService, $controller, $rootScope;

    beforeEach(module('app.core'));
    beforeEach(module('app.revisions'));

    beforeEach(module(function($provide) {
      $provide.service('revisionsService', function() {
        this.getAll = getAll;
      });

      var getAll = function() {};
    }));

    beforeEach(module(function($provide) {
      $provide.service('authService', function() {
        this.logOut = function() {};
        this.isLoggedIn = function() {};
        this.verifyAccess = function() {};
      });
    }));

    beforeEach(inject(function(_$controller_, _$q_, _$state_, _revisionsService_, _$rootScope_) {
      $q = _$q_;
      $state = _$state_;
      $rootScope = _$rootScope_;
      revisionsService = _revisionsService_;
      deferred = $q.defer();

      spyOn(revisionsService, 'getAll').and.returnValue(deferred.promise);
      spyOn($state, 'go').and.callFake(function(id) {});

      $controller = _$controller_('RevisionsController', {
        'revisionsService': revisionsService,
        '$state': $state
      });
    }));

    it('gets all revisions', function() {
      var revisions = [{id: 1}, {id: 2}];
      deferred.resolve(revisions);
      $rootScope.$apply();

      expect(revisionsService.getAll).toHaveBeenCalled();
      expect($controller.revisions).toEqual(revisions);
    });

    describe('show the revision', function() {
      it('goes to the show page of the selected revision', function() {
        $controller.showRevision(1);
        expect($state.go).toHaveBeenCalledWith('revision', {id: 1});
      });
    });

  });
})();
