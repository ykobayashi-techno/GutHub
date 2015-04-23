'use strict';

/**
 * @ngdoc function
 * @name gutHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gutHubApp
 */
angular.module('gutHubApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
