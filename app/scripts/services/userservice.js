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
  return $resource('datas/:users.json', {}, {
    query: { method:'GET', params:{ users:'users' }, isArray:true }
  });
}]);
