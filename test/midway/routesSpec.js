//
// test/midway/routesSpec.js
//
describe("Testing Routes", function() {

  var test, onChange;

  before(function(done) {
    ngMidwayTester.register('App', function(instance) {
      test = instance;
      done();
    });
  });

  it("should have a videos_path", function() {
    expect(ROUTER.routeDefined('videos_path')).to.equal(true);
    var url = ROUTER.routePath('videos_path');
    expect(url).to.equal('/videos');
  });

  it("the videos_path should goto the VideosCtrl controller", function() {
    var route = ROUTER.getRoute('videos_path');
    route.params.controller.should.equal('VideosCtrl');
  });

  it("should have a video_path", function() {
    expect(ROUTER.routeDefined('video_path')).to.equal(true);
    var url = ROUTER.routePath('video_path', { id : 10 });
    expect(url).to.equal('/videos/10');
  });

  it("the videos_path should goto the VideosCtrl controller", function() {
    var route = ROUTER.getRoute('video_path');
    route.params.controller.should.equal('VideoCtrl');
  });

  it("should have a watched_videos_path", function() {
    expect(ROUTER.routeDefined('watched_videos_path')).to.equal(true);
    var url = ROUTER.routePath('watched_videos_path');
    expect(url).to.equal('/watched-videos');
  });

  it("the videos_path should goto the WatchedVideosCtrl controller", function() {
    var route = ROUTER.getRoute('watched_videos_path');
    route.params.controller.should.equal('WatchedVideosCtrl');
  });

  it("the home_path should be the same as the videos_path", function() {
    expect(ROUTER.routeDefined('home_path')).to.equal(true);
    var url1 = ROUTER.routePath('home_path');
    var url2 = ROUTER.routePath('videos_path');
    expect(url1).to.equal(url2);
  });

  it("the home_path should goto the VideosCtrl controller", function() {
    var route = ROUTER.getRoute('home_path');
    route.params.controller.should.equal('VideosCtrl');
  });

});
