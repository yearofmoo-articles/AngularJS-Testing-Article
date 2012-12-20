describe("Testing AngularJS Controllers", function() {

  var $rootScope,
      $injector,
      $location,
      $controller,
      $params,
      $route,
      $body,
      $html,
      $ctrl,
      $scope;

  before(function() {
    $html = document.getElementsByTagName('html')[0];
    $html.setAttribute('data-ng-app','App');
    $body = document.getElementsByTagName('body')[0];
    $body.innerHTML += '<div data-ng-view></div>';
    angular.bootstrap($html);
  });

  beforeEach(angular.mock.module('App'));

  beforeEach(angular.mock.inject(
    ['$injector','$controller','$location','$routeParams',function($i, $c, $l, $p, $r) {
      $injector = $i;
      $controller = $c;
      $location = $l;
      $params = $p;

      $rootScope = $injector.get('$rootScope');
      $route = $injector.get('$route');

      $scope = $rootScope.$new();
      (!$scope.status).should.eq(true);

      $ctrl = $controller('HomeCtrl', { $scope : $scope });
      $location.path('/').replace();
      $scope.$apply();
    }]
  ));


  it('should be on the correct page', function() {
    $location.path().should.eq('/');
  });

  it('should be on the correct controller', function() {
    $scope.status.should.eq('ready');
  });

});
