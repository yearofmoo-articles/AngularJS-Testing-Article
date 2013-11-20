//
// test/midway/controllers/controllersSpec.js
//
describe("Midway: Testing Controllers", function() {

  var tester;
  beforeEach(function() {
    if(tester) {
      tester.destroy();
    }
    tester = ngMidwayTester('App');
  });

  it('should load the VideosCtrl controller properly when /videos route is accessed', function(done) {
    tester.visit('/videos', function() {
      tester.path().should.eq('/videos');
      var current = tester.inject('$route').current;
      var controller = current.controller;
      var scope = current.scope;
      expect(controller).to.eql('VideosCtrl');
      done();
    });
  });

  it('should load the WatchedVideosCtrl controller properly when /watched-videos route is accessed', function(done) {
    tester.visit('/watched-videos', function() {
      tester.path().should.eq('/watched-videos');
      var current = tester.inject('$route').current;
      var controller = current.controller;
      var params = current.params;
      var scope = current.scope;

      expect(controller).to.equal('WatchedVideosCtrl');
      done();
    });
  });

});
