'use strict';

/**
 * @ngdoc service
 * @name gutHubApp.UserService
 * @description
 * # UserService
 * Service in the gutHubApp.
 */
var service = angular.module('userServices', ['ngResource']);

service.factory('Users', ['$resource', function($resource) {
  return $resource('data/:users.json', {}, {
    query: { method:'GET', params:{ users:'users' }, isArray:true }
  });
}]);

service.factory('User', ['$resource', function($resource) {
  return $resource('data/users/:user_id.json');
}]);
