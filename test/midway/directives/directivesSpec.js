//
// test/midway/directives/directivesSpec.js
//
describe("Midway: Testing Directives", function() {

  var tester;
  beforeEach(function() {
    tester = ngMidwayTester('App');
  });

  afterEach(function() {
    tester.destroy();
    tester = null;
  });

  it("should properly create the youtube listings with the directive in mind", function(done) {
    var $youtube = tester.inject('$appYoutubeSearcher');

    var html = '';
    html += '<div data-app-youtube-listings id="app-youtube-listings">';
    html += ' <div data-ng-include="\'templates/partials/youtube_listing_tpl.html\'" data-ng-repeat="video in videos"></div>';
    html += '</div>';

    $youtube.query('latest', false, function(q, videos) {
      var scope = tester.viewScope().$new();
      scope.videos = videos;
      var element = tester.compile(html, scope);
      setTimeout(function() {
        var klass = (element.attr('class') || '').toString();
        var hasClass = /app-youtube-listings/.exec(klass);
        expect(hasClass.length).to.equal(1);

        var kids = element.children('.app-youtube-listing');
        expect(kids.length > 0).to.equal(true);
        done();
      },1000);
    });
  });

});
