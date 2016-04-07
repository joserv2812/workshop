(function() {
  'use strict';
 
  // takes an object of items (objects), filters by the values of the items'
  // properties given as parameters, and returns an object of the filtered objects
  angular
    .module('app')
    .filter('filterObjDict', function() {
      return function(dict, search, propertyList) {

        if (!dict) return dict;
        if (!search) return dict;

        var expected = ('' + search).toLowerCase();
        var result = {};

        angular.forEach(dict, function(itemVal, itemKey) {
          angular.forEach(itemVal, function(propertyValue, propertyKey) {

            var actual = ('' + propertyValue).toLowerCase();
            if (propertyList.indexOf(propertyKey) !== -1 &&
                actual.indexOf(expected) !== -1) {
              result[itemKey] = itemVal;
            }

          })
        });
        return result;
      }
    });
})();

