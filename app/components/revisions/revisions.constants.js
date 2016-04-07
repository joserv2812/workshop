(function() {
  'use strict';

  angular
    .module('app.revisions')
    .constant('TIRE_BRANDS', [
      {name: 'Dunlop'},
      {name: 'Bridgestone'},
      {name: 'Yokohama'},
      {name: 'Firestone'},
      {name: 'Pirelli'},
      {name: 'Kumho'},
      {name: 'Hankook'},
      {name: 'Goodyear'},
      {name: 'Michelin'},
      {name: 'Toyo'},
      {name: 'Otros'},
    ])
    .constant('REVISION_TYPE', [
      {name: 'Check-in'},
      {name: 'Check-out'}
    ])
    .constant('GAS_STATE', [
      {name: 'Vacio'},
      {name: '1/4'},
      {name: '2/4'},
      {name: '3/4'},
      {name: 'Lleno'}
    ]);

})();
