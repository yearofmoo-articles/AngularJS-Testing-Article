//
// test/unit/controllers/controllersSpec.js
//
describe("Testing AngularJS Controllers", function() {

  beforeEach(angular.mock.module('App'));

  it('the VideosCtrl controller should exist', function() {
    expect(App.VideosCtrl).not.to.equal(null);
  });

  it('the VideoCtrl controller should exist', function() {
    expect(App.VideoCtrl).not.to.equal(null);
  });

  it('the WatchedVideosCtrl controller should exist', function() {
    expect(App.WatchedVideosCtrl).not.to.equal(null);
  });

  it('the VideosCtrl should run properly', inject(function($rootScope, $controller, $httpBackend) {
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

  it('the VideoCtrl should run properly', inject(function($rootScope, $controller, $httpBackend) {
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

  it('the WatchedVideosCtrl should run properly', inject(function($rootScope, $controller, $httpBackend) {
    var $scope = $rootScope.$new();

    //we're stubbing the onReady event
    $scope.onReady = function() { };
    var ctrl = $controller('WatchedVideosCtrl', {
      $scope : $scope
    });
  }));

});
