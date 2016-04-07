(function() {
  'use strict';

  function ErrorHandler(desc) {
    var description = desc;

    return function(err) {
      console.log(' ');
      console.log('Spec: ' + description);
      console.log(' ');
      console.log('Message: ' + err.message);
      console.log(' ');
      console.log('Stack: ' + err.stack);
      console.log(' ');
    };
  }

  module.exports = ErrorHandler;
})();
