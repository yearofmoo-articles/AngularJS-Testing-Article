//
// test/midway/requestsSpec.js
//
describe("Midway: Testing Requests", function() {

  var test, onChange;

  before(function(done) {
    ngMidwayTester.register('App', function(instance) {
      test = instance;
      test.$rootScope.$on('$routeChangeSuccess', function() {
        if(onChange) onChange(); 
      });
      done();
    });
  });

  it("should goto the videos_path by default", function(done) {
    onChange = function() {
      expect(test.view().innerHTML).to.contain('app-youtube-listings');
      done();
    };
    test.path('/');
  });

  it("should have a working video_path request", function(done) {
    onChange = function() {
      onChange = function(){};

      var $params = test.$params;
      expect(parseInt($params.id)).to.equal(10);

      var view = test.view();
      expect(view.innerHTML).to.contain('app-youtube-profile');
      done();
    };

    var url = ROUTER.routePath('video_path', { id : 10 });
    test.path(url);
  });

  it("should have a working other_path request", function(done) {
    onChange = function() {
      onChange = function(){};

      var view = test.view();
      expect(view.innerHTML).to.contain('other page');
      done();
    };

    var url = ROUTER.routePath('other_path');
    test.path(url);
  });

});
