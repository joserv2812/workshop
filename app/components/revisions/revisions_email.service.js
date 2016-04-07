(function() {
  'use strict';

  angular
    .module('app.revisions')
    .factory('revisionsEmailService', revisionsEmailService);

  /* @ngInject */
  function revisionsEmailService(REVISIONS_URL, $http) {

    var service = {
      url: REVISIONS_URL,
      sendEmail: sendEmail,
      formatRevisionToJson: formatRevisionToJson,
      formatDamagesToJson: formatDamagesToJson
    };

    return service;

    function sendEmail(revision, email) {
      return $http.post(service.url, service.formatRevisionToJson(revision, email), { "Content-Type": "application/json" });
    }

    function formatRevisionToJson(revision, email) {
      var json = {
        damages: service.formatDamagesToJson(revision.damages),
        observations: revision.observations,
        revision: {
          gasLevel: revision.gas_level,
          deliveryPlace: revision.delivery_place,
          km: revision.km,
          timestamp: revision.timestamp,
          type: revision.type,
          user: revision.user,
          vehicleMVA: revision.vehicle_ref,
          carParts: revision.car_parts_present
        },
        email: email,
        contractNumber: revision.contract_number
      }

      return json;
    }

    function formatDamagesToJson(damages) {
      var formmattedDamages = [];
      damages.forEach(function(damage) {
        formmattedDamages.push({ damage: damage.damage_type, part: damage.part });
      });
      return formmattedDamages;
    }
  }

})();

