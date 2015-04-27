'use strict';

/**
 * @ngdoc overview
 * @name gutHubApp
 * @description
 * # gutHubApp
 *
 * Main module of the application.
 */
angular
  .module('gutHubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'userServices'
  ])
  .config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        redirectTo: '/user'
      })
      .when('/user', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user/:userId', {
        templateUrl: 'views/user_detail.html',
        controller: 'UserDetailCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
