//
// test/unit/controllers/controllersSpec.js
//
describe("Unit: Testing Controllers", function() {

  beforeEach(angular.mock.module('App'));

  it('should have a VideosCtrl controller', function() {
    expect(App.VideosCtrl).not.to.equal(null);
  });

  it('should have a VideoCtrl controller', function() {
    expect(App.VideoCtrl).not.to.equal(null);
  });

  it('should have a WatchedVideosCtrl controller', function() {
    expect(App.WatchedVideosCtrl).not.to.equal(null);
  });

  it('should have a properly working VideosCtrl controller', inject(function($rootScope, $controller, $httpBackend) {
    var searchTestAtr = 'cars';
    var response = $httpBackend.expectJSONP('https://gdata.youtube.com/feeds/api/videos?q=' + searchTestAtr + '&v=2&alt=json&callback=JSON_CALLBACK');
    response.respond(null);

    var $scope = $rootScope.$new();
    var ctrl = $controller('VideosCtrl', {
      $scope : $scope,
      $routeParams : {
        q : searchTestAtr
      }
    });
  }));

  it('should have a properly working VideoCtrl controller', inject(function($rootScope, $controller, $httpBackend) {
    var searchID = 'cars';
    var response = $httpBackend.expectJSONP('https://gdata.youtube.com/feeds/api/videos/' + searchID + '?v=2&alt=json&callback=JSON_CALLBACK');
    response.respond(null);

    var $scope = $rootScope.$new();
    var ctrl = $controller('VideoCtrl', {
      $scope : $scope,
      $routeParams : {
        id : searchID
      }
    });
  }));

  it('should have a properly working WatchedVideosCtrl controller', inject(function($rootScope, $controller, $httpBackend) {
    var $scope = $rootScope.$new();

    //we're stubbing the onReady event
    $scope.onReady = function() { };
    var ctrl = $controller('WatchedVideosCtrl', {
      $scope : $scope
    });
  }));

});
