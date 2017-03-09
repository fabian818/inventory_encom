(function() {
  'use strict';
  angular.module('app', ['LocalStorageModule',
    'ngRoute',
    'ui.router',
    'templates',
    'ngAnimate'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      authenticate: true,
      revoke: false
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);


})();
