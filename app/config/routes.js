App.config(['$routeProvider', function($routes) {

  $routes.when('/home', {
    redirectTo : '/'
  });

  $routes.when('/', {
    controller : 'HomeCtrl',
    templateUrl : 'application/templates/home.html'
  });

}]);
