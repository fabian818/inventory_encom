(function() {
  'use strict';
  angular.module('inventoryapp', ['LocalStorageModule',
    'ngRoute',
    'ui.router',
    'templates',
    'ng-token-auth'])
  .config(['$qProvider', '$stateProvider', '$authProvider', '$urlRouterProvider', '$locationProvider', function ($qProvider, $stateProvider, $authProvider, $urlRouterProvider, $locationProvider) {
    $qProvider. errorOnUnhandledRejections (false);
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      resolve: {
        auth: function($auth, $state) {
          return $auth.validateUser()
          .catch(function(res) {
            $state.go('landing');
          });
        }

      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm'
    })
    .state('landing', {
      url: '/',
      templateUrl: 'landing.html',
      controller: 'LandingCtrl',
      controllerAs: 'vm'
    });


    $authProvider.configure({
      apiUrl: '/api'
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);


})();
