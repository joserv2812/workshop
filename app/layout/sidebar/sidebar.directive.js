(function() {

  angular
    .module('app.layout')
    .directive('sidebar', sidebarDirective);

  function sidebarDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/layout/sidebar/sidebar.html'
    }
  }

})();
