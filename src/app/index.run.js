(function() {
  'use strict';

  angular
    .module('angularTeste')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
