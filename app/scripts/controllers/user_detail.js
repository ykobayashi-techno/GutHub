'use strict';

/**
 * @ngdoc function
 * @name gutHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gutHubApp
 */
var gutHubApp = angular.module('gutHubApp');

gutHubApp.controller('UserDetailCtrl', ['$scope', '$routeParams', 'User',
  function ($scope, $routeParams, User) {

    $scope.title = 'user detail page';

    $scope.greeting = 'Hello!!';

    $scope.item = User.get({ user_id: $routeParams.userId }, function(data){
      $scope.item_id = data.id;
    });
  }
]);
