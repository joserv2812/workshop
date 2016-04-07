(function() {
  'use strict';

  function ErrorHandler() {
    return function(err) {
      console.log(err);
    };
  }

  module.exports = new ErrorHandler();
})();
