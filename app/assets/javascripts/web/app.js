(function() {
  'use strict';
  angular.module('inventoryapp', ['LocalStorageModule',
    'ngRoute',
    'ui.router',
    'templates',
    'ng-token-auth'])
  .config(['$stateProvider', '$authProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $authProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      resolve: {
        auth: authenticateRoute
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
    function authenticateRoute($auth, $state) {
      return $auth.validateUser()
      .catch(function(res) {
        $state.go('landing');
      });
    }

    $stateProvider.state('user-profile', {
      url: '/users',
      resolve: {
        auth: authenticateRoute
      }
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
