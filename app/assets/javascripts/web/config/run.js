(function() {
  "use strict";

  angular.module('inventoryapp')
  .run(RunConfig);

  RunConfig.$inject = ['localStorageService', '$rootScope', '$state', '$http', '$window'];

  function RunConfig(localStorageService, $rootScope, $state, $http, $window) {


    Array.prototype.find_by = function(id, by_id) {
      return this.filter(function(e){
        return e[by_id] === id;
      });
    };

    $rootScope.$on('auth:logout-success', function(ev) {
      localStorageService.set('logged', false);
      $state.go('login');
    });

    $rootScope.$on('auth:login-success', function(ev) {
      localStorageService.set('logged', true);
    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState){
      if (localStorageService.get('logged') && toState.name === 'login') {
        event.preventDefault();
        $state.go('home');
      }
    })

  };
})();
