//
// test/midway/controllers/controllersSpec.js
//
describe("Midway: Testing Controllers", function() {

  var test, onChange;

  before(function(done) {
    ngMidwayTester.register('App', function(instance) {
      test = instance;
      done();
    });
  });

  before(function() {
    test.$rootScope.$on('$routeChangeSuccess', function() {
      if(onChange) onChange(); 
    });
  });

  beforeEach(function(done) {
    test.reset(done);
  });

  it('should load the VideosCtrl controller properly when /videos route is accessed', function() {
    onChange = function() {
      onChange = function(){};

      test.path().should.eq('/videos');
      var current = test.route().current;
      var controller = current.controller;
      var scope = current.scope;
      expect(controller).to.eql('VideosCtrl');
    };
    test.path('/videos');
  });

  it('should load the WatchedVideosCtrl controller properly when /watched-videos route is accessed', function(done) {
    onChange = function() {
      onChange = function(){};

      test.path().should.eq('/watched-videos');
      var current = test.route().current;
      var controller = current.controller;
      var params = current.params;
      var scope = current.scope;

      expect(controller).to.equal('WatchedVideosCtrl');
      done();
    };
    test.path('/watched-videos');
  });

});
