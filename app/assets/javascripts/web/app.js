(function() {
  'use strict';
  angular.module('app', ['LocalStorageModule',
    'ngRoute',
    'ui.router',
    'templates',
    'ngAnimate',
    'ng-token-auth'])
  .config(['$stateProvider', '$authProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $authProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      authenticate: true,
      revoke: false
    })
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm',
      authenticate: true,
      revoke: false
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
