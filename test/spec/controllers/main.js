'use strict';

describe('Controller: MainCtrl', function () {
  var $httpBackend,
    MainCtrl,
    scope;

  // load the controller's module
  beforeEach(module('gutHubApp'));
  beforeEach(module('userServices'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('datas/users.json').
      respond([{ id:1, name: 'User 1'}, { id:2, name: 'User 2'}]);
  }));

  it('User List Length Test', function () {
    scope.getUsers();
    $httpBackend.flush();
    expect(scope.items.length).toBe(2);
  });
});
