'use strict';

/**
 * @ngdoc function
 * @name gutHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gutHubApp
 */
var gutHubApp = angular.module('gutHubApp');

gutHubApp.controller('MainCtrl', ['$scope', '$location', 'Users',
  function ($scope, $location, Users) {

    $scope.location = $location;

    $scope.greeting = 'Hello!!';

    $scope.items = [];

    $scope.getUsers = function() {
      $scope.items = Users.query();
    };

    $scope.remove = function(index) {
      $scope.items.splice(index, 1);
    };
  }
]);
